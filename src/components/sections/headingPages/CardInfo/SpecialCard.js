import {Link} from 'react-router-dom';
export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <h2>{props.name}</h2>
                <h4>{props.price}</h4>
                <p>{props.description}</p>
                <Link className="special-button"to="/order">Order for Delivery</Link>
            </section>
        </article>
    );
}