import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { BannerComponent } from './banner/banner.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { FunFactsComponent } from './fun-facts/fun-facts.component';
import { ExtrainfoComponent } from './extrainfo/extrainfo.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CallbackComponent } from './callback/callback.component';
import { FooterComponent } from './footer/footer.component';
import { LogoslidesComponent } from './logoslides/logoslides.component';
import { InformationComponent } from './information/information.component';
import { ServicesHeaderComponent } from './services-header/services-header.component';
import { ServicesListComponent } from './services-list/services-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    BannerComponent,
    HomeServicesComponent,
    FunFactsComponent,
    ExtrainfoComponent,
    TestimonialsComponent,
    CallbackComponent,
    FooterComponent,
    LogoslidesComponent,
    InformationComponent,
    ServicesHeaderComponent,
    ServicesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
