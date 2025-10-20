class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  image: string;
  link: string;
  constructor(
    id: number,
    name: string,
    channel: string,
    seasons: number,
    description: string,
    image: string,
    link: string
  ) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}

var series = [
  new Serie(1, "Breaking Bad", "AMC", 5, "A high school chemistry teacher turned methamphetamine producer.", "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg", "https://www.amc.com/shows/breaking-bad"),
  new Serie(2, "Orange Is the New Black", "Netflix", 6, "A woman is sent to prison and must adapt to life behind bars.", "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg", "https://www.netflix.com/title/70242311"),
  new Serie(3, "Game of Thrones", "HBO", 7, "Noble families vie for control of the Seven Kingdoms of Westeros.", "https://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg", "https://www.hbo.com/game-of-thrones"),
  new Serie(4, "The Big Bang Theory", "CBS", 12, "A group of friends navigate life and science.", "https://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg", "https://www.cbs.com/shows/big_bang_theory/"),
  new Serie(5, "Sherlock", "BBC", 4, "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.", "https://static.tvmaze.com/uploads/images/medium_portrait/0/474.jpg", "https://www.bbc.co.uk/programmes/b018ttws"),
  new Serie(6, "A Very English Scandal", "BBC", 2, "A true story of sex, lies and scandal in 1970s Britain.", "https://static.tvmaze.com/uploads/images/medium_portrait/148/370345.jpg", "https://www.bbc.co.uk/programmes/p065smy4")
];
