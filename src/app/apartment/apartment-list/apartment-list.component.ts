import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import { ApartmentService } from '../apartment.service';
import { ApartmentDetail, host } from '../models/apartment-detail.model';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  apartments: Array<ApartmentDetail>;
  isLoading: boolean;
  constructor(
    private apartmentService: ApartmentService,
    private route: Router,
    public sessionStorage: SessionStorageService,
  ) { }

  ngOnInit(): void {
    this.apartmentService.apartmentListen.subscribe( apts => {
      this.apartments = apts;
      this.isLoading = false;
    });

    this.isLoading = true;
    this.apartmentService.getApartmentListing();
  }

  onClickApartment(apt: ApartmentDetail) {
    // this.route.navigate(['/apt-detail', apt], {
    //   skipLocationChange: true
    // });

    this.route.navigate(['/apt-detail', {id: apt.id}], {
      skipLocationChange: true
    });
  }

}
