import { Component } from "@angular/core";

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list-page.component.html'
})
export class ClientListPage{

    clients = [
        {id: 1, name: "Client 1"},
        {id: 2, name: "Client 2"},
        {id: 3, name: "Client 3"}
    ];
    
}