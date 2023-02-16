import { Component } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {



  headers: String[] = [
    "Data Infrastructure",
    "Data Servers",
    "Data Logos",
    "More Data"
  ]

  statements: String[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan semper mi at eleifend. Quisque euismod aliquet auctor. Aliquam faucibus viverra eros eget rutrum. Cras sit amet sem dignissim elit ornare ullamcorper et vitae augue. Suspendisse auctor magna a gravida efficitur. Ut lacinia, turpis quis dignissim sodales,",
    "eros justo eleifend risus, id efficitur velit nibh et libero. Sed eget porta libero. Praesent imperdiet nibh arcu, et consequat libero ornare quis. Praesent sagittis",
    "mi in vehicula ultricies, diam velit commodo justo, ac sollicitudin velit ex malesuada metus. Maecenas dui mi, luctus eu nulla in, volutpat tempus justo. Aliquam erat volutpat. Suspendisse sit amet mattis justo, vel luctus sapien. Phasellus eu ex viverra felis eleifend accumsan eget ut nisl.",
    "mi in vehicula ultricies, diam velit commodo justo, ac sollicitudin velit ex malesuada metus. Maecenas dui mi, luctus eu nulla in, volutpat tempus justo. Aliquam erat volutpat. Suspendisse sit amet mattis justo, vel luctus sapien. Phasellus eu ex viverra felis eleifend accumsan eget ut nisl."
  ]

  header: String = this.headers[0];
  statement: String = this.statements[0];


  onClick(index: number){
    this.statement = this.statements[index]
    this.header = this.headers[index];
  }


}
