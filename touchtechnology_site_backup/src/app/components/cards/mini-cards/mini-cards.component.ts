import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ValuesService } from '../../../services/values.service';

@Component({
  selector: 'app-mini-cards',
  templateUrl: './mini-cards.component.html',
  styleUrl: './mini-cards.component.css'
})
export class MiniCardsComponent implements OnInit{
  @Input()
  id:number=0;
  @Input()
  img!:string;
  @Input()
  titulo!:string;
  @Input()
  descricao!:string;
  @Input()
  currentPrice!:number;
  @Input()
  oldPrice!:number;
  qtd:number=1;
  options:string[]  = [ "Ver Produto", "Adicionar ao Carrinho"];

  constructor(private cartService: CartService, public formatBrl:ValuesService){}
  ngOnInit(): void {}

  handleOption(option: string) {
    if(option === "Adicionar ao Carrinho"){
      this.addToCart();
    }
  }

  private addToCart() {
    const product = {
      id:this.id,
      img:this.img,
      titulo:this.titulo,
      descricao:this.descricao,
      valor:this.currentPrice,
      qtd:this.qtd,
    };
    this.cartService.addToCart({...product});
    alert(`${this.titulo} foi adicionado ao carrinho!`);
    return
  }
}
