import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  description: any;
  public date: any;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.date = moment(this.description.released * 1000).format('DD-MM-YYYY');
    console.log(this.description);
  }

}
