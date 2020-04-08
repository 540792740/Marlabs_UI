import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Video} from "./video";


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _postUrl= 'api/videos';
  private _getUrl = 'api/videos';
  private _putUrl = 'api/videos/';


  constructor(public _http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'jwt-token'
    })
  };

  getVideos(){
    // get will return observable
    return this._http.get(this._getUrl);
  }

  addVideo(video:Video):Observable<Video>{
    return this._http.post<Video>(this._postUrl, video, this.httpOptions)
  }
  updateVideo(video:Video):Observable<Video>{
    return this._http.put<Video>(this._putUrl, video, this.httpOptions)
      .pipe();
  }

}
