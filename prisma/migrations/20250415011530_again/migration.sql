/*
  Warnings:

  - Added the required column `productId` to the `PickUp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PickUp" ADD COLUMN     "productId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PickUp" ADD CONSTRAINT "PickUp_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
