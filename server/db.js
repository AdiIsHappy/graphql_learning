// db.js
const mongoose = require('mongoose');

const dbURI = "mongodb+srv://ad2004sahu:vSDg8Abd3TFmYruR@clust.mihfrgi.mongodb.net/Clust";

mongoose.connect(dbURI, {
  ssl: true, // Enforce SSL connection
  tlsAllowInvalidCertificates: false
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
});

db.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = db;
