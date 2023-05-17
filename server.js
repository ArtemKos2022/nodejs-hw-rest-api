const mongoose = require("mongoose");

const app = require('./app');
// const { error } = require('./schema/contacts');
// qS3Pm67JbgmPeX6D

const DB_HOST = "mongodb+srv://Artem:qS3Pm67JbgmPeX6D>@cluster0.uct32pf.mongodb.net/db-contacts?retryWrites=true&w=majority"
mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });


// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
