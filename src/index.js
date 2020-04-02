import './sass/index.scss';
import EmailsInput from './components/emails-input';

const inputContainerNode = document.querySelector('#emails-input');
// eslint-disable-next-line no-unused-vars
const emailsInput = new EmailsInput(inputContainerNode, {});
// Handling Add email and Get emails count buttons, etc.
