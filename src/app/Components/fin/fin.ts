import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TareasService } from '../../Services/tareas-service';
import { Tarea } from '../../Models/tarea';

@Component({
  selector: 'app-fin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fin.html',
  styleUrl: './fin.css'
})
export class Fin implements OnInit {
  tarea?: Tarea;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tareasService: TareasService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.tareasService.get(id).subscribe((tarea) => (this.tarea = tarea));
    });
  }

  cancelar(): void {
    this.router.navigate(['/tareas']);
  }

  finalizar(): void {
    if (this.tarea) {
      const tareaActualizada: Tarea = { ...this.tarea, estado: 'Realizada' };
      this.tareasService.put(tareaActualizada).subscribe(() => {
        this.router.navigate(['/tareas']);
      });
    }
  }
}
