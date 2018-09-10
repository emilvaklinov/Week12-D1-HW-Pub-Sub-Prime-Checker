const ResultView = function(){

};

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelection('#result')
  resultElement.textContent = `Yes it's a prime number.`;
};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeChecker:result-calculated', () => {
    const numberIsPrime = event.detail;
    this.displayResult(numberIsPrime);
  });
};
  module.exports = ResultView;
