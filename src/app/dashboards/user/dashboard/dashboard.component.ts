import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'IVF-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  show:string;
  isMenuOpen:boolean = false;

  ngOnInit() {
   
  }

  ngAfterContentChecked(): void {
    this.show = this.route.snapshot.paramMap.get('id');
  }

  closeMenu():void{
    this.isMenuOpen=false
  }
}
