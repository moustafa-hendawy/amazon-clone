// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51PWzP62KCPwGbn5nRCo9Qu9ba7KJ6DEnvWZdyXTfYMd1OM5VDc2qMgphAu8jtvmoyQvf9KjR4069AQnnIyNauH1o00RfqE2lNs");

// API

// -App config
const app = express();
app.use(express.json());

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("payments/create", async (req, res) => {
    const total = req.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    // ok -created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

// - Listen Command
exports.api = functions.https.onRequest(app);

// example endpoint




// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe");
// http://127.0.0.1:5001/challenge-81c50/us-central1/api