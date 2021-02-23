import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {
  hostUrl:string = environment.apiUrl;
  params:any = {};
  headers:any = {headers : {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Headers' : '*'
  }};
  constructor(private httpClient: HttpClient) {

  }
  getRecipeData = (id) => {
    return this.httpClient.get(this.hostUrl + 'recipe/' + id);
  }

  getRecipeNames = () => {
    return this.httpClient.get(this.hostUrl + 'get-recipe-names');
    // return this.httpClient.get<string[]>(this.hostUrl + 'get-recipe-names', this.headers);
  }
}
