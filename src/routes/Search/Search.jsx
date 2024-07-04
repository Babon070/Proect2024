import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../api/instance";
import Container from "../../util/Container";
import "./Search";

const Search = () => {
    const [searchProduct, setsearchProduct] = useState([])
        console.log(searchProduct);
  const ProductInfo = useParams();
  useEffect(() => {
    instance
      .get(`/products/?title=${ProductInfo.productName}&offset=10&limit=10`)
      .then((response) => setsearchProduct(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
        <Container>
            <div className="search_wrap">
                    {
                          searchProduct.map(product => (
                            <div key={product.id}>
                                {product.title}
                            </div>
                          ))      
                    }
            </div>
        </Container>
    </div>
  )
};

export default Search;
