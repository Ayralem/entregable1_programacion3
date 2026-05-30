import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonInput, IonTextarea, IonButton, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacto',
  templateUrl: 'contacto.page.html',
  styleUrls: ['contacto.page.scss'],
  imports: [IonInput, IonTextarea, IonButton, IonIcon, IonSpinner, ReactiveFormsModule],
})
export class ContactoPage {
  contactForm: FormGroup;
  loading = false;
  sent = false;

  // Las credenciales de EmailJS se importan desde environment.ts
  // para mantener la configuración centralizada y facilitar el despliegue.
  private emailjsServiceId = environment.emailjs.serviceId;
  private emailjsTemplateId = environment.emailjs.templateId;

  constructor(private fb: FormBuilder) {
    emailjs.init(environment.emailjs.publicKey);

    this.contactForm = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  async sendEmail() {
    if (this.contactForm.invalid) return;

    this.loading = true;
    this.sent = false;

    try {
      await emailjs.send(
        this.emailjsServiceId,
        this.emailjsTemplateId,
        this.contactForm.value
      );
      this.sent = true;
      this.contactForm.reset();
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    } finally {
      this.loading = false;
    }
  }
}
