import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  public basePath: string;
  public installedAppVersion: string;
  public roomsApi: string;

  constructor() {
    // this.basePath = 'http://192.168.0.111:8000';
    this.basePath = 'http://127.0.0.1:8000';
    this.installedAppVersion = '0.1';
    this.roomsApi = "/hostel/room/";
  }
}
