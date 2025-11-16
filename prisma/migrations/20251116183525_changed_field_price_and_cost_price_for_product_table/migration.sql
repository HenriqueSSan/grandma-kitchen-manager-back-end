/*
  Warnings:

  - You are about to drop the column `cost_price` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `stock` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "brand" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "parent_id" INTEGER,
    CONSTRAINT "brand_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "brand" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL DEFAULT 0,
    "cost_price" DECIMAL NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "category_id" INTEGER,
    "brand_id" INTEGER,
    CONSTRAINT "product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "product_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brand" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_product" ("category_id", "created_at", "description", "id", "name", "sku", "updated_at") SELECT "category_id", "created_at", "description", "id", "name", "sku", "updated_at" FROM "product";
DROP TABLE "product";
ALTER TABLE "new_product" RENAME TO "product";
CREATE UNIQUE INDEX "product_sku_name_key" ON "product"("sku", "name");
CREATE TABLE "new_stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_id" INTEGER NOT NULL,
    "quantity" DECIMAL NOT NULL DEFAULT 0,
    CONSTRAINT "stock_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_stock" ("id", "product_id", "quantity") SELECT "id", "product_id", "quantity" FROM "stock";
DROP TABLE "stock";
ALTER TABLE "new_stock" RENAME TO "stock";
CREATE UNIQUE INDEX "stock_product_id_key" ON "stock"("product_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "brand_name_key" ON "brand"("name");
