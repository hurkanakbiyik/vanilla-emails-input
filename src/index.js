
import './sass/index.scss';

const SELECTORS = {
  EMAILS: '.emails',
  EMAILS_INPUT: '.emails-input',
};

export default class Main {
  constructor(element) {
    this.element = element;
    this.initSelectors();

    // this is a global umd class
    this.emailsInput = new EmailsInput(this.inputContainerNode, {});
  }

  initSelectors() {
    this.inputContainerNode = this.element.querySelector(SELECTORS.EMAILS_INPUT);
  }

  initListeners() {

  }
}


// init main
document.querySelectorAll(SELECTORS.EMAILS).forEach((emailsElement) => {
  // eslint-disable-next-line no-new
  new Main(emailsElement);
});
