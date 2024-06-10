const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongooes = require("mongoose");

const app = express();

mongooes.connect(
  "mongodb+srv://ad2004sahu:vSDg8Abd3TFmYruR@clust.mihfrgi.mongodb.net/Clust"
);
mongooes.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listeninig to port 4000");
});
