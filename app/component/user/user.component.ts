/* this is way to name file floder name +floder name (if 2 floder)+file name */
/*to import from angular pacakge */ 

import { Component } from '@angular/core';

import{User} from '../../models/User';
/*to make decorator to add inforamtion */

@Component({
    selector:'app-user', /*when you generate component with Cli??*/
    /* add template location */
    templateUrl: './user.component.html',
    /* add template what display*/
    //template : '<h2>ahmedzakria</h2>'
 styleUrls:['./user.component.css']

})
export class userComponent{
  user?: User;
    

//method
constructor(){
 // this.sayHello();
  this.user={
    firstName:'ahmed',
    lastName:'zakria',
    age:27,
    address:{
      street:'26 st matryia',
      state: 'cairo',
      city:'cairo'
    }

    }
  }
}

    /*
  console.log(this.user.age);
 // this.hasBirthday();
  console.log(this.user.age);
  //console.log(this.addNumber(1,2));

  
//    console.log('hello user ....');

}/*
sayHello()
{
  // to acess method or properties inside template 
  console.log(`Hello ${this.user.firstName}`);
}/*
hasBirthday()
{
  this.user.age +=1;
 
}
showAge() {
    return this.user.age + 2;
  }
addNumber(num1:number, num2:number) :number
{
  return num1+num2;
}*/

