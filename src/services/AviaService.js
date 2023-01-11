import Tickets from '../resources/tickets.json';

const AviaService = () => {

    const getAllCharacters = () => {
        const tickets = Tickets.tickets.map(_transformCharacter);
        tickets.sort((a, b) => a.price > b.price ? 1 : -1);
        return tickets;
    }

    const _transformCharacter = (char) => {
        return {
            origin: char.origin,
            origin_name: char.origin_name,
            destination: char.destination,
            destination_name: char.destination_name,
            departure_date: char.departure_date,
            departure_time: char.departure_time,
            arrival_date: char.arrival_date,
            arrival_time: char.arrival_time,
            stops: char.stops,
            price: char.price
        }
    }

    return {getAllCharacters}
}

export default AviaService;