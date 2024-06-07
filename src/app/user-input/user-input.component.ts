import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initial_investment = 0.0;
  annual_investment = 0.0;
  expected_return = 0.0;
  duration = 0;

  onSubmit() {
    console.log('You entered values A: ' + this.initial_investment.toFixed(2) + ' and B: ' + this.annual_investment + ' and C: ' + this.expected_return + ' and D: ' + this.duration);
  }
}
