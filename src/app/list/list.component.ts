import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'cinema-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cinemas: any[];
  selectedCinema: object;
  selectedCinemaFilms: any[];
  
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCinemas()
      .subscribe(
        data => this.cinemas = data,
        error => console.error('Error: ' + error)
      );
  }

  selectCinema(cinema: object) {
    this.selectedCinema = cinema;
    this.apiService.getFilmsForCinema(cinema.id)
      .subscribe(
        data => this.selectedCinemaFilms = data,
        error => console.error('Error: ' + error)
      );
  }
}
