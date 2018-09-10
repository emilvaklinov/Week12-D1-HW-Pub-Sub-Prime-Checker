const PubSub = require('../helpers/pub_sub.js')

const NumberImputView = function(){


};

NumberImputView.prototype.bindEvents = function(){
  const form = document.querySelection('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    PubSub.publish('NumberImputView:number-submitted', inputtedNumber);
  });
};

module.exports = NumberImputView;
