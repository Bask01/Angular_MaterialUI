import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../myClasses/student';
import { MYCLASSES } from '../../assets/data/myClasses';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() minfo!: Student;

  myClasses = MYCLASSES;
  onClickMe(index:number){
    //console.log(`in onClickMe with index = to ${index}`);
    let divlist;

    divlist = document.getElementById("myList")?.getElementsByTagName("div");
    for(let x=0; x < divlist!.length; x++){
      if(x===index){

        if(divlist![index].style.display == 'none'){
           divlist![index].style.display = "block";
        }
        else{
           divlist![index].style.display = "none";
        }
      }else{
        divlist![x].style.display = "none";
      }
    }
  }

alertMe(){
  alert("Android Error")
}

  constructor() { }

  ngOnInit(): void {
  }

}
