import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Album {
  _id: string;
  name: string;
  artist: string;
  coverImage: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly http: HttpClient) { }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.api}/albums`);
  }

  public searchAlbum(searchExp: string): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.api}/albums/search?searchExp=${searchExp}`);
  }

  public getInitialSearchAlbums(): Observable<Album[]> {
    return of([]);
  }
}
