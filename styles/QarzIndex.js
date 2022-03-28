import styled from "styled-components";

export const QarzIndex = styled.div`
  padding: 100px 50px;

  .pul {
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .box {
      background-color: white;
      border: 1px solid #2b5562;

      &:hover {
        background-color: #b3d4e0;
      }
      h2,
      h4 {
        text-transform: capitalize;
        text-align: center;
        color: #0099b5;
      }
      h3,
      h5 {
        text-align: center;
        color: #2b5562;
      }
    }
  }
  .form {
    width: 1000px;
  }
  .w_h_0 {
    transition: all 0.4s;
    overflow: hidden;
    width: 0;
    height: 0;
  }
  .box_table {
    width: 100%;
    thead {
      background-color: white;
      position: sticky;
      top: 83px;
      z-index: 100;
    }
  }
  .box_qarz {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-gap: 10px;
    .list-group {
      .act {
        background-color: #0099b5;
        color: white;
      }
      li {
        color: #2b5562;
        &:hover {
          color: white;
          background-color: #0099b5;
        }
      }
    }
  }
  @media (max-width: 1100px) {
    .box_table {
      overflow-x: scroll;
      table {
        width: 1010px;
        thead {
          position: static;
        }
      }
    }
    .pul {
      margin-bottom: 60px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      .box {
        background-color: white;
        border: 1px solid #2b5562;

        &:hover {
          background-color: #b3d4e0;
        }
        h2 {
          text-align: center;
          color: #0099b5;
        }
        h3 {
          text-align: center;
          color: #2b5562;
        }
      }
    }
  }
  @media (max-width: 640px) {
    .pul {
      margin-bottom: 60px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      .box {
        h2 {
          font-size: 22px;
        }
        h3 {
          font-size: 18px;
        }
        h4 {
          font-size: 15px;
        }
        h6 {
          font-size: 12px;
        }
      }
    }
    .box_qarz {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 10px;
      .list-group {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: 480px) {
    .button_2 {
      flex-direction: column;
    }
    .box_qarz {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 10px;
      .list-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 20px;
      }
    }
    .pul {
      margin-bottom: 60px;
      display: grid;
      .box {
        h2 {
          font-size: 18px;
        }
        h3 {
          font-size: 15px;
        }
      }
    }
  }
`;
