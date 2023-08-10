import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content: "Home Page of Premier Omni"},
      {name: 'author', content: "Premier Omni Limited"},
      {name: 'keywords', content: "MEP, IT, Premier Omni, Mechanical, Electrical, Solutions, John Gitonga, Plumbing, HVAC"},
      {name: 'robots', content: 'index, follow'},
      {charset: 'UTF-8'}
    ]);
    this.setTitle("About Premier Omni")
  }
  public setTitle(newTitle: string){
    this.title.setTitle(newTitle);
  }
}
