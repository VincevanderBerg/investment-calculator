import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    InvestmentResultsComponent
  ]
})
export class AppComponent {
}
