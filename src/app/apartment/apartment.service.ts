import { Injectable} from '@angular/core';
import { ApartmentDetail } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  apartments: Array<ApartmentDetail>;

  apartmentListen = new Subject<ApartmentDetail[]>();

  constructor(private http: HttpClient) {
  }

  getApartmentListing() {
    const URL = environment.APARTMENT_LISTING;
    const options = {

    }
    this.http.get<any>(URL, options)
    .subscribe( (result) => {
      console.log(result);
      this.apartments = result;
     this.apartmentListen.next(result);
    });
  }

  getAptById(id: number) {
    return this.apartments.find( apt =>
      apt.id === id
    )
  }
}
