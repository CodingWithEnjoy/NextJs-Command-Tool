import path from "path";
import { promises as fs } from "fs";

const dataDirectory = path.join(process.cwd(), "public/data/");
const listPath = path.join(dataDirectory, "/list.json");

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res
        .status(405)
        .send({ message: `${req.method} method not allowed` });
    }

    const hasQuery = Object.keys(req.query).length !== 0;

    if (hasQuery) {
      return getDocument(req, res);
    } else {
      return getDocumentList(res);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error" });
  }
}

async function getDocument(req, res) {
  const filePath = path.join(dataDirectory, `/docs/${req.query.doc}.json`);

  try {
    const fileContents = await fs.readFile(filePath, "utf8");

    return res.status(200).json(JSON.parse(fileContents));
  } catch (error) {
    return res.status(404).end();
  }
}

async function getDocumentList(res) {
  try {
    const fileContents = await fs.readFile(listPath, "utf8");

    return res.status(200).json(JSON.parse(fileContents));
  } catch (error) {
    return res.status(404).end();
  }
}
