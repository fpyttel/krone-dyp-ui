
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from './constants';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player.model';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    public readonly GET_PLAYER_URL = `${BASE_URL}/player/`;

    constructor(private http: HttpClient) { }

    public getPlayer(id: number): Observable<Player> {
        return this.http.get<Player>(`${this.GET_PLAYER_URL}/${id}`);
    }

}
