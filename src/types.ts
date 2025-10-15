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

export interface Recipe {
    id:number;
    name:string
    description: string
    cover_image: string
    user: string
    category: string
}
export interface Recipes {
    data:Recipe[]
}

export interface Ingredient {
    id:number,
    name:string,
    amount:string,
    notes:string,
}

export interface Instruction {
    id:string,
    step:number,
    instruction:string,
}

export interface RecipeDetails extends Recipe {
    ingredients:Ingredient[],
    instructions:Instruction[],
    images:string[]    
}