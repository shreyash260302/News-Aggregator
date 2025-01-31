// components/NewsCard.tsx
import React from 'react';
import Image from "next/image";

type NewsCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

const NewsCard = ({ title, description, imageUrl, url }: NewsCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <img src={imageUrl} alt={title} width={500} height={300} className="rounded-lg object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <a href={url} className="text-blue-600 text-sm mt-4 inline-block hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
