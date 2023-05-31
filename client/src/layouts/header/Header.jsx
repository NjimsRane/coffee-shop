import { NavBarDown, NavBarTop } from '../../components';

const Header = () => {
    return (
        <header className='sticky top-0 z-20 mb-4 '>
            <NavBarTop />
            <NavBarDown />
        </header>
    );
};

export default Header;