import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _getUrl = 'api/videos';
  constructor(public _http: HttpClient) {}

  getVideos(){
    // get will return observable
    return this._http.get(this._getUrl);
  }

}
