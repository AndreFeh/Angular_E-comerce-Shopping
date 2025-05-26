import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-resulted',
  templateUrl: './resulted.component.html',
  styleUrls: ['./resulted.component.css']
})
export class ResultedComponent implements OnInit {
  @Input() cartItems: any[] = [];
  @Input() totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

  sendWhatsApp() {
    window.open(this.cartService.getWhatsAppLink(), "_blank");
  }

  sendEmail() {
    window.open(this.cartService.getEmailLink(), "_blank");
  }
}
