import { Component, OnInit } from '@angular/core';

import { RoomPostService } from 'src/app/services/room-post.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Tab1Page implements OnInit{
  roomPosts: any = [];
  loaded: boolean = false;

  constructor(protected roomPostService: RoomPostService) {}

  ngOnInit(){
    console.log('hi');
    this.roomPostService.getAllRoom().subscribe((data) => {
      this.roomPosts = data;
      this.loaded = true;
      console.log(data, "<== roomPosts");

    });
  }

  ionViewWillEnter(){
    console.log('hi -- 1');
  }
}
