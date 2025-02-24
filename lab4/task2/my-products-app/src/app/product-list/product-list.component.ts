// product-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from "../module/product.model";
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="product-list">
      <app-product-item 
        *ngFor="let product of products" 
        [product]="product"
        (like)="onLike($event)"
        (remove)="onRemove($event)"
      ></app-product-item>
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() like = new EventEmitter<Product>();
  @Output() remove = new EventEmitter<Product>();

  onLike(product: Product): void {
    this.like.emit(product);
  }

  onRemove(product: Product): void {
    this.remove.emit(product);
  }
}