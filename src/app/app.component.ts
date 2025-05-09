import { Component } from '@angular/core';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PremiumPromotionComponent } from './components/premium-promotion/premium-promotion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    MainContentComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    PremiumPromotionComponent,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'music-streaming-app';
}
