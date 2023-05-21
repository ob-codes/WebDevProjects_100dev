//Create a Netflix TV Show class with a constructor 
//that makes Netflix TV Shows with 4 properties and 3 methods
class MakeShow{
  constructor(title, genre, rating, episode){
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.episode = episode;
  }
  tellGenre(){
    console.log(`genre is : ${this.genre}`);
  }
  tellRating(){
    console.log(`rating is : ${this.rating}`);
  }
  tellEpisode(){
    console.log(`No of episode is ${this.episode}`);
  }
}

let narcos = new MakeShow("narcos", "action", 8.8, 95);
