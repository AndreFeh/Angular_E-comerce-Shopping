import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { produtosData } from '../../data/produtosData';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit{
  // qtd:number=10;
  // price:number=20;
  // desc:number=5;


  cart:any[]=[];
  totalPrice:number=0;
  totalQtd:number=0;
  discount:number=0;


  constructor(private service:CartService){}
  ngOnInit(): void {
    this.updateCartData()
  }
  updateCartData() {
    this.cart = this.service.getCart();
    this.calculateTotal()
  }

  // updatePrice(newPrice:number){
  //   this.price = newPrice
  // }

  // updateQtd(productId: number, newQtd: number) {
  //   const product = this.cart.find((item) => item.id === productId);
  //   if (product) {
  //     product.qtd = newQtd;

  //     // Remove item se quantidade for 0
  //     if (newQtd < 1) {
  //         this.cart = this.cart.filter((item) => item.id !== productId);
  //     }
  //   }
  //   this.calculateTotal();
  // }

  // getTotalQtd(): number {
  //   return this.cart.reduce((acc, item) => acc + item.qtd, 0);
  // }

  calculateTotal() {
    this.totalPrice = this.cart.reduce(
      (acc,item)=> acc+item.valor*item.qtd, 0
    );
    this.totalQtd = this.cart.reduce(
      (acc, item)=> acc + item.qtd, 0
    );
  }

  addToCart(product:any){
    this.service.addToCart({...product, qtd:1});
    this.updateCartData();// Atualize os dados do carrinho

  }
  // removeFromCart(productId: number) {
  //   this.service.removeFromCart(productId);
  //   this.updateCartData(); // Atualize os dados do carrinho
  // }


}
