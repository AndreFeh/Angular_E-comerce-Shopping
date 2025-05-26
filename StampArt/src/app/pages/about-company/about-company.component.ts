import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.css'
})
export class AboutCompanyComponent {
@Input() presenting_img: string="assets/img/stamp_art_professional.png";
@Input() missao: string="Nossa missao...";
@Input() visao:string="Nossa vissao...";
@Input() valores: string="Nossos valores...";
}
