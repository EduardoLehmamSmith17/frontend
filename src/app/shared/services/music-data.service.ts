import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist, Album, Song } from '../models/music.model';

@Injectable({
  providedIn: 'root',
})
export class MusicDataService {
  private apiUrl = 'http://localhost:5000/api/music';

  constructor(private http: HttpClient) {}

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiUrl}/artists`);
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getTrendingSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.apiUrl}/songs/trending`);
  }

  getHighlightStop(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.apiUrl}/songs/highlightstop`);
  }

  getSweetDreams(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.apiUrl}/songs/sweetdreams`);
  }

  getTopGenres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stats/genres`);
  }

  getTopArtists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stats/topartists`);
  }

  getRecentDiscoveries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stats/discoveries`);
  }

  getListeningTime(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/stats/listeningtime`);
  }
}
