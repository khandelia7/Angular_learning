import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

@Injectable()
export class MyProductService {
    private products: Product[];
    arr = []
    count: number = 0;

    constructor() {
        //products 
        this.products = [
            { id: '1', name: 'Iphone', price: 1000},
            { id: '2', name: 'Mac', price: 10000},
            { id: '3', name: 'Watch', price: 3000},
            { id: '4', name: 'iPad', price: 5000},
            { id: '5', name: 'TV', price: 1500},
            { id: '6', name: 'Music', price: 100}
        ];
    }

    public getProduct() {
        return [...this.products];
    }

    public arr_cart(id){
        this.arr.push(id);
    }

    public arr_cart_to(){
        return this.arr;
    }

    public onCartCount(num){
        this.count=num;
    }

    public onCartCount_to(){
        return this.count;
    }
}