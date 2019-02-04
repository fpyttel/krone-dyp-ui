import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerTeammatesComponent } from './player-teammates.component';

describe('PlayerTeammatesComponent', () => {
  let component: PlayerTeammatesComponent;
  let fixture: ComponentFixture<PlayerTeammatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTeammatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTeammatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
