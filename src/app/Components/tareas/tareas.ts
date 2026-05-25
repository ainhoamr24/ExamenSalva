import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TareasService } from '../../Services/tareas-service';
import { Tarea } from '../../Models/tarea';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas implements OnInit {
  tareas: Tarea[] = [];
  tareasFiltradas: Tarea[] = [];
  filtroEstado: string = 'Todas';

  totalPendientes: number = 0;
  totalRealizadas: number = 0;

  constructor(
    private tareasService: TareasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  private cargarTareas(): void {
    this.tareasService.cargarTareas().subscribe((tareas) => {
      this.tareas = tareas;
      this.aplicarFiltroYTotales();
    });
  }

  private aplicarFiltroYTotales(): void {
    if (this.filtroEstado === 'Todas') {
      this.tareasFiltradas = [...this.tareas];
    } else {
      this.tareasFiltradas = this.tareas.filter(
        (t) => t.estado === this.filtroEstado
      );
    }

    this.totalPendientes = this.tareas.filter((t) => t.estado === 'Pendiente').length;
    this.totalRealizadas = this.tareas.filter((t) => t.estado === 'Realizada').length;
  }

  finalizar(id: string): void {
    this.router.navigate(['/fin', id]);
  }

  eliminar(id: string): void {
    this.tareasService.delete(id).subscribe(() => {
      this.tareas = this.tareas.filter((t) => t.id !== id);
      this.aplicarFiltroYTotales();
    });
  }
}
