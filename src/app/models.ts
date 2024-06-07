export interface UserInputData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface InvestmentData {
  year: number | string;
  interest: number | string;
  valueEndOfYear: number | string;
  annualInvestment: number | string;
  totalInterest: number | string;
  totalAmountInvested: number | string;
}
