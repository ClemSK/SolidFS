// json function for sending json responses
import { json } from 'solid-start';
import { getProducts, createProduct } from '~/lib/products';

export async function GET() {
  //   const getProduct = () => {
  //     try {
  //       json(getProducts());
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // export async function GET() {
  // return the array of trips
  //   return json(getProduct());
  return json(await getProducts());
  //   return json(getTrips());
  //   return json({ message: 'this is the GET route' });
}
// export async function POST(stuff: any) {
//   console.log('stuff: ', stuff);
//   return json({ message: 'this is the POST route' });
// }
export async function POST({ request }: any) {
  // get the request body
  const body = await new Response(request.body).json();
  //   console.log('body', body);
  console.log('request', request);
  // create new trip
  //   createProduct(body);
  //   console.log('createProduct(body)', createProduct(body));
  // return all trips
  //   console.log('json(getProducts())', json(getProducts()));
  //   ! to see the data come back uncomment ln 35
  //   return json(body);
  return json(createProduct(body));
}
