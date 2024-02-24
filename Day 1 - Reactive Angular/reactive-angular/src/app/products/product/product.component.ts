import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  @Input()
  product: any;
  ngOnInit(): void {
    console.log("[PRODUCT]\n",this.product)
  }
}
