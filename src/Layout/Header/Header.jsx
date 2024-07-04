import React from "react";
import { Link } from "react-router-dom";
import Container from "../../util/Container";
import "./Header.scss";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import RedirectButton from "../../util/RedirectButton";

const Header = () => {
  return location.pathname.includes("/auth") ? (
    <></>
  ) : (
    <header>
      <Container>
        <div className="header">
          <Link to="/">
            <img
              className="header__logo"
              src="https://lindeal.com/images/2022/10/top-8-luchshikh-kazakhstanskikh-marketplejsov-olx.png"
              alt=""
            />
          </Link>
          <nav className="header_nav">
            <Link className="headLink message" to="/message">
              <FiMessageSquare />
              Xabarlar
            </Link>
            <ul className="headLink nav__ul">
              <li>UZ</li>
              <li>RU</li>
            </ul>
            <Link className="headLink like" to="/like">
              <FaRegHeart />
            </Link>

            <Link className="headLink headLink-basket" to="/basket">
              <HiOutlineShoppingCart />
            </Link>
            <Link
              onClick="history.go(0)"
              className="headLink user"
              to="auth"
            >
              <FaRegUser />
              Hisobingiz
            </Link>

            <RedirectButton
              pushButton="/newPost"
              title="Elon berish"
              type="dark"
            ></RedirectButton>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
