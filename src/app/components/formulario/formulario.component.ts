import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  constructor(){

  }
  public images = ["https://img.icons8.com/ios-glyphs/512/sun.png", "https://img.icons8.com/sf-ultralight-filled/512/moon-symbol.png"];
  public op:any;
  private i=1;
  public trans(){
    let mode = document.getElementsByClassName("icones");
    let form = document.getElementById("login_form");
    if(this.i%2==0){
      this.op=this.images[0];
      (<HTMLElement>form).classList.add('dark');
    }else{
      this.op=this.images[1];
      (<HTMLElement>form).classList.remove('dark');
    }
    
    console.log("Clicou: "+1);
    this.i++;
  }

  public ngOnInit(): void {
    this.trans();
  }
}
