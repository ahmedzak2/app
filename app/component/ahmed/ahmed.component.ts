import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-ahmed',
  templateUrl: './ahmed.component.html',
  styleUrls: ['./ahmed.component.css']
})
export class AhmedComponent implements OnInit {
  ahmed? :User[];
  showExtended: boolean = true ;
  // to make http request to get call back 
  loaded? : boolean= false;
  /* to make button work or not */ 
enableAdd:boolean = true;
currentClasses = {};
  constructor() { }
// life cycle method run automic when ininalize component
//to see time of load is what we need or not 
  ngOnInit(): void {
    setTimeout(()=> {
      // to make sure every user is take 2 second 
      this.ahmed =[ 
     {
    
    firstName:'ahmed',
    lastName:'zakria',
    age:27,
    address:{
      street:'26 st matryia',
      state: 'cairo',
      city:'cairo'
    },
    image:'http://lorempixel.com/600/600/people/3',
    isActive:true
    },
    
    {
    firstName:'aya',
    lastName:'saad',
    age:20,
    address:{
      street:'26 st matryia',
      state: 'cairo',
      city:'cairo'
    },
     image:'http://lorempixel.com/600/600/people/1',
     isActive:false

    },

   
 
    
    {
    firstName:'hazem',
    lastName:'zakria',
    age:18,
    address:{
      street:'51st matryia',
      state: 'cairo',
      city:'cairo'
    },
   
    image:'http://lorempixel.com/600/600/people/2'
    }

    ];
  
this.loaded = true;
    },2000)
    // to call current class
    this.setcurrentClasses();
  
    

// make every thing disppear 

 // this.showExtended =true; 
  /*it,s not working beacuse it take this user and try push it before timee out */
  /*this.addUser({
    firstName:'ziko',
    lastName:'misdo',
  });*/

  }

  
  addUser (user:User){
    this.ahmed?.push(user);
  }
 setcurrentClasses(){
   this.currentClasses ={
     "tbn.success": this.enableAdd,
     "big-text":this.showExtended
   }
 }
}
