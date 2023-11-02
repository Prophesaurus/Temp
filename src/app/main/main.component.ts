import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //sensorArray : [] = [];
  constructor(
    
    private router: Router
  ) { }
  
  sensor1:(number)[] = [1,2,3,4,5,6,7,8,9,10];
  sensor2:(number)[] = [11,12,13,14,15,16,17,18,19,20];
  sensor3:(number)[] = [21,22,23,24,25,26,27,28,29,30];
  sensorArray: number[] = [...this.sensor1, ...this.sensor2, ...this.sensor3];
   
  array1: number[] = [1, 2, 3];
 array2: number[] = [4, 5, 6];
 combinedArray: number[] = [...this.array1, ...this.array2];
//console.log(combinedArray); // Gibt [1, 2, 3, 4, 5, 6] aus


  ngOnInit(): void {
  }

  logOut(){
    this.router.navigate(['login']);
  }
  navigateToSensorPage(ID : number){
    this.router.navigate([`sensor/${ID+1}`]);
    console.log(ID);
  }
}
