import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regiao } from '../model/regiao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor(private http:HttpClient) { }

  listRegioes () : Observable<Regiao[]>{
    const url ='/assets/regioes.json';
    return this.http.get<Regiao[]>(url);
  }
}
