import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea } from '../../Models/tarea';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css'
})
export class TareaCard {
  @Input() tarea!: Tarea;

  get colorFondo(): string {
    return this.tarea.estado === 'Pendiente' ? '#EDE7A5' : '#E8BDE4';
  }
}
