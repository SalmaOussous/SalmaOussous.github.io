import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
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
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      phone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }


  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
