import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  loginWithGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        if (result.user) {
          const uid = result.user.uid;
          const email = result.user.email;
          const displayName = result.user.displayName;

          return this.firestore.collection('users').doc(uid).set({
            uid,
            email,
            displayName
          });
        } else {
          throw new Error('No user found');
        }
      })
      .catch(error => {
        console.error('Error during login with Google:', error);
      });
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }
}
