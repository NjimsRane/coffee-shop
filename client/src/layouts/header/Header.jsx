import { NavBarDown, NavBarTop } from '../../components';

const Header = () => {
    return (
        <div className='sticky top-0 z-20 mb-4 '>
            <NavBarTop />
            <NavBarDown />
        </div>
    );
};

export default Header;