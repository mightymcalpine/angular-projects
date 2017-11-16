import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
        // use the snapshot ver if you DON'T expect the data['message'] to change,
        // you can only reach this data['message'] from this specific activated route
    // this.errorMessage = this.route.snapshot.data['message'];
        // or use the subscribe method if you DO expect the data['message'] to change while you
        // are still on this current page
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }

}
