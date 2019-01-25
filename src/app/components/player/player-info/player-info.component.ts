import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {

  @Input() player: Player;

  ngOnInit(): void {
  }

  calcElo(value: number): number {
    return Math.round(value);
  }

  calcEffectivity(value: number): number {
    return Math.round(value * 100);
  }

}
