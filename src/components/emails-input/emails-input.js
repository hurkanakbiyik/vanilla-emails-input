import './emails-input.scss';

class EmailsInput {
  constructor(element, options) {
    if (!element) {
      console.warn('Element is not exist');
      return;
    }
    this.element = element;
    this.options = options;

    this.initSelectors();
    this.initListeners();
  }

  initSelectors() {

  }

  initListeners() {

  }
}


export default EmailsInput;
