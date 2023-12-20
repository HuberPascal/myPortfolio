import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  inputValueName: string = '';
  inputValueMail: string = '';
  inputValueMessage: string = '';
  showImageName: boolean = false;
  showImageMail: boolean = false;
  showImageMessage: boolean = false;
  inputFocusName: boolean = false;
  inputFocusMail: boolean = false;
  inputFocusMessage: boolean = false;
  showErrorMessageName: boolean = false;
  showErrorMessageMail: boolean = false;
  showErrorMessageTextarea: boolean = false;
  privacyPolicyChecked: boolean = false;
  isMailSend: boolean = false;
  fadeOutSendMessage: boolean = false;

  onInputFocusName() {
    this.showImageName = true;
    this.inputFocusName = true;
    this.showErrorMessageName = true;
  }

  onInputFocusMail() {
    this.showImageMail = true;
    this.inputFocusMail = true;
    this.showErrorMessageMail = true;
  }

  onInputFocusMessage() {
    this.showImageMessage = true;
    this.inputFocusMessage = true;
    this.showErrorMessageTextarea = true;
  }

  onInputBlurName() {
    if (!this.inputValueName) {
      this.showImageName = false;
      this.inputFocusName = false;
      this.showErrorMessageName = false;
    }
  }

  onInputBlurMail() {
    if (!this.inputValueMail) {
      this.showImageMail = false;
      this.inputFocusMail = false;
      this.showErrorMessageMail = false;
    }
  }

  onInputBlurMessage() {
    if (!this.inputValueMessage) {
      this.showImageMessage = false;
      this.inputFocusMessage = false;
      this.showErrorMessageTextarea = false;
    }
  }

  isFormValid(): any {
    return (
      this.inputValueName.length >= 5 &&
      this.isEmailValid() &&
      this.inputValueMessage.length >= 20 &&
      this.privacyPolicyChecked
    );
  }

  isNameValid(): boolean {
    return this.inputValueName.length >= 5;
  }

  isEmailValid(): boolean {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      this.inputValueMail
    );
  }

  isMessageValid(): boolean {
    return this.inputValueMessage.length >= 20;
  }

  toggleCheckbox() {
    this.privacyPolicyChecked = !this.privacyPolicyChecked;
  }

  sendMail(event: any) {
    event.preventDefault();
    const data = new FormData(event.target);
    const form = event.target;

    fetch('https://formspree.io/f/mrgwwppr', {
      method: 'POST',
      body: new FormData(event.target),
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        this.isMailSend = true;

        setTimeout(() => {
          this.fadeOutSendMessage = true;

          setTimeout(() => {
            this.isMailSend = false;
            this.fadeOutSendMessage = false;

            this.inputFocusName = false;
            this.inputValueName = '';
            this.inputFocusMail = false;
            this.inputValueMail = '';
            this.inputFocusMessage = false;
            this.inputValueMessage = '';
            this.privacyPolicyChecked = false;
          }, 300);
        }, 5000);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  // test(event: any) {
  //   this.isMailSend = true;

  //   setTimeout(() => {
  //     this.fadeOutSendMessage = true;

  //     setTimeout(() => {
  //       this.isMailSend = false;
  //       this.fadeOutSendMessage = false;

  //       this.inputFocusName = false;
  //       this.inputValueName = '';
  //       this.inputFocusMail = false;
  //       this.inputValueMail = '';
  //       this.inputFocusMessage = false;
  //       this.inputValueMessage = '';
  //       this.privacyPolicyChecked = false;
  //     }, 300);
  //   }, 5000);
  // }
}
