import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription, interval, of } from "rxjs";


@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs-page.component.html'
})
export class RxjsPageComponent implements OnInit, OnDestroy{

    //items: Array<string> = [];
    //observable = of('item 1')

    subscription!: Subscription;

    items: Array<number> = [];
    observable = interval(1000)


    construtor() {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this. subscription = this.observable.subscribe((item) => {
            this.items.push(item);
        });
    }

    desinscrever() {
        this.subscription.unsubscribe();
    }
}