import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getDetails() {
    const requestUrl = `https://tv-v2.api-fetch.website/movies/1`;
    return this.httpClient.get(requestUrl);
  }
}
