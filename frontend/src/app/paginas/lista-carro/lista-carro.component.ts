import { Component, OnInit } from '@angular/core';
import { Carro } from '../../interfaces/carro';
import { CarroService } from '../../services/carro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-carro',
  templateUrl: './lista-carro.component.html',
  styleUrls: ['./lista-carro.component.css']
})
export class ListaCarroComponent implements OnInit {

  public carros: Carro[];

  constructor(private carroService: CarroService, private router: Router) { }

  ngOnInit(): void {
    this.getListaCarro();
  }

  getListaCarro(): void {
    this.carroService.getListaCarro()
    .subscribe(
      (carros: Carro[]) => { this.carros = carros; },
      () => { });
  }
}
