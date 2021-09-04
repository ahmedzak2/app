import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* to import the component that we generate */
import { userComponent } from './components/user/user.component'; 

@NgModule({
  declarations: [
    AppComponent,
    userComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //properties
  

}
