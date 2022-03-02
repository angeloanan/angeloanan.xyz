export interface WeeklyTrackChartResponse {
  weeklytrackchart: WeeklyTrackChart
}

export interface WeeklyTrackChart {
  track: WeeklyTrack[]
  '@attr': WeeklytrackchartAttr
}

export interface WeeklytrackchartAttr {
  from: string
  user: string
  to: string
}

export interface WeeklyTrack {
  artist: WeeklyTrackArtist
  image: Image[]
  mbid: string
  url: string
  name: string
  '@attr': TrackAttr
  playcount: string
}

export interface TrackAttr {
  rank: string
}

export interface WeeklyTrackArtist {
  mbid: string
  '#text': string
}

export enum Size {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export interface Image {
  '#text': string
  size: string
}

// -----------------

export interface TrackGetInfoResponse {
  track: TrackInfo
}

export interface TrackInfo {
  name: string
  url: string
  duration: string
  streamable: Streamable
  listeners: string
  playcount: string
  artist: TrackInfoArtist
  album: Album
  toptags: Toptags
}

export interface Album {
  artist: string
  title: string
  url: string
  image: Image[]
}

export interface TrackInfoArtist {
  name: string
  url: string
}

export interface Streamable {
  '#text': string
  fulltrack: string
}

export interface Toptags {
  tag: any[]
}
