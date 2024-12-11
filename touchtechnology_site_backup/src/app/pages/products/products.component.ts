import { Component, OnInit } from '@angular/core';
import { produtosData } from '../../data/produtosData';
import { CartService } from '../../services/cart.service';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  category = produtosData[0].categorias;
  produtosData = produtosData[0].categorias.flatMap(
    (cat)=> Object.values(cat)
    ).filter(
      (value)=>Array.isArray(value)
      ).flat();

  ngOnInit(): void {}

  constructor(
    private cartService: CartService,
    public formatBrl:ValuesService
  ){}

  addToCart(product:any){
    this.cartService.addToCart({...product, qtd:1});
    alert(`${product.titulo} foi adicionado ao carrinho!`);
  }


}
