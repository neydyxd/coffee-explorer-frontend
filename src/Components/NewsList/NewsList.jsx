import React from "react";
import { initialNews } from '../../utils/contains' ;
import NewsListCard from "../NewsListCard/NewsListCard";
function NewsList() {
    return(
        <section className="news">
            <h1 className="news__title">Новости</h1>
            <ul className="news__list">
                {initialNews.map(news => (
                    <NewsListCard
                    news={news}
                    />
                ))}
            </ul>
        </section>
    );

}

export default NewsList;