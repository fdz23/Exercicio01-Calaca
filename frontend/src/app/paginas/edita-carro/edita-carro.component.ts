import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarroService } from 'src/app/services/carro.service';
import { Carro } from 'src/app/interfaces/carro';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edita-carro',
  templateUrl: './edita-carro.component.html',
  styleUrls: ['./edita-carro.component.css']
})
export class EditaCarroComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private carroService: CarroService
  ) { }

  error: string;
  idCarro: number;
  nome: string;
  placa: string;
  cor: string;
  marca: string;

  validGroup = this.formBuilder.group({
    nomeControl: new FormControl('', [
      Validators.required]),
    placaControl: new FormControl('', [
      Validators.required]),
    corControl: new FormControl('', [
      Validators.required]),
    marcaControl: new FormControl('', [
      Validators.required]),
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idCarro = ([+params.get('carroId')][0]);
    });

    this.getCarro();
  }

  getCarro(): void {
    console.log(this.idCarro);

    this.carroService.getCarroId(this.idCarro)
    .subscribe(
      (carro: Carro) => {
        this.nome = carro.nome;
        this.placa = carro.placa;
        this.cor = carro.cor;
        this.marca = carro.marca; },
      () => { });
  }

  onSubmit(): void {

    // stop here if form is invalid
    if (this.validGroup.invalid) {
      this.error = 'Preencha corretamente os campos!';
      return;
    }

    const carro = {
      id: this.idCarro,
      nome: this.validGroup.get('nomeControl').value,
      placa: this.validGroup.get('placaControl').value,
      cor: this.validGroup.get('corControl').value,
      marca: this.validGroup.get('marcaControl').value,
    } as Carro;

    this.editaCarro(carro);
  }

  editaCarro(carro: Carro): void {
    this.carroService.atualizaCarro(carro)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => {
          this.error = 'Falha ao adicionar o usuario.';
        });
  }

  get f() { return this.validGroup.controls; }

  get nomeControl() {
    return this.validGroup.get('nomeControl');
  }

  get placaControl() {
    return this.validGroup.get('placaControl');
  }

  get corControl() {
    return this.validGroup.get('corControl');
  }

  get marcaControl() {
    return this.validGroup.get('marcaControl');
  }

}
