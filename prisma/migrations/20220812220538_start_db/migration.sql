-- CreateTable
CREATE TABLE "donors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "donors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "institutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutionCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "institutionCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donorsInstitutions" (
    "id" SERIAL NOT NULL,
    "donorId" INTEGER NOT NULL,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "donorsInstitutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutionArticles" (
    "id" SERIAL NOT NULL,
    "institutionId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "institutionArticles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "donors_email_key" ON "donors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "institutionCategories_name_key" ON "institutionCategories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "articles_name_key" ON "articles"("name");

-- AddForeignKey
ALTER TABLE "institutions" ADD CONSTRAINT "institutions_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "institutionCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donorsInstitutions" ADD CONSTRAINT "donorsInstitutions_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "donors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donorsInstitutions" ADD CONSTRAINT "donorsInstitutions_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "institutionArticles" ADD CONSTRAINT "institutionArticles_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "institutionArticles" ADD CONSTRAINT "institutionArticles_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
