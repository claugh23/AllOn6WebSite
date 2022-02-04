import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from 'src/app/Interfaces/ContactInformation';
import { ContactService } from 'src/app/services/Contact/contact.service';

@Component({
  selector: 'app-section7',
  templateUrl: './section7.component.html',
  styleUrls: ['./section7.component.css']
})
export class Section7Component implements OnInit {

  FormContact: FormGroup;
  StatusSubmit: boolean = true;
  StateAlertSubmit: boolean = false;
  MessageSuccess: string = "";

  constructor(private formBuilder: FormBuilder, private ServerAPI: ContactService) {

    this.FormContact = this.formBuilder.group({

      FormContactNombre: new FormControl('', Validators.required),
      FormContactEmail: new FormControl('', Validators.required),
      FormContactPhone: new FormControl('', Validators.required),
      FormContactTypeContact: new FormControl('', Validators.required),
      FormContactPassPort: new FormControl('', Validators.required),
      FormContacProcedure: new FormControl('', Validators.required)

    })
  }

  async SubmitContactInformation() {
    const ContactInformation: ContactModel = {
      name: this.FormContact.get('FormContactNombre')?.value,
      email: this.FormContact.get('FormContactEmail')?.value,
      phone: Number.parseInt(this.FormContact.get('FormContactPhone')?.value),
      typeContactSelection: this.FormContact.get('FormContactTypeContact')?.value,
      passPort: this.FormContact.get('FormContactPassPort')?.value,
      procedureSelection: this.FormContact.get('FormContacProcedure')?.value,
    }

    this.ServerAPI.PostContactInformation(ContactInformation).subscribe((result: any) => {

    }, (error: HttpErrorResponse) => {

      if (error.status === 201) {

        this.StatusSubmit = false;
        this.StateAlertSubmit = true;
        this.MessageSuccess = JSON.stringify(error.error.text)
      }

    });

  }

  ngOnInit(): void {
  }

}
