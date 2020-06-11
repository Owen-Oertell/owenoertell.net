import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WorkingOnComponent } from './working-on/working-on.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollhelpComponent } from './scrollhelp/scrollhelp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    WorkingOnComponent,
    AboutmeComponent,
    FooterComponent,
    ScrollhelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
