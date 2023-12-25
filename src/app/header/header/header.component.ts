import { Component } from '@angular/core';
import { HeaderService } from '../header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currencyTo: number = 0;
  currencyFrom: number = 0;
  selectedCurrency='USD'
  obj: Object = {};
  selectedTo: { [key: string]: number } = {};
  selectedFrom: { [key: string]: number } = {};
  result1: number = 0;
  result2: number = 0;

  constructor(private service: HeaderService) {}

  ngOnInit() {
    this.service.getConversion().subscribe((val) => {
      console.log(val.query);
    });

    this.service.getCurrency().subscribe((val) => {
      this.selectedTo = val.rates;
    });
  }

  data1() {
    this.result1 = this.currencyTo * 2;
    this.result2 = this.currencyFrom / 2;
  }
}
