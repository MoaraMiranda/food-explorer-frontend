import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  padding-top: 36px;
`;

export const Form = styled.form`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  /* @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: ${({ theme }) => theme.RADIUS.MD};
    padding: 64px;
  }

  > a {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  } */

  .input-wrapper {
    display: grid;
    gap: 32px;
    align-items: center;
    margin-top: 70px;

    /* @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      margin-top: 0;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      width: 250px;
    } */
  } 
  .input-container {
    display: grid;
    gap: 8px;

    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
`;
