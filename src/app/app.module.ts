import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MainContentComponent } from './components/main-content/main-content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MusicStatsComponent } from './components/music-stats/music-stats.component';

import { MusicDataService } from './shared/services/music-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MusicStatsComponent
  ],
  providers: [MusicDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
