import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') newUserForm: NgForm;
  viewAnswer = '';
  genders = ['male', 'female'];
  likePizza = ['yes', 'no', 'I\'m not human'];
  // these properties are used as default values bound (property binding) to an input via ngModel
  favColor = 'misty rose';
  defaultLikePizza = 'I\'m not human';

  suggestedUserName() {
    const evilMonster = 'demogorgon';
  }

  // using local ref and viewchild
  onSubmit() {
    console.log(this.newUserForm);
  }

  // passing local ref to the method
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
}
