import { Component, OnInit } from '@angular/core';
import {MissionService} from '../../services/mission.service'

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css']
})
export class MissionControlComponent implements OnInit {
  astronauts = ['Mike', 'John', 'David']
  missions = ['Fly to mars', 'Fly to the moon', 'Fly to earth']
  nextMission = 0
  history: string[] = []
  constructor(
    private missionService: MissionService
  ) {
    missionService.missionConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut} confirm the mission`)
    })
  }

  ngOnInit() {
  }
  announce(){
    let mission = this.missions[this.nextMission++]
    this.missionService.announceMission(mission)
    if (this.nextMission >= this.missions.length){
      this.nextMission = 0
    }
  }

}
