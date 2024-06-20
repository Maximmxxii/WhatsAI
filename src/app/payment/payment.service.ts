import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'; // Asegúrate de importar desde firestore
import { StripeService } from 'ngx-stripe';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private firestore: Firestore, private stripeService: StripeService) {}

  // Método para crear una suscripción y procesar el pago
  createSubscription(userId: string) {
    // Implementar lógica para crear suscripción con Stripe
  }
}
