import { Component, Input, OnInit } from '@angular/core';
import { ValuesService } from '../../../services/values.service';

@Component({
  selector: 'app-resulted',
  templateUrl: './resulted.component.html',
  styleUrl: './resulted.component.css'
})

export class ResultedComponent implements OnInit{
  @Input()
  price:number= 0;
  @Input()
  qtd:number=0;
  @Input()
  desc:number=0;


  public get total(){
    return (this.price * this.qtd)-this.desc;
  }

  constructor(
    public formatBrl:ValuesService
  ){}


  ngOnInit(): void {

  }
}
