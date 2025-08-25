import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl:'./register.css'
})
export class Register {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private auth: Auth, private router: Router) {}

  register() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(res => {
        this.message = 'Registered successfully!';
        this.router.navigate(['/home']);
      })
      .catch(err => {
        this.message = err.message;
      });
  }
}
