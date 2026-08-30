import styled, { css } from 'styled-components';

/**
 * Shared primitives for the site. Every value here comes from a token in
 * src/styles/variables.js — no component hard-codes a hex.
 */

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-inline: 48px;

  @media (max-width: 680px) {
    padding-inline: 24px;
  }
`;

export const Section = styled.section`
  position: relative;
  padding-block: 128px;

  @media (max-width: 900px) {
    padding-block: 96px;
  }
`;

export const SectionStack = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: ${props => (props.$tight ? '64px' : '72px')};
`;

export const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 760px;
`;

export const Kicker = styled.span`
  color: var(--accent-text);
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(36px, 4.4vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.025em;
`;

export const SectionLede = styled.p`
  max-width: 54ch;
  color: var(--n-700);
  font-size: 17px;
  line-height: 1.65;
`;

export const Blob = styled.div`
  position: absolute;
  border-radius: 999px;
  background: var(--accent-tint-2);
  opacity: 0.45;
  pointer-events: none;
  z-index: 0;
`;

/* ---------- buttons ---------- */

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: ${props => (props.$sm ? '11px 20px' : '15px 28px')};
  border: 0;
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-size: ${props => (props.$sm ? '15px' : '16px')};
  line-height: 1;
  text-align: center;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
`;

export const PrimaryButton = styled.a`
  ${buttonBase};
  background: var(--accent);
  color: var(--on-accent);

  &:hover,
  &:active {
    background: var(--accent-press);
    color: var(--on-accent);
  }
`;

export const GhostButton = styled.a`
  ${buttonBase};
  background: transparent;
  color: var(--accent);

  &:hover {
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    color: var(--accent);
  }

  &:active {
    background: color-mix(in srgb, var(--accent) 16%, transparent);
  }
`;

export const GhostToggle = styled.button`
  ${buttonBase};
  background: transparent;
  color: var(--accent);

  &:hover {
    background: color-mix(in srgb, var(--accent) 10%, transparent);
  }

  &:active {
    background: color-mix(in srgb, var(--accent) 16%, transparent);
  }
`;

export const InvertedButton = styled.a`
  ${buttonBase};
  background: var(--on-accent);
  color: var(--accent-ink);

  &:hover {
    background: #1d2024;
    color: var(--accent-ink);
  }
`;

/* ---------- pills, chips, tags ---------- */

export const StatusPill = styled.span`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 9px;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  background: var(--sec-200);
  color: var(--sec-800);
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1;
  text-transform: uppercase;
`;

export const StatusDot = styled.span`
  flex: none;
  width: 7px;
  height: 7px;
  border-radius: var(--radius-pill);
  background: var(--sec-600);
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
`;

export const Chip = styled.span`
  padding: 5px 13px;
  border: 1px solid var(--n-400);
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--n-800);
  font-size: 14.5px;
  letter-spacing: 0.02em;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
`;

export const Tag = styled.span`
  padding: 5px 11px;
  border-radius: var(--radius-pill);
  background: var(--n-100);
  color: var(--n-800);
  font-size: 12.5px;
  letter-spacing: 0.02em;
  line-height: 1.4;
`;

/* ---------- cards ---------- */

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Card = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 22px;
  padding: 40px 36px 42px;
  border: 1px solid var(--n-300);
  border-radius: var(--radius-lg);
  background: color-mix(in oklch, var(--n-100) 55%, transparent);
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: var(--n-100);
    transform: translateY(-4px);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

export const Bullets = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: ${props => (props.$flush ? '0' : 'auto')};
`;

export const Bullet = styled.li`
  display: grid;
  grid-template-columns: 16px minmax(0, 1fr);
  align-items: start;
  color: var(--n-800);
  font-size: 15.5px;
  line-height: 1.5;

  &::before {
    content: '·';
    color: var(--sec-600);
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
  }
`;

/* ---------- imagery ---------- */

export const Frame = styled.div`
  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* ---------- full-width rows ---------- */

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
`;
