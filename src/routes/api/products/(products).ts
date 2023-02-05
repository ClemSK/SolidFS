// json function for sending json responses
import { APIEvent, json } from 'solid-start';
import { getProducts, createProduct, updateProduct } from '~/lib/products';

export async function GET() {
  return json(await getProducts());
}

export async function POST({ request }: any) {
  // get the request body
  const body = await new Response(request.body).json();
  console.log('request', request);
  return json(createProduct(body));
}

export async function PUT({ request, params }: APIEvent) {
  // get the request body
  const id = await new Response(params.id).json();
  const body = await new Response(params.updatedProduct).json();
  console.log('params', params);
  console.log('request', request);
  return json(updateProduct(id, body));
}
