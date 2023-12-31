import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";
export default createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  font-size: 14px;
  
  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
    body{
      font-size: 16px;
    }
  }
}

body{
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100}
}

body, input {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  outline: none;
} 

a{
  text-decoration: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

button {
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

}

button, input {
  border-radius: ${({ theme }) => theme.RADIUS.MD};

}

`;
