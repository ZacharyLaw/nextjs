// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
//https://5buspwc.vercel.app/api/hello
const hello = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};

export default hello;
