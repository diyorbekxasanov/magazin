import styled from "styled-components";

export const SavdoIndex = styled.div`
  padding: 100px 50px;

  .pul {
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    .box {
      background-color: white;
      border: 1px solid #2b5562;

      &:hover {
        background-color: #b3d4e0;
      }
      h2 {
        text-transform: capitalize;
        text-align: center;
        color: #0099b5;
      }
      h3 {
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
      grid-template-columns: 1fr 1fr 1fr;
      .box {
        h2 {
          font-size: 22px;
        }
        h3 {
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .pul {
      margin-bottom: 60px;
      display: grid;
      grid-template-columns: 1fr 1fr;
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
