import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {MissionService} from '../../services/mission.service'

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit, OnDestroy {
  @Input() astronaut: string
  announced = false
  confirmed = false
  mission = '<Unannounced mission>'
  constructor(
    private missionService: MissionService
  ) {}

  ngOnInit() {
    this.missionService.missionAnnounced$.subscribe(mission => {
      if (!this.announced){
        this.announced = true
      }
      this.mission = mission
      this.confirmed = false
    })
  }

  ngOnDestroy(): void {
  }

  confirm(){
    this.missionService.confirmMission(this.astronaut)
    this.confirmed = true
  }
}
