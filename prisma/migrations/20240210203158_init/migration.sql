-- CreateTable
CREATE TABLE "plants" (
    "id" SERIAL NOT NULL,
    "response" JSON,
    "name" VARCHAR(255),

    CONSTRAINT "plants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plant" (
    "id" SERIAL NOT NULL,
    "response" JSON,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Plant_name_key" ON "Plant"("name");
