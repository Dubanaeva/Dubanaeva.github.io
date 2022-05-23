import React from "react";
import { RiEmotionSadLine } from 'react-icons/ri'
import { getNews } from "../services/NewsService";
import News from "./News";


export default function NewsFeed() {
    const recentNews = getNews({ limit: 3 })
    return (
        <div className="px-4 py-3 bg-white drop-shadow rounded-md">
            <h3 className="pb-1 px-2 font-semibold inline text-xl border-b-2 border-teal-500">Что нового?</h3>
            {recentNews.length ? null : (
                <h3 className="text-lg mt-4">Пока нету ни одной новости <RiEmotionSadLine className="inline" /></h3>
            )}
            {recentNews.map(news => (
                <div className="my-3">
                    <News id={news.id} title={news.title} content={news.content} thumbnailUrl={news.thumbnail_url} />
                </div>
            ))}
        </div>
    )
}