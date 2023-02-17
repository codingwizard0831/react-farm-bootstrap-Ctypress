


// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface PacUserLandListState {
    isLoading: boolean;
    code: string;
    initRequest: InitRequest;
    initResult: InitResult;
    queryRequest: QueryRequest;
    queryResult: QueryResult;
}

export interface QueryResultItem {
 
    landCode: string;
 
    landDescription: string;
 
    landDisplayOrder: number;
 
    landIsActive: boolean;
 
    landLookupEnumName: string;
 
    landName: string;
 
    pacName: string;  
}


export interface QueryRequest {
    
    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;
}


export interface QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;
}
 





export interface InitRequest {
    
}

export interface InitResult {
    
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
    
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
        
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


 


export class PacUserLandListStateInstance implements PacUserLandListState {
    isLoading: boolean;
    code: string;
    initRequest: InitRequest;
    initResult: InitResult;
    queryRequest: QueryRequest;
    queryResult: QueryResult;

    constructor() {
        this.isLoading = false;
        this.code = '';
        this.initRequest = new InitRequestInstance();
        this.initResult = new InitResultInstance();
        this.queryRequest = new QueryRequestInstance();
        this.queryResult = new QueryResultInstance();
    }
}


export class QueryResultItemInstance implements QueryResultItem {
 
    landCode: string;
 
    landDescription: string;
 
    landDisplayOrder: number;
 
    landIsActive: boolean;
 
    landLookupEnumName: string;
 
    landName: string;
 
    pacName: string;

    constructor() {
 
        this.landCode = '00000000-0000-0000-0000-000000000000';
 
        this.landDescription = '';
 
        this.landDisplayOrder = 0;
 
        this.landIsActive = false;
 
        this.landLookupEnumName = '';
 
        this.landName = '';
 
        this.pacName = '';  
    }
}


export class QueryRequestInstance implements QueryRequest {
    
    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;

    constructor() {
        
        this.pageNumber = 1;
        this.ItemCountPerPage = 10;
        this.OrderByColumnName = '';
        this.OrderByDescending = false;;
        this.ForceErrorMessage = '';
    }
}


export class QueryResultInstance implements QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;

    constructor() {
        this.pageNumber = 1;
        this.items = [];
        this.itemCountPerPage = 10;
        this.orderByColumnName = '';
        this.orderByDescending = false;
        this.success = false;
        this.recordsTotal = 0;
        this.recordsFiltered = 0;
        this.message = '';
        this.appVersion = '';
        this.request = '';
    }
}
