import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserInputData} from "../models";

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
  inputData: UserInputData = {
    initialInvestment: 0.00,
    annualInvestment: 0.00,
    expectedReturn: 0.00,
    duration: 0,
  }
  @Output() userIOData = new EventEmitter<UserInputData>();

  onSubmit() {
    this.userIOData.emit(this.inputData);
  }
}
