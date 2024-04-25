import { Injectable } from "@angular/core";

@Injectable()
export class ClientService {
    constructor() { }

    sayHello(){
        return 'Hello from ClientService';
    }
}