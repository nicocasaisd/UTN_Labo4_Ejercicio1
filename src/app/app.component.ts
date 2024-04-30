import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  protected title : String = 'clase_1';
  protected edadUno : number = 0;
  protected edadDos : number = 0;

  protected sumaEdades : number = 0;
  protected promedioEdades : number = 0;

  //constructor(){};

  protected handlerCalcular(){
    this.sumaEdades = this.edadUno + this.edadDos;
    this.promedioEdades = (this.edadUno +this.edadDos) / 2;
    console.log('Suma: ' + this.sumaEdades);
    console.log('Edad 1: ' + this.edadUno);
    console.log('Edad 2: ' + this.edadDos);
  }
  protected handleLimpiar() {
    this.sumaEdades = 0;
    this.promedioEdades = 0;
    }

  ngOnInit(): void {
    console.log('Check');
  }
}

export class User{
  protected name : String;
  protected pass : String;

  constructor(name : String, pass : String){
    this.name = name;
    this.pass = pass;
  };

}
