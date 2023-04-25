import React from "react";
import { api } from "../../utils/api.js";
import Card from "../Card/Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setuserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialUserInfo(), api.getInitialCards()])
      .then(([userInfo, cardsInfo]) => {
        setUserName(userInfo.name);
        setuserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);

        const results = cardsInfo.map((item) => ({
          key: item._id,
          createdAt: item.createdAt,
          likes: item.likes,
          link: item.link,
          name: item.name,
          owner: {
            name: item.owner.name,
            about: item.owner.about,
            avatar: item.owner.avatar,
            _id: item.owner._id,
            cohort: item.owner.cohort,
          },
          _id: item._id,
        }));
        setCards(results);
      })
      .catch((err) => {
        console.log(`Произошла ошибка ${err}`);
      });
  }, []);

  return (
    <main className="content section-content">
      <section className="profile section-profile">
        <button
          aria-label="Add"
          type="button"
          className="profile__button-edit-image"
          onClick={props.onEditAvatar}>
          <img
            className="profile__image"
            src={userAvatar}
            alt="Ваша фотография"
          />
        </button>
        <div className="profile__information">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about">{userDescription}</p>
          </div>
          <button
            aria-label="Add"
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}></button>
        </div>
        <button
          aria-label="Add"
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}></button>
      </section>
      <section className="section-elements">
        <ul className="elements">
          {cards.map((card) => {
            return <Card card={card} key={card._id} onCardClick={props.onCardClick}/>;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
