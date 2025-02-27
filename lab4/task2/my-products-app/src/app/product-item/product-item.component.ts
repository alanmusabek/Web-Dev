// product-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../module/product.model";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
  <!-- product-item.component.html -->
  <div class="product-item">
    <img [src]="product.image" [alt]="product.name">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    
    <div class="rating">
      <i class="fas fa-star"></i>
      {{ product.rating }} / 5
    </div>
    
    <div class="likes">
      <i class="fas fa-heart"></i>
      {{ product.likes }} Likes
    </div>

    <a [href]="product.link" target="_blank">
      <i class="fas fa-external-link-alt"></i>
      View on Kaspi.kz
    </a>

    <div class="actions">
      <button (click)="onLike()">
        <i class="fas fa-thumbs-up"></i>
        Like
      </button>
      <button (click)="onRemove()">
        <i class="fas fa-trash"></i>
        Remove
      </button>
      <button (click)="shareOnWhatsapp()">
        <i class="fab fa-whatsapp"></i>
      </button>
      <button (click)="shareOnTelegram()">
        <i class="fab fa-telegram"></i>
      </button>
    </div>
  </div>
  `,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<Product>();
  @Output() remove = new EventEmitter<Product>();

  onLike(): void {
    this.saveName();
    this.like.emit(this.product);
  }

  onRemove(): void {
    this.remove.emit(this.product);
  }

  saveName() {

    let likes = String(this.product.likes);
    window.localStorage.setItem("likes", likes);
    
    this.product.likes = Number(likes);
  }

  shareOnWhatsapp(): void {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }
}