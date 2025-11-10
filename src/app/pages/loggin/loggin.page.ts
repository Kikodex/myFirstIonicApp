import { Component } from '@angular/core';
import { IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonInputPasswordToggle, IonNote, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../tabs/components/explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: 'loggin.page.html',
  styleUrls: ['loggin.page.scss'],
  imports: [FormsModule, CommonModule, IonIcon,IonHeader,IonContent,IonToolbar,IonTitle,ExploreContainerComponent, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonInputPasswordToggle, IonNote, IonButton],
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



