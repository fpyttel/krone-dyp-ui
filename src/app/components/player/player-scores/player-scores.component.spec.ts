import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerScoresComponent } from './player-scores.component';

describe('PlayerScoresComponent', () => {
  let component: PlayerScoresComponent;
  let fixture: ComponentFixture<PlayerScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
