import { Component } from "@angular/core";

@Component({
    selector: 'app-pai',
    template: `
        <p>Pai</p>
        <br/>
        <a [routerLink]="['filho1']">Filho1</a>
        <br/>
        <a [routerLink]="['filho2']">Filho2</a>
        <router-outlet></router-outlet>
    `
})
export class PaiComponent {}