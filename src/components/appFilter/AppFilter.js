import './appFilter.scss';

const AppFilter = () => {
    return (
        <div className="filter">
            <div className="currency">
                <h6>валюта</h6>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary">RUB</button>
                    <button type="button" className="btn btn-outline-primary">USD</button>
                    <button type="button" className="btn btn-outline-primary">EUR</button>
                </div>
            </div>
            <div className="transplants">
                <h6>количество пересадок</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        Все
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        Без пересадок
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        1 пересадка
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        2 пересадки
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        3 пересадки
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AppFilter;