import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrl: './destaques.component.css'
})
export class DestaquesComponent implements OnInit{
  @Input() titleDst:string="Implementando";
  @Input() descrptDst:string="Implementando";
  @Input() typeDst:string[]=["Implementando"];
  @Input() imgDst:string="https://www.elburrito.com/wp-content/themes/elburrito/images/testimonial.png";

  ngOnInit(): void {  }

}
