// interface Trips {
//     location: string,
//     milage: number,
// }

import { pool } from './db/db';

// The Trips Array
const trips = [
  {
    location: 'Miami, FL',
    mileage: 80,
  },
  {
    location: 'Savannah, GA',
    mileage: 120,
  },
];

export function getTrips() {
  return trips;
}

export function createTrip(newTrip: { location: string; mileage: number }) {
  trips.push(newTrip);
  return trips;
}

export function updateTrip(
  id: number,
  updatedTrip: { location: string; mileage: number }
) {
  trips[id] = updatedTrip;
  return trips;
}

export function deleteTrip(id: number) {
  trips.splice(id, 1);
  return trips;
}
