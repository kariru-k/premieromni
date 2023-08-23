import { Component } from '@angular/core';
import {LogoType} from "../models/logos";

@Component({
  selector: 'app-logoslides',
  templateUrl: './logoslides.component.html',
  styleUrls: ['./logoslides.component.css']
})

export class LogoslidesComponent {

  logos: LogoType[] = [
    {
      number: "1",
      image: "assets/images/apc_3.webp"
    },
    {
      number: "2",
      image: "assets/images/dahua-logo.webp"
    },
    {
      number: "3",
      image: "assets/images/hikvision-logo.webp"
    },
    {
      number: "4",
      image: "assets/images/huawei_orig.webp"
    },
    {
      number: "5",
      image: "assets/images/lenovo-partner-logo_orig.webp"
    },
    {
      number: "6",
      image: "assets/images/microsoft-partner-logo_orig.webp"
    },
    {
      number: "7",
      image: "assets/images/molex_3_orig.webp"
    },
    {
      number: "8",
      image: "assets/images/rittal-partner-logo_orig.webp"
    },
    {
      number: "9",
      image: "assets/images/schneider-electric_2_orig.webp"
    },
  ]

  constructor() {}
}
