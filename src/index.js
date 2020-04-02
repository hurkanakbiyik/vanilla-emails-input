
import './sass/index.scss';

const SELECTORS = {
  EMAILS: '.emails',
  EMAILS_INPUT: '.emails-input',
  ADD_BUTTON: '.emails-footer-add',
  COUNT_BUTTON: '.emails-footer-count',
  DELETE_BUTTON: '.emails-footer-delete',
};

function getRandomText() {
  return Math.random().toString(36).slice(-5);
}

function getRandomMail() {
  return `${getRandomText()}@${getRandomText()}.${getRandomText()}`;
}

export default class Main {
  constructor(element) {
    this.element = element;
    this.initSelectors();
    this.initListeners();

    // this is a global umd class
    this.emailsInputAPI = new EmailsInput(this.inputContainerNode, {
      onNewMail: this.onNewMailListener,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  onNewMailListener(mailData) {
    console.log(mailData.text);
  }

  initSelectors() {
    this.inputContainerNode = this.element.querySelector(SELECTORS.EMAILS_INPUT);
    this.addButton = this.element.querySelector(SELECTORS.ADD_BUTTON);
    this.countButton = this.element.querySelector(SELECTORS.COUNT_BUTTON);
    this.deleteButton = this.element.querySelector(SELECTORS.DELETE_BUTTON);
  }

  initListeners() {
    this.addButton.addEventListener('click', () => this.emailsInputAPI.addNewMailToList(getRandomMail()));
    this.countButton.addEventListener('click', () => alert(this.emailsInputAPI.getValidMailCount()));
    this.deleteButton.addEventListener('click', () => this.emailsInputAPI.addNewMails([getRandomMail(), getRandomMail()]));
  }
}


// init main
document.querySelectorAll(SELECTORS.EMAILS).forEach((emailsElement) => {
  // eslint-disable-next-line no-new
  new Main(emailsElement);
});
