import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  @Input()
  img:string="assets/img/wp.jpg";
  @Input()
  title:string="Implementando";
  @Input()
  phrase:string="Implementando";
  @Input()
  buttonProducts:string="ABOUT US";

  @Input() titleDst:string="Implementando";
  @Input() descrptDst:string="Implementando";
  @Input() typeDst:string[]=["Implementando"];
  @Input() imgDst:string="https://www.elburrito.com/wp-content/themes/elburrito/images/testimonial.png";

  @Input() titleDst1:string="Implementando";
  @Input() descrptDst1:string="Implementando";
  @Input() typeDst1:string[]=["Implementando"];
  @Input() imgDst1:string="https://www.elburrito.com/wp-content/themes/elburrito/images/testimonial.png";

  @Input() titleDst2:string="Implementando";
  @Input() descrptDst2:string="Implementando";
  @Input() typeDst2:string[]=["Implementando"];
  @Input() imgDst2:string="https://www.elburrito.com/wp-content/themes/elburrito/images/testimonial.png";

  ngOnInit(): void {}
}
