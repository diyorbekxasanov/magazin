import styled from "styled-components";

export const IndexWrapper = styled.div`
  padding: 100px 15px 15px 15px;
  .soha {
    display: flex;
    flex-direction: column;
    width: 530px;
    margin: 120px auto 0 auto;
  }
  .MuiFormControl-root {
    margin-top: 20px;
  }
  .MuiButton-contained {
    background-color: #2b5562;
    margin-top: 20px;
    color: white;
    &:hover {
      background-color: #0099b5;
    }
  }

  @media (max-width: 580px) {
    .soha {
      width: 100%;
    }
  }
`;
