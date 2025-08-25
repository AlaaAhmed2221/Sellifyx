import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from '../../auth/firestore.service';
import { RouterModule } from '@angular/router';
import { collectionData } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
products: any[] = [];
  loading = true;
  open: any;
  scrolled: any;
  router: any;

constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.loadGearProducts();
  }

  loadGearProducts() {
    this.loading = true;
    this.firestoreService.getGearProducts().subscribe((data) => {
      console.log('🔥 Gear Products:', data);
      this.products = data;
      this.loading = false;
    });
  }

  goToProduct(id: string) {
  // نروح للصفحة الخاصة بالبرودكت
  this.router.navigate(['/product', id]);
}

}