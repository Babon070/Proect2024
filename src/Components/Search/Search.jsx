import React, { useState } from "react";
import Container from "../../util/Container";
import "./Search.scss";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";
import RedirectButton from "../../util/RedirectButton";
import instance from "../../api/instance";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [SearchValue, setSearchValue] = useState("");
  console.log(searchResult);

  const giveMoreResult = (e) => {
    e.preventDefault();
    if (SearchValue) {
      window.location.pathname = `/search/${SearchValue}`;
    }
  };

  const giveSearch = (e) => {
    setSearchValue(e.target.value);
    instance
      .get(`/products/?title=${e.target.value}`)
      .then((response) => setSearchResult(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Container>
        <form onSubmit={giveMoreResult}>
          <div className="search__wrapper">
            <div className="search__wrapper-items">
              <FiSearch />
              <input
                className="search_input"
                type="text"
                onChange={giveSearch}
                placeholder="Nimani qidiryapsiz?"
              />
              <MdOutlineClear className="search_x" />
              {searchResult.length > 0 && SearchValue ? (
                <div className="search_suggestions">
                  {searchResult.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      className="search_suggestions-link"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
            <button className="search_btn">
              Qidiruv
              <FiSearch />
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Search;
