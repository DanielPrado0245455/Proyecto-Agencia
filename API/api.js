import express from "express";
const app = express();
import Amadeus from "amadeus";
import cors from "cors";
import bodyParser from "body-parser"

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var amadeus = new Amadeus({
  clientId: "LCR3NqGMcnAUDk0fDPhecX4N9UaCBCin",
  clientSecret: "2bkyPxxTxsNKTOqM",
});
app.post('/', cors(), (req, res) => {
  console.log(req.body)
  amadeus.referenceData.recommendedLocations
  .get({
    cityCodes: req.body.cityCodes,
    travelerCountryCode: req.body.travelerCountryCode,
  })
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (responseError) {
    res.send(responseError.code);
  });
  })

var PORT = 7000;

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
