import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from '../../services/tareas-service';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css'
})
export class Tarea {

  tarea!: TareasService;
  activatedRoute = inject(ActivatedRoute)
  tareaService = inject(TareasService)

  /*get colorFondo(): string {
    return this.tarea.estado === 'Pendiente'
      ? '#EDE7A5'
      : '#E8BDE4';
  }*/
}
