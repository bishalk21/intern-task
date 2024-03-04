import express from "express";
const app = express(); // instance of express app (web server)

const PORT = 3000; // port

app.use("/", (req, res, next) => {
  const jf = {
    status: "OK",
    message: "Welcome to the API!",
  };
  res.status(200).json(jf);
});

// executing and listening server
app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
