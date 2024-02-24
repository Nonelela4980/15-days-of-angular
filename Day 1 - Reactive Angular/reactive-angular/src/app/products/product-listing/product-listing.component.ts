import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../services/product.service';
import { Observable, catchError, map, startWith,of } from 'rxjs';
import { Product } from '../../models/Product';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { LoadData } from '../../models/LoadData';
import { DataState } from '../../models/DataState';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [ProductComponent,AsyncPipe,JsonPipe],
  providers:[],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent implements OnInit  {
  products$:Observable<LoadData> =new Observable<LoadData>();
  LOADING_STATE:DataState = DataState.LOADING
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.products$ = this.productService.GetProducts().pipe(
      startWith({state:DataState.LOADING,data:[]}),
      map(data=>({state:DataState.LOADED,data})),
      catchError(err=>{
        return of({state:DataState.FAILED,data:[]})
      })
    );
  }
}
