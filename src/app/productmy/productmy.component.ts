import { Component, OnInit } from '@angular/core';
import { MyProductService } from '../service/myproduct.service';

@Component({
  selector: 'app-productmy',
  templateUrl: './productmy.component.html',
  styleUrls: ['./productmy.component.css']
})
export class ProductmyComponent implements OnInit {

  product = [];
  count: number= 0;

  constructor(public myProductService: MyProductService) { 
    this.product = myProductService.getProduct();
    this.count = myProductService.onCartCount_to();
    
  }

  ngOnInit(): void {
  }

  onSelect(cart){
    this.myProductService.arr_cart(cart);
    this.count++;
    this.myProductService.onCartCount(this.count)
    alert("Product Added");
  }

}
