import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-client-detalhe',
    template: `
        <p>{{client.name}}</p>
        <p>{{client.description}}</p>
    `
})
export class ClientDetalhePageComponent implements OnInit{
    
    client = {name: "", description: ""};
    constructor(private activeRoute: ActivatedRoute){}
    ngOnInit(): void {
        const id = this.activeRoute.snapshot.paramMap.get('id');
        if(id){
            this.client = {name: `Client ${id}`, description: `Description ${id}`};
        }
    }
}