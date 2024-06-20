import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StripeService } from '../stripe.service';
import { Stripe, StripeCardElement, StripeElements, loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('cardElement') cardElement!: ElementRef;
  stripe: Stripe | null = null;
  elements: StripeElements | null = null;
  card: StripeCardElement | null = null;
  cardErrors: string | null = null;
  isLoading = false;

  constructor(private stripeService: StripeService) {}

  async ngOnInit() {
    this.stripe = await loadStripe('YOUR_STRIPE_PUBLIC_KEY');
    if (this.stripe) {
      this.elements = this.stripe.elements();
      this.card = this.elements.create('card');
      if (this.card) {
        this.card.mount(this.cardElement.nativeElement);
        this.card.on('change', event => {
          this.cardErrors = event.error ? event.error.message : null;
        });
      }
    }
  }
}
