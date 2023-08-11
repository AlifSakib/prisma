import { PrismaClient } from "@prisma/client";
import app from "./app";

const port = process.env.PORT || 3003;

const prisma = new PrismaClient();

async function main() {
  //   const getAllUsers = await prisma.user.findMany();
  //   console.log(getAllUsers);
  // const postUser = await prisma.user.create({
  //   data: {
  //     email: "alifsakib.com",
  //     name: "alif",
  //   },
  // });
  // console.log(postUser);
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.listen(port, () => {
    console.log(`Server Runing at PORT ${port}`);
  });
}

main();
