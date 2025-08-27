import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  getCart() {
    return this.items;
  }

  addToCart(product: CartItem) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(id: number) {
    this.items = this.items.filter(i => i.id !== id);
  }

  clearCart() {
    this.items = [];
  }

  updateQuantity(id: number, delta: number) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(id);
    }
  }

  getTotalQuantity(): number {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  getSubtotal(): number {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}
