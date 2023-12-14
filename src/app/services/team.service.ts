import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teamUrl: string = 'http://localhost:3000/teams';
  constructor(private httpClient: HttpClient) {}

  getAllTeams() {
    return this.httpClient.get<{ teams: any }>(this.teamUrl);
  }
  getTeamById(id: any) {
    return this.httpClient.get<{ team: any }>(`${this.teamUrl}/${id}`);
  }
  editTeam(obj: any) {
    return this.httpClient.put<{ isUpdated: any }>(this.teamUrl, obj);
  }
  deleteTeam(id: any) {
    return this.httpClient.delete<{ msg: any }>(`${this.teamUrl}/${id}`);
  }
  addTeam(obj: any) {
    console.log('here add team into service', obj);

    return this.httpClient.post<{ msg: any }>(this.teamUrl, obj);
  }
}
