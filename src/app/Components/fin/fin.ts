import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TareasService } from '../../services/tareas-service';

@Component({
  selector: 'app-fin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fin.html',
  styleUrl: './fin.css'
})
export class Fin {

  tarea?: TareasService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tareasService: TareasService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.tarea = this.tareasService.get(id);
    });
  }

  cancelar(): void {
    this.router.navigate(['/tareas']);
  }

  finalizar(): void {
    if (this.tarea) {
      this.tarea = { this.tarea, estado: 'Realizada' };
      this.tareasService.put(this.tarea);
    }
    this.router.navigate(['/tareas']);
  }
}
