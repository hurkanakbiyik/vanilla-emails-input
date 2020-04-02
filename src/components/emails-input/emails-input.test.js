import EmailsInput from './emails-input';

const jsdom = require('mocha-jsdom');
const { expect } = require('chai');

jsdom({
  url: 'http://localhost',
});
describe('# Accessories [component]', () => {
  it('should create new object', () => {
    const a1 = new EmailsInput(document.querySelector('body'));
    const a2 = new EmailsInput(document.querySelector('body'));
    expect(a1).to.not.equal(a2);
  });

  it('should have 6 items', () => {
    const a1 = new EmailsInput(document.querySelector('body'));
    expect(a1.mainElement.querySelectorAll('.acc').length).to.equal(6);
  });


  it('should change to new colour option ', () => {
    const a1 = new EmailsInput(document.querySelector('body'));
    const firstItemDOM = a1.mainElement.querySelector('.acc');
    const firstTitle = firstItemDOM.querySelector('.colour-label').innerHTML;
    expect(firstTitle).to.equal('orange');
    const secondColourOptionDOM = firstItemDOM.querySelectorAll('.colour-options .colour')[2];
    const evt = document.createEvent('HTMLEvents');
    evt.initEvent('click', false, true);
    // Event can then be dispatched against any element, not only the document
    secondColourOptionDOM.dispatchEvent(evt);
    const changedTitle = firstItemDOM.querySelector('.colour-label').innerHTML;
    expect(changedTitle).to.equal('Soft pink');
  });
});
