import { Component, OnInit } from '@angular/core';
import { MyProductService } from '../service/myproduct.service';

@Component({
  selector: 'app-cartmy',
  templateUrl: './cartmy.component.html',
  styleUrls: ['./cartmy.component.css']
})
export class CartmyComponent implements OnInit {
  cart = []
  total: number = 0;
  c;


  constructor(public myProductService: MyProductService) { 
    this.cart = myProductService.arr_cart_to();
    this.total_sum();
    this.c = this.myProductService.onCartCount_to()
  }

  total_sum(){
    for (var i = 0; i < this.cart.length; i++) {
      let item = this.cart[i];
      this.total += item.price;
    }
  }

  remove(id: string): void {
    for (var i = 0; i < this.cart.length; i++) {
      let item = this.cart[i];
      if (item.id == id) {
        this.cart.splice(i, 1);
        this.total -= item.price;
        this.c--;
				break;
			}
    }
    this.myProductService.onCartCount(this.c);
  }

  ngOnInit(): void {
  }

}
