import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-album-detail',
  template: `
    <div *ngIf="album">
      <h2>Album #{{ album.id }}</h2>
      <input [(ngModel)]="editedTitle" placeholder="Album title">
      <button (click)="saveChanges()">Save</button>
      <button (click)="goBack()">Return</button>
      <a [routerLink]="['photos']">Photos</a>
    </div>
  `
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AlbumsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAlbum(id).subscribe(album => {
      this.album = album;
      this.editedTitle = album.title;
    });
  }

  saveChanges() {
    this.service.updateAlbum(this.album.id, this.editedTitle).subscribe({
      next: () => {
        this.service.getAlbums().subscribe();
        this.album.title = this.editedTitle;
      },
      error: (err) => console.error('Save failed:', err)
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}