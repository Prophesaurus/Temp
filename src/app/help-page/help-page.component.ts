import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent implements OnInit {

  constructor(
    private router :  Router
  ) { }

  ngOnInit(): void {
  }
  backToMain(){
    this.router.navigate(['main']);
  }

}
