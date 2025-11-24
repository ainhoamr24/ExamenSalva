import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TareasService } from '../../services/tareas-service';
import { Tarea } from '../tarea/tarea';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, RouterLink, Tarea],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class PanelComponent {

  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.tareasService.getAll().subscribe(tareas => {
      //this.tareasSe = tareas;
    });
  }
}

