/**
 * Author : Ryan
 * Date : 2022-03-03
 * Desc : Style Reset
 */

import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

//NOTE style reset & global style
export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  body {
    color: #383838;
    font-family: 'Noto Sans KR', sans-serif;;
    letter-spacing: -0.02em;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;;
  }
  textarea {
    border: none;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;;
    overflow: auto;
    resize: none;
  }
  ul {
    list-style: none;
  }
  li {
    list-style-type : none;
  }
  :focus{
    outline: none;
  }
  @keyframes clickableOnboard{
    0%{
      transform: scale(0.99);
      box-shadow: 0 0 0 0 rgba(255, 221, 0, 0.9);
    }
    70%{
      transform: scale(1);
      box-shadow: 0px 0px 0 25px rgba(255, 221, 0, 0);
    }
    100%{
      transform: scale(0.99);
      box-shadow: 0 0 0 0 rgba(255, 221, 0, 0);
    }
  }
  @keyframes buttonOnboard{
    0%{
      transform: scale(0.99);
      box-shadow: 0 0 0 0 rgba(120, 120, 120, 0.9);
    }
    70%{
      transform: scale(1);
      box-shadow: 0px 0px 10px 18px rgba(120, 120, 120, 0);
    }
    100%{
      transform: scale(0.99);
      box-shadow: 0 0 0 0 rgba(120, 120, 120, 0);
    }
  }
  @keyframes skeleton-ui{
    0%{
      background-color: rgba(185, 185, 185, 0.1);
    }
    50%{
      background-color: rgba(185, 185, 185, 0.3);
    }
    100%{
      background-color: rgba(185, 185, 185, 0.1);
    }
  }
  @-webkit-keyframes skeleton-ui{
    0%{
      background-color: rgba(185, 185, 185, 0.1);
    }
    50%{
      background-color: rgba(185, 185, 185, 0.3);
    }
    100%{
      background-color: rgba(185, 185, 185, 0.1);
    }
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @-webkit-keyframes fadeout {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
  }
`;
