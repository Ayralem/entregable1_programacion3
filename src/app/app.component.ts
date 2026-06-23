import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonSegment,
  IonSegmentButton, IonLabel, IonIcon, IonContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { flashOutline, layersOutline, atOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonContent],
})
export class AppComponent implements OnInit {
  selectedSegment = 'inicio';

  // El segmento controla la navegación mediante el Router.
  // Cada cambio de segmento redirige a la ruta correspondiente.
  constructor(private router: Router) {
    addIcons({ flashOutline, layersOutline, atOutline });
  }

  ngOnInit() {
    this.selectedSegment = 'inicio';
  }

  segmentChanged(event: CustomEvent) {
    const value = event.detail.value;
    this.selectedSegment = value;
    this.router.navigate([value]);
  }
}