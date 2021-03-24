const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    artist(id: ID!): Artist,
    relatedArtists(id: ID!): [Artist],
    artists(ids: [ID!]!): [Artist],
    artistAlbums(id: ID!, market: String, limit: Int, offset: String, include_groups: String): [Album],
    artistTopTracks(id: ID!, market: String!): [Track],
    albums(ids: [ID]!, market: String): [Album],
    album(id: ID!, market: String): Album,
    albumTracks(id: ID!, market: String, limit: Int, offset: Int): [Track],
    track(id: ID!, market: String): Track,
    tracks(ids: [ID]!, market: String): [Track],
    trackAudioFeature(id: ID!): AudioFeature,
    tracksAudioFeatures(ids: [ID]!): [AudioFeature],
    markets: [String],
    user(user_id: ID!): User,
    me: User,
    browseNewReleases(country: String, limit: Int, offset: Int): BrowseAlbum,
    browseFeaturedPlaylists(country: String, locale: String, timestamp: String, limit: Int, offset: Int): BrowsePlaylist,
    browseCategoryPlaylists(category_id: ID!, country: String, limit: Int, offset: Int): BrowsePlaylist,
    getCategory(category_id: ID!, country: String, locale: String): Category,
    getCategories(country: String, locale: String, limit: Int, offset: Int): BrowseCategories,
    genres: [String],
    show(id: ID!, market: String): Show,
    shows(ids: [ID]!, market: String): [Show],
    showEpisodes(id: ID!, market: String, limit: Int, offset: Int): BrowseEpisode,
    search(q: String!, type: [String!]!, market: String, limit: Int, offset: Int): Search,
  },
  type Image {
    height: Int,
    width: Int,
    url: String
  },
  type Followers {
    href: String,
    total: Int
  },
  type External_Urls {
    spotify: String,
  },
  type External_ID {
    isrc: String
  },
  type TrackNumber {
    href: String,
    total: Int,
  },
  type Category {
    id: ID!,
    href: String,
    icons: [Image],
    name: String,
  },
  type Artist {
    id: ID!,
    name: String!,
    external_urls: External_Urls,
    followers: Followers,
    genres: [String],
    href: String,
    images: [Image],
    popularity: Int,
    type: String,
    uri: String
  },
  type Album {
    id: ID!,
    name: String!,
    album_group: String,
    album_type: String,
    artists: [Artist],
    external_urls: External_Urls,
    href: String,
    images: [Image],
    release_date: String,
    release_date_precision: String,
    total_tracks: Int,
    type: String,
    uri: String,
    available_markets: [String],
  },
  type Track {
    id: ID!,
    name: String!,
    album: Album,
    artists: [Artist],
    disc_number: Int,
    duration_ms: Int,
    explicit: Boolean,
    external_ids: External_ID,
    external_urls: External_Urls
    href: String,
    is_local: Boolean,
    is_playable: Boolean,
    popularity: Int,
    preview_url: String,
    track_number: Int,
    type: String,
    uri: String,
    available_markets: [String],
  },
  type Playlist {
    id: ID!,
    name: String,
    collaborative: Boolean,
    description: String,
    external_urls: External_Urls,
    images: [Image],
    href: String,
    owner: User,
    primary_color: String,
    public: String,
    snapshot_id: String,
    tracks: TrackNumber,
    type: String,
    uri: String,
  },
  type AudioFeature {
    id: ID!,
    danceability: Float,
    energy: Float,
    key: Int,
    loudness: Float,
    mode: Int,
    speechiness: Float,
    acousticness: Float,
    instrumentalness: Float,
    liveness: Float,
    valence: Float,
    tempo: Float,
    type: String,
    uri: String,
    track_href: String,
    analysis_url: String,
    duration_ms: Int,
    time_signature: Int,
  }
  type User {
    id: ID!,
    display_name: String,
    external_urls: External_Urls,
    followers: Followers,
    href: String,
    images: Image,
    type: String,
    uri: String,
  },
  type BrowseAlbum {
    href: String,
    items: [Album],
    limit: Int,
    next: String,
    offset: Int,
    previous: String,
    total: Int,
  },
  type BrowsePlaylist {
    href: String,
    limit: Int,
    next: String,
    offset: Int,
    previous: String,
    total: Int,
    items: [Playlist]
  },
  type BrowseCategories {
    href: String,
    limit: Int,
    next: String,
    offset: Int,
    previous: String,
    total: Int,
    items: [Category]
  },
  type BrowseEpisode {
    href: String,
    items: [Episode],
    offset: Int,
    limit: Int,
    next: String,
    previous: String,
    total: Int,
  },
  type BrowseShow {
    href: String,
    items: [Show],
    offset: Int,
    limit: Int,
    next: String,
    previous: String,
    total: Int,
  },
  type BrowseArtist {
    href: String,
    items: [Artist],
    offset: Int,
    limit: Int,
    next: String,
    previous: String,
    total: Int,
  },
  type BrowseTrack {
    href: String,
    items: [Track],
    offset: Int,
    limit: Int,
    next: String,
    previous: String,
    total: Int,
  },
  type Show {
    id: ID!,
    name: String!,
    available_markets: [String],
    description: String,
    explicit: Boolean,
    external_urls: External_Urls,
    href: String,
    images: [Image],
    is_externally_hosted: Boolean,
    languages: [String],
    media_type: String,
    publisher: String,
    total_episodes: Int,
    type: String,
    uri: String,
  },
  type Episode {
    id: ID!,
    name: String!,
    href: String,
    audio_preview_url: String,
    description: String,
    duration_ms: Int,
    explicit: Boolean,
    external_urls: External_Urls,
    images: [Image],
    is_externally_hosted: Boolean,
    is_playable: Boolean,
    language: String,
    languages: [String],
    release_date: String,
    release_date_precision: String,
    type: String,
    uri: String,
  },
  type Search {
    albums: BrowseAlbum,
    artists: BrowseArtist,
    tracks: BrowseTrack,
    playlists: BrowsePlaylist,
    shows: BrowseShow,
    episodes: BrowseEpisode,
  },
`);

module.exports = schema;
