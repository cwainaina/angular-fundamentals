import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-box-of-donuts [size]=""></app-box-of-donuts>
    <!-- Use the NgFor Directive to iterate over the array of numbers.
      Bold the number if it is even. -->
      <p *ngFor="let current donut of Donuts"></p>
  `
})
export class AppComponent {


}
