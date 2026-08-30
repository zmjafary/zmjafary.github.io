import { css } from 'styled-components';

const variables = css`
  :root {
    /* ground */
    --bg: #121316;
    --surface: #1b1d21;
    --text: #f1f2f3;
    --divider: #2e3239;

    /* accent — lime. The only saturated colour on the page. */
    --accent: #a3e635;
    --accent-tint: #26310f;
    --accent-tint-2: #2f3d13;
    --accent-bright: #b8ef55;
    --accent-press: #93d128;
    --accent-text: #cbf078;
    --accent-text-2: #dcf5a5;

    /* secondary — cool slate */
    --sec-100: #1d2228;
    --sec-200: #232931;
    --sec-600: #93a86e;
    --sec-700: #b8c79a;
    --sec-800: #cfd6dd;

    /* neutral ramp, inverted for a dark ground */
    --n-100: #1b1d21;
    --n-200: #22252a;
    --n-300: #2e3239;
    --n-400: #3a3f47;
    --n-600: #969ea6;
    --n-700: #b2b9c0;
    --n-800: #d6dade;

    /* band */
    --band: #1b2027;
    --band-ink: #e9ecef;

    /* on-accent */
    --on-accent: #121316;
    --accent-ink: #a3e635;

    /* type */
    --font-display: 'Caprasimo', system-ui, sans-serif;
    --font-body: 'Figtree', system-ui, sans-serif;

    /* radii */
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 28px;
    --radius-pill: 999px;

    /* elevation */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.28);
    --shadow-md: 0 3px 10px rgba(0, 0, 0, 0.34);
    --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.44);
  }
`;

export default variables;
