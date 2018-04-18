# FICO Credit Score Explainer

## Background

As a user, I want to be able to understand what my FICO credit score means, how I compare to the national average, and what I could do to improve my score.

## Deliverable

* [x] A single page app that assumes we have access to the following information about the user:
  * [x] The FICO credit score (including a monthly history of the score)
  * Key variables that impacted the score
    * [x] The number of years of credit history
    * [x] The number of accounts in the credit history
    * [x] The utilization (%) of open lines of credit limits (like credit cards)
    * [x] The number of missed payments in the credit history
    * [x] The number of new credit accounts
  * [x] The title, description and direction of impact (positive or negative) of factors that impacted the score
  * [x] The title, description and estimated score increase of actions that could improve the score
* [x] A graphical representation of the score
* [x] An explanation of how the score measures up and what it means
* [x] An explanation of the factors that impacted the score
* [x] An explanation of the actions the user could take to improve the score

## Tools Used

* Bootstrapped with `create-react-app`
* `react-router-dom` for front-end routing
* Bootstrap 4 with `reactstrap`, extended by Tabler UI
* `react-c3js` for charts
* `react-d3-speedometer` for the speedometers
* `jest` and `enzyme` for testing

## Technical Decisions

* Mock data is stored in json files, mock axios call are in place to be easily replaced by actual API calls
* Bootstrap 4 for its pre-made elements
* Every page is fully responsive
* No state management given the horizontal structure and size of the application
* Commits rebases/squashed for clarity

## UI Decisions

* Factors are represented by a color coded speedometer which indicates to the user where they fall compared to other individuals
* Fully responsive design
* Homepage gives an overview and every other page goes into more details about every aspect that comes into consideration for the FICO score

## Tests

Each page is tested with `jest` and `enzyme`, to check that it is rendering the correct information.

## Potential Improvements

* State management with `redux`, or React Context, if the size of the application increases
* Further customization of the default UI elements
