import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartUiService } from '../../services/cart-ui.service';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product: any;
  isLoading = false;

  constructor(private cartService: CartService, private cartUi: CartUiService) {}

  addToCart() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.cartUi.showLoading('Loading to cart...');
    setTimeout(() => {
      this.cartService.addToCart(this.product);
      this.cartUi.hideLoading();
      this.cartUi.open();
      this.isLoading = false;
    }, 600);
  }
}

