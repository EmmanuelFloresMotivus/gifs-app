import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import type { GhiphyResponse } from '../interfaces/giphy.interfaces';



@Injectable({providedIn: 'root'})
export class ServiceNameService {

  private http = inject(HttpClient);

  constructor(){
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {

    this.http.get<GhiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
      }
    })

  }

}
