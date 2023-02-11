import {
  createRouteAction,
  // useRouteData
} from 'solid-start';
// import { createTrip } from '~/lib/trips';
import server$ from 'solid-start/server';
import { createProduct } from '~/lib/products';
import styles from '../styles/components/Products.module.scss';

export default function Trips() {
  // @ts-ignore
  //   const dbName = import.meta.env.VITE_POSTGRES_DB;

  // bring the route data into our component
  //   const trips: any = useRouteData();
  //   const products: any = useRouteData();
  // Define an RPC call of what we want to run on the server
  //   const makeTrip = server$(async (trip) => createTrip(trip));
  const shopProduct = server$(async (product) => createProduct(product));
  console.log('shopProduct', shopProduct);
  // define a form for creating a trip using solid-states action system
  const [_, { Form }]: any = createRouteAction(
    async (formData: any): Promise<any> => {
      // create the new trip object
      const product = {
        name: formData.get('name'),
        price: formData.get('price'),
        stock: formData.get('stock'),
      };
      // pass object RPC call to create new trip on server
      shopProduct(product);
      //   console.log('shopProduct(product)', shopProduct(product));
      // shopProduct(product);
    }
  );
  return (
    <div>
      {/* <ul>
        {products()?.map((product: any) => (
          <li>
            product: {product.name}- price: {product.price}- stock:
            {product.stock}
          </li>
        ))}
      </ul> */}
      {/* <div>{dbName}</div> */}
      <div class={styles.prodGridContainer}>
        <div class={styles.prodCard}>prod 1</div>
        <div class={styles.prodCard}>prod 2</div>
        <div class={styles.prodCard}>prod 3</div>
        <div class={styles.prodCard}>prod 4</div>
      </div>

      <Form>
        <input type="input" name="name" placeholder="name" />
        <input type="number" name="price" placeholder="price" />
        <input type="number" name="stock" placeholder="stock" />
        <input type="submit" />
      </Form>
    </div>
  );
}
