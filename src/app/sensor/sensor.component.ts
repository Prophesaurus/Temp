import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  sensorArray:number[]=[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.loadSensor(params['id'].toString())
    else
    console.log("Fehler");
    });
  }

  loadSensor(ID:String){
    switch (ID){
      case "1":
        this.sensorArray = [1,2,3,4,5,6,7,8,9,10];
        break;
      case "2":
        this.sensorArray = [11,12,13,14,15,16,17,18,19,20];
        break;
      case "3":
        this.sensorArray = [21,22,23,24,25,26,27,28,29,30];
        break;
      default:
        console.log("Fehlerhafte ID!");
        break;
    }
  }

  backToMain(){
    this.router.navigate(['main']);
  }
}
