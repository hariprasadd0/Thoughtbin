import { getCollection } from "astro:content";
import { SITE } from "@consts";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const SITE_URL = process.env.BASE_URL || "http://localhost:3000";

export const getAllJournal = async () => {
  const journal = (await getCollection("journal"))
    .filter((post: any) => !post.data.draft)
    .sort((a: any, b: any) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, SITE.NUM_POSTS_ON_HOMEPAGE);
  return journal;
};

export const writeJournalToFile = async () => {
  try {
    const journal = await getAllJournal();
    const journalData = journal.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      date: post.data.date.toISOString().split("T")[0],
      url: `${SITE_URL}journal/${post.slug}`,
    }));

    const jsonData = JSON.stringify(journalData, null, 2);

    const dataFolderPath = path.join(process.cwd(), "data");
    const filePath = path.join(dataFolderPath, "journal.json");

    fs.writeFile(filePath, jsonData, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Simplified journal data has been written to journal.json");
      }
    });
  } catch (error) {
    console.error("Error getting journal data:", error);
  }
};
