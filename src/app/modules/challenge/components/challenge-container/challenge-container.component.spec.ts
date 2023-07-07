import { SharedComponentsModule } from './../../../../shared/components/shared-components.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeContainerComponent } from './challenge-container.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ChallengeHeaderComponent } from '../challenge-header/challenge-header.component';
import { ChallengeInfoComponent } from '../challenge-info/challenge-info.component';
import { of } from 'rxjs';
import { BreadcrumbService } from '../../../../services/breadcrumb.service';
import { ChallengeModule } from '../../challenge.module';

describe('ChallengeContainerComponent', () => {
  let component: ChallengeContainerComponent;
  let fixture: ComponentFixture<ChallengeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChallengeContainerComponent, 
        ChallengeHeaderComponent,
        ChallengeInfoComponent
      ],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedComponentsModule, ChallengeModule],
      providers: [
        BreadcrumbService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {},
            },
            paramMap: of(convertToParamMap({idChallenge: '1adfadf21fasdf2-adf'})),
            queryParams: of({tab: 'Detalles'})
          },
        },
      ]
    });
    fixture = TestBed.createComponent(ChallengeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and get idChallenge param', () => {
    expect(component).toBeTruthy();
    expect(component.idChallenge).not.toBeNull();
    expect(component.idChallenge).not.toBeUndefined();
    expect(component.idChallenge).not.toHaveLength(0);
    expect(component.idChallenge).not.toContain(' ');
  });

});
