import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing");
}

const cached = (
  globalThis as typeof globalThis & {
    mongoose?: {
      conn: typeof mongoose | null;
      promise: Promise<typeof mongoose> | null;
    };
  }
).mongoose || {
  conn: null,
  promise: null,
};

(
  globalThis as typeof globalThis & {
    mongoose?: {
      conn: typeof mongoose | null;
      promise: Promise<typeof mongoose> | null;
    };
  }
).mongoose = cached;

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}

export default dbConnect;
