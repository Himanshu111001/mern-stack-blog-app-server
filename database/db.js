import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@blog-app.4ntwaro.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error while connecting to database", error);
  }
};

export default Connection;
