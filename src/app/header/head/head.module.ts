import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HeadModule { 
  currencyTo: string;
  currencyFrom: string;
  baseCurrency: string;
  targetCurrency: string;
  selectedTo: { [key: string]: number } = {};
  selectedFrom: { [key: string]: number } = {};
  amount2: number;
  amount1: number;
  result: number;
}
