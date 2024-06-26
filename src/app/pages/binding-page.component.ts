import { Component } from "@angular/core";

@Component({
    selector: 'app-binding-page',
    template: `
    <h4>Imagen do Angular</h4>
    <img [src]="imagem" [style]="{width:width}" alt="angular"/>
    <img [src]="imagem" [style.width.px]="width2" alt="angular"/>
    <img [src]="imagem" [style.width]="width3" alt="angular"/>
    <img [src]="imagem" [style]="{width:width4, height:height}" alt="angular"/>
    <div class="alert" [class]="{sucess: sucesso}" [style.background-color]="color">
        Alerta
    </div>
    <button (click)="enviarDados()"></button>
    `,
    styles: [
        `.alert { 
            width: 200px;
            height: 100px;
            border: 1px solid blue}
        .sucess {border: 5px solid green}
            `]
})
export class BindingPageComponent {
  width = "300px";
  width2 = 150;
  width3 = "100px";
  width4 = "50px";
  height = "50px";
  color= "red";
  imagem = "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg";

  sucesso = true;

  enviarDados() {
    this.sucesso = !this.sucesso;
  }
}