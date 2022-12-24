import Logo from '../../resources/img/aviasales-5.svg';

import './appHeader.scss';

const AppHeader = () => {
    return (
        <div className="logo">
            <img src={Logo} alt="logo"></img>
        </div>
    )
}

export default AppHeader;