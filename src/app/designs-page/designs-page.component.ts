import { Component } from '@angular/core';

@Component({
  selector: 'app-designs-page',
  templateUrl: './designs-page.component.html',
  styleUrls: ['./designs-page.component.css']
})
export class DesignsPageComponent {
  designs = [
    {src:'../../assets/pictures/designs/BarquetaYGloboIslaMagica_Sueños.jpg',
    title:'Futuro pasado',
    date:'2023'},
    {src:'../../assets/pictures/designs/original1.png',
    title:'Bloqueo del diseñador',
    date:'2023'},
    {src:'../../assets/pictures/designs/LaTorreJojo.jpg',
    title:'Torre Sevilla',
    date:'2023'},
    {src:'../../assets/pictures/designs/A.png',
    title:'A',
    date:'2021'},
    {src:'../../assets/pictures/designs/EDIT_CIELO_GRIS.jpg',
    title:'Día gris',
    date:'2021'},
    {src:'../../assets/pictures/designs/EDIT_CIELO_AZUL1.jpg',
    title:'Cielo Azul',
    date:'2021'},
  ];
  designs3D = [
    {src:'../../assets/pictures/designs/3d/Saliresaxum.jpg',
    title:'Saliresáxum (Make a Dinosaur Jam 4)',
    date:'2023'},
    {src:'../../assets/pictures/designs/3d/Llave.gif',
    title:'Llave vieja escuela',
    date:'2022'},
    {src:'../../assets/pictures/designs/3d/Portada.png',
    title:'Gomisaurio (Make a Dinosaur Jam 3)',
    date:'2022'},
    {src:'../../assets/pictures/designs/3d/Fragasaurio.png',
    title:'Fragasaurio (Make a Dinosaur Jam 2)',
    date:'2021'},
    {src:'../../assets/pictures/designs/3d/sueño2.png',
    title:'Renderizado de un sueño 2',
    date:'2021'},
    {src:'../../assets/pictures/designs/3d/sueño1.png',
    title:'Renderizado de un sueño',
    date:'2021'},
  ]
}
