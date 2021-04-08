"use strict";

const { db } = require("./server/db");
const app = require("./server");
const PORT = 3000;

const port = process.env.PORT || PORT; // this can be very useful if you deploy to Heroku!

db.sync().then(() => {
  //console.log('db synced')
  app.listen(PORT, () =>
    console.log(`Your server, listening on port  ${PORT}`)
  );
});
