const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayNews(data.articles);
  } catch (error) {
    console.error("There was an error", error);
  }
}

fetchNews();

function displayNews(articles) {
  const newsCard = document.querySelector("#news");
  const row = document.createElement("div");
  row.classList.add("row");

  for (const article of articles) {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("column");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const image = document.createElement("img");
    image.classList = "card-img";
    image.src = article.urlToImage;
    cardDiv.appendChild(image);

    const title = document.createElement("h4");
    title.textContent = article.title;
    cardDiv.appendChild(title);

    const description = document.createElement("p");
    description.textContent = article.description;
    cardDiv.appendChild(description);

    const source = document.createElement("a");
    source.textContent = article.source.name;
    source.setAttribute("href", article.url);
    source.setAttribute("target", "_blank");
    cardDiv.appendChild(source);

    articleDiv.appendChild(cardDiv);
    row.appendChild(articleDiv);
  }

  newsCard.appendChild(row);
}
