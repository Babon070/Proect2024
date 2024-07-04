import React, { useState, useEffect } from "react";
import "./Categories.scss";
import Container from "../../util/Container";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const BASE_URL = "https://api.escuelajs.co/api/v1";
  

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories?offset=0&limit=5`)
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="categoeies">
      <Container>
        <div className="categories__wrap">
          {data.map((category) => (
            <div key={category.id}>
              <Link className="category_link" to="/category">
                <div>
                  <img className="categories_img" src={category.image} alt="" />
                </div>
                <h2 className="category_name">{category.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
