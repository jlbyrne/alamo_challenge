import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  constructor(private http: Http) { }
  
  getCinemas() {
    return this.http.get('https://drafthouse.com/s/mother/v1/page/market/main/austin')
      .map(response => {
        const data = response.json().data;
        console.log(data)
        return data.market.cinemas;
      })
  }

  getFilmsForCinema(cinemaId) {
    return this.http.get('https://drafthouse.com/s/mother/v1/page/market/main/austin')
      .map(response => {
        const data = response.json().data;
        let foundFilmCodes = [];
        
        return data.sessions.filter(sessions => {
          let unique = !foundFilmCodes.includes(sessions.filmHeadOfficeCode);
          foundFilmCodes.push(sessions.filmHeadOfficeCode);
          return sessions.cinemaId == cinemaId && sessions.status == 'ONSALE' && unique;
        });
      })
  }

  getFilmDetails(filmHeadOfficeCode) {
    return this.http.get('https://drafthouse.com/s/mother/v1/page/market/main/austin')
      .map(response => {
        const data = response.json().data;
        return data.films.filter(film => film.headOfficeCode == filmHeadOfficeCode);
      })
  }
}
