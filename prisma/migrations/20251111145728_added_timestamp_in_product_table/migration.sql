/*
  Warnings:

  - Added the required column `updated_at` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "qty_minium" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_product" ("id", "name", "qty", "qty_minium") SELECT "id", "name", "qty", "qty_minium" FROM "product";
DROP TABLE "product";
ALTER TABLE "new_product" RENAME TO "product";
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
