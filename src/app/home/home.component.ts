import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'IVF-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

    $(window).on('load',function(){
      $('#exampleModal').modal('show');
    });

  }

}
