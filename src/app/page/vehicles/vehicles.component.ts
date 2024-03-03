import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent implements OnInit{

  private http;
  public vehicleList: any = {};
  public selectedVehicle : any;
  constructor(private httpClient:HttpClient){
    this.http=httpClient;
   }

   ngOnInit(): void {
       this.loadVehicles();
   }

   loadVehicles(){
    this.http.get('http://localhost:5222/api/Vehicles/').subscribe((data)=>{
      this.vehicleList = data;
      console.log(this.vehicleList);
    })
   }

   setSelectedVehicle(vehicle :any){
    this.selectedVehicle = vehicle;
   }

   deleteVehicle(){
    let api = "http://localhost:5222/api/Vehicles/"+this.selectedVehicle.id;
    this.http.delete(api).subscribe(() => {
      this.loadVehicles();
      Swal.fire({
        title: "Deleted!",
        text: `${this.selectedVehicle.model} Vehicle is deleted`,
        icon: "success"
      });   
    });
   }

  

}
