import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule],   // مهم عشان *ngFor و *ngIf
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.css']
})
export class CartDrawerComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  get items(): CartItem[] {
    return this.cartService.getCart();
  }

  get subtotal(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  toggleCart() {
    if (this.isOpen) {
      this.close.emit();
    }
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  increment(id: number) {
    this.cartService.updateQuantity(id, 1);
  }

  decrement(id: number) {
    this.cartService.updateQuantity(id, -1);
  }
}

