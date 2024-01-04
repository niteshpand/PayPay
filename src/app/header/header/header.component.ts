import { Component } from '@angular/core';
import { HeaderService } from '../header.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currencyTo: string;
  currencyFrom: string;
  selectedTo: { [key: string]: number } = {};
  selectedFrom: { [key: string]: number } = {};
  amount2: number;
  amount1: number;
  amountRes1: number;
  amountRes2: number;

  // res: any = { query: { amount: 0, from: '', to: '' } };

  selectedCurrency: string = '';
  selectedCurrencyFrom: string = '';
  result: number;
  constructor(private service: HeaderService) {}

  ngOnInit() {
    this.updateCurrencyFrom();
    this.updateCurrency();
  }

  updateCurrency() {
    this.service.getCurrency().subscribe((val) => {
      this.selectedTo = val.rates;
    });
  }
  updateCurrencyFrom() {
    this.service.getCurrency().subscribe((val) => {
      this.selectedFrom = val.rates;
    });
  }

  data1() {
    this.service
      .getConversion(
        this.selectedCurrency,
        this.selectedCurrencyFrom,
        this.amount1
      )
      .subscribe((res) => {
        this.amountRes1 = res.result;
        this.amount2 = this.amountRes1;
      });
  }

  data() {
    this.service
      .getConversion(
        this.selectedCurrencyFrom,
        this.selectedCurrency,
        this.amount2
      )
      .subscribe((res) => {
        this.amountRes2 = res.result;
        this.amount1 = this.amountRes2;
      });
  }

  interchange() {}
}
