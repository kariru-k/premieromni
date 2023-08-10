import { Component } from '@angular/core';
import {ServiceData} from "../types/serviceData";

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {


  services: ServiceData[] = [
    {
      image: "assets/images/consultation.jpg",
      service: "Consultation",
      description: "Our consultation service is designed to help our clients identify their needs and requirements. We work closely with our clients to understand their business goals and objectives, and we provide expert advice on the best solutions to meet their needs. Our team of experts has extensive experience in the industry, and we leverage this expertise to provide our clients with the best possible guidance.\n" +
        "During the consultation process, we take the time to understand our clients' unique needs and requirements. We work with them to identify any pain points or challenges they may be facing, and we develop a customized solution that meets their specific needs. Our goal is to provide our clients with a solution that is tailored to their unique requirements and that delivers the results they need."
    },
    {
      image: "assets/images/design.jpg",
      service: "Design",
      description: "Our design service is focused on creating customized solutions that meet the unique needs of our clients. We work with our clients to develop a comprehensive design that takes into account their specific requirements, budget, and timeline. Our team of designers uses the latest tools and technologies to create innovative and effective solutions that meet our clients' needs.\n" +
        "During the design process, we work closely with our clients to ensure that we understand their unique needs and requirements. We take the time to develop a comprehensive design that meets their specific needs and that delivers the results they need. Our goal is to provide our clients with a solution that is tailored to their unique requirements and that delivers the results they need."
    },
    {
      image: "assets/images/installation.jpg",
      service: "Installation",
      description: "Our installation service is designed to ensure that our clients' solutions are installed correctly and efficiently. We have a team of experienced technicians who are trained to install our solutions quickly and effectively. We work closely with our clients to ensure that the installation process is seamless and that their systems are up and running as quickly as possible.\n" +
        "During the installation process, we take the time to ensure that our clients' solutions are installed correctly and efficiently. We work closely with our clients to ensure that the installation process is seamless and that their systems are up and running as quickly as possible. Our goal is to provide our clients with a solution that is installed correctly and that delivers the results they need."
    },
   {
      image: "assets/images/maintenance.jpg",
      service: "Maintenance and Support",
      description: "Our maintenance and support service is focused on ensuring that our clients' solutions are running smoothly and efficiently. We provide ongoing support to our clients to ensure that their systems are up to date and functioning properly. Our team of experts is available to provide technical support and assistance whenever our clients need it.\n" +
        "During the maintenance and support process, we work closely with our clients to ensure that their systems are running smoothly and efficiently. We provide ongoing support to our clients to ensure that their systems are up to date and functioning properly. Our goal is to provide our clients with a solution that is reliable and that delivers the results they need."
    }
  ]
}
