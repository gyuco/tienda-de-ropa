import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface Result {
  data: Product[];
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private http: HttpClient
  ) { 

  }

  getAll(): Observable<Product[]> {
    return this.http.get<Result>('assets/data/data.json').pipe(
      map( (result) => result.data)
    );
  }
}
