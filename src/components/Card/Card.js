function Card(props) {
  
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <li className="card">
      <button type="button" className="card__button-delete"></button>
      <img
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="card__item">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-area">
          <button className="card__button-like"></button>
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
