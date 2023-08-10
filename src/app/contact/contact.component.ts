import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content: "Contact Page of Premier Omni"},
      {name: 'author', content: "Premier Omni Limited"},
      {name: 'keywords', content: "MEP, IT, Premier Omni, Mechanical, Electrical, Solutions, John Gitonga, Plumbing, HVAC, IT solutions"},
      {name: 'robots', content: 'index, follow'},
      {charset: 'UTF-8'}
    ]);
    this.setTitle("Contact Us")
  }
  public setTitle(newTitle: string){
    this.title.setTitle(newTitle);
  }
}
