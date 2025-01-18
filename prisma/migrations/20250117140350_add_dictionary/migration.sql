/*
  Warnings:

  - You are about to drop the `posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posts_images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts_images" DROP CONSTRAINT "posts_images_post_id_fkey";

-- DropTable
DROP TABLE "posts";

-- DropTable
DROP TABLE "posts_images";

-- CreateTable
CREATE TABLE "type_of_cutting" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "type_of_cutting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sort" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "sort_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catch_area" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "catch_area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_of_processing" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "type_of_processing_pkey" PRIMARY KEY ("id")
);
