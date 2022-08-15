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
  
  await prisma.$queryRaw`INSERT INTO institutions ("name", "description", "picture", "video", "categoryId", "contact") VALUES ('BiotecAmbiental', 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/11/meio_ambiente_universidade_federal_de_lavras.jpg', 'https://www.youtube.com/watch?v=lWalZjpP0MY', 'Combatemos o Problema do Acesso à Água, Saneamento Básico e Moradia no Brasil.', 2, '9839811821')`;
  await prisma.$queryRaw`INSERT INTO institutions ("name", "description", "picture", "video", "missão", "categoryId", "contact") VALUES ('ABC', 'https://img.imageboss.me/revista-cdn/cdn/34418/118d6a49e39cc8f758ea1572861a509fdfd10f00.jpg?1613772124', 'https://youtu.be/R17fEAa5h4A', 'Somos a ONG que Trabalha c/ Crianças e Adolescentes em Situação de Vulnerabilidade Social. Ajude a Passos da Criança a Transformar o Mundo.', 'Promover uma educação de qualidade para todos os alunos, levando-os a construir sua história com responsabilidade, dignidade e autonomia, contribuindo para uma sociedade mais justa, fraterna e feliz.' , 2, '6724807117')`;
  await prisma.$queryRaw`INSERT INTO institutions ("name", "description", "picture", "video", "values", "categoryId", "contact") VALUES ('PetÉvida', 'https://www.petz.com.br/blog/wp-content/uploads/2020/10/ong-de-animais-abandonados-3.jpg', 'https://youtu.be/BGlCdSP2I3A', 'A ONG São Lázaro, sediada em Fortaleza - CE, é uma entidade sem fins lucrativos que luta por uma vida melhor para os animais abandonados.', 'Transparência. Responsabilidade. Respeito. Amor.', 3, '6927439636')`;
  await prisma.$queryRaw`INSERT INTO institutions ("name", "description", "picture", "values", "categoryId", "contact") VALUES ('DoceLar', 'https://www.seven7imoveis.com.br/blog/wp-content/uploads/2017/02/familia-capa-4.jpg', 'Transparência. Responsabilidade. Respeito. Amor.', 4, '1731371076')`;
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });