import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { VehiclesComponent } from './page/vehicles/vehicles.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent, VehiclesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vehicleManage';
}
