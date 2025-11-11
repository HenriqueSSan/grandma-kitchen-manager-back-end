/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Product";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "qty_minium" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");
