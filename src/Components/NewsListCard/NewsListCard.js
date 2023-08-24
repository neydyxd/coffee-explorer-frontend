
function NewsListCard({news}) {
    return(
    <li className="news-card">
        <img className="news-card__image" src={news.link} alt={news.shortInfo} />
        <h3 className="news-card__title">{news.name}</h3>
        <p className="news-card__info">{news.shortInfo}</p>
        <button type="click" className="news-card__button">Подробнее</button>
    </li>
    );
}

export default NewsListCard;