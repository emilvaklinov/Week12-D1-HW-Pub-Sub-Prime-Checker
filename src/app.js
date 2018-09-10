const NumberImputView = require('./views/form_view.js')
const PrimeChecker = require('./models/prime_checker.js');
const ResultView = require('./views/result_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const NumberImputView = new NumberImputView();
  NumberImputView.bindEvents();
  const PrimeChecker = new PrimeChecker();
  PrimeChecker.bindEvents();
  const ResultView = new ResultView();
  ResultView.bindEvents();
});
