import axios from "axios";
import React, { useEffect } from "react";
import UseFetchData from "../../Hooks/useFetchData";
import Container from "../../util/Container";
import "./MainProducts.scss";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const MainProducts = () => {
  const data = UseFetchData("/products?offset=0&limit=20");

  function trimDesc(str) {
    return str.split(" ").slice(0, 4).join(" ") + "...";
  }

  function trimTitle(str) {
    return str.split(" ").splice("2").join(" ") + "...";
  }

  return (
    <section className="products">
      <Container>
        <div className="main__wrapper">
          {data[0].map((product) => (
            <div className="products__item" key={product.id}>
              {/* to={`/product/${product.id}`} */}
              <Link to={`/product/${product.id}`} >
                {product.images?.at(0) &&
                product.images?.at(0).startsWith("https:") ? (
                  <img
                    className="product__img"
                    src={product.images[0]}
                    alt=""
                  />
                ) : (
                  <img
                    className="product__img"
                    src="https://avatars.mds.yandex.net/get-mpic/6780724/img_id5398870021742881284.jpeg/orig"
                    alt=""
                  />
                )}
                <h2>{trimTitle(product.title)}</h2>
              </Link>
              <div className="product__info">
                <p>{trimDesc(product.description)}</p>
                <div className="product__price">
                  <span className="price">${product.price}</span>
                  <div className="like_shop">
                    {/* {likedProducts?.find((p) => p?.id === product.id) ? (
                      <AiFillHeart
                        onClick={() => removeFromLikedProducts(product)}
                        color="red"
                      />
                    ) : (
                      <AiOutlineHeart onClick={() => addToLike(product)} />
                    )} */}

                    {/* {basket?.find((p) => p?.id === product.id) ? (
                      <IoCartSharp
                        onClick={() => removeFromShopProducts(product)}
                        color="red"
                      />
                    ) : (
                      <AiOutlineShoppingCart
                        onClick={() => addToBasket(product)}
                      />
                    )} */}

                    {/* {
                    <AiOutlineShoppingCart
                      onClick={() => addToBasket(product)}
                    />
                  } */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MainProducts;
