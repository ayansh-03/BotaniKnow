/*
  Warnings:

  - You are about to drop the `Plant` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `plants` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `plants` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "plants" ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "Plant";

-- CreateIndex
CREATE UNIQUE INDEX "plants_name_key" ON "plants"("name");
