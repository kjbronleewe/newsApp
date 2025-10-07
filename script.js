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
  const newsDiv = document.querySelector("#news");
  for (const article of articles) {
    const articleDiv = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h4");
    const description = document.createElement("p");
    image.classList = "card-img";
    image.src = article.urlToImage;
    title.textContent = article.title;
    description.textContent = article.description;
    articleDiv.appendChild(image);
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    newsDiv.appendChild(articleDiv);
  }
}
