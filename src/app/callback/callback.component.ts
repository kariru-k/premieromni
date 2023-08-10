import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent{



  constructor(private builder: FormBuilder, private toastr: ToastrService) {

  }


  FormData = this.builder.group({
    Name: new FormControl("", [Validators.required]),
    EmailAddress: new FormControl("", Validators.compose([Validators.email, Validators.required])),
    Subject: new FormControl("", [Validators.required]),
    Message: new FormControl("", [Validators.required]),
  })

  public sendEmail(e: Event) {
    emailjs.sendForm('Premier_Omni', 'template_xrdxsus', e.target as HTMLFormElement, 'pj4l-evnNhu9XKjke')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.toastr.success("Successfully sent");
        (<HTMLFormElement>document.getElementById("contact")).reset();
      }, (error) => {
        console.log(error.text);
        this.toastr.error("Error")
      });
  }

}
