import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { produtosData } from '../../../data/produtosData';
import { CategoryService } from '../../../services/category.service';

type Categoria = {
  id: number;
  [key: string]: any; // Permite qualquer chave string
};


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})


export class CategoriesComponent implements OnInit {
  produtos: any[] | null = [];
  categories: string[] = []; // Nomes das categorias (e.g., 'canecas', 'camisetas')
  selectedProducts: any[] = []; // Produtos filtrados por categoria
  selectedCategory: string = ''; // Categoria selecionada


  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    const allCategories=produtosData[0].categorias;
// Criar uma lista única de categorias
    this.categories = Array.from(
      new Set(
        allCategories.flatMap(
        (cat)=>Object.keys(cat).filter((key) => key !== 'id')
      ))
    );
  }

  // filterByCategory(category: string):void {

  //   const allCategories = produtosData[0].categorias;
  //   this.selectedCategory = category;

  //   this.selectedProducts = this.categoryService.getProductsByCategory(category);
  //   // Filtrar produtos dentro da categoria selecionada
  //   // this.selectedProducts = allCategories
  //   //   .flatMap(cat => cat[category] || [])
  //   //   .filter(product => product);
  // }
  filterByCategory(category: string): void {
    const allCategories = produtosData[0].categorias;
    this.selectedCategory = category;

    // Aqui garantimos que estamos acessando a categoria corretamente
    this.selectedProducts = allCategories
      .flatMap((cat) => {
        // Garantir que 'category' é uma chave válida dentro de 'cat'
        const categoryProducts = cat[category as keyof typeof cat];
        return Array.isArray(categoryProducts) ? categoryProducts : [];
      })
      .filter((product) => product);  // Filtra elementos vazios ou nulos
  }
}
