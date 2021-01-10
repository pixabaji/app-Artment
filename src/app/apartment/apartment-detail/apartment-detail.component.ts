import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import { ApartmentService } from '../apartment.service';
import { ApartmentDetail } from '../models/apartment-detail.model';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {
  apartmentDetail: ApartmentDetail;
  constructor(
    private router: ActivatedRoute,
    public sessionStorage: SessionStorageService,
    private apartmentService: ApartmentService,
    ) {
   }

  ngOnInit(): void {
    console.log(this.router.snapshot.paramMap.get('id'));
    this.apartmentDetail = this.apartmentService.getAptById(
      +this.router.snapshot.paramMap.get('id')
    );
    //console.log(this.apartmentDetail);
    //(this.router.snapshot.params as ApartmentDetail);
    //console.log(this.apartmentDetail);
  }

}
