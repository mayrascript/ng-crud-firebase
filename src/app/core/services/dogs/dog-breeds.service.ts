import { Injectable } from '@angular/core';

import * as dogBreeds from 'src/assets/dog-breeds.json';

import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogBreedsService {

  constructor() { }

  getAll(): Observable<string[]>{
    return of(dogBreeds).pipe(map(res => res.dogs));
  }
}
