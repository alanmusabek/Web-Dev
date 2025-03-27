import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class AlbumsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  public storageKey = 'albumEdits';
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/albums`).pipe(
      mergeMap(apiAlbums => {
        const edits = this.getEdits();
        return of(apiAlbums.map(album => ({
          ...album,
          title: edits[album.id] || album.title
        })));
      })
    );
  }
  
  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/albums/${id}`).pipe(
      map(album => {
        const edits = this.getEdits();
        return { 
          ...album,
          title: edits[id] || album.title 
        };
      })
    );
  }
  
  updateAlbum(id: number, newTitle: string): Observable<any> {
    this.saveEdit(id, newTitle);
    return this.http.put<any>(`${this.baseUrl}/albums/${id}`, {
      title: newTitle
    }).pipe(
      tap(() => {
        const edits = this.getEdits();
        edits[id] = newTitle;
        localStorage.setItem(this.storageKey, JSON.stringify(edits));
      })
    );
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        const edits = this.getEdits();
        if (edits[id]) {
          delete edits[id];
          localStorage.setItem(this.storageKey, JSON.stringify(edits));
        }
      })
    );
  }

  getPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/albums/${albumId}/photos`);
  }

  public getEdits(): { [key: number]: string } {
    return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  }

  private saveEdit(id: number, title: string): void {
    const edits = this.getEdits();
    edits[id] = title;
    localStorage.setItem(this.storageKey, JSON.stringify(edits));
  }
}