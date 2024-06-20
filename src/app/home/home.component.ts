// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((result) => {
      console.log('User logged in with Google:', result);
    });
  }

  loginWithEmail() {
    const email = prompt('Enter your email');
    const password = prompt('Enter your password');
    this.authService.loginWithEmail(email!, password!).then((result) => {
      console.log('User logged in with email:', result);
    });
  }
}
