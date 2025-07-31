import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  feedbackMessage: string = '';
  feedbackClass: string = '';

  @ViewChild('contactForm') contactForm!: NgForm;

  public sendEmail(e: Event) {
    e.preventDefault();

    if (this.contactForm.invalid) {
      this.feedbackMessage = 'Please fill out all fields correctly.';
      this.feedbackClass = 'text-red-500';
      return;
    }

    this.feedbackMessage = 'Sending...';
    this.feedbackClass = 'text-cyan-300';

    emailjs
      .sendForm('service_a2y758t', 'template_w9ex4zq', e.target as HTMLFormElement, {
        publicKey: 'qTKKh7hSbBYfSsI1t',
      })
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          this.feedbackMessage = 'Message sent! Thank you for reaching out.';
          this.feedbackClass = 'text-green-400';
          this.contactForm.resetForm();

          setTimeout(() => this.feedbackMessage = '', 5000);
        },
        (error) => {
          console.log('FAILED...', error);
          this.feedbackMessage = 'Failed to send the message. Please try again.';
          this.feedbackClass = 'text-red-500';
        },
      );
  }
}