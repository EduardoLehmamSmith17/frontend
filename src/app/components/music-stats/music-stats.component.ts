import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicDataService } from '../../shared/services/music-data.service';

@Component({
  selector: 'app-music-stats',
  templateUrl: './music-stats.component.html',
  styleUrls: ['./music-stats.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MusicStatsComponent implements OnInit {
  isVisible = false;

  topGenres: any[] = [];
  listeningTime: any = {};
  topArtists: any[] = [];
  recentDiscoveries: any[] = [];

  constructor(private musicDataService: MusicDataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.musicDataService.getTopGenres().subscribe((data) => {
      this.topGenres = data;
    });

    this.musicDataService.getListeningTime().subscribe((data) => {
      this.listeningTime = data;
    });

    this.musicDataService.getTopArtists().subscribe((data) => {
      this.topArtists = data;
    });

    this.musicDataService.getRecentDiscoveries().subscribe((data) => {
      this.recentDiscoveries = data;
    });
  }

  open(): void {
    this.isVisible = true;
  }

  close(): void {
    this.isVisible = false;
  }
}
