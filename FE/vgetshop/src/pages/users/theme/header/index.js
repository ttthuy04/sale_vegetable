import { memo, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import "./style.scss";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [menus, setMenu] = useState([
    {
      name: "Trang chủ",
      patch: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      patch: ROUTERS.USER.PRODUCTS,
    },
    {
      name: "Sản phẩm",
      patch: "",
      isShowSubmenu: false,
      chile: [
        {
          name: "Thịt",
          patch: "",
        },
        {
          name: "Rau củ",
          patch: "",
        },
        {
          name: "Thức ăn nhanh",
          patch: "",
        },
      ],
    },
    {
      name: "Bài viêt",
      patch: "",
    },
    {
      name: "Liên hệ",
      patch: "",
    },
  ]);
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-6 header-top-left">
              <ul>
                <li>
                  <MdOutlineEmail />
                  vgetshop@gmail.com
                </li>
                <li>Miễn phí ship đơn từ {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header-top-right">
              <ul>
                <li>
                  <Link to={""}>
                    {" "}
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    {" "}
                    <RiInstagramFill />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    {" "}
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FaRegUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header-logo">
              <h1>VGETSHOP</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header-menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className="active">
                    <Link to={menu?.patch}>{menu?.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header-cart">
              <div className="header-cart-price">
                <span>{formatter(20000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <FaShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
