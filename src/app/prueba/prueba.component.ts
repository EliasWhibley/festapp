import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {
  array: any;
  constructor() {
    this.array = [1, 2, 3, 4, 5, 6];
  }

  calcAndShow() {
    console.log(this.array.copyWithin(3, 0).join(''))
  }


}
