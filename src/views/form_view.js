const PubSub = require('../helpers/pub_sub')

const FormView = function(){


};

FormView.prototype.bindEvents = function(){
  const form = document.querySelection('#primechecker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.value;
    PubSub.publish('NumberView:number-submitted', inputtedNumber);
  });
};

module.exports = FormView;
