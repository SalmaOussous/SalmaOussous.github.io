import { Component, ElementRef, AfterViewInit, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { $ } from 'protractor';
import { ContactService } from './contact/contact.service';
@Component({
  selector: 'app-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SoPortfolio';
  author = 'Salma Oussous';
  date = new Date();
  @ViewChild('confirmation') confirmation: ElementRef;
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ContactService, private renderer: Renderer2) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      phone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormData) {
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        p.innerHTML = "Email Sent"
        this.renderer.appendChild(this.confirmation.nativeElement, p)
        location.href = 'https://mailthis.to/confirm'
        console.log(response) 
      }, error => {
        p.innerHTML = "Email not sent"
        this.renderer.appendChild(this.confirmation.nativeElement, p)
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
