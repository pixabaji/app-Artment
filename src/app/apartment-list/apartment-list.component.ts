import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  constructor() { }
  apartments: Array<any>;

  ngOnInit(): void {
    this.apartments = ['apt1', 'apt2', 'apt3', 'apt4', 'apt5'];
  }

  onClickApartment() {
    alert('House clicked');
  }

}
