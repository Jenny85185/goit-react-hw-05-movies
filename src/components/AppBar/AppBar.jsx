import { FcHome, FcFilm } from 'react-icons/fc';
import { Header, Nav, NavLinks } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home', icon: FcHome },
  { href: 'movies', text: 'Movies', icon: FcFilm },
];

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavLinks to={href} key={href}>
            <Icon size={22} />
            {text}
          </NavLinks>
        ))}
      </Nav>
    </Header>
  );
};