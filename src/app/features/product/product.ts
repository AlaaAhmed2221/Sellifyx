import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = ['all', 'technology', 'accessory', 'geer'];
  activeCategory: string = 'all';

  constructor(private firestore: Firestore, private route: ActivatedRoute) {}

  ngOnInit() {
    const categoryFromRoute = this.route.snapshot.paramMap.get('id'); 

    const productsRef = collection(this.firestore, 'products');
    collectionData(productsRef, { idField: 'id' }).subscribe((data: any[]) => {
      this.products = data;
      // لو فيه كاتيجوري جاية من الهوم
      if (categoryFromRoute) {
        this.activeCategory = categoryFromRoute;
        this.filterProducts(categoryFromRoute);
      } else {
        this.filteredProducts = this.products; // كل المنتجات
      }
    });
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
    this.filterProducts(cat);
  }

  private filterProducts(cat: string) {
    if (cat === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.category === cat);
    }
  }
}
