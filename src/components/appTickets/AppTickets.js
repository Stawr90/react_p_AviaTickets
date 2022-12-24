import turkish from '../../resources/img/turkish-air.png';
import grayair from '../../resources/img/gray-airline.png';

import './appTickets.scss';

const AppTickets = () => {
    return (
        <div className="tickets">
            <div className="ticket">
                <div className="ticket__buy">
                    <div className="ticket__buy_logo">
                        <img src={turkish} alt="turkish-airlines"/>
                    </div>
                    <button type="button" className="btn btn-warning">Купить <br/>за 21 000Р</button>
                </div>
                <div className="ticket__route">
                    <div className="ticket__route_start">
                        <div className="time">16:20</div>
                        <div className="origin">VVO, Владивосток</div>
                        <div className="date">12 мая 2018, ПТ</div>
                    </div>
                    <div className="ticket__route_transplants">1 пересадка
                        <div className="divider"></div>
                        <img src={grayair} alt="airline"/>
                    </div>
                    <div className="ticket__route_finish">
                        <div className="time">16:20</div>
                        <div className="origin">Тель-Авив, TLV</div>
                        <div className="date">12 мая 2018, ПТ</div>
                    </div>
                </div>
            </div>                    
        </div>
    )
}

export default AppTickets;