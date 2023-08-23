import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'title', content: 'Premier Omni Limited'},
      {name: 'description', content: "Home Page of Premier Omni"},
      {name: 'author', content: "Premier Omni Limited"},
      {name: 'keywords', content: "MEP, IT, Premier Omni, Mechanical, Electrical, Solutions, John Gitonga, Plumbing, HVAC"},
      {name: 'robots', content: 'index, follow'},
      {charset: 'UTF-8'}
    ]);
    this.setTitle("Home Page")
  }
  public setTitle(newTitle: string){
    this.title.setTitle(newTitle);
  }
}
