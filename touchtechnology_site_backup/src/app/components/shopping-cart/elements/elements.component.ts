import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValuesService } from '../../../services/values.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.css'
})
export class ElementsComponent implements OnInit{
// [x: string]: any;
  @Input()
  id:string="";
  @Input()
  prodImg:string = "";
  @Input()
  prodName:string= "";
  @Input()
  qtd:number = 0;
  @Input()
  price:number = 0;

  @Output() updatePrice = new EventEmitter<number>();
  @Output() updateQtd = new EventEmitter<number>();

  ngOnInit(): void {}

  constructor(public formatBrl:ValuesService){}


  get priceTotal() : number {
    return this.price * this.qtd;
  }


  increaseQtd(){
    this.qtd++;
    this.updateQtd.emit(this.qtd);

  }

  decreaseQtd(){
    if(this.qtd===1){
      const confirmRm = window.confirm("Remover Item?");
      if(confirmRm == true){
        this.qtd--;
        this.updateQtd.emit(this.qtd);

      } else return;
    } else {
      this.qtd--;
      this.updateQtd.emit(this.qtd);
    }
  }

  increasePrice() {
    this.price++;
    this.updatePrice.emit(this.price);
  }

  decreasePrice() {
    if (this.price > 0) {
      this.price--;
      this.updatePrice.emit(this.price);
    }
  }

}
