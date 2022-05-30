import { Coordinate } from "./coordinate.interface";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  gender: string;
  address: string;
  dateOfBirth: string;
  phone: string;
  imageUrl: string;
  coordinate: Coordinate;
}