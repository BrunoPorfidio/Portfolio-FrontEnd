import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact: FormGroup;

  @ViewChild('form', { static: false }) formElement: ElementRef;

  constructor(private fb: FormBuilder) {
    this.sendContact();
  }

  get invalidName() {
    return (
      this.contact.get('name')?.invalid && 
      this.contact.get('name')?.touched
    );
  }
  get invalidEmail() {
    return (
      this.contact.get('email')?.invalid && 
      this.contact.get('email')?.touched
    );
  }
  get invalidSubject() {
    return (
      this.contact.get('subject')?.invalid &&
      this.contact.get('subject')?.touched
    );
  }
  get invalidMessage() {
    return (
      this.contact.get('message')?.invalid &&
      this.contact.get('message')?.touched
    );
  }

  ngOnInit(): void {}

  sendContact() {
    this.contact = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      subject: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submit(): any {
    if (this.contact.invalid) {
      return Object.values(this.contact.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    } else {
      this.formElement.nativeElement.submit();
    }
  }
}
