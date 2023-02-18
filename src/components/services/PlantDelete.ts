import {  
    PLANT_DELETE, 
  } from "../../apiConfig/apiEndpoints";
  import { apiCall } from "../../apiConfig/apiCall";
   
  
   
  
  export const submitRequest = (plantCode:string) => {
    return apiCall({
      url: PLANT_DELETE + "/" + plantCode,
      method: "delete"
    });
  };



export interface SubmitRequest {
    
}

export interface SubmitResult {
    
    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];
}

export interface SubmitValidationError {
    property: string;
    message: string;

}


export class SubmitRequestInstance implements SubmitRequest {
    

    constructor() {
        
    }
}


export class SubmitResultInstance implements SubmitResult {
    
    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];

    constructor() {
        
        this.success = false;
        this.message = '';
        this.validationErrors = [];
    }
}



export class SubmitValidationErrorInstance implements SubmitValidationError {
    property: string;
    message: string;

    constructor() {
        this.property = '';
        this.message = '';
    }
}





export interface InitRequest {
    
}

export interface InitResult {
 
    landCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}

export class InitRequestInstance implements InitRequest {
    

    constructor() {
        
    }
}


export class InitResultInstance implements InitResult {
 
    landCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.landCode = '00000000-0000-0000-0000-000000000000';
        this.success = false;
        this.message = '';
        this.validationErrors =  [];
    }
}



export class InitValidationErrorInstance implements InitValidationError {
    property: string;
    message: string;

    constructor() { 
        this.property = '';
        this.message = ''; 
    }
}


 