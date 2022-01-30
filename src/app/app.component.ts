import { Component } from '@angular/core';
import { Student } from './myClasses/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdApp2';


  bio:Student = {
    sid: 991618972, 
    sname: 'Kubra B',
    slogin: 'bask',
    scampus:'Trafalgar'
  }
}
