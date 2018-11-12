export class Centre{
  constructor(
    public name?:string,
    public doctorname?:string,
    public isarno?:string,
    public landline?:number,
    public email?:string,
    public address?:string,
    public pan?: string
  ){

  }
  
}

export class Auth{
  constructor(
    public username?:string,
    public password?:string
  ){

  }
  
}

