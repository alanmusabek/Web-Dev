import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-albums',
  template: `
    <h2>Albums</h2>
    <div *ngFor="let album of albums" class="album">
      <a [routerLink]="['/albums', album.id]">{{ album.title }}</a>
      <button (click)="deleteAlbum(album.id)">Delete</button>
    </div>
  `,
  styles: [`.album { margin: 10px; padding: 10px; border: 1px solid #ccc; }`]
})
export class AlbumsComponent implements OnInit {

  albums: any[] = [];

  constructor(
    private service: AlbumsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAlbums();
    this.router.navigate(['/albums']);
  }

  loadAlbums() {
    this.service.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  deleteAlbum(id: number) {
    this.service.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
