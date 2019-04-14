import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produc: any[] = [
    {
      nombre: 'Arina',
      img: '/assets/img1.jpg'
    },
    {
      nombre: 'Arroz',
      img: '/assets/img2.jpg'
    },
    {
      nombre: 'Leche',
      img: '/assets/img3.jpg'
    },
    {
      nombre: 'Huevos',
      img: '/assets/img4.jpg'
    },
    {
      nombre: 'Refresco',
      img: '/assets/img5.jpg'
    },
    {
      nombre: 'Sopa',
      img: '/assets/img6.jpg'
    },
    {
      nombre: 'Queso',
      img: '/assets/img7.jpg'
    }
  ];

}
