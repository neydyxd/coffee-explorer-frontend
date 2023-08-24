function FormulaCard({ formula }) {
    return(
        <li className="news-card">
        <img className="news-card__image" src={formula.link} alt={formula.shortInfo} />
        <h3 className="news-card__title">{formula.name}</h3>
        <p className="news-card__info">{formula.espresso}</p>
        <p className="news-card__info">{formula.milk}</p>
        <p className="news-card__info">Основа: {formula.osnova} грамм</p>
        <p className="news-card__info">{formula.ice}</p>
    </li>
    );
}

export default FormulaCard