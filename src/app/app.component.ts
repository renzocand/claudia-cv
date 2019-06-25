import { Component } from '@angular/core';

declare function principalMain():any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'claudia';

  constructor(){
    principalMain()
  }
  // ngAfterViewChecked() {
  //   var s = document.createElement("script");
  //   s.type = "text/javascript";
  //   s.src = "../../../assets/js/main.js";
  //   this.elementRef.nativeElement.appendChild(s);
  // }
 
}
