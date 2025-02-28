import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to /home
  { path: 'home', component: HomeComponent }, // Static home page
  { path: 'about', component: AboutComponent }, // Static about page
  { path: 'albums', component: AlbumsComponent }, // List of albums
  { path: 'albums/:id', component: AlbumDetailComponent }, // Album details and edit
  { path: 'albums/:id/photos', component: AlbumPhotosComponent }, // Album photos
];