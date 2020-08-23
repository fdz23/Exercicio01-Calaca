import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-deleta-carro',
  templateUrl: './deleta-carro.component.html',
  styleUrls: ['./deleta-carro.component.css']
})
export class DeletaCarroComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private carroService: CarroService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.deletaCarro([+params.get('carroId')][0]);
    });
  }

  deletaCarro(id: number): void {
    this.carroService.deletaCarro(id)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { });
  }
}
