import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  url: string = "http://localhost:3000/tareas"
  httpClient = inject(HttpClient)

  _totalTareas = new BehaviorSubject<number>(0);
  totalTareas$ = this._totalTareas.asObservable();

  private password = "1234";

  constructor() {}

  getPassword(): string {
    return this.password;
  }
  getAll(): Observable<Tarea[]> {
    return this.httpClient.get<Tarea[]>(this.url);
  }
  get(id: string): Observable<Tarea[]>  {
    return this.httpClient.get<Tarea[]>(this.url + "/" + id);
  }
  put(tarea: Tarea): Observable<Tarea> {
    return this.httpClient.put<Tarea>(this.url + "/" + tarea.id, tarea);
  }
  delete(id: string) {
    return this.httpClient.delete(this.url + "/" + id);
  }
  calculaTotalTareas() {}

}
  
