/*
  Warnings:

  - You are about to drop the `catch_area` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sort` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type_of_cutting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type_of_processing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "catch_area";

-- DropTable
DROP TABLE "sort";

-- DropTable
DROP TABLE "type_of_cutting";

-- DropTable
DROP TABLE "type_of_processing";

-- CreateTable
CREATE TABLE "types_of_cutting" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "types_of_cutting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sorts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "sorts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catch_areas" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "catch_areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types_of_processing" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "types_of_processing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
