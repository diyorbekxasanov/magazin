import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}
a{
  text-decoration: none;
}
::-webkit-scrollbar {
  width: 7px;   
  height: 7px;           
}
::-webkit-scrollbar-track {
  background-color: white;       
}
::-webkit-scrollbar-thumb {
  background: #0099b5;       
}

:root {
  --white-color: #FFFFFF;
}
`;
