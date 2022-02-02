import { Component, OnInit } from '@angular/core';

declare const myGalleryScript:any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  
  plusSlides(){
    myGalleryScript();
  }

  ngOnInit() {
   ;
  }

}
