import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | Record<string, string | string[]>;
    observe?: 'body';
    context?: HttpContext;
    params?: HttpParams | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Recepie {
    id:number;
    name:string
    instructions: string
    //'ingredients'=> IngredientResource::collection($this->ingredients),
    user: string
    category: string
}
export interface Recepies {
    data:Recepie[]
}