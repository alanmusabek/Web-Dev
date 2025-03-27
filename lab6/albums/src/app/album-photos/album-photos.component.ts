import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-album-photos',
  template: `
    <h2>Photos</h2>
    <div class="photos-grid">
      <img *ngFor="let photo of photos$ | async" [src]="photo.thumbnailUrl" [alt]="photo.title">
    </div>
    <button (click)="goBack()">Return</button>
  `,
  styles: [`
    .photos-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    img { width: 100%; height: auto; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos$: any;

  constructor(
    private route: ActivatedRoute,
    private service: AlbumsService,
    private router: Router
  ) {}

  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.photos$ = this.service.getPhotos(albumId);
  }

  goBack() {
    this.router.navigate(['/albums', this.route.snapshot.paramMap.get('id')]);
  }
}