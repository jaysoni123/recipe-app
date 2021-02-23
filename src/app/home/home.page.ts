import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RecipeDataService } from "../services/recipe-data.service"


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recipesNames:any = [];
  recipeData:any;

  constructor(public actionSheetController: ActionSheetController,
              public toastController: ToastController,
              private recipeDataService: RecipeDataService) {}

  ngOnInit() {
    // setInterval(function() {
    //
    // }, 5000);
    this.getRecipeUpdates();
    this.recipeData = setInterval(() =>  this.getRecipeUpdates(), 30000);
    // this.getRecipeUpdates();
  }

  getRecipeUpdates = async () => {
    await this.recipeDataService.getRecipeNames().subscribe((data)=>{
      console.log(data);
      if(data) {
        if(this.recipesNames !== data) {
          this.recipesNames = data;
        }
      }
    });
  }

  ngOnDestroy = () => {
    if(this.recipeData) {
      clearInterval(this.recipeData);
    }
  }
}
