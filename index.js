// const express = require("express");
// const packages = require("./data/tour.js");

// const app = express();
// let port = 7000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/packages", (req, res) => {
//   const { des } = req.query;

//   if (des) {
//     const filtered = packages.filter((pkg) =>
//       pkg.name.includes(des) || pkg.description.includes(des)
//     );
//     return res.json(filtered);
//   }

//   res.json(packages);
// });

// app.get("/packages/:id", (req, res) => {
//   const packageId = parseInt(req.params.id);
//   const package = packages.find((pkg) => pkg.id === packageId);
//   if (package) {
//     res.json(package);
//   } else {
//     res.status(404).json({ error: "Package not found" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



//______________________________________________________________________________________________________________


//req.header is to send token in the header and req.query is to send token in the query string.
//res.send is to send a response from server back to the client.
//  res.json is to send a JSON response back to the client. 
// res.status is to set the HTTP status code of the response.
//MVC ko use karke hume data ko organise karna hota hai.
//  Model, View, Controller ka use karke hum data ko alag alag layers me organize karte hai.

//model is database se data ko handle karta hai, (interact with db)
// view is user interface ko handle karta hai aur user ko data dikhata hai.
//  controller is handling logic between model and view ko handle karta hai.


// 4 folders banate hai MVC me, model, view, controller aur routes.

//_________________________________________________________________________________________________________________________

//model - controller p - fir route p - fir index.js p - fir server start hoga aur client ko response milega.
//this is bottom to top approach prefferable

const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev")); //morgan is a logger tool which is used to log the request and response in the console for debugging purpose.
const tourRoute = require("./routes/tourRoute");

app.use(express.json()); //app.use is for middleware , authentication and autherization purpose
app.use('/api', tourRoute);

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
//logger is tool keeping the log of the request and response in the console for debugging purpose.
//  It is a middleware function that is called before the request is sent to the controller. 
// It is used to log the request and response in the console for debugging purpose.
//logger tool is MOrgan as readymate tool 