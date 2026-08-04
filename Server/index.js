import { app } from "./app.js";
import { connectToDB } from "./Config/db.config.js";

const PORT = process.env.PORT || 8000;

connectToDB()
  .then(
    () =>
      app.get("/", (req, res) =>
        res.json({
          message: "Welcome to our Placement tracker Server",
          statusCode: 200,
        }),
      ),

    app.listen(PORT, () =>
      console.log(`Server is running on the PORT :: ${PORT}`),
    ),
  )
  .catch((err) => console.log(`Err While Starting the Server ${err}`));
