// product-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../module/product.model";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-item">
      <img [src]="product.image" [alt]="product.name">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Rating: {{ product.rating }} / 5</p>
      <p>Likes: {{ product.likes }}</p>
      <a [href]="product.link" target="_blank">View on Kaspi.kz</a>
      <div class="actions">
        <button (click)="onLike()">Like</button>
        <button (click)="onRemove()">Remove</button>
        <button (click)="shareOnWhatsapp()">Share via WhatsApp</button>
        <button (click)="shareOnTelegram()">Share via Telegram</button>
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
    this.like.emit(this.product);
  }

  onRemove(): void {
    this.remove.emit(this.product);
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