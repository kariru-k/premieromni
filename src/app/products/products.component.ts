import { Component } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content: "Home Page of Premier Omni"},
      {name: 'author', content: "Premier Omni Limited"},
      {name: 'keywords', content: "MEP, IT, Premier Omni, Mechanical, Electrical, Solutions, John Gitonga, Plumbing, HVAC"},
      {name: 'robots', content: 'index, follow'},
      {charset: 'UTF-8'}
    ]);
    this.setTitle("Our Products")
  }
  public setTitle(newTitle: string){
    this.title.setTitle(newTitle);
  }
}
