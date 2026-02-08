# Loan EMI Calculator

A lightweight, web-based Loan EMI (Equated Monthly Installment) calculator featuring a detailed amortization schedule and a distinct "Vintage Paper" aesthetic.
Deployed  link : [Live Demo](https://loan-emi-cal-sharan.vercel.app)

<img width="1915" height="908" alt="image" src="https://github.com/user-attachments/assets/0ad48bd3-78ba-4bf1-bb31-8fcb8f80315d" />
<img width="1899" height="968" alt="image" src="https://github.com/user-attachments/assets/d135c636-2168-42b7-975f-ed697f1b6c72" />

## Features

- **Instant Calculation:** Computes monthly EMI based on Principal, Interest Rate, and Tenure.
- **Amortization Schedule:** Generates a month-by-month breakdown of Principal vs. Interest payments.
- **Visual Balance Tracking:** Shows how the loan balance decreases over time in a scrollable table.
- **Vintage UI:** A responsive, typewriter/paper-styled user interface using pure CSS.
- **Pure JavaScript:** No external libraries or frameworks required.

## The Mathematics

The calculator uses the standard reducing balance method formula:

    EMI = [P x R x (1+R)^N] / [(1+R)^N-1]

Where:
- **P** = Principal Loan Amount
- **R** = Monthly Interest Rate (Annual Rate / 12 / 100)
- **N** = Loan Tenure in Months (Years x 12)
