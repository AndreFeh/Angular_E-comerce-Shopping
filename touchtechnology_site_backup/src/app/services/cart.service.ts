import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>(this.cart); // Estado observável do carrinho
  private totalSubject = new BehaviorSubject<number>(0);

  constructor(){}

  getCart(){
    return this.cartSubject.asObservable(); // Retorna o estado do carrinho como observable
  }

  getTotal(){
    return this.totalSubject.asObservable();
  }

  private updateCart(){
    this.cartSubject.next(this.cart); //Atualiza os valores observados do carrinho

    const total = this.cart.reduce(
      (sum, item) => sum+item.qtd + item.valor, 0
    );
    this.totalSubject.next(total); //Atualiza o total observado
  }

  addToCart(product:any){
    const existingProduct = this.cart.find(item=>item.id === product.id);
    if (existingProduct){
      existingProduct.qtd++;
    } else {
      this.cart.push({...product, qtd:1});
    }
    this.updateCart();//Atualiza o estado do carrinho
  }

  incrementToCart(productId:number){
    const product = this.cart.find(item=>item.id === productId);
    if (product){
      product.qtd++;
    }
    this.updateCart();
  }

  decrementToCart(productId:number){
    const product = this.cart.find(item=>item.id === productId);
    if(product){
      product.qtd--;
    } if (product.qtd<=0){
      this.cart = this.cart.filter((item)=>item.id !==productId);
    }
    this.updateCart(); // Atualiza o estado do carrinho
  }


}
