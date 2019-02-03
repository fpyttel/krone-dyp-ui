import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerScoresHistoryComponent } from './player-scores-history.component';

describe('PlayerScoresHistoryComponent', () => {
  let component: PlayerScoresHistoryComponent;
  let fixture: ComponentFixture<PlayerScoresHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerScoresHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScoresHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
