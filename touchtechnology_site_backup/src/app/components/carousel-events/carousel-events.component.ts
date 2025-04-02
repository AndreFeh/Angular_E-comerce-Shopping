import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel-events',
  templateUrl: './carousel-events.component.html',
  styleUrl: './carousel-events.component.css'
})
export class CarouselEventsComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [
    'assets/img/404wallpaper-not-found.jpg',
    'assets/img/404wallpaper-not-found.jpg',
    'assets/img/404wallpaper-not-found.jpg'
  ];

  currentIndex = 0;
  progress = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.progress += 20; // Aumenta a cada 1 segundo (5 segundos total)

      if (this.progress >= 100) {
        this.next();
        this.progress = 0;
      }
    }, 1000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.progress = 0;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.progress = 0;
  }
}
