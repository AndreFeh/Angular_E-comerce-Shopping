import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  @Input()
  logoPage: string = 'assets/img/Stamp_art_cover.jpg';

  isFixed: boolean = false; // Define se a barra fica fixa ou não

  @HostListener('window:scroll', [])
  onScroll() {
    this.isFixed = window.scrollY > 50; // Se rolar mais de 50px, torna fixo
  }
}
