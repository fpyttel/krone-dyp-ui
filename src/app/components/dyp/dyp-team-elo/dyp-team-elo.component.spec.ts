import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DypTeamEloComponent } from './dyp-team-elo.component';

describe('DypTeamEloComponent', () => {
  let component: DypTeamEloComponent;
  let fixture: ComponentFixture<DypTeamEloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DypTeamEloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DypTeamEloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
