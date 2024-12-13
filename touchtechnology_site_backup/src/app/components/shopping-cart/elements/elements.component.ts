import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValuesService } from '../../../services/values.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.css'
})
export class ElementsComponent implements OnInit{
// [x: string]: any;
  @Input()
  id:number=0;
  @Input()
  prodImg:string = "";
  @Input()
  prodName:string= "";
  @Input()
  qtd:number=0;
  @Input()
  price:number=0;

  @Output()
  updateQtd = new EventEmitter<number>();

  constructor(public formatBrl:ValuesService, private cartService:CartService){}
  ngOnInit(): void {}

// Calcula o preço total baseado na quantidade
  get priceTotal() : number {
    return this.price * this.qtd;
  }

  // // Método chamado para alterar a quantidade
  // changeQtd(newQtd: number) {
  //   if (newQtd >= 0) {
  //     this.qtd = newQtd; // Atualiza a quantidade local
  //     this.updateQtd.emit(this.qtd); // Emite a nova quantidade para o componente pai
  //   }
  // }
  /** NAO DA CERTO POR QUE NAO FAZ AJUSTES NOS BOTOES */


  increaseQtd(){
    this.qtd++;
    this.cartService.incrementToCart(this.id);
  }

  decreaseQtd(){
    if (this.qtd===1){
      const confirmRm = window.confirm("Remover Item?");
      if (confirmRm === true){
        this.cartService.decrementToCart(this.id); // ATUALIZA NO SERVICE
        this.qtd = 0; // ATUALIZA NO COMPONENT
      } else /*return this.qtd = 1*/;
    } else {/*  SE QUANTIDADE FOR MAIOR QUE 1, REDUZA */
      this.qtd--; // ATUALIZA NO COMPONENT
      this.cartService.decrementToCart(this.id); // ATUALIZA NO SERVICE
    }
  }
}
