import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'my-home',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(apiService: ApiService) {
    apiService.getCinemas()
      .subscribe(
        data => console.log(data),
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );

    apiService.getFilmsForCinema('0002')
      .subscribe(
        data => console.log(data),
        error => console.error('Error: ' + error)
      );
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
