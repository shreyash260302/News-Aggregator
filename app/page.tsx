"use client";

import { useState, useEffect } from "react";
import { fetchNews } from "../lib/fetchNews";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";

// Define the structure of an article
interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string; // Optional image URL
}

const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]); // Using the Article interface
  const [selectedCategory, setSelectedCategory] = useState<string>("business");

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews(selectedCategory);
      setArticles(news);
    };

    getNews();
  }, [selectedCategory]);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-lg text-white font-semibold transition duration-300 ease-in-out 
                ${selectedCategory === category ? 'bg-blue-600' : 'bg-gray-500 hover:bg-blue-400'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {articles?.length > 0 ? (
            articles.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description}
                url={article.url}
                imageUrl={article.urlToImage || "https://via.placeholder.com/150"}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-white">Loading articles...</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
