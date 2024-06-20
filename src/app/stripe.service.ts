import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private stripe: Stripe | null = null;

  constructor() {
    this.initializeStripe();
  }

  private async initializeStripe() {
    this.stripe = await loadStripe('YOUR_STRIPE_PUBLIC_KEY');
  }

  public async createPaymentIntent(amount: number, currency: string) {
    // Lógica para crear PaymentIntent utilizando tu backend
    // Deberías tener un endpoint en tu servidor que cree el PaymentIntent
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount, currency })
    });

    return response.json();
  }

  public async handleCardPayment(clientSecret: string, cardElement: any) {
    if (!this.stripe) {
      throw new Error('Stripe.js has not been loaded yet.');
    }

    const result = await this.stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement
      }
    });

    if (result.error) {
      console.error(result.error.message);
      return null;
    } else {
      return result.paymentIntent;
    }
  }
}
