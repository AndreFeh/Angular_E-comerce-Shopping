import { Component, Input, OnInit } from '@angular/core';
import { ValuesService } from '../../../services/values.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-resulted',
  templateUrl: './resulted.component.html',
  styleUrl: './resulted.component.css'
})

export class ResultedComponent implements OnInit{
  @Input() price:number= 0;
  @Input() qtd:number=0;
  @Input() desc:number=0;



  constructor(
    public formatBrl:ValuesService,
    private cartService: CartService
  ){}


  ngOnInit(): void {
// /**ERROOO, CORRIGINDO ERRO POIS REDUCE SO FUNCIONA DENTRO DE ARRAYS, PARA TRANSFORMAR ISSO EM ARRAY, UTILIZAR SUBSCRIBE */
//     const cart = this.cartService.getCart();
//     this.price= cart.reduce((sum, item)=> sum + item.valor*item.qtd, 0);
//     this.qtd = cart.reduce((sum: any, item: { qtd: any; })=> sum + item.qtd, 0);

    this.cartService.getCart().subscribe((cart:{valor:number; qtd:number}[])=>{
      this.price= cart.reduce((sum:number, item)=> sum + item.valor*item.qtd, 0);
      this.qtd = cart.reduce((sum, item )=> sum + item.qtd, 0);
    });

    this.cartService.getTotal().subscribe(total => {
      this.desc = total * 0.1; // Exemplo de desconto baseado no total
    });
  }
  public get total(){
    return this.price-this.desc;
 }

}
