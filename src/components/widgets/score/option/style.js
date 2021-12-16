import styled from 'styled-components';

export default (component) => styled(component)`
  padding: 1.875rem 0 0.5rem 0;
  flex: 1;

  &:first-of-type {
    abbr {
      font-size: 0;
      width: 2.75rem;

      &:before {
        content: attr(title);
        text-transform: uppercase;
      }
    }
  }

  input {
    position: absolute;
    z-index: -1;

    &:checked + label,
    &:focus + label {
      abbr {
        background-color: #000;
        color: #fff;
      }
    }
  }

  label {
    cursor: pointer;

    abbr {
      background: #fff;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
      border-radius: 6.25rem;
      height: 1.5rem;
      text-decoration: none;
      transition: background-color 0.25s ease, color 0.25s ease;

      &,
      &:before {
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }
`;
