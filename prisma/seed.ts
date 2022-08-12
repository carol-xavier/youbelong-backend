import prisma from '../src/config/database.js';

async function main() {

  await prisma.$queryRaw`INSERT INTO "institutionCategories" ("name") VALUES ('Environment')`;
  await prisma.$queryRaw`INSERT INTO "institutionCategories" ("name") VALUES ('Education')`;
  await prisma.$queryRaw`INSERT INTO "institutionCategories" ("name") VALUES ('Animals')`;
  await prisma.$queryRaw`INSERT INTO "institutionCategories" ("name") VALUES ('groupHome')`;

  await prisma.$queryRaw`INSERT INTO articles ("name") VALUES ('Food')`;
  await prisma.$queryRaw`INSERT INTO articles ("name") VALUES ('Clothes')`;
  await prisma.$queryRaw`INSERT INTO articles ("name") VALUES ('Toys')`;
  await prisma.$queryRaw`INSERT INTO articles ("name") VALUES ('Furtniture')`;

  await prisma.$queryRaw`INSERT INTO donors ("name", "email", "password") VALUES ('Teste', 'teste@gmail.com', '12345')`;
  
  await prisma.$queryRaw`INSERT INTO institutions ("name", "description", "categoryId") VALUES ('ABC', 'testetestetestetestetestetestetesteteste', 2)`;
  await prisma.$queryRaw`INSERT INTO institutions ("name", "description", "categoryId") VALUES ('CABiologia', 'testetestetesteteste', 1)`;

  await prisma.$queryRaw`INSERT INTO "donorsInstitutions" ("donorId", "institutionId") VALUES (1, 1)`;
  await prisma.$queryRaw`INSERT INTO "donorsInstitutions" ("donorId", "institutionId") VALUES (1, 2)`;
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });