import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { CartUiService } from '../../../services/cart-ui.service';
import { FirestoreService } from '../../auth/firestore.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styles: [ `h1{font-size:32px;} h2{font-size:24px;}` ]
})
export class ProductDetailComponent implements OnInit {
  product: any;
  loading = true;
  btnLoading = false;

  constructor(
    private route: ActivatedRoute,
    private firestore: FirestoreService,
    private cart: CartService,
    private cartUi: CartUiService,
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { this.loading = false; return; }
    try {
      this.loading = true;
      this.product = await this.firestore.getProductById(id);
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  }

  addToCart() {
    if (!this.product) return;
    if (this.btnLoading) return;
    this.btnLoading = true;
    this.cartUi.showLoading('Loading to cart...');
    setTimeout(() => {
      this.cart.addToCart({
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        image: this.product.image,
        quantity: 1
      });
      this.cartUi.hideLoading();
      this.cartUi.open();
      this.btnLoading = false;
    }, 600);
  }
}


