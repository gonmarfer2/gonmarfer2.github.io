import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  projects = [
    {pictureUrl:'../../assets/pictures/reinicias00.png',
    title:'Fundación Reinicias (2023)',
    description:`Mi Trabajo de Fin de Grado lo hice
    en colaboración con la Fundación Reinicias de Granada.
    Se trata de una aplicación web que se subdivide en
    tres secciones: una para gestionar al equipo técnico,
    otra para los pacientes, y una última para ofrecer
    cursos en línea. La aplicación se programó con el
    framework Django (Python).`},
    {pictureUrl:'../../assets/pictures/cfb00.png',
    title:'CFB API (Continuous Feedback) (2023)',
    description:`Un proyecto para la asignatura
    Evolución y Gestión de la Configuración de la
    Universidad. Esta API hecha con el framework Django (Python)
    ofrece una manera sencilla
    de enlazar un repositorio de GitHub con un servidor
    de Discord.`},
    {pictureUrl:'../../assets/pictures/acmewedding00.png',
    title:'ACME Wedding (2023)',
    description:`Este comercio online (ficticio) fue uno
    de los últimos proyectos en grupo que realicé en la
    Universidad. Un equipo de cinco personas desarrollamos
    esta web para una tienda de accesorios de boda. Para ello,
    hicimos uso del framework Django (Python)`},
    {pictureUrl:'../../assets/pictures/petris00.png',
    title:'Petris (2022)',
    description:`Petris es uno de los primeros proyectos
    en grupo que he realizado, en el que un grupo de
    6 personas convertimos un juego de mesa en un juego
    en línea. Este proyecto se hizo en el framework Spring Boot (Java).`},
    {pictureUrl:'../../assets/pictures/panaLeria00.png',
    title:'panaLeria (2021)',
    description:`Mi primer proyecto de la carrera 
    fue una red social llamada panaLeria. Se trata de un 
    proyecto en solitario, desarrollado en Python 
    con el framework Silence, de la universidad, 
    aunque la mayoría del código está hecho en 
    JavaScript, HTML y CSS.`}
  ]
}
