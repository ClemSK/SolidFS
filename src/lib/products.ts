// interface Trips {
//     location: string,
//     milage: number,
// }

import { pool } from './db/db';

// The Trips Array
const trips = [
  {
    name: 'Mug',
    price: 20,
    stock: 80,
  },
  {
    name: 'Bowl',
    price: 25,
    stock: 60,
  },
];

// functions for working with trips we can then convert into API routes or RPC calls
export function getProducts() {
  const products = pool.query(`SELECT * FROM product;`);
  console.log(
    'pool.query(`SELECT * FROM product;`)',
    pool.query(`SELECT * FROM product;`)
  );

  try {
    return products;
  } catch (err) {
    return console.error('Error executing query', err.stack);
  }
}
// }
// export function getTrips() {
//   return trips;
// }

export function createProduct(newProduct: {
  name: string;
  price: number;
  stock: number;
}) {
  return pool.query(
    `
    INSERT INTO product(name, price, stock) 
    VALUES ('${newProduct.name}',${newProduct.price},${newProduct.stock})
    RETURNING *;
    `
  );
}

// export function updateTrip(
//   id: number,
//   updatedTrip: { location: string; mileage: number }
// ) {
//   trips[id] = updatedTrip;
//   return trips;
// }

// export function deleteTrip(id: number) {
//   trips.splice(id, 1);
//   return trips;
// }
