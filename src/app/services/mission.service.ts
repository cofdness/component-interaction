import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import {stringify} from 'querystring'

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor() { }
  private missionAnnouncedSource = new Subject<string>()
  private missionConfirmedSource = new Subject<string>()

  missionAnnounced$ = this.missionAnnouncedSource.asObservable()
  missionConfirmed$ = this.missionConfirmedSource.asObservable()

  announceMission(mission: string){
    this.missionAnnouncedSource.next(mission)
  }
  confirmMission(astronaut: string){
    this.missionConfirmedSource.next(astronaut)
  }

}
