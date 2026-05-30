import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-personal',
  templateUrl: 'personal.page.html',
  styleUrls: ['personal.page.scss'],
  imports: [IonIcon],
})
export class PersonalPage {
  personalInfo = {
    name: 'Mariam Ortiz',
    role: 'Desarrolladora UX',
    location: 'Caracas, Venezuela',
    email: 'mariamortizortiz@hotmail.com',
    phone: '+58 426-403-0553',
    bio: 'Estudiante de Ingeniería en Informática apasionada por el desarrollo mobile con Ionic y Angular. Me encanta crear interfaces modernas con estética futurista.',
  };

  stats = [
    { label: 'Proyectos', value: '5' },
    { label: 'Experiencia', value: '1 año' },
    { label: 'Certificaciones', value: '2' },
  ];
}
