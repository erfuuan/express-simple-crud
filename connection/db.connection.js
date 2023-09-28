import mongoose from 'mongoose';

const connectWithRetry = async () => {
  // try {
  // console.log('try to connnect to mongo for first time...')
  await mongoose.connect('mongodb://localhost:27017/simpleCrud', {
    serverSelectionTimeoutMS: 1000, // Timeout after 5s instead of 30s
    // socketTimeoutMS: 10, //
  });
  console.log("dbConnected ")
  return { statusCode: 200, message: 'DB connected' };
};
export default connectWithRetry 