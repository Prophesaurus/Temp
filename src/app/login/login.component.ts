import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  wrongLoginCounter : number;
  isDisabled = false; // Gibt an, ob der Button deaktiviert ist
  timer: any; 
  loginError : boolean = false;
  constructor(
    private router: Router
  ) {
    this.wrongLoginCounter = 0;
   }

  login() {
    if (this.username === 'Test' && this.password === 'test') {
      //alert('Erfolgreich angemeldet!');
      this.wrongLoginCounter = 0;
      this.router.navigate(['main']);
      sessionStorage.setItem("user", this.username);
    } else {
      //alert('Fehlerhafte Anmeldeinformationen. Bitte versuche es erneut.');
      this.loginError = true;
      this.wrongLoginCounter++;
      if(this.wrongLoginCounter>2){
        this.isDisabled = true; // Deaktiviere den Button
        this.resetButtonAfterDelay(180000);
      }
    }
  }
  resetButtonAfterDelay(delay: number) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.isDisabled = false; // Aktiviere den Button nach Ablauf des Timers
      this.wrongLoginCounter = 0; // Setze den Zähler zurück
    }, delay);
  }
}
