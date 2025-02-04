import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBoardComponent } from './menu-board/menu-board.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SchematicComponent } from './schematic/schematic.component';
import { ChartsComponent } from './charts/charts.component';
import { ButtonsComponent } from './buttons/buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBoardComponent, NavigationComponent, SchematicComponent, ChartsComponent,ButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'y';
}
