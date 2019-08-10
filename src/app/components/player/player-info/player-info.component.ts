import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {

  @Input() player: Player;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
  }

  calcElo(value: number): number {
    return Math.round(value);
  }

  calcEffectivity(value: number): number {
    return Math.round(value * 100);
  }

}
