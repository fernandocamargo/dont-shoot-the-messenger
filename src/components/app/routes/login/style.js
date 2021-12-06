import property from 'lodash/property';
import styled, { keyframes } from 'styled-components';

export const gradient = keyframes`
  0% {
    background-position: 0% 51%;
  }

  50% {
    background-position:100% 50%;
  }

  100% {
    background-position: 0% 51%;
  }
`;

export default (component) => styled(component)`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;

  form {
    background-color: #fff;
    border: solid 1px #eeecfc;
    border-radius: 1rem;
    box-shadow: 0 8px 8px -4px #eeecfc;
    width: 25vw;
    overflow: hidden;

    legend,
    label {
      display: inline-block;
    }

    div {
      &[aria-roledescription='field'] {
        margin: 0.5rem 0;
      }

      &[aria-roledescription='control'] {
        display: flex;
        justify-content: flex-end;
        padding: 1rem;
      }
    }

    legend {
      color: #998dee;
      font-weight: 900;
      padding: 1rem;
      text-align: center;

      &:before {
        align-items: center;
        animation: ${gradient} 5s ease infinite;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 50vmax;
        border-radius: 50%;
        color: #fff;
        content: 'fingerprint';
        display: flex;
        font-family: ${property('theme.typography.icons')};
        font-size: 10rem;
        height: 20vh;
        justify-content: center;
        margin: 1rem auto 2rem auto;
        overflow: hidden;
        width: 20vh;
      }
    }

    label {
      color: #998dee;
      cursor: pointer;
      font-size: 0.85rem;
      margin: 0.5rem 1rem;
    }

    input {
      background-color: #eeecfc;
      color: #3b2e9e;
      border: 0;
      font-weight: 7000;
      outline: 0;
      padding: 1rem;
      width: 100%;
    }

    button {
      align-items: center;
      background-color: #4c3bcc;
      border-radius: 0.5rem;
      color: #eeecfc;
      cursor: pointer;
      display: inline-flex;
      font-size: 0.75rem;
      font-weight: 500;
      overflow: hidden;
      padding: 0.5rem 1rem;
      text-transform: uppercase;
    }
  }
`;
