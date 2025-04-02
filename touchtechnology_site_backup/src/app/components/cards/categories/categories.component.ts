import { Component, OnInit } from '@angular/core';
import { produtosData } from '../../../data/produtosData';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  produtos: any[] | null = [];
  categories: string[] = []; // Lista de categorias (e.g., 'canecas', 'camisetas')
  selectedProducts: any[] = []; // Produtos filtrados
  activeCategoryIndex: number | null = null; // Índice da categoria ativa

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    const allCategories = produtosData[0].categorias;

    // Criar uma lista única de categorias
    this.categories = Array.from(
      new Set(
        allCategories.flatMap((cat) => Object.keys(cat).filter((key) => key !== 'id'))
      )
    );

    // Se houver categorias, selecione a primeira por padrão
    if (this.categories.length > 0) {
      this.activeCategoryIndex = 0; // Inicia com a primeira categoria
      this.filterByCategory(this.activeCategoryIndex); // Filtra os produtos da primeira categoria
    }
  }

  // Método para filtrar os produtos com base na categoria selecionada
  filterByCategory(index: number): void {
    const allCategories = produtosData[0].categorias;

    // Verifica se a categoria já está ativa. Se sim, desmarque.
    if (this.activeCategoryIndex === index) {
      this.activeCategoryIndex = null; // Desativa a categoria
      this.selectedProducts = []; // Limpa os produtos
    } else {
      this.activeCategoryIndex = index; // Marca a categoria como ativa
      const category = this.categories[index]; // Pega a categoria pelo índice

      // Filtra os produtos dessa categoria
      this.selectedProducts = allCategories
        .flatMap((cat) => {
          const categoryProducts = cat[category as keyof typeof cat];
          return Array.isArray(categoryProducts) ? categoryProducts : [];
        })
        .filter((product) => product);
    }
  }
}
