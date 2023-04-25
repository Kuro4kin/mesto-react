import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className="header section-header">
      <img src={logo} className="header__logo" alt="Логотип место" />
    </header>
  )
}

export default Header