import { Component, Input } from '@angular/core';
import { Donut } from './models/donut.interface';

@Component({
  selector: 'app-box-of-donuts',
  template: `
    <p *ngIf="size <= 4">Small Box</p>
    <span *ngIf="size >=8">Large Box</span>
    <span *ngIf="size >4 && size <8">Box</span>
    <p>Size: {{ size }}</p>

    <span *ngIf="donuts.length ===size">Box is Full!!!!</span>
    <!-- Show all donuts in the box using NgFor -->
    <app-donut *ngFor="let currentDonut of donuts" [donut]="currentDonut"></app-donut>
  `
})
export class BoxOfDonutsComponent {
  donuts: Donut[] = [
    { name: 'Bacon glazed', icing: true },
    { name: 'Sirachi Infused', icing: false }
  ];

  @Input() size = 2;
}
