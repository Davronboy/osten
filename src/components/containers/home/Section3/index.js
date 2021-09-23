import { faGlobeAsia, faRunning, faSortAmountUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Section3.css"
const Section3 = () => {
    return (
        <div className="misol">

            <div className="masala">
                <div className="container">
                    <div className="resul text-center hello text-white">
                        <h1>Результаты</h1>
                        <hr className="balo" />
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4 mt-md-2 mt-4 hello text-white">
                            <FontAwesomeIcon icon={faSortAmountUp} className="iconcha" />
                            <h1>300</h1>
                            <p>лифтов в год</p>
                        </div>
                        <div className="col-md-4 mt-md-2 mt-4 hello text-white">
                            <FontAwesomeIcon icon={faGlobeAsia} className="iconcha" />
                            <h1>2</h1>
                            <p>года на рынке</p>
                        </div>
                        <div className="col-md-4 mt-md-2 mt-4 hello text-white">
                            <FontAwesomeIcon icon={faRunning} className="iconcha" />
                            <h1>200</h1>
                            <p>эскалаторов в год</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
