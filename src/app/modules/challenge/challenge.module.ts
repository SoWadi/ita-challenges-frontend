import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import { ChallengeHeaderComponent } from './components/challenge-header/challenge-header.component';
import { ChallengeInfoComponent } from './components/challenge-info/challenge-info.component';
import { ChallengeContainerComponent } from './components/challenge-container/challenge-container.component';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { ModalsModule } from '../modals/modals.module';


@NgModule({
  declarations: [
  
    ChallengeHeaderComponent,
    ChallengeInfoComponent,
    ChallengeContainerComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    CoreModule,
    ChallengeRoutingModule,
    RouterModule,
    ModalsModule
  ]
})
export class ChallengeModule { }
