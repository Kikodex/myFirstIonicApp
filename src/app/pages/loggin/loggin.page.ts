import { Component } from '@angular/core';
import { IonIcon, IonHeader, IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonNote, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: 'loggin.page.html',
  styleUrls: ['loggin.page.scss'],
  imports: [FormsModule, CommonModule, IonIcon,IonHeader,IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonNote, IonButton],
})
export class LogginPage {
  title: string = 'Bienvenido';
  loginForm!: FormGroup;
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;


  constructor(private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [
        '', // valor inicial
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
          Validators.pattern(/^[a-zA-Z0-9]*$/)
        ]
      ],
      password: [
        '', // valor inicial
        [
          Validators.required,
          Validators.pattern(/^[0-9]{4}$/) // exactamente 4 dígitos numéricos
        ]
      ],
      rememberMe: [false]
    });
  }

  public onLogin() {
     //if (this.loginForm.valid) {
      this.router.navigate(['menu']);
     /*}else {
      this.loginForm.markAllAsTouched();
     }*/
    
  }
}



