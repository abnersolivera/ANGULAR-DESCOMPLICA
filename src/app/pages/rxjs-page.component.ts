import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription, filter, interval, map, of, range, tap } from "rxjs";


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
    observable2 = range(1,10)


    construtor() {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        // this. subscription = this.observable
        // .pipe(
        //     map((x: number) => x * 2),
        //     filter((x: number) => x % 2 === 0),
        //     tap((x: number) => console.log(x))
        // )
        // .subscribe((item) => {
        //     this.items.push(item);
        // });
        
        this.observable2.subscribe((item) => {
            this.items.push(item);
        });
    }

    desinscrever() {
        this.subscription.unsubscribe();
    }
}