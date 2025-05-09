export interface GenreStat {
  name: string;
  percentage: number;
}

export interface ArtistStat {
  name: string;
  plays: number;
}

export interface DiscoveryStat {
  name: string;
  days: number;
}

export interface ListeningTimeStat {
  daily: string;
  weekly: string;
  monthly: string;
}

export interface MusicStats {
  topGenres: GenreStat[];
  topArtists: ArtistStat[];
  recentDiscoveries: DiscoveryStat[];
  listeningTime: ListeningTimeStat;
}
