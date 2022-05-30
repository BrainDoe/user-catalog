import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {UserResponse } from '../Interfaces/response.interface'
import { User } from '../Interfaces/user.interface'

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly apiURl: string = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  getUsers(size: number): Observable<any> {
    return this.http.get<any>(`${this.apiURl}/?results=${size}`).pipe(
      map(this.proccessResponse)
    )
  }

  // Get single user 
  getUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiURl}/?id=${id}`).pipe(
      map(this.proccessResponse)
    )
  }

  // Proccess and Transform the response
  proccessResponse(response: UserResponse): UserResponse {
    return { 
      info: { ...response.info },
      results: response.results.map((user: any) => (<User> {
        id: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        username: user.login.username,
        gender: user.gender,
        address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`,
        dateOfBirth: user.dob.date,
        phone: user.phone,
        imageUrl: user.picture.medium,
        coordinate: {
          latitude: +user.location.coordinates.latitude,
          longitude: +user.location.coordinates.longitude
        }
      }))
    }
  } 
}
