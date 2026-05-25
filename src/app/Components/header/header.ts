import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TareasService } from '../../Services/tareas-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private tareasService = inject(TareasService);
  totalTareas!:number;

  ngOnInit(): void {
    this.tareasService.cargarTareas().subscribe();
    this.tareasService.totalTareas$.subscribe(total => {
      this.totalTareas = total;
    });
  }
}
