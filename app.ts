//our root app component
import {Component, NgModule, Inject} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MyService} from './MyService';


@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello World</h2>
      <button (click)='invokeService()' ></button>
    </div>
  `
})

export class App {  
  
  myService:MyService=this.service;
  apiURL:string=this.apiUrl;
    
  constructor(private service:MyService,@Inject('API_URL') private apiUrl: string) {
  }
  invokeService(){
    console.log("Get  My Service",this.myService.getValue()+"API URL"+this.apiURL);
  }
}
  
@NgModule({
  imports: [ BrowserModule ],
  declarations: [App],
  providers: [{provide: MyService, useFactory: ()=> new MyService("One")},
  { provide: 'API_URL', useValue: 'http://my.api.com/v1' }],
  bootstrap: [ App ]
})
export class AppModule {}
