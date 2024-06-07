import {Component} from '@angular/core';
import {UserInputComponent} from "../user-input/user-input.component";
import {InvestmentData, UserInputData} from "../models";
import {InvestmentCalculatorService} from "./investment-calculator.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    UserInputComponent,
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  investmentResults: InvestmentData[] = [];

  constructor(private calculatorService: InvestmentCalculatorService) {
  }

  onInputSubmit(userData: UserInputData) {
    this.investmentResults = this.calculatorService.calculateInvestmentResults(userData);
  }
}
