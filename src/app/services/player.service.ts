
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from './constants';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player.model';
import { Teammate } from '../models/teammate.model';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    public readonly GET_PLAYER_URL = `${BASE_URL}/player`;

    constructor(private http: HttpClient) { }

    public getPlayer(id: number): Observable<Player> {
        return this.http.get<Player>(`${this.GET_PLAYER_URL}/${id}`);
    }

    public getPlayerScores(id: number): Observable<any> {
        return this.http.get<any>(`${this.GET_PLAYER_URL}/${id}/positions`);
    }

    public getPlayerEloHistory(id: number): Observable<any> {
        return this.http.get<any>(`${this.GET_PLAYER_URL}/${id}/eloHistory`);
    }

    public getPlayerScoresHistory(id: number): Observable<any> {
        return this.http.get<any>(`${this.GET_PLAYER_URL}/${id}/positionsHistory`);
    }

    public getPlayerTeammates(id: number): Observable<any> {
        return this.http.get<Teammate[]>(`${this.GET_PLAYER_URL}/${id}/teammates`);
    }

    public getScoreboard(year: number): Observable<Player[]> {
        if (year === null) {
            return this.http.get<Player[]>(`${this.GET_PLAYER_URL}/scoreboard`);
        }
        return this.http.get<Player[]>(`${this.GET_PLAYER_URL}/scoreboard?year=${year}`);
    }

}
