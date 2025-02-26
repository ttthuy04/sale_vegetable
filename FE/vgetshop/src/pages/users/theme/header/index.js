import { memo } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "./style.scss";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-6 header-top-left">
            <ul>
              <li>
                <MdOutlineEmail />
                vgetshop@gmail.com
              </li>
              <li>Miễn phí ship đơn từ 50.000đ</li>
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
  );
};

export default memo(Header);
