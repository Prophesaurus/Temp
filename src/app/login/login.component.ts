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
  
  constructor(
    private router: Router
  ) { }

  login() {
    // Hier kannst du deine Login-Logik implementieren
    if (this.username === 'Test' && this.password === 'test') {
      //alert('Erfolgreich angemeldet!');
      this.router.navigate(['main']);
      sessionStorage.setItem("user", this.username);
    } else {
      alert('Fehlerhafte Anmeldeinformationen. Bitte versuche es erneut.');
    }
  }
}
