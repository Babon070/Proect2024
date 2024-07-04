import React from "react";
import "./Products.scss";
import Container from "../../util/Container";
import { useParams } from "react-router-dom";
import UseFetchData from "../../Hooks/useFetchData";
import { FaRegHeart } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Product = () => {
  const getProductID = useParams();
  console.log(getProductID);

  let data = UseFetchData(`/products/${getProductID.id}`);
  let productData = data[0];
  console.log(productData);

  return (
    <section>
      <Container>
        <div>
          {
            <div className="product_wrapper">
              <div className="img">
                {productData.images?.at(0) &&
                productData.images?.at(0).startsWith("https:") ? (
                  <img
                    className="product__img"
                    src={productData.images[0]}
                    alt=""
                  />
                ) : (
                  <img
                    className="product__img"
                    src="https://avatars.mds.yandex.net/get-mpic/6780724/img_id5398870021742881284.jpeg/orig"
                    alt=""
                  />
                )}
              </div>
              <div className="product-item descriptions">
                {productData.description}
              </div>
              <div className="product-item info_contact">info_contact</div>
              {/* ----------------------- */}
              <div className="product-item title">
                <div className="prod_created">
                  <span>{productData.creationAt}</span>
                  <FaRegHeart />
                </div>
                <div>
                  <h2>{productData.title}</h2>
                  <span className="prod_price">${productData.price}</span>
                </div>
                <div className="prod_btns">
                  {/* <RedirectButton
                      className="redirect_btn"
                      pushButton={"/message"}
                      title="Сообщение"
                      type="light"
                    ></RedirectButton>
                    <RedirectButton
                      pushButton="/newPost"
                      title="Elon berish"
                      type="dark"
                    ></RedirectButton> */}

                  <button className="prod_btn dark">Сообщение</button>
                  <button className="prod_btn light">
                    {" "}
                    <IoCallOutline />
                    Показать телефон
                  </button>
                </div>
              </div>
              {/* ----------------------- */}
              <div className="product-item info_user">info_user</div>
              <div className="product-item location">location</div>
            </div>
          }
        </div>
      </Container>
    </section>
  );
};

export default Product;
