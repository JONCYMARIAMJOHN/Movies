import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import * as Plyr from 'plyr';
import { stringify } from 'querystring';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  @ViewChild('player') elementRef: ElementRef;

  description: any;
  public date: any;
  public videoid: string;
  link: '';
  player: Plyr;
  constructor(public bsModalRef: BsModalRef) {}


  ngOnInit(): void {
    this.date = moment(this.description.released * 1000).format('DD-MM-YYYY');
    this.videoid = JSON.stringify(this.description.trailer).replace('http://youtube.com/watch?v=', '');
    console.log(this.videoid);
    this.link = JSON.parse(this.videoid);
    console.log(this.link);
    console.log(this.description.trailer);
    this.player = new Plyr('#player');
    
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    console.log(this.elementRef.nativeElement.attributes[2]);
  }
}
