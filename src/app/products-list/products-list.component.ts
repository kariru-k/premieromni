import { Component } from '@angular/core';
import {ProductData} from "../types/serviceData";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  products: ProductData[] = [
    {
      image: "assets/images/heating.jpg",
      product: "Heating Systems",
      description: "We offer comprehensive heating solutions that encompass the supply, installation, and maintenance of various heating systems. " +
        "Our expertise covers a wide range of technologies and approaches to heating, including low-temperature heating systems, heat pumps, hydronic systems, heat exchangers, and more. We strive to provide efficient and effective heating solutions for both residential and commercial buildings, tailored to meet the unique needs of each customer.",
      items: [
        "Heating Pumps",
        "Thermal Insulation",
        "Heat Exchangers and Equipment",
        "Boilers and Suppliers",
        "Insulation Systems for heating and cooling",
        "Supplies, Spare parts and components"
      ]
    },
    {
      image: "assets/images/ventilation.jpg",
      product: "Ventilation Systems",
      description: "Our expertise covers a variety of ventilation technologies, including natural ventilation, hybrid ventilation, and mechanical ventilation." +
        "We work closely with our customers to design and install ventilation systems that provide optimal indoor air quality, thermal comfort, and energy efficiency." +
        "We also offer maintenance services to ensure that the ventilation systems continue to operate at peak performance\n",
      items: [
        "Fans and Supplies",
        "Air Movement Ventilation Systems and Components"
      ]
    },
    {
      image: "assets/images/air-conditioning.jpg",
      product: "Air-Conditioning Units and Systems",
      description: "We offer a range of air conditioning solutions that are designed to provide optimal indoor air quality, thermal comfort, and energy efficiency." +
        "We understand that each building has unique air conditioning needs, and we work closely with our customers to design and install solutions that meet those needs.",
      items: [
        "Central Air Conditioning",
        "Filters and Humidifiers",
        "Valves, pumps and pipes",
        "Ducting Systems and machinery",
        "Commercial and Home Air Conditioning"
      ]
    },
    {
      image: "assets/images/cooling.jpg",
      product: "Cooling Facilities and Solutions",
      description: "\n" +
        "At our company, we are dedicated to delivering advanced cooling systems and customized solutions. We offer a comprehensive range of services, including design, installation, and maintenance, " +
        "to provide optimal temperature control solutions for diverse industries. Our expertise ensures efficient operations and sustainable cooling practices for our valued clients.",
      items: [
        "Refrigeration systems and Equipment",
        "Cooling Towers",
        "Control Systems",
        "Shipping Units",
        "Control Valves, Sensors and Field Devices",
        "Cooling Automation Systems",
        "Facility Management Systems"
      ]
    },
    {
      image: "assets/images/fire-sprinkler.jpg",
      product: "Fire Safety and Suppression systems",
      description: "We offer to design, install, maintain and provide estimations on the following services related to Fire Safety Systems:\n",
      items: [
        "Portable Fire Extinguishers. Portable Fire Extinguishers are considered the first line of defense to combat small fires limited in size",
        "Fire Alarm Systems",
        "Fire Sprinklers",
        "Fire Pumps",
        "Standpipe Systems",
        "Special Fire Suppression Systems\n",
        "Testing and Inspection\n"
      ]
    },
    {
      image: "assets/images/electrical.jpg",
      product: "Electrical Systems and Solutions",
      description: "We offer cutting-edge electrical systems and solutions to cater to the diverse needs of our valued customers. Our dedicated team of experienced electricians and engineers work tirelessly to design, implement, and maintain residential, commercial, and industrial electrical setups.\n",
      items: [
        "Power Supply and Distribution",
        "Normal and Emergency Lighting - internal and external",
        "Lightning Protection",
        "Energy Supply Devices",
        "Controls and building management systems",
        "Security and CCTV systems",
        "Telecom and data systems",
        "Back-up Power Supplies - Generators and UPS systems"
      ]
    },
    {
      image: "assets/images/stock3.jpg",
      product: "IT Physical Infrastructure and Software Solutions",
      description: "We offer a comprehensive range of services and technologies designed to support and optimize the physical components of an organization's IT operations. These solutions address the critical aspects of data centers, network facilities, and other IT-related infrastructure, ensuring efficiency, reliability, and scalability.",
      items: [
        "Enterprise Network Solutions",
        "Structured Cabling Systems (LAN & WAN)",
        "KVM Switches",
        "Network & IT Managed Solutions/Services",
        "Integrated Security Solution",
        "IT Design Services & Solutions",
        "CCTV surveillance & video analytics",
        "Access control solutions",
        "Perimeter security & Gate entry systems",
        "Video Management Software & Video Content Analytics",
        "Audio Visual Solutions",
        "Display Solutions"
]
    },
  ]
}
