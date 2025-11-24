import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TareasService } from '../../services/tareas-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  tareasService = inject(TareasService);
  
  totalTareas!: number;
}