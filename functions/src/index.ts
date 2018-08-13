import * as functions from 'firebase-functions';
// import * as express from "express";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

// const express = require('express');
const cors = require('cors')({ origin: true });


exports.helloWorld = functions.https.onRequest((request, response) => {
    let data = {
        data : "Hello from Firebase!"
    };
    cors(request, response, () => {
        let res = JSON.stringify(data)
        response.send(res);
    });
});