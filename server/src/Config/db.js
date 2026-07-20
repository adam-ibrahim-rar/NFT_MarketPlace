import mongoose from "mongoose";
const Connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("db conected succesfuly");
  } catch (error) {
    console.log("db conected unsuccesfuly" + error);
  } 
};
export default Connectdb