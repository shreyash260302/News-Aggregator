
const API_KEY = '891a9586829e4c2c989e859b19f58673';  // Replace with your NewsAPI key

export const fetchNews = async (category: string) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`
  );
  const data = await res.json();
  return data.articles;
};
