const prisma = require("../prisma");
const seed = async () => {


  const createUsers = async () => {
    const users = [
        {name: "Fred", email: "fred@google.com", password: "test"}, 
        {name: "Jack", email: "jack@google.com", password: "test1"},
        {name: "Thomas", email: "thomas@google.com", password: "test3"},
    ]
    await prisma.user.createMany({data: users});
  };


  const createProducts = async () => {
    const products = [
      {name: "Couch", price: 49.99, image: "yahoo.com"},
      {name: "Table", price: 29.99, image: "aol.com"}
    ]
    await prisma.product.createMany({data: products});
  };

  const createPickUps = async () => {
    const pickUps = [
      {notes: "Coming a day early", userId: 1, pickUpDate: new Date ("2025-04-16"), productId: 1}
    ]
    await prisma.pickUp.createMany({data: pickUps})
  }



await createUsers();
await createProducts();
await createPickUps();
};


seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });