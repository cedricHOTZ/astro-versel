import { column, defineDb, defineTable } from 'astro:db';

const Meal = defineTable({

columns:{
    id:column.number({primaryKey:true}),
    title:column.text(),
    description: column.text(),
    image:column.text(),
    imageAlt:column.text(),
    published:column.date(),
    // authorId:column.number({references:() => Author.columns.id}),
    authorName:column.text(),
},

});

// https://astro.build/config
export default defineDb({
  tables:{
  Meal,
  }
});