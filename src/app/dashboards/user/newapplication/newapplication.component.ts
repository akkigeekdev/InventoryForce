import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'IVF-newapplication',
  templateUrl: './newapplication.component.html',
  styleUrls: ['./newapplication.component.scss']
})
export class NewapplicationComponent implements OnInit {

  constructor() { }
  @Output() loader = new EventEmitter();

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.loader.emit(false)
  }

}
