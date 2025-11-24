import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TareasService } from '../../services/tareas-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {

  tareas: Tareas[] = [];
  tareasFiltradas: Tareas[] = [];
  filtroEstado: string = 'Todas';

  totalPendientes: number = 0;
  totalRealizadas: number = 0;

  constructor(
    private tareasService: TareasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tareasService.cargarTareas().subscribe(() => {
      this.tareas = this.tareasService.getAll();
      this.aplicarFiltroYTotales();
    });
  }

  private aplicarFiltroYTotales(): void {
    if (this.filtroEstado === 'Todas') {
      this.tareasFiltradas = [...this.tareas];
    } else {
      this.tareasFiltradas = this.tareas.filter(
        t => t.estado === this.filtroEstado
      );
    }

    this.totalPendientes = this.tareas.filter(t => t.estado === 'Pendiente').length;
    this.totalRealizadas = this.tareas.filter(t => t.estado === 'Realizada').length;
  }

  onCambioFiltro(valor: string): void {
    this.filtroEstado = valor;
    this.aplicarFiltroYTotales();
  }

  finalizar(id: string): void {
    this.router.navigate(['/fin', id]);
  }

  eliminar(id: string): void {
    this.tareasService.delete(id);
    this.tareas = this.tareasService.getAll();
    this.aplicarFiltroYTotales();
  }
}

