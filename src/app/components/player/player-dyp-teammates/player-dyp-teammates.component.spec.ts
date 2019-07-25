import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerDypTeammatesComponent } from './player-dyp-teammates.component';

describe('PlayerDypTeammatesComponent', () => {
  let component: PlayerDypTeammatesComponent;
  let fixture: ComponentFixture<PlayerDypTeammatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDypTeammatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDypTeammatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
