import './Card.css';

function Card(props) {

    return <div className="card">{props.children}</div>;

    /*
    Use those when you have other css styles from other css files:
        const classes = "card" + props.className;   
        return <div className={classes}>{props.children}</div>;
     */

}

export default Card;