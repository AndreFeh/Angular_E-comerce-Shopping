import { Injectable } from '@angular/core';
import { produtosData } from '../data/produtosData';

type Categoria = {
  id: number;
  [key: string]: { id: number; imagem: string; titulo: string; descricao: string; valor: number; }[] | number | undefined;
};

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor() { }


  // Método para buscar produtos por categoria
  getProductsByCategory(categoria: string): { id: number; imagem: string; titulo: string; descricao: string; valor: number; }[] {
    const categories: Categoria[] = produtosData[0].categorias;

    const categoryFinded = categories.find(cat => cat[categoria]);

    // Garante que sempre retorna um array
    return categoryFinded && Array.isArray(categoryFinded[categoria])
      ? categoryFinded[categoria] as { id: number; imagem: string; titulo: string; descricao: string; valor: number; }[]
      : [];
    }

  // Método para obter todos os produtos

  getAllProduct(){
    return produtosData.flatMap(
      (cat:any)=>Object.values(cat).flat()
    );
  }
}
