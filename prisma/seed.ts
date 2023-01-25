import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const user_1 = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Doug Flonk',
      address: '12 Flonk stret, PlaceLand',
      email: 'Flonk@FlonkMail.com',
      pw: 'FlonkFlonk',
    },
  });
  console.log({ user_1 });

  const prod_1 = await prisma.products.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Mug',
      price: 10,
      stock: 5,
    },
  });
  console.log({ prod_1 });

  //   const ordr_1 = await prisma.ordr.upsert({
  //     where: { id: 1 },
  //     update: {},
  //     create: {
  //     //   id: 1,
  //     //   user: 1,
  //     },
  //   });
  //   console.log({ ordr_1 });

  //   todo: create item seed
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // ? what does this do?
    // process.exit(1);
  });

// Customer

// insert into cust (id, name) values ('DF', 'Douglas Fairbanks');
// insert into cust (id, name) values ('BK', 'Buster Keaton');
// insert into cust (id, name) values ('RV', 'Rudolph Valentino');
// insert into cust (id, name) values ('ML', 'Myrna Loy');

// Product

// insert into prod (id, name, price, stock) values ('HUB1', 'USB Hub 4x', 15.90, 5);
// insert into prod (id, name, price, stock) values ('SD08', 'SDHC Card 8 GB', 5.80, 10);
// insert into prod (id, name, price, stock) values ('HD05', 'HD IDE 500 GB', 55.90, 2);
// insert into prod (id, name, price, stock) values ('MON1', 'LCD Monitor 19 XL', 65.90, 2);

// Order

// insert into ordr (id, cust, odate) values (1, 'DF', '2014-01-13');
// insert into ordr (id, cust, odate) values (2, 'RV', '2014-02-17');
// insert into ordr (id, cust, odate) values (3, 'BK', '2014-03-12');
// insert into ordr (id, cust, odate) values (4, 'DF', '2014-03-23');

// Item

// insert into item (prod, qty, ordr) values ('HUB1', 1, 1);
// insert into item (prod, qty, ordr) values ('HD05', 2, 1);
// insert into item (prod, qty, ordr) values ('MON1', 1, 2);
// insert into item (prod, qty, ordr) values ('HD05', 1, 2);
// insert into item (prod, qty, ordr) values ('HD05', 1, 3);
// insert into item (prod, qty, ordr) values ('MON1', 1, 4);
