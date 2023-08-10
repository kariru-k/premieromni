import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content: "Home Page of Premier Omni"},
      {name: 'author', content: "Premier Omni Limited"},
      {name: 'keywords', content: "MEP, IT, Premier Omni, Mechanical, Electrical, Solutions, John Gitonga, Plumbing, HVAC"},
      {name: 'robots', content: 'index, follow'},
      {charset: 'UTF-8'}
    ]);
    this.setTitle("Our Services")
  }
  public setTitle(newTitle: string){
    this.title.setTitle(newTitle);
  }
}
