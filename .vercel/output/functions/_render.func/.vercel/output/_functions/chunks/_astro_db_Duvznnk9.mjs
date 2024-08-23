import { normalizeDatabaseUrl, createLocalDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const dbUrl = normalizeDatabaseUrl(process.env.ASTRO_DATABASE_FILE, "file:///Users/ced/Desktop/astro-db1/.astro/content.db");
const db = createLocalDatabaseClient({ dbUrl });
const Meal = asDrizzleTable("Meal", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Meal", "primaryKey": true } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "Meal", "primaryKey": false, "optional": false } }, "description": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "description", "collection": "Meal", "primaryKey": false, "optional": false } }, "image": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "image", "collection": "Meal", "primaryKey": false, "optional": false } }, "imageAlt": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "imageAlt", "collection": "Meal", "primaryKey": false, "optional": false } }, "published": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "published", "collection": "Meal" } }, "authorName": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "authorName", "collection": "Meal", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

export { Meal as M, db as d };
