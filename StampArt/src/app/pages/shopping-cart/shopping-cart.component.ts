import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { produtosData } from '../../data/produtosData';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  products: any[] = [];
  totalPrice: number = 0;
  totalQtd: number = 0;

  constructor(private service: CartService) {}

  ngOnInit(): void {
    this.service.getCart().subscribe((cart:any[])=> {
      this.products = cart;
      this.calculateTotal();
    })
  }

  calculateTotal() {
    this.totalPrice = this.products.reduce(
      (acc, item) => acc + item.valor * item.qtd, 0
    );
    this.totalQtd = this.products.reduce((acc, item) => acc + item.qtd, 0);
  }

  updateQtd(productId: number, newQtd: number) {
    const product = this.products.find((item) => item.id === productId);
    if (product) {
      product.qtd = newQtd;

      // Remove item se a quantidade for 0
      if (newQtd < 1) {
        this.products= this.products.filter((item) => item.id !== productId);
      }
    }
    this.calculateTotal();
  }

  // removeFromCart(productId: number) {
  //   this.service.removeFromCart(productId);
  //   this.updateCartData(); // Atualize os dados do carrinho
  // }
}
