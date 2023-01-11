import {useState, useEffect} from 'react';

import AviaService from '../../services/AviaService';
import turkish from '../../resources/img/turkish-air.png';
import grayair from '../../resources/img/gray-airline.png';

import './appTickets.scss';

let numTarget = [];

const AppTickets = ({stopsNum, check}) => {
    
    const [ticketsList, setTicketsList] = useState([]);
    const [allFilter, setAllFilter] = useState([]);
    
    const {getAllCharacters} = AviaService();

    useEffect(() => { 
        currentStops(stopsNum);
    }, [stopsNum, check])

    useEffect(() => {
        Request();
    }, [])

    const Request = () => {
        const newArr = getAllCharacters();
        setTicketsList([...newArr]);
    }
    let delFilter = [];
    const currentStops = (num) => {
        const newArr = getAllCharacters();
        if (num < 4 && num > -1) {
            const stops = newArr.filter(item => {
                return item.stops === num;
            })

            const indexTarget = numTarget.indexOf(num);

            if (indexTarget === -1) {
                setAllFilter([...allFilter, ...stops]);
                setTicketsList([...allFilter, ...stops]);
                numTarget.push(num);
            } else {
                numTarget.splice(indexTarget, 1);
                numTarget.forEach(number => {
                    const stops = newArr.filter(item => {
                        return item.stops === number;
                    })
                    delFilter.push(...stops)
                })

                setAllFilter([...delFilter]);
                setTicketsList([...delFilter]);
            }
        } else {
            numTarget = [];
            delFilter = [];
            setAllFilter([...delFilter]);
            setTicketsList([...newArr]);
        }
    }

    const renderItems = (arr) => {
        const items = arr.map((item, i) => {
            const date = ((item.departure_date && item.arrival_date) === '12.05.18') ? '12 мая 2018' : 'Дата неизвестна';

            return (    
                <div className="ticket" key={i}>
                <div className="ticket__buy">
                    <div className="ticket__buy_logo">
                        <img src={turkish} alt="turkish-airlines"/>
                    </div>
                    <button type="button" className="btn btn-warning">Купить <br/>за {item.price}Р</button>
                </div>
                <div className="ticket__route">
                    <div className="ticket__route_start">
                        <div className="time">{item.departure_time}</div>
                        <div className="origin">{item.origin}, {item.origin_name}</div>
                        <div className="date">{date}, ПТ</div>
                    </div>
                    <div className="ticket__route_transplants">{item.stops} пересадка
                        <div className="divider"></div>
                        <img src={grayair} alt="airline"/>
                    </div>
                    <div className="ticket__route_finish">
                        <div className="time">{item.arrival_time}</div>
                        <div className="origin">{item.destination_name}, {item.destination}</div>
                        <div className="date">{date}, ПТ</div>
                    </div>
                </div>
            </div>
            )
        })

        return (
            <div className="tickets">
                {items}            
            </div>
        )
    }

    const items = renderItems(ticketsList);

    return (
        <>
            {items}
        </>
    )
}

export default AppTickets;