import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currencyTo: number = 0;
  currencyFrom: number = 0;

  data1() {
    this.currencyFrom = this.currencyTo;
  }
  
}
