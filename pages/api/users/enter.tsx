import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  return res.json(req.body);
}

// 이렇게 처리 함으로 api 에드포인트를 직접 브라우저에 검색했을때 JSON respons를 막을 수 있다.
export default withHandler("POST", handler);
