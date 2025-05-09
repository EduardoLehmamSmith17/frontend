import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicStatsComponent } from '../music-stats/music-stats.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, MusicStatsComponent],
})
export class HeaderComponent implements OnInit {
  @ViewChild(MusicStatsComponent) musicStatsComponent!: MusicStatsComponent;

  constructor() {}

  ngOnInit(): void {}

  openMusicStats(): void {
    this.musicStatsComponent.open();
  }
}
