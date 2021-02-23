import { Component, OnInit  } from '@angular/core';
// import recipesData from "../recipes-data";
import { RecipeDataService } from "../services/recipe-data.service";
// import {ActivatedRoute, Params} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-page1',
  templateUrl: 'page1.page.html',
  styleUrls: ['page1.page.scss'],
})
export class Page1Page {
    serverImagePath:any = environment.apiImagePath;
    recipeId:number = 1;
    recipeData:any = [];
    recipeImagePath:string;
    constructor(private recipeDataService: RecipeDataService,
              private activatedRoute: ActivatedRoute,) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe(resId => {
          if(resId['id']) {
              this.recipeId = resId['id'];
          }
          console.log("Recipe Id :",this.recipeId);
      });

      this.recipeDataService.getRecipeData(this.recipeId).subscribe((data)=>{
          if(data) {
              console.log(data[0]);
              this.recipeData = data[0];
              this.recipeImagePath = this.serverImagePath + this.recipeData['image'];
          }
      });
  }

}
