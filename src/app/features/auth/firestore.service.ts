import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

  async addProduct(name: string, price: number) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'products'), {
        name,
        price
      });
      console.log("Product added with ID:", docRef.id);
    } catch (e) {
      console.error("Error adding product:", e);
    }
  }

  async getProducts() {
    const querySnapshot = await getDocs(collection(this.firestore, 'products'));
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} =>`, doc.data());
    });
  }
}
