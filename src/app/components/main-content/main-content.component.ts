import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artist, Album, Song } from '../../shared/models/music.model';
import { MusicDataService } from '../../shared/services/music-data.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MainContentComponent implements OnInit {
  artists: Artist[] = [];
  albums: Album[] = [];
  trendingSongs: Song[] = [];
  highlightStop: Album[] = [];
  sweetDreams: Album[] = [];

  constructor(private musicDataService: MusicDataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.musicDataService.getArtists().subscribe(data => {
      this.artists = data;
    });

    this.musicDataService.getAlbums().subscribe(data => {
      this.albums = data;
    });

    this.musicDataService.getTrendingSongs().subscribe(data => {
      this.trendingSongs = data;
    });

    this.musicDataService.getHighlightStop().subscribe(data => {
      this.highlightStop = data;
    });

    this.musicDataService.getSweetDreams().subscribe(data => {
      this.sweetDreams = data;
    });
  }
}
