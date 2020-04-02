import './emails-input.scss';

const MAIL_INPUT_CLASS = 'emails-input-area-mail-input';

export default class EmailsInput {
  constructor(element, options) {
    if (!element) {
      console.warn('Element is not exist for emails input');
      return;
    }
    this.element = element;
    this.options = options;

    this.initHtml();

    this.initSelectors();
    this.initListeners();
  }

  initSelectors() {
    this.mailInputElement = this.element.querySelector(`.${MAIL_INPUT_CLASS}`);
  }

  initListeners() {
    this.mailInputElement.addEventListener('keyup', (event) => this.onKeyUp(event));
  }

  initHtml() {
    this.element.innerHTML = `
      <span class="emails-input-title">
        Share <b>Board name</b> with others
      </span>
      <div class="emails-input-area">
        <div class="emails-input-list">
          
        </div>
        <input class="${MAIL_INPUT_CLASS}" type="text" placeholder="add more people…" />
      </div>
    `;
  }

  onKeyUp(event) {
    console.log(event);
    console.log(this);
  }
}
