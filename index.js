/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const functions = require("firebase-functions");
const express = require("express");
const app = express();

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({maxInstances: 10});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Simula tus datos (puedes conectar a Firestore o usar tu lógica real)
const galleries = [
  {id: "1", images: [{filename: "img1.jpg", originalname: "Foto 1"}]},
  // ...otros objetos...
];
const writings = [
  {id: "1", title: "Título", content: "Contenido..."},
  // ...otros objetos...
];

// Rutas migradas
app.get("/gallery-data/:id", (req, res) => {
  const gal = galleries.find((g) => g.id === req.params.id);
  res.json(gal || {});
});

app.get("/writing-data/:id", (req, res) => {
  const wr = writings.find((w) => w.id === req.params.id);
  res.json(wr || {});
});

// Exporta como función HTTPS
exports.api = functions.https.onRequest(app);
