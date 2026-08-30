import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  section[id] {
    scroll-margin-top: 88px;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--n-800);
    font-family: var(--font-body);
    font-size: 17px;
    line-height: 1.65;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    margin: 0;
    color: var(--text);
    font-family: var(--font-display);
    font-weight: 400;
    text-wrap: balance;
  }

  p {
    margin: 0;
    text-wrap: pretty;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
  }

  a {
    color: var(--accent-text);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--accent-text-2);
    }
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 6px;
  }

  .skip-to-content {
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: 40;

    &:focus,
    &:active {
      top: 12px;
      left: 12px;
      width: auto;
      height: auto;
      padding: 12px 20px;
      background: var(--accent);
      color: var(--on-accent);
      border-radius: var(--radius-pill);
      font-family: var(--font-display);
      font-size: 15px;
      overflow: auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyle;
