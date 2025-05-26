import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>(this.cart);
  private totalSubject = new BehaviorSubject<number>(0);

  constructor() {}

  getCart() {
    return this.cartSubject.asObservable();
  }

  getTotal() {
    return this.totalSubject.asObservable();
  }

  private updateCart() {
    this.cartSubject.next(this.cart);

    const total = this.cart.reduce((sum, item) => sum + item.qtd * item.valor, 0);
    this.totalSubject.next(total);
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.qtd++;
    } else {
      this.cart.push({ ...product, qtd: 1 });
    }
    this.updateCart();
  }

  incrementToCart(productId: number) {
    const product = this.cart.find(item => item.id === productId);
    if (product) {
      product.qtd++;
    }
    this.updateCart();
  }

  decrementToCart(productId: number) {
    const product = this.cart.find(item => item.id === productId);
    if (product) {
      product.qtd--;
      if (product.qtd <= 0) {
        this.cart = this.cart.filter(item => item.id !== productId);
      }
    }
    this.updateCart();
  }

  // Gerar a mensagem formatada da lista de compras
  private generateMessage(): string {
    if (this.cart.length === 0) return "Seu carrinho está vazio.";

    let message = "🛒 *Me Interessei Nesses Produtos*\n\n";
    this.cart.forEach(item => {
      message += `Produto: *${item.titulo}*\n`;
      message += `Quantidade: ${item.qtd}x\n`;
      message += `Preço unitário: R$ ${item.valor.toFixed(2)}\n`;
      message += `🔗 [Ver Produto](http://localhost:4200/content/${item.id})\n\n`;
    });

    const total = this.totalSubject.getValue();
    message += `Esse é a Cotação Atualizada...`;
    message += `💰 *Total: R$ ${total.toFixed(2)}*`;

    return encodeURIComponent(message);
  }

  // Criar link para WhatsApp
  getWhatsAppLink(): string {
    const phone = "5541995394149"; // Substitua pelo número do fornecedor
    return `https://api.whatsapp.com/send?phone=${phone}&text=${this.generateMessage()}`;
  }

  // Criar link para Email
  getEmailLink(): string {
    const email = "andrefelipe.silk@gmail.com"; // Substitua pelo email do fornecedor
    const subject = "Pedido de Compra";
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${this.generateMessage()}`;
  }
}
