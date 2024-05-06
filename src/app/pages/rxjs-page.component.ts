import { Component, OnInit } from "@angular/core";
import { Observable, interval, of } from "rxjs";


@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs-page.component.html'
})
export class RxjsPageComponent implements OnInit{

    //items: Array<string> = [];
    //observable = of('item 1')

    items: Array<number> = [];
    observable = interval(1000)

    construtor() {}


    ngOnInit(): void {
        this.observable.subscribe((item) => {
            this.items.push(item);
        });
    }
}