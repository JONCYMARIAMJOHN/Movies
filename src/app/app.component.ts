import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PopcornTime';

  public movies: any;

  constructor(private movieService: MovieService,
              private modalService: BsModalService) {

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.ViewList();
 }
  ViewList() {
    this.movieService.getDetails().subscribe(data => {
      this.movies = data;
      console.log(data);
    });
  }




  
  onViewMore(movieDetails: any[]) {
    const initialState = {
      description: movieDetails,
    };
    // console.log(movieDetails);
    this.modalService.show(MovieDescriptionComponent, Object.assign({initialState}, { class: 'gray modal-lg' }));
  }
}
