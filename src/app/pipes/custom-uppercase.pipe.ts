import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'appUppercase'})
export class CustomUppercasePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if(value){
            return value.toLocaleUpperCase();
        }else{
            return '';
        }
            
    }
}