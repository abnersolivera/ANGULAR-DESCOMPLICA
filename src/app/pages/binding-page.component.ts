import { Component } from "@angular/core";

@Component({
    selector: 'app-binding-page',
    template: `
    <h4>Imagen do Angular</h4>
        <img [src]="imagem" [style]="{width:width}" alt="angular"/>
        `
})
export class BindingPageComponent {
  width = "300px"
  imagem = "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
}