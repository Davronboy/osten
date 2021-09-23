import './Section5.css'



import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons'
import { faAccusoft } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faList } from '@fortawesome/free-solid-svg-icons'

const Section5 = () => {
    return (
        <div className="section5-obwiy">
            <div className="container">
                <div className="section5-title text-center">
                    <h1>Преимущества</h1>
                    <hr className="section5-chizu" />
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 col-xl-4 mt-4 zdvig">
                        <div className="section5-div ">
                            <div className="carddsygdy text-center">
                                <div className="circle mb-3"> <FontAwesomeIcon icon={faAccusoft} className="section5-icon" /> </div>
                                <h4 className="mb-3">Поиск и инновации</h4>
                                <p>Мы ведем постоянный поиск и внедряем <br /> инноваций</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 mt-4 zdvig">
                        <div className="section5-div ">
                            <div className="carddsygdy text-center">
                                <div className="circle mb-3"> <FontAwesomeIcon icon={faThumbsUp} className="section5-icon" /> </div>
                                <h4 className="mb-3">Качество и цена</h4>
                                <p>Предложение лифтов и эскалаторов высокого  качества по конкурентным ценам</p>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 mt-4 zdvig">
                        <div className="section5-div ">
                            <div className="carddsygdy text-center">
                                <div className="circle mb-3"> <FontAwesomeIcon icon={faUser} className="section5-icon" /> </div>
                                <h4 className="mb-3">Индивидуальный подход</h4>
                                <p>Индивидуальный и гибкий подход к каждому клиенту</p>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 mt-4 zdvig">
                        <div className="section5-div ">
                            <div className="carddsygdy text-center">
                                <div className="circle mb-3"> <FontAwesomeIcon icon={faList} className="section5-icon" /> </div>
                                <h4 className="mb-3">Широкий ассортимент</h4>
                                <p>Начиная с решений, оптимизированных для жилых и офисных зданий, заканчивая <br /> сложными проектами с эскалаторами и <br /> высокоскоростными лифтами</p>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 mt-4 zdvig">
                        <div className="section5-div ">
                            <div className="carddsygdy text-center">
                                <div className="circle mb-3"> <FontAwesomeIcon icon={faCheck} className="section5-icon" /> </div>
                                <h4 className="mb-3">Гибкость</h4>
                                <p>Гибкость технологических решений <br /> и собственных прогнозов, ориентированных на <br /> потребности каждого здания</p>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section5
