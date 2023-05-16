import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleMenuComponent } from './components/title-menu/title-menu.component';
import { TitleCardComponent } from './components/title-card/title-card.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { ContentComponent } from './pages/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    TitleMenuComponent,
    TitleCardComponent,
    MiniCardComponent,
    ContentComponent,
    FooterComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
