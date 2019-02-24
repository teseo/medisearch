const ROYAL_INFIRMARY =
  "How many patients waited for more than 8 hours at Royal Infirmary, Edinburgh on December 2018";
const ST_JOHNS =
  "How many patients waited for more than 12 hours at St. Johns, Livingstone on November 2017";

let data = [];
data[ROYAL_INFIRMARY] = {
  TreatmentLocation: "S314H"
};

data[ST_JOHNS] = {
  TreatmentLocation: "S308H",
  Month: "201711"
};

module.exports = data;
