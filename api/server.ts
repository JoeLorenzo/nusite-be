import express from "express";
import { ApolloServer } from "apollo-server-express";

const app = express();

app.use('/', (req, res) => {
  res.send('Checking Tests')
})
// const server = new ApolloServer({});

// server.applyMiddleware({ app, cors: false });

export default app;
