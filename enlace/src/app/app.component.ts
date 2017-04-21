import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  nombre = 'www.google.com.ar';
  Mostrar = false;
  Dato = 0;
  path = "../assets/img/a.jpg";

//mostrar nombre por consola con funcion
 mostrarNombre(){ 
    console.info(this.nombre);
  }
  

  
   
}
