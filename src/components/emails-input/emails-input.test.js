import EmailsInput from './emails-input';

const jsdom = require('mocha-jsdom');
const spies = require('chai-spies');
const chai = require('chai');

chai.use(spies);
const { expect, spy } = chai;

const getTemplate = () => `
    <section class="emails-1">
      <div class="emails-header">
        <span class="emails-input-title">
          Share <b>Board name</b> with others
        </span>
        <div class="emails-input-container">
          <div class="emails-input"></div>
        </div>
      </div>
      <div class="emails-footer">
        <button class="emails-footer-add">Add email</button>
        <button class="emails-footer-count">Get emails count</button>
        <button class="emails-footer-delete">Add new items</button>
      </div>
    </section>
    `;

jsdom({
  url: 'http://localhost',
});

const checkAdd = (_emailsInput, eventDict) => {
  const emailsInput = _emailsInput;
  emailsInput.mailInputElement.value = 'test@test.test';
  const event = new window.KeyboardEvent('keyup', eventDict);
  emailsInput.mailInputElement.dispatchEvent(event);
  expect(emailsInput.mailInputElement.value).to.equal('');
  expect(emailsInput.mailList.length).to.equal(1);
  expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item').length).to.equal(1);
  expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item--fail').length).to.equal(0);
  emailsInput.mailInputElement.value = 'test@test.test2';
  emailsInput.mailInputElement.dispatchEvent(event);
  expect(emailsInput.mailInputElement.value).to.equal('');
  expect(emailsInput.mailList.length).to.equal(2);
  expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item').length).to.equal(2);
  expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item--fail').length).to.equal(0);
  emailsInput.mailInputElement.value = 'test';
  emailsInput.mailInputElement.dispatchEvent(event);
  expect(emailsInput.mailInputElement.value).to.equal('');
  expect(emailsInput.mailList.length).to.equal(3);
  expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item').length).to.equal(3);
  expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item--fail').length).to.equal(1);
  const firstElement = emailsInput.listElement.querySelector('.emails-input-list-item');
  const clickEvent = document.createEvent('HTMLEvents');
  clickEvent.initEvent('click', false, true);
  // Event can then be dispatched against any element, not only the document
  firstElement.dispatchEvent(clickEvent);

  expect(emailsInput.mailList.length).to.equal(2);
  expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item').length).to.equal(2);
  expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item--fail').length).to.equal(1);
};

describe('# EmailsInput [component]', () => {
  let emailsInput;
  const onMail = spy();
  beforeEach(() => {
    document.body.innerHTML = getTemplate();
    emailsInput = new EmailsInput(document.querySelector('.emails-input'), {
      onNewMail: onMail,
    });
  });

  it('enter should add new email item', () => {
    checkAdd(emailsInput, { key: 'enter', char: 'enter', keyCode: 13 });
  });

  it('comma should add new email item', () => {
    checkAdd(emailsInput, { key: 'comma', char: 'comma', keyCode: 188 });
  });

  it('different key shouldn`t add new email item', () => {
    emailsInput.mailInputElement.value = 'test@test.test';
    const event = new window.KeyboardEvent('keyup', { key: 'x', char: 'x', keyCode: 40 });
    emailsInput.mailInputElement.dispatchEvent(event);
    expect(emailsInput.mailList.length).to.equal(0);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item').length).to.equal(0);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item--fail').length).to.equal(0);
  });

  it('blur should add new email item', () => {
    emailsInput.mailInputElement.value = 'test@test.test';
    const event = new window.FocusEvent('blur');
    emailsInput.mailInputElement.dispatchEvent(event);
    expect(emailsInput.mailInputElement.value).to.equal('');
    expect(emailsInput.mailList.length).to.equal(1);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item').length).to.equal(1);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item--fail').length).to.equal(0);
  });

  it('paste should add multiple items', () => {
    // eslint-disable-next-line no-unused-expressions
    window.clipboardData = {
      getData() {
        return 'test@test.test,abc,tes2t@test.test,test3@test.test';
      },
    };
    const event = new window.KeyboardEvent('paste');
    emailsInput.mailInputElement.dispatchEvent(event);
    expect(emailsInput.mailList.length).to.equal(4);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item').length).to.equal(4);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item--fail').length).to.equal(1);
  });

  it('should able to add random mails', () => {
    emailsInput.addNewMailToList('test');
    emailsInput.addNewMailToList('test2');
    emailsInput.addNewMailToList('test3');
    emailsInput.addNewMailToList('test@test.com');
    emailsInput.addNewMailToList('tes2@test.com');
    emailsInput.addNewMailToList('tes3@test.com');
    emailsInput.addNewMailToList('tes4@test.com');
    expect(emailsInput.mailList.length).to.equal(7);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item').length).to.equal(7);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item--fail').length).to.equal(3);
  });

  it('should able to add multiple random mails with reset', () => {
    emailsInput.addNewMailToList('test');
    emailsInput.addNewMailToList('test2');
    emailsInput.addNewMailToList('test3');
    emailsInput.addNewMailToList('test@test.com');
    emailsInput.addNewMailToList('tes2@test.com');
    emailsInput.addNewMailToList('tes3@test.com');
    emailsInput.addNewMailToList('tes4@test.com');

    // reset
    emailsInput.addNewMails(['test', 'test2', 'tes4@test.com']);
    expect(emailsInput.mailList.length).to.equal(3);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item').length).to.equal(3);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item--fail').length).to.equal(2);
  });

  it('should able to add multiple random mails without reset', () => {
    emailsInput.addNewMailToList('test');
    emailsInput.addNewMailToList('test2');
    emailsInput.addNewMailToList('test3');
    emailsInput.addNewMailToList('test@test.com');
    emailsInput.addNewMailToList('tes2@test.com');
    emailsInput.addNewMailToList('tes3@test.com');
    emailsInput.addNewMailToList('tes4@test.com');

    // reset = false
    emailsInput.addNewMails(['test', 'test2', 'tes4@test.com'], false);
    expect(emailsInput.mailList.length).to.equal(10);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item').length).to.equal(10);
    expect(emailsInput.listElement.querySelectorAll('.emails-input-list-item--fail').length).to.equal(5);
  });

  it('should give total mails and valid, invalid counts', () => {
    emailsInput.addNewMailToList('test');
    emailsInput.addNewMailToList('test2');
    emailsInput.addNewMailToList('test3');
    emailsInput.addNewMailToList('test@test.com');
    emailsInput.addNewMailToList('tes2@test.com');
    emailsInput.addNewMailToList('tes3@test.com');
    emailsInput.addNewMailToList('tes4@test.com');

    // reset = false
    emailsInput.addNewMails(['test', 'test2', 'tes4@test.com'], false);
    expect(emailsInput.getValidMailCount()).to.equal(5);
    expect(emailsInput.getInvalidMailCount()).to.equal(5);
    expect(emailsInput.getAllMails().length).to.equal(10);
  });

  it('Should return callback with mail data', () => {
    emailsInput.addNewMailToList('test');
    expect(onMail).to.have.been.called.exactly(49);
  });
});
