import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import {DataChallenge} from "../../../../models/data-challenge.model";
import { Challenge } from "../../../../models/challenge.model";
import { ChallengeService } from 'src/app/services/challenge.service';
import { StarterService } from 'src/app/services/starter.service';

@Component({
  selector: 'app-challenge-container',
  templateUrl: './challenge-container.component.html',
  styleUrls: ['./challenge-container.component.scss']
})
export class ChallengeContainerComponent {
  idChallenge!: string | any;
  params$!: Subscription;
  jsonData: Challenge[] = [];
  challenge!: Challenge;
  dataChallenge!: DataChallenge;
  challenges: Challenge[] = [];
  challengesSubs$!: Subscription;
  
  

  constructor(
    private route: ActivatedRoute,
    private challengeService: ChallengeService,
    private starterService: StarterService
  ){
    this.params$ =  this.route.paramMap.subscribe((params: ParamMap) => {
      this.idChallenge = params.get('idChallenge')

      console.log(this.idChallenge)

    });
  }

  ngOnInit(){
    console.log(this.idChallenge)
   
    this.loadMasterData(this.idChallenge);
  

  }
  loadMasterData(id: string) {
    this.challengesSubs$ = this.starterService.getAllChallenges().subscribe(resp => {
      this.dataChallenge = new DataChallenge(resp);
      this.challenges = this.dataChallenge.challenges;
      console.log(this.challenges)
   
    this.challengeService.getChallenge(id, this.challenges)
  .subscribe((challenge: Challenge) => {
    this.challenge = challenge;
  }); 
});
}
  
  ngOnDestroy() {
    if (this.params$ != undefined) this.params$.unsubscribe();
  }
}

