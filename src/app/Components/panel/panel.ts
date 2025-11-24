import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TareasService } from '../../Services/tareas-service';
import { Tarea } from '../../Models/tarea';
import { TareaCard } from '../tarea/tarea';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, TareaCard],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class Panel implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService, private router: Router) {}

  ngOnInit(): void {
    this.tareasService.cargarTareas().subscribe((tareas) => {
      this.tareas = tareas;
    });
  }

  volverTareas(): void {
    this.router.navigate(['/tareas']);
  }
}
