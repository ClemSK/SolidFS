import { createRouteAction, useRouteData } from 'solid-start';
import { createTrip } from '~/lib/trips';
import server$ from 'solid-start/server';

export default function Trips() {
  // bring the route data into our component
  const trips: any = useRouteData();
  // Define an RPC call of what we want to run on the server
  const makeTrip = server$(async (trip) => createTrip(trip));
  // define a form for creating a trip using solid-states action system
  const [_, { Form }]: any = createRouteAction(
    async (formData: any): Promise<any> => {
      // create the new trip object
      const trip = {
        location: formData.get('location'),
        mileage: formData.get('mileage'),
      };
      // pass object RPC call to create new trip on server
      makeTrip(trip);
      // shopProduct(product);
    }
  );
  return (
    <div>
      <ul>
        {trips()?.map((trip: any) => (
          <li>
            {trip.location} - mileage: {trip.mileage}
          </li>
        ))}
      </ul>
      <Form>
        <input type="input" name="location" placeholder="location" />
        <input type="number" name="mileage" placeholder="mileage" />
        <input type="submit" />
      </Form>
    </div>
  );
}
