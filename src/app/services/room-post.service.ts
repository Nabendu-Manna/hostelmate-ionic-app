import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SingletonService } from './singleton.service';

@Injectable({
  providedIn: 'root'
})
export class RoomPostService {

  constructor(private httpClient: HttpClient, private singleton: SingletonService) {}

  getAllRoom(): Observable<any>{
    return this.httpClient.get(this.singleton.basePath + this.singleton.roomsApi).pipe(map((res: any) => {
			console.log(res);
      res.forEach(item => {
        if(item.avatar_image)
          item.image_url = this.singleton.basePath + item.avatar_image.image_url;
        else
          item.image_url = "-";
      });
      // res.image_url = this.singleton.basePath + res.image_url;
			return res;
    }));
  }
}
