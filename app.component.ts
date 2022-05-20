import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  val1: any; 
  operador: any; 
  val2: any; 
  valor:string = "";
  //e:string = "";
  screen:string = ""
  objectArray:any[]=[];

  ngOnInit(): void {

  }

  

  getvalor(value:any) {
    if ((this.operador == "+") || (this.operador == "-") || (this.operador == "*") || (this.operador == "/")) {
      this.valor = this.valor + value;
      this.screen = this.screen + value;
      this.val2 = this.valor;
    }

    else {
      this.screen = this.screen + value;
      this.val1 = this.screen;
    }


  }

  condition(value:any) {
    this.screen = this.screen + value;
    this.operador = value;
  }

  clear(){
    this.screen = "";
    this.val1 = "";
    this.operador = "";
    this.val2 = "";
    this.valor = "";

  }


  

  result(){
    if(this.operador =="+"){
      this.screen=this.screen+"="+(parseInt(this.val1)+parseInt(this.val2)).toString();
      this.screen=(parseInt(this.screen)+parseInt(this.val2)).toString();
      this.objectArray.push(parseInt(this.screen)+parseInt(this.val2));
      console.log(this.objectArray)
  }
    if(this.operador =="-"){
      this.screen=this.screen+"="+(parseInt(this.val1)-parseInt(this.val2)).toString();
      this.screen=(parseInt(this.screen)-parseInt(this.val2)).toString();
   }
    if(this.operador == "*"){
      this.screen=this.screen+"="+(parseInt(this.val1)*parseInt(this.val2)).toString();
      this.screen=(parseInt(this.screen)*parseInt(this.val2)).toString();
    }
    if(this.operador =="/"){
      this.screen=this.screen+"="+(parseInt(this.val1)/parseInt(this.val2)).toString();
      this.screen=(parseInt(this.screen)/parseInt(this.val2)).toString();
    }
  }
}
