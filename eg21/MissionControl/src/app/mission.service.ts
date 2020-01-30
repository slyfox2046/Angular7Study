import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor() { }
  private missionAnnounceSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  missionAnnounced$ = this.missionAnnounceSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();
  announceMission(mission: string) { 
    this.missionAnnounceSource.next(mission);
  }
  confirmMission(astronaut: string) { 
    this.missionConfirmedSource.next(astronaut);
  }

}
