import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public GetProducts():Observable<Product[]>{
    return this.http.get<any>("https://dummyjson.com/products").pipe(
      delay(5000),
      map(data=>{
        console.log("[PRODUCTS\n",data)
        return data.products as Product[];
      })
    )
  }
}
