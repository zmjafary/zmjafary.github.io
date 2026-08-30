import React from 'react';
import styled from 'styled-components';
import { navLinks, email } from '@config';
import { Container, PrimaryButton } from './ui';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  border-bottom: 1px solid var(--n-300);
  background: color-mix(in oklch, var(--bg) 90%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding-block: 16px;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);

  &:hover {
    color: var(--text);
  }
`;

const Mark = styled.span`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding-top: 2px;
  border-radius: var(--radius-pill);
  background: var(--accent);
  color: var(--on-accent);
  font-family: var(--font-display);
  font-size: 16px;
  line-height: 1;
`;

const Lockup = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const BrandName = styled.span`
  color: var(--text);
  font-family: var(--font-display);
  font-size: 15px;
  letter-spacing: -0.015em;
  line-height: 1.1;
`;

const BrandRole = styled.span`
  color: var(--n-600);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: 680px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavLink = styled.a`
  color: var(--n-700);
  font-size: 14px;
  font-weight: 500;

  &:hover {
    color: var(--text);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const SiteHeader = () => (
  <StyledHeader>
    <Inner>
      <Brand href="#top">
        <Mark aria-hidden="true">Z</Mark>
        <Lockup>
          <BrandName>Zille Muhammad Jafary</BrandName>
          <BrandRole>Software Engineer</BrandRole>
        </Lockup>
      </Brand>

      <Nav aria-label="Primary">
        {navLinks.map(({ name, url }) => (
          <NavLink key={name} href={url}>
            {name}
          </NavLink>
        ))}
        <PrimaryButton $sm href={`mailto:${email}`}>
          Get in touch
        </PrimaryButton>
      </Nav>
    </Inner>
  </StyledHeader>
);

export default SiteHeader;
