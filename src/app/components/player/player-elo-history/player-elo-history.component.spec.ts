import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerEloHistoryComponent } from './player-elo-history.component';

describe('PlayerEloHistoryComponent', () => {
  let component: PlayerEloHistoryComponent;
  let fixture: ComponentFixture<PlayerEloHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerEloHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEloHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
