import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: none;
  flex: 1;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
  }
`;
