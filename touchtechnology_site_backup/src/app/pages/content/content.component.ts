import { Component, OnInit } from '@angular/core';
import { produtosData } from '../../data/produtosData';
import { CartService } from '../../services/cart.service';
import { ValuesService } from '../../services/values.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  img!:string;
  currentPrice!:number;
  oldPrice:number=10;
  titulo!:string;
  descricao!:string;
  private id:number|null=0;

  category = produtosData[0].categorias;
  produtosData = produtosData[0].categorias.flatMap(
    (cat)=> Object.values(cat)
    ).filter(
      (value)=>Array.isArray(value)
      ).flat();


  constructor(
    private cartService: CartService,
    public formatBrl:ValuesService,
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((value)=>
      // /*ERROOOOO POR ID SER NUMERO NAO STRING */ this.id = value.get("id"));
      {
        this.id = value.get("id")? +value.get("id")! :null
        // +value.get("id")!: Converte o valor para number. O operador + é uma maneira curta de fazer a conversão.
        // ? e : null: Se o valor for null, a variável id também será atribuída como null.
      });

    this.setValuesToComponent(this.id);
  }


  addToCart() {
    const product = {
      id:this.id,
      img:this.img,
      titulo:this.titulo,
      descricao:this.descricao,
      valor:this.currentPrice,
      qtd:1,
    };
    this.cartService.addToCart({...product});
    alert(`${this.titulo} foi adicionado ao carrinho!`);
  }

  setValuesToComponent(id:number|null){
    const result = produtosData[0].categorias
    .flatMap(
      (categoria) => Object.values(categoria).flat())
    .find(
      (produto: {id:number}) => produto.id === id);

    if (result) {
      this.img = result.imagem;
      this.currentPrice = result.valor;
      this.oldPrice = result.eraValor || null;
      this.titulo = result.titulo;
      this.descricao = result.descricao;
    } else {
      console.error("Produto não encontrado!");
    }
  }

}
