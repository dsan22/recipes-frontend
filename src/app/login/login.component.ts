import { Component } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginData } from '../../types';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   
  public form:FormGroup; 

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form=this.fb.nonNullable.group({
    email: [''],
    password: [''],
  });
  }

  submit() {
    if (this.form.invalid) return;
    let data:LoginData=this.form.getRawValue();
    this.auth.login(data).subscribe({
      next: () => this.router.navigate(['/']),
    });
    
  }
}
