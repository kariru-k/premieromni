import { NgModule, isDevMode } from '@angular/core';
import {BrowserModule, Meta} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
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
import { CallbackComponent } from './callback/callback.component';
import { FooterComponent } from './footer/footer.component';
import { LogoslidesComponent } from './logoslides/logoslides.component';
import { InformationComponent } from './information/information.component';
import { ServicesHeaderComponent } from './services-header/services-header.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { MapComponent } from './map/map.component';
import {NgOptimizedImage} from "@angular/common";
import { ProductsComponent } from './products/products.component';
import { LazyloadingDirective } from './lazyloading.directive';
import {ToastrModule} from "ngx-toastr";
import {ReactiveFormsModule} from "@angular/forms";
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {LayoutModule} from "@angular/cdk/layout";

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
    CallbackComponent,
    FooterComponent,
    LogoslidesComponent,
    InformationComponent,
    ServicesHeaderComponent,
    ServicesListComponent,
    ContactHeaderComponent,
    ContactInformationComponent,
    MapComponent,
    ProductsComponent,
    LazyloadingDirective,
    ProductsHeaderComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    LayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {timeOut: 1000, positionClass: 'toast-bottom-right'}
    ),
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
