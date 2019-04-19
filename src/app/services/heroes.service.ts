import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {delay} from 'rxjs/operators'

const ALTER_EGOS = ['Eric'] //array of alter egos, in real app, this is provide by server api.

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  isAlterEgoTaken(alterEgo: string): Observable<boolean>{
    const isTaken = ALTER_EGOS.includes(alterEgo)
    return of(isTaken).pipe(delay(400))
  }
}

