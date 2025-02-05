import React, { useEffect } from 'react';
import $ from 'jquery';

import '../../css/custom.css';

function Menu() {

  return (
    <div class="custombg"  >
      <section class="food_section layout_padding-bottom">
        <div class="container ">
          <div class="heading_container heading_center">
            <h2>
              Our Menu
            </h2>
          </div>

          <ul class="filters_menu">
            <li class="active" data-filter="*">All</li>
            <li data-filter=".burger">Burger</li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li>
          </ul>

          <div class="filters-content">
            <div class="row grid">
              <div class="col-sm-6 col-lg-4 all pizza">
                <div class="box">
                  <div>
                    <div class="img-box">
                      <img src="./images/f1.png" alt=""/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Delicious Pizza
                      </h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div class="options">
                        <h6>
                          $20
                        </h6>
                        <a class="cart_link customcart_menu" href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 all burger">
                <div class="box">
                  <div>
                    <div class="img-box">
                      <img src="./images/f2.png" alt=""/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Delicious Burger
                      </h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div class="options">
                        <h6>
                          $15
                        </h6>
                        <a class="cart_link customcart_menu" href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 all pizza">
                <div class="box">
                  <div>
                    <div class="img-box">
                      <img src="./images/f3.png" alt=""/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Delicious Pizza
                      </h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div class="options">
                        <h6>
                          $17
                        </h6>
                        <a class="cart_link customcart_menu" href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 all pasta">
                <div class="box">
                  <div>
                    <div class="img-box">
                      <img src="./images/f4.png" alt=""/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Delicious Pasta
                      </h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div class="options">
                        <h6>
                          $18
                        </h6>
                        <a class="cart_link customcart_menu" href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 all fries">
                <div class="box">
                  <div>
                    <div class="img-box">
                      <img src="./images/f5.png" alt=""/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        French Fries
                      </h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div class="options">
                        <h6>
                          $10
                        </h6>
                        <a class="cart_link customcart_menu" href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 all pizza">
                <div class="box">
                  <div>
                    <div class="img-box">
                      <img src="./images/f6.png" alt=""/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Delicious Pizza
                      </h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div class="options">
                        <h6>
                          $15
                        </h6>
                        <a class="cart_link customcart_menu" href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 all burger">
                <div class="box">
                  <div>
                    <div class="img-box">
                      <img src="./images/f7.png" alt=""/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Tasty Burger
                      </h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div class="options">
                        <h6>
                          $12
                        </h6>
                        <a class="cart_link customcart_menu" href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 all burger">
                <div class="box">
                  <div>
                    <div class="img-box">
                      <img src="./images/f8.png" alt=""/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Tasty Burger
                      </h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div class="options">
                        <h6>
                          $14
                        </h6>
                        <a class="cart_link customcart_menu" href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 all pasta">
                <div class="box">
                  <div>
                    <div class="img-box">
                      <img src="./images/f9.png" alt=""/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Delicious Pasta
                      </h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div class="options">
                        <h6>
                          $10
                        </h6>
                        <a class="cart_link customcart_menu" href="#">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              View More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
