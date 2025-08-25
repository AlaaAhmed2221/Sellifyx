import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from '../../auth/firestore.service';
import { RouterModule } from '@angular/router';
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
scrolled: false | undefined;

  
  constructor(
    private firestoreService: FirestoreService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  showProducts() {
    this.firestoreService.getProducts();
  }
}