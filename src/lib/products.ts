// interface Trips {
//     location: string,
//     milage: number,
// }

import { pool } from './db/db';

// functions for working with trips we can then convert into API routes or RPC calls
// todo: try using prisma for get request
export function getProducts() {
  const products = pool.query(`SELECT * FROM product;`);
  try {
    return products;
  } catch (err) {
    return console.error('Error executing query', err.stack);
  }
}

export function createProduct(newProduct: {
  name: string;
  price: number;
  stock: number;
}) {
  try {
    return pool.query(
      `
            INSERT INTO product(name, price, stock) 
            VALUES ('${newProduct.name}',${newProduct.price},${newProduct.stock})
            RETURNING *;
            `
    );
  } catch (err) {
    return console.error('Error executing query', err.stack);
  }
}

// todo: look up SQL way for PUT / PATCH requests
export function updateProduct(
  id: number,
  updatedProduct: { name: string; price: number; stock: number }
) {
  //   [id] = updatedProduct;
  //   return product;
  try {
    return pool.query(
      // unclear if the id should be $4 or $1 depending on structure of table.
      'UPDATE products SET name = $1, price = $2 , stock = $3 WHERE id = $4',
      [updatedProduct.name, updatedProduct.price, updatedProduct.stock]
      //   (error, results) => {
      //     if (error) {
      //       throw error;
      //     }
      //     response.status(200).send(`User modified with ID: ${id}`);
      //   }
    );
  } catch (err) {
    return console.error('Error executing query', err.stack);
  }
}

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { name, email } = request.body;

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// };

// export function updateTrip(
//   id: number,
//   updatedProduct: { location: string; mileage: number }
// ) {
//   products[id] = updatedProducts;
//   return trips;
// }

// export function deleteTrip(id: number) {
//   trips.splice(id, 1);
//   return trips;
// }
