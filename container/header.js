import { Button } from "@material-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

const HeaderWrapper = styled.div`
  -webkit-box-shadow: 0px 14px 13px -3px rgba(33, 99, 150, 0.42);
  -moz-box-shadow: 0px 14px 13px -3px rgba(33, 99, 150, 0.42);
  box-shadow: 0px 14px 13px -3px rgba(33, 99, 150, 0.42);
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 100;
  .container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 15px 0;
    overflow-y: hidden;
    transition: all 0.3s linear;
  }
  .burger {
    display: none;
  }
  .box_right {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .box_left {
    width: 100%;
    display: flex;
    a {
      display: inline-block;
      padding: 15px;
      text-decoration: none;
      color: #0099b5;
      font-weight: 800;
      text-transform: uppercase;
      margin: 0 10px;
    }
    a,
    a:after,
    a:before {
      transition: all 0.5s;
    }
    a:hover {
      color: #2b5562;
    }

    a {
      position: relative;
    }
    a:after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 0%;
      content: ".";
      color: transparent;
      background: #333;
      height: 1px;
    }
    a:hover:after {
      width: 100%;
    }
  }
  @media (max-width: 580px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 15px;
    }
    .burger {
      display: inline-block;
    }
    .box_left {
      display: flex;
      flex-direction: column;
    }
    .h_100px {
      height: 65px;
      transition: all 0.3s linear;
    }
  }
`;

const Header = () => {
  const router = useRouter();
  const [open, setopen] = useState(true);
  const see = () => {
    localStorage.removeItem("access_token");
    router.push("/");
  };
  return (
    <HeaderWrapper>
      <div className={open ? "container h_100px" : "container"}>
        <div className="box_left">
          <div className="burger">
            <Button onClick={() => setopen(!open)} variant="outlined">
              .<FontAwesomeIcon icon={faAlignJustify} />.
            </Button>
          </div>
          <Link href="/savdo">
            <a>savdo</a>
          </Link>
          <Link href="/qarzlar">
            <a>qarzlar</a>
          </Link>
          <Link href="/xodimlar">
            <a>xodimlar</a>
          </Link>
        </div>
        <div className="box_right">
          <Button variant="outlined" className="d-inline-block" onClick={see}>
            Chiqish
          </Button>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
