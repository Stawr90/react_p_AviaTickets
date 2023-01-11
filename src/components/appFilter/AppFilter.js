import {useState} from 'react';

import './appFilter.scss';

const AppFilter = (props) => {
    const {currentStops} = props;

    const [checkAll, setCheckAll] = useState()
    const [check0, setCheck0] = useState();
    const [check1, setCheck1] = useState();
    const [check2, setCheck2] = useState();
    const [check3, setCheck3] = useState();
    
    const stopsEnd = (val) => {
        currentStops(val);

        switch (val) {
            case -1:
                setCheckAll(!checkAll);
                setCheck0(false);
                setCheck1(false);
                setCheck2(false);
                setCheck3(false);
                break;
            case 0:
                setCheckAll(false);
                setCheck0(!check0);
                break;
            case 1:
                setCheckAll(false);
                setCheck1(!check1);
                break;
            case 2:
                setCheckAll(false);
                setCheck2(!check2);
                break;
            case 3:
                setCheckAll(false);
                setCheck3(!check3);
                break;  
        }
    }

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
                    <input className="form-check-input" type="checkbox" value="-1" id="flexCheckDefault"
                    checked={checkAll}
                    onChange={() => stopsEnd(-1)}></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        Все
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="0" id="flexCheckDefault"
                    checked={check0}
                    onChange={() => stopsEnd(0)}></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        Без пересадок
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="1" id="flexCheckDefault"
                    checked={check1}
                    onChange={() => stopsEnd(1)}></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        1 пересадка
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="2" id="flexCheckDefault"
                    checked={check2}
                    onChange={() => stopsEnd(2)}></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        2 пересадки
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="3" id="flexCheckDefault"
                    checked={check3}
                    onChange={() => stopsEnd(3)}></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        3 пересадки
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AppFilter;