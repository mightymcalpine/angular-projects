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
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    color: '',
    gender: '',
    pizza: ''
  }
  formSubmitted = false;

  suggestedUserName() {
    const evilMonster = 'demogorgon';
    /*
    - use setValue to populate the inputs of the form in one go
    - you would put a click listener on the button in the template and bind to this method
    - with setValue you must send an exact copy of all the form inputs though, can send an empty string
    - could be useful but not always ideal because you each time you click and call this method,
      - it will overright any data you might have put in one of the inputs
      - pass data to the template > form as an object
    */
            // this.newUserForm.setValue({})
    this.newUserForm.form.patchValue({
      username: evilMonster
    });
  }

  // using local ref and viewchild
  onSubmit() {
    console.log(this.newUserForm);
    this.formSubmitted = true;
    this.user.username = this.newUserForm.value.username;
    this.user.email = this.newUserForm.value.email;
    this.user.question = this.newUserForm.value.userData.character;
    this.user.answer = this.newUserForm.value.userData.answer;
    this.user.color = this.newUserForm.value.favColor;
    this.user.gender = this.newUserForm.value.gender;
    this.user.pizza = this.newUserForm.value.pizza;
    this.newUserForm.reset();
    // you can also pass newUserForm.setValue({}) to reset with specific data to each input
  }

  // passing local ref to the method
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
}
