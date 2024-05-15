const axios = require("axios");
const { text } = require("body-parser");
const cheerio = require("cheerio");

const url = "https://www.bbc.com/news";

async function scrape() {
  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    const articles = [];
    $("h2").each((i, el) => {
      const title = $(el).text();

      articles.push({
        title
      });
    });

    console.log(articles);
  } catch (error) {
    console.error("error fetching", error);
  }
}

scrape();
