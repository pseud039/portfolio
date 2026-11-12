// ─────────────────────────────────────────────────────────────
// Media data: Pinterest images, top artists, Spotify tracks, anime.
// Corresponds to window.MEDIA from media.js.
// ─────────────────────────────────────────────────────────────

export const PINTEREST_IMAGES: string[] = [
  "https://i.pinimg.com/736x/a0/2b/74/a02b744e0958930bbfa3d37db21141b6.jpg",
  "https://i.pinimg.com/1200x/16/cf/19/16cf1958f3ca95cd713bf19541e77792.jpg",
  "https://i.pinimg.com/736x/df/ce/14/dfce143f5d79830cc45bc9b48733d698.jpg",
  "https://i.pinimg.com/1200x/98/31/ad/9831ad35a5bada132703bc0f922c8483.jpg",
  "https://i.pinimg.com/736x/f7/49/76/f74976029983c5f8de5f556b318b8210.jpg",
  "https://i.pinimg.com/webp/1200x/e2/1f/8d/e21f8d15fad55c76c6b1a7fa7ad6b5e3.webp",
  "https://i.pinimg.com/736x/0c/8b/c3/0c8bc3d2cbdffa9fe922ade1982e1722.jpg",
  "https://i.pinimg.com/webp/1200x/de/5f/c0/de5fc036c2b9e767f8a2d18a494c83ae.webp",
];

export interface Artist {
  name: string;
  genre: string;
  image: string;
}

export const TOP_ARTISTS: Artist[] = [
  { name: "fred again..", genre: "electronic", image: "https://i.pinimg.com/736x/93/d3/3b/93d33b221e817388a04e6e1834d23cd7.jpg" },
  { name: "linkin park", genre: "rock", image: "https://i.pinimg.com/736x/e8/47/18/e84718993d6b5d1bcd3212fdb8cd8a24.jpg" },
  { name: "Arijit Singh", genre: "playback", image: "https://i.pinimg.com/webp/736x/40/f3/22/40f3228c12333d610f7b384b316d2fd5.webp" },
  { name: "Aditya Rikhari", genre: "indie", image: "https://i.pinimg.com/736x/5a/bc/dc/5abcdcf00101cbc6a78a55361618f713.jpg" },
  { name: "Sunidhi Chauhan", genre: "playback", image: "https://i.pinimg.com/474x/44/f7/c5/44f7c5d1d5f2fc6739b71abf956ca9e3.jpg" },
];

export const SPOTIFY_TRACKS: string[] = [
  "https://open.spotify.com/track/4lriIG2vNqwDWzOj2I9rtj?si=1562593380894d09",
  "https://open.spotify.com/track/6IqVq76K6UuJdYwZFgXosQ?si=5197151780014790",
  "https://open.spotify.com/track/5QOBT97OmYCZo1W5u7tRrB?si=84eb23c691b24504",
  "https://open.spotify.com/track/5VmmaElvu2KTB0mpUSGlMy?si=1c0251d90e3a4c8f",
  "https://open.spotify.com/track/4Sxx1wd4nnB8ob8Zsujwrs?si=f27e84017f8548e3",
];

export interface AnimeItem {
  title: string;
  image: string;
  tone: string;
}

export const ANIME: AnimeItem[] = [
  { title: "Haikyuu!!", image: "https://i.pinimg.com/originals/49/6a/a1/496aa1c39d106abe3f8e6491ddf1a3cd.gif", tone: "linear-gradient(135deg,#f0d9d3,#d98878)" },
  { title: "Demon Slayer", image: "https://i.pinimg.com/originals/0f/37/11/0f3711f58d92227a3b6906e209a8008d.gif", tone: "linear-gradient(135deg,#efe6d9,#c9b48a)" },
  { title: "Samurai Champloo", image: "	https://i.pinimg.com/originals/e9/f9/bc/e9f9bcd40f63acd92296eeba83ff4efa.gif", tone: "linear-gradient(135deg,#d9d9d9,#8a8a8a)" },
  { title: "Frieren", image: "	https://i.pinimg.com/originals/3d/aa/c5/3daac57c1a68599a1c7b300038fb446e.gif", tone: "linear-gradient(135deg,#e4dfea,#b8a9d3)" },
  { title: "Summertime Rendering", image: "https://64.media.tumblr.com/1e83bded3b225e854bccea87e4076ee3/9c09b28ff3668e87-82/s540x810/4430bfa844d9aa378d2c395021277ffc29137438.gifv", tone: "linear-gradient(135deg,#dfead6,#a7c495)" },
  {title: "Chainsaw Man", image: "https://i.pinimg.com/originals/06/ca/55/06ca55392d209f4cf274bfd243d10bd0.gif", tone: "linear-gradient(135deg,#f5e6e6,#d9a9a9)" },
  {title: "Jujutsu Kaisen", image: "https://i.pinimg.com/originals/12/ae/c9/12aec958ee8bba6a98ccc58ff6db7fb5.gif", tone: "linear-gradient(135deg,#e0f7fa,#80deea)" },
  {title: "Attack on Titan", image: "	https://i.pinimg.com/originals/7a/e1/83/7ae183ff0702c9c28208d1b0265575b0.gif", tone: "linear-gradient(135deg,#ffe0b2,#ffcc80)" },
  {title: "Bleach", image: "	https://i.pinimg.com/originals/b6/fd/55/b6fd552fbc85f3bb5b849199d2436796.gif", tone: "linear-gradient(135deg,#e1bee7,#ce93d8)" },
  {title: "Black Clover", image: "https://64.media.tumblr.com/2564256c49da9b760f6233efa10d8132/dae7e5f9d0663bfc-ed/s640x960/5af3831a27496351ef9d8d431aa40ac4a7c34f5a.gifv", tone: "linear-gradient(135deg,#c5cae9,#9fa8da)" },
  {title: "Death Note", image: "https://i.pinimg.com/originals/65/5f/28/655f288b6be57fb1e39729edd9375a83.gif", tone: "linear-gradient(135deg,#b0bec5,#90a4ae)" },]
