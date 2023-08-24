import FormulaCard from "../FormulaCard/FormulaCard";
import { menuClassic } from "../../utils/contains";

function FormulaList() {
    return(
        <section className="formula-list">
            <h2 className="formula-list__title">Технико-телогические карты</h2>
            <div className="formula-list__menu">
                <div className="formula-list__menu-container">
                    <button className="formula-list__menu-button" type="click">Весна-лето 2023</button>
                    <button className="formula-list__menu-button" type="click">Классика</button>
                    <button className="formula-list__menu-button" type="click">Фирменные напитки</button>
                    <button className="formula-list__menu-button" type="click">Холодные напитки</button>
                    <button className="formula-list__menu-button" type="click">Авторские чаи</button>
                </div>
            </div>
            <ul className="formula-list__list">
            {menuClassic.map(formula => (
                    <FormulaCard
                    formula={formula}
                    />
                ))}
            </ul>
        </section>
    );
}

export default FormulaList;