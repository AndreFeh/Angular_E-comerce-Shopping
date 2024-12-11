import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { produtosData } from '../../data/produtosData';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private cartService:CartService, private categoryService:CategoryService){}
  ngOnInit(): void {}

  // Esse comando traça todos os elementos dentro do BD que veio em formato JSON
  produtosData = produtosData[0].categorias.flatMap(
    (cat) => Object.values(cat)
  ).filter(
    (value)=>Array.isArray(value)
  ).flat();

  addToCart(product:any){
    this.cartService.addToCart({...product, qtd:1});
    alert(`${product.titulo} Adicionado ao Carrinho`)
  }
}
