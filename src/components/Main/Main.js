import React from "react";
import {api} from "../utils/api.js";

function Main(props) {
 
  const [userName, setUserName] = React.useState(props.name);
  const [userDescription, setuserDescription] = React.useState(props.about);
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getInitialUserInfo()
    .then((res) => {
      setUserName(res.name);
      setuserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.log(`Произошла ошибка ${err}`)
    })
  })


  return(
    <main className="content section-content">
      <section className="profile section-profile">
        <button aria-label="Add" type="button" className="profile__button-edit-image" onClick={props.onEditAvatar}>
          <img className="profile__image" src={userAvatar} alt="Ваша фотография"/>
        </button>
        <div className="profile__information">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about">{userDescription}</p>
          </div>
          <button aria-label="Add" type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
        </div>
          <button aria-label="Add" type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="section-elements">
        <ul className="elements">
        </ul>
      </section>
    </main>
  )
}

export default Main