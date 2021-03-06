"use strict";

const { db } = require("../server/db");
const { Todos } = require("../server/db/models");

const todos = [
  {
    todo: "Finish seeding the database",
    dueDate: "2021-04-08 17:29:14.098 +00:00",
    completionDate: "2021-04-08 17:29:14.098 +00:00",
  },
  {
    todo: "Write the computed values ",
    dueDate: "2021-04-08 17:29:14.098 +00:00",
  },
];

async function seed() {
  try {
    await db.sync({ force: true });
    console.log("db synced!");

    await Promise.all(
      todos.map((todo) => {
        return Todos.create(todo);
      })
    );

    console.log(`seeded successfully`);
  } catch (error) {
    console.error("SOMETHING WENT WRONG", error);
  }
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
