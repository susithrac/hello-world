import {Injectable} from '@angular/core';


@Injectable()
export class MyService{
  
  name:string;
  constructor(name:string)
  {
    this.name=name;
  }
  getValue():string{
    return "a string value"+this.name;
  }
}
