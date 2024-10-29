import React from 'react'

function Offers() {
    return (
        <div>
            <section class="offer_section layout_padding-bottom">
                <div class="offer_container">
                    <div class="container ">
                        <div class="row">
                            <div class="col-md-6  ">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="./images/o1.jpg" alt=""/>
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            Tasty Thursdays
                                        </h5>
                                        <h6>
                                            <span>20%</span> Off
                                        </h6>
                                        <a href="">
                                            Order Now  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6  ">
                                <div class="box ">
                                    <div class="img-box">
                                        <img src="./images/o2.jpg" alt=""/>
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                            Pizza Days
                                        </h5>
                                        <h6>
                                            <span>15%</span> Off
                                        </h6>
                                        <a href="">
                                            Order Now  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Offers

