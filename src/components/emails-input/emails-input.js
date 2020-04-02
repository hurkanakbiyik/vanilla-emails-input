import './emails-input.scss';

const MAIL_INPUT_CLASS = 'emails-input-area-mail-input';
const INPUT_LIST_CLASS = 'emails-input-list';
const INPUT_AREA_CLASS = 'emails-input-area';


function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default class EmailsInput {
  constructor(element, options) {
    if (!element) {
      console.warn('Element is not exist for emails input');
      return;
    }
    this.element = element;
    this.options = options;
    this.mailList = [];
    this.isPasteOn = false;
    this.initHtml();

    this.initSelectors();
    this.initListeners();
  }

  initSelectors() {
    this.mailInputElement = this.element.querySelector(`.${MAIL_INPUT_CLASS}`);
    this.listElement = this.element.querySelector(`.${INPUT_LIST_CLASS}`);
    this.inputArea = this.element.querySelector(`.${INPUT_AREA_CLASS}`);
  }

  initListeners() {
    this.mailInputElement.addEventListener('keyup', (event) => this.onKeyUp(event));
    this.mailInputElement.addEventListener('paste', (event) => this.onPaste(event));
    this.mailInputElement.addEventListener('blur', (event) => this.onKeyUpEnter(event), true);
  }

  initItemDeleteListener(item) {
    item.addEventListener('click', () => this.onItemDeleteClick(item));
  }

  onItemDeleteClick(item) {
    this.mailList.splice(item.dataset.id, 1);
    if (item.parentNode) {
      item.parentNode.removeChild(item);
    }
  }

  initHtml() {
    this.element.innerHTML = `
      <div class="emails-input-area">
        <div class="${INPUT_LIST_CLASS}"></div>
        <input class="${MAIL_INPUT_CLASS}" type="text" placeholder="add more people…" />
      </div>
    `;
  }

  appendNewMailToResult(newMail, id) {
    const element = document.createElement('div');
    element.classList.add('emails-input-list-item');
    if (!validateEmail(newMail)) {
      element.classList.add('emails-input-list-item--fail');
    }
    element.dataset.id = id;
    element.innerText = newMail;
    this.initItemDeleteListener(element);
    this.listElement.append(element);
  }

  clearInput() {
    this.mailInputElement.value = '';
    this.inputArea.scrollTop = this.inputArea.scrollHeight;
  }

  addNewMailToList(newMail) {
    if (newMail && newMail !== '') {
      this.mailList.push(newMail);
      this.appendNewMailToResult(newMail, this.mailList.length);
    }
  }

  onKeyUpEnter() {
    this.addNewMailToList(this.mailInputElement.value);
    this.clearInput();
  }

  onKeyUpComma() {
    const newMail = this.mailInputElement.value;
    if (newMail && newMail !== ',') {
      this.addNewMailToList(newMail.slice(0, newMail.length - 1));
      this.clearInput();
    }
  }

  onPaste(event) {
    let pastedText = null;
    if (window.clipboardData && typeof window.clipboardData.getData === 'function') { // IE
      pastedText = window.clipboardData.getData('Text');
    } else if (event.clipboardData && typeof event.clipboardData.getData === 'function') {
      pastedText = event.clipboardData.getData('text/plain');
    }
    if (pastedText) {
      pastedText.split(',').forEach((newMail) => this.addNewMailToList(newMail.trim()));
      this.clearInput();
    }
    event.preventDefault();
  }

  onKeyUp(event) {
    switch (event.keyCode) {
      case 13:
        this.onKeyUpEnter();
        break;
      case 188:
        this.onKeyUpComma();
        break;
      default:
        break;
    }
  }
}
