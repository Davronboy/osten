import React from 'react'
import "./Section2.css"
import * as FaIcons from "react-icons/fa";


const Section2 = () => {
    return (
        <div className="our">
            <div className="container">
                <div className="title text-center">
                    <h1>Наши услуги</h1>
                    <hr className="line" />
                    <div className="row mt-5">
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-3 text-center ikki">
                            <div className="h-100 box2">
                                <div className="section2-card py-5 px-3 h-100">
                                    <FaIcons.FaPencilRuler className=" icon" />
                                    <h4 className="mb-3">ПРОЕКТИРОВАНИЕ</h4>
                                    <p>ПОДРОБНО ПРО ПРОЕКТИРОВАНИЕ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-3 text-center ikki">
                            <div className="h-100 box2">
                                <div className="section2-card py-5 px-3 h-100">
                                    <FaIcons.FaToolbox className=" icon" />
                                    <h4 className="mb-3">МОНТАЖ</h4>
                                    <p>ПОДРОБНО ПРО МОНТАЖ</p>
                                </div>
                            </div>
                        </div>  <div className="col-xl-3 col-lg-6 col-md-6 mt-3 text-center ikki">
                            <div className="h-100 box2">
                                <div className="section2-card py-5 px-3 h-100">
                                    <FaIcons.FaCreativeCommonsShare className=" icon" />
                                    <h4 className="mb-3">ЗАПАСНЫЕ ЧАСТИ</h4>
                                    <p>ПОДРОБНО ПРО ЗАПАСНЫЕ ЧАСТИ</p>
                                </div>
                            </div>
                        </div>  <div className="col-xl-3 col-lg-6 col-md-6 mt-3 text-center ikki">
                            <div className="h-100 box2">
                                <div className="section2-card py-5 px-3 h-100">
                                    <FaIcons.FaTools className=" icon" />
                                    <h4 className="mb-3">РЕМОНТ</h4>
                                    <p>ПОДРОБНО ПРО РЕМОНТ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
