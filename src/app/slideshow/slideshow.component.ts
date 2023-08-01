import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = [
    `coding-and-vacation.jpg`,
    `coding-by-sea.jpg`,
    `kampus-production-min.jpg`,
    `thisisengineering-min.jpg`
  ];
  headlines = [
    `Bring engineering to the next level`,
    `Born to code`,
    `Kampus production`,
    `This is engineering`
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
