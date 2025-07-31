import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  feedbackMessage: string = '';
  feedbackClass: string = '';

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.feedbackMessage = 'Please fill out all fields correctly.';
      this.feedbackClass = 'text-red-500';
      return;
    }

    this.feedbackMessage = 'Sending...';
    this.feedbackClass = 'text-cyan-300';

    setTimeout(() => {
      this.feedbackMessage = 'Message sent! Thank you for reaching out.';
      this.feedbackClass = 'text-green-400';
      form.resetForm();

      setTimeout(() => {
        this.feedbackMessage = '';
      }, 4000);
    }, 1500);
  }
}
