import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Tarea } from '../Models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private readonly url: string = 'http://localhost:3000/tareas';
  private readonly httpClient = inject(HttpClient);

  private tareasCache: Tarea[] = [];

  private _totalTareas = new BehaviorSubject<number>(0);
  totalTareas$ = this._totalTareas.asObservable();

  private password = '1234';

  getPassword(): string {
    return this.password;
  }

  cargarTareas(): Observable<Tarea[]> {
    return this.httpClient.get<Tarea[]>(this.url).pipe(
      tap((tareas) => {
        this.tareasCache = tareas;
        this._totalTareas.next(tareas.length);
      })
    );
  }

  getAll(): Tarea[] {
    return [...this.tareasCache];
  }

  get(id: string): Observable<Tarea> {
    return this.httpClient.get<Tarea>(`${this.url}/${id}`);
  }

  put(tarea: Tarea): Observable<Tarea> {
    return this.httpClient.put<Tarea>(`${this.url}/${tarea.id}`, tarea).pipe(
      tap((actualizada) => {
        this.tareasCache = this.tareasCache.map((t) =>
          t.id === actualizada.id ? actualizada : t
        );
        this._totalTareas.next(this.tareasCache.length);
      })
    );
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`).pipe(
      tap(() => {
        this.tareasCache = this.tareasCache.filter((t) => t.id !== id);
        this._totalTareas.next(this.tareasCache.length);
      })
    );
  }
}
