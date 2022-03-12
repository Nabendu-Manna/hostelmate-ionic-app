import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class Tab1Page implements OnInit{
  constructor() {}

  ngOnInit(){
    console.log('hi');
  }

  ionViewWillEnter(){
    console.log('hi -- 1');
  }
  
}
