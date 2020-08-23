import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../interfaces/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  getListaCarro(): Observable<Carro[]> {
    const url = `${environment.carroApiUrl}carro`;
    return this.http.get<Carro[]>(url);
  }

  getCarroPlaca(placa: string): Observable<Carro> {
    const url = `${environment.carroApiUrl}carro/filter/placa/${placa}`;
    return this.http.get<Carro>(url);
  }

  getCarroId(id: number): Observable<Carro> {
    const url = `${environment.carroApiUrl}carro/filter/id/${id}`;
    return this.http.get<Carro>(url);
  }

  addCarro(Carro: Carro): Observable<Carro> {
    const url = `${environment.carroApiUrl}carro/`;
    return this.http.post<Carro>(url, Carro);
  }

  atualizaCarro(Carro: Carro): Observable<Carro> {
    const url = `${environment.carroApiUrl}carro/`;
    return this.http.put<Carro>(url, Carro);
  }

  deletaCarro(id: number): Observable<Carro> {
    const url = `${environment.carroApiUrl}carro/${id}`;
    return this.http.delete<Carro>(url);
  }
}