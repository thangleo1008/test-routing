import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = "Thắng Leo";
  age = 18;
  vehicles = ['Toyota', 'Honda', 'BMW', 'Ford'];

  constructor(private common: CommonService ) {
    // this.age = common.age;
   }
   
  ngOnInit(): void {
  }
  tangtuoi(){
    this.age++;
    // this.age = this.age;
    if(this.age == 22){
      this.name = 'Tuổi của thắng Dzai';
    }
    this.vehicles.push(this.name + ': ' + this.age) 
  }

}
