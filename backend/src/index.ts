import http from "http";
import app from "./app";
import { env } from "./config/env";
import { connectDB } from "./config/db";

async function main(): Promise<void> {
  await connectDB();

  const server = http.createServer(app);

  server.listen(env.PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${env.PORT}`);
  });
}

main();