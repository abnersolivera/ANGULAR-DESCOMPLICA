import { Injectable } from "@angular/core";
import { Pessoa } from "../models/pessoa";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

const URL = 'assets/data/pessoas.json';

@Injectable({providedIn: 'root'})
export class PessoaService{
    constructor(private http: HttpClient) {}
    listar(): Observable<Pessoa[]>{
        return this.http.get<Pessoa[]>(URL);
    }

    salvar(pessoa: Pessoa){
        console.log('Salvando...');
        console.log(pessoa);
    }
}