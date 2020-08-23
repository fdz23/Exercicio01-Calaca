import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/services/carro.service';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { Carro } from 'src/app/interfaces/carro';

@Component({
  selector: 'app-cria-carro',
  templateUrl: './cria-carro.component.html',
  styleUrls: ['./cria-carro.component.css']
})
export class CriaCarroComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private carroService: CarroService) { }

  error: string;

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
  }

  onSubmit(): void {

    // stop here if form is invalid
    if (this.validGroup.invalid) {
      this.error = 'Preencha corretamente os campos!';
      return;
    }

    const carro = {
      nome: this.validGroup.get('nomeControl').value,
      placa: this.validGroup.get('placaControl').value,
      cor: this.validGroup.get('corControl').value,
      marca: this.validGroup.get('marcaControl').value,
    } as Carro;

    this.addCarro(carro);
  }

  addCarro(carro: Carro): void {
    this.carroService.addCarro(carro)
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
