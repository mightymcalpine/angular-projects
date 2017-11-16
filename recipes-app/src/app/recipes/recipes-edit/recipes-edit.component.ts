import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  // storing a new recipe or editing an existing recipe
  // we'll assume initially we're not in edit more but rather adding a new recipe
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // grabbing the id from the URL
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // whenever the params change, we'll check which mode we're in, addnew or edit
        // if there is an id in the params of the URL, then we're in edit mode for an existing recipe
        // if params['id'] is undefined, means there is no id in the url, therefore we're creating a new recipe
        this.editMode = params['id'] != null;
      }
    )
  }

}
