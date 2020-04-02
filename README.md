# Emails Input Component

## Usage

Implement dist files into your html.

`<link rel="stylesheet" href="dist/EmailsInput.dist.css">`

`<script src="dist/EmailsInput.dist.js"></script>`

Now you can use `EmailsInput` class in your js.

```
const myElement = document.querySelector('#my-element');
const emailsInputAPI = new EmailsInput(myElement, {
  onNewMail: (mailData) => {
    // this will fire when there is new mail
  },
});

// add existing email list with deleting old ones
emailsInputAPI.addNewMails(['test@test.test']);

// add existing email list with not deleting old ones
emailsInputAPI.addNewMails(['secondTest@test.test'], false);

// get all mails
emailsInputAPI.getAllMails();

// add a mail to list
emailsInputAPI.addNewMailToList('test');

// get valid mail count
emailsInputAPIgetInvalidMailCount();

// get invalid mail count
emailsInputAPIgetInvalidMailCount();

```


## Local Usage


`npm install`

### Develop

`npm run dev`

Open `index.html` in any browser.

### Build

`npm run build`

Open `index.html` in any browser.

You can check index.js.
