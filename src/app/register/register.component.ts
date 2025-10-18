import { Component } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RegisterData } from '../../types';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public form ;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form=this.fb.nonNullable.group({
    name: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    password_confirmation: ['',Validators.required],
  });
  }

  submit() {
    if (this.form.invalid) return;

    let data:RegisterData=this.form.getRawValue();
    this.auth.register(data).subscribe({
      next: () => this.router.navigate(['/login'])
    });
  }
}