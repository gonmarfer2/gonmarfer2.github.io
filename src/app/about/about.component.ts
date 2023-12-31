import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','./about2.component.css']
})
export class AboutComponent {
  paradigms = ['Python (Django, Jupyter, SageMath...)','HTML','CSS','JavaScript','C','Java (SpringBoot)', 'Scala (Spark)'];
  os = ['Windows','Linux'];
  db = ['PostgreSQL','MySQL (+ MariaDB)','HBase','Git'];
  methods = ['Scrum', 'PMBOK v6', 'Kanban'];
  design = ['Blender', 'GIMP', 'Krita', 'Corel Paint Shop Pro 2021'];

  studies = [
    {datePlace: '09/2012 - 06/2019 — Sevilla, España',
    description: 'Estudios de lengua inglesa',
    company: 'Centro de idiomas Macarena'},
    {datePlace: '09/2019 – 07/2023 — Sevilla, España',
    description: 'Grado en Ingeniería Informática — Ingeniería del Software',
    company: 'Universidad de Sevilla'},
    {datePlace: '10/2023 – Actual — Sevilla, España',
    description: 'Máster Universitario en Lógica, Computación e Inteligencia Artificial',
    company: 'Universidad de Sevilla'},
    {datePlace: '10/2023 – Actual — Sevilla, España',
    description: 'Beca de formación en informática en la Biblioteca de la Universidad de Sevilla',
    company: 'Biblioteca de la Universidad de Sevilla'},
  ]

  experiences = [
    {datePlace: '02/2023 – 07/2023 — Sevilla, España',
    description: 'Prácticas extracurriculares ',
    company: 'Ayesa'},
    {datePlace: '09/2023',
    description: 'Ganador del diseño del cartel de la Velá Solidaria 2023',
    company: 'Comunidad General de Propietarios y Residentes de Pino Montano'},
    {datePlace: '09/2023',
    description: 'Tercer Premio CV digital',
    company: 'Universidad de Sevilla (Diferénciate)'},
    {datePlace: '10/2023',
    description: 'Mejor Expediente de la Escuela Técnica Superior de Ingeniería Informática',
    company: 'Universidad de Sevilla'},
  ]

}
