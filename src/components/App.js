import React from 'react';
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import PopupWithForm from "./PopupWithForm/PopupWithForm.js";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }   

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  } 

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  } 

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
  }

  return (
  <div className="root">
    <div className="page-wrapper">
      <Header />
      <Main 
        name="Жак Ив Кусто"
        about="аквамен"
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm 
        name="profile" 
        title="Редактировать профиль" 
        buttonText="Сохранить" 
        isOpened={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input 
              name="name" 
              type="text" 
              minLength="2" 
              maxLength="40" 
              required 
              className="popup__input popup__input_type_name" 
              placeholder="Имя"/>
            <span className="popup__error name-error"></span>
            <input 
              name="about" 
              type="text" 
              minLength="2" 
              maxLength="200" 
              required 
              className="popup__input popup__input_type_about"
              placeholder="О себе" />
            <span className="popup__error about-error"></span>
          </>} 
        />
      <PopupWithForm name="card" title="Новое место" buttonText="Создать"  onClose={closeAllPopups} isOpened={isAddPlacePopupOpen} children={
        <>
          <input 
            name="title" 
            type="text" 
            minLength="2" 
            maxLength="30" 
            required 
            className="popup__input popup__input_type_card-title" 
            placeholder="Название" />
          <span className="popup__error title-error"></span>
          <input 
            name="link" 
            type="url" 
            required 
            className="popup__input popup__input_type_card-img-link" 
            placeholder="Ссылка на картинку" />
          <span className="popup__error link-error"></span>
        </>}
      />
      <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} children={
        <>
          <input 
            name="avatar" 
            type="url" 
            required 
            className="popup__input popup__input_type_card-img-link" 
            placeholder="Ссылка на картинку" />
          <span className="popup__error avatar-error"></span>
        </>}
      />
      <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да"/> 
   
      <div className="popup popup_type_image-view">
        <div className="popup__wrapper-image">
          <button aria-label="Close" type="button" className="popup__close-button"></button>
          <img className="popup__image" alt="" />
          <p className = "popup__subtitle"></p>
        </div>
      </div>
      <div className="popup popup_type_confirm-delete">
        <div className="popup__wrapper-image">
          <div className="popup__container popup__container_type_confirm-delete">
            <button aria-label="Close" type="button" className="popup__close-button"></button>
              <h2 className="popup__title popup__title_type_confirm-delete">Вы уверены?</h2>
              <button type="submit" className="popup__button">Да</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
