import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TareasService } from '../../Services/tareas-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private tareasService = inject(TareasService);
  totalTareas$ = this.tareasService.totalTareas$;

  ngOnInit(): void {
    this.tareasService.cargarTareas().subscribe();
  }
}
