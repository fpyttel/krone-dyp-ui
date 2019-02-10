import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dyp } from '../models/dyp.model';
import { BASE_URL } from './constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DypService {

    public readonly GET_DYP_URL = `${BASE_URL}/dyp/`;

    constructor(private http: HttpClient) { }

    public getDyp(id: number): Observable<Dyp> {
        return this.http.get<Dyp>(`${this.GET_DYP_URL}/${id}`);
    }

    public getDypList(): Observable<Dyp[]> {
        return this.http.get<Dyp[]>(`${this.GET_DYP_URL}/list`);
    }

    public getDypTeamElo(id: number): Observable<any> {
        return this.http.get<any>(`${this.GET_DYP_URL}/${id}/teamElo`);
    }

}
