import { Component, OnInit } from "@angular/core";
import { Pessoa } from "../models/pessoa";
import { PessoaService } from "../services/pessoa.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-lista-pessoas', 
    templateUrl: './lista-pessoas-page.component.html'
})
export class ListaPessoasPage implements OnInit {

    pessoas!: Observable<Pessoa[]>; 

    constructor(private service: PessoaService) {}
    ngOnInit(): void { }

    salvar(pessoa: Pessoa){
        this.service.salvar(pessoa);
    }

    listar(){
        this.pessoas = this.service.listar();
    }

}