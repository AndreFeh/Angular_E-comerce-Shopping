import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  constructor() { }

  addToCart(product:any){
    const existingProduct = this.cart.find(
      (item)=> item.id === product.id);
    if(existingProduct){
      existingProduct.qtd += product.qtd;
    } else {
      this.cart.push({...product});
    }
  }

  getCart(){
    return this.cart;
  }

  updateQtd(ProductId : number, qtd:number){
    const product = this.cart.find(
      (item)=> item.id === ProductId);
    if(product){
      product.qtd = qtd;
    }
  }

  clearCart(){
    this.cart = [];
  }

}
