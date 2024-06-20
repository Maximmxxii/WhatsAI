import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../enviroments/enviroment';
import { AppRoutingModule } from '../app/app-routing.module'; // Asegúrate de que esta ruta es correcta
import { AppComponent } from './app.component';
import { NgxStripeModule } from 'ngx-stripe';
import { PaymentComponent } from './payment/payment.component'; // Importa tu componente
import { PaymentService } from './payment/payment.service'; // Importa tu servicio

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent // Declara tu componente aquí
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxStripeModule.forRoot('YOUR_STRIPE_PUBLIC_KEY'), // Reemplaza con tu clave pública de Stripe
    AppComponent
  ],
  providers: [], // No necesitas agregar PaymentService aquí debido a providedIn: 'root'
  bootstrap: [AppComponent]
})
export class AppModule { }
