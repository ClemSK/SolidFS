import Protected from '../../components/Protected';
import Nav from '../../components/Nav';

export const { routeData, Page } = Protected((session) => {
  return (
    <main>
      <Nav />
      <h1>This is a proteced route</h1>
    </main>
  );
});

export default Page;
