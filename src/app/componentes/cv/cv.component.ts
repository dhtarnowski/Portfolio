import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../servicio/portfolio.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  experienciaList:any;
  educacionList:any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experienciaList=data.experiencia;
    })
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.educacionList=data.educacion;
    })
  }

}
