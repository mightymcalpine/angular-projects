import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }
  // the activatedRoute object gets us access to the current route which includes the id passed in the URL

  ngOnInit() {
    // remember what happens here in OnInit, only happens once upon the instantiation of this component,
    // if you need to update this property from this component, while you're still on this component, you
    // need another way to update other than snapshot
    // *****

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.route.params.subscribe(
      // params here is an OBSERVABLE, it is dealing with asychronous events
      // this function fires whenever the params data is changed
      // the updated params are assigned and passed to the subscribe method
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
      // you would use code like this if you were going to update some data from within the current
      // component only, this allows to wait/listen for changes, update to reflect the changes made,
      // but it does not re-render the whole component
      // ****
      // when you leave this component, angular will in effect, run ngOnDestroy lifecycle hook,
      // this unsubscribes from route.params so that the subscription does not go on living in memory
      // when you this component is reloaded, a new instantiation takes place
    );
  }



}
