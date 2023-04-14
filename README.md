# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/intro-component-with-sign-up-form-TR6MiGseIj](https://www.frontendmentor.io/solutions/intro-component-with-sign-up-form-TR6MiGseIj)
- Live Site URL: [https://josh76543210-fm-intro-sign-up-form.netlify.app/](https://josh76543210-fm-intro-sign-up-form.netlify.app/)

## My process

### Built with

- HTML
- CSS
- JS

### What I learned

Using css and javascript to create the form-validation functionality

```js
// submit form
function checkform() {
  validSubmit = true;

  // check for empty inputs
  inputBox.forEach((input) => {
    if (input.children[0].value === "") {
      error(input);
      validSubmit = false;
    } else {
      noError(input);
    }
  });

  // check for valid email
  emailError();

  validSubmit ? submitSuccess() : successEl.classList.add("hidden");
}
```

## Author

- Frontend Mentor - [@josh76543210](https://www.frontendmentor.io/profile/josh76543210)
- Twitter - [@josh76543210](https://www.twitter.com/josh76543210)
