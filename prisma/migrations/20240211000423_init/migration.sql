-- CreateTable
CREATE TABLE "plants" (
    "id" SERIAL NOT NULL,
    "response" JSON,
    "name" VARCHAR(255),

    CONSTRAINT "plants_pkey" PRIMARY KEY ("id")
);
