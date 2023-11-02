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
  random : number = 0;
  tempMax : number = 0;
  Serverschrank : String = "";
  Adresse : String = "";
  Hersteller : String = "";
  avg : number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.loadSensor(params['id'].toString())

      }
      else
      console.log("Fehler");
    });
  }

  loadSensor(ID:String){
    switch (ID){
      case "1":
        this.random = 10;
        this.tempMax = 15;
        this.Serverschrank = ID
        this.Adresse = "Teststraße"+ID;
        this.Hersteller = "Mustermann";
        break;
      case "2":
        this.random = 20;
        this.tempMax = 25;
        this.Serverschrank = ID;
        this.Adresse = "Teststraße"+ID;
        this.Hersteller = "Herbert Hersteller";
        break;
      case "3":
        this.random = 30;
        this.tempMax = 35;
        this.Serverschrank = ID;
        this.Adresse = "Teststraße "+ID;
        this.Hersteller = "Stefan Müller";
        break;
      default:
        console.log("Fehlerhafte ID!");
        break;
    }
    this.fillSensor();
    
  }

  fillSensor(){
    this.avg = 0;
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.round((this.random + Math.random() * 10 * 2 - 10)*100)/100;
      this.sensorArray.push(randomNumber);
      this.avg +=randomNumber;
    }
    this.avg = Math.round(this.avg / 10 * 100)/100;
  }

  backToMain(){
    this.router.navigate(['main']);
  }

  changeMaxTemp(){
    this.tempMax = parseInt((document.getElementById("textInput") as HTMLInputElement).value);
    console.log(this.tempMax)
    console.log(sessionStorage.getItem('username'));
  }

  logOut(){
    this.router.navigate(['login']);
  }
}
