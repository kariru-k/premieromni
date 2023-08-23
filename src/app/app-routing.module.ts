import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  { path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductsComponent,
  },
  {
    path: 'services',
    pathMatch: 'full',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules,
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
