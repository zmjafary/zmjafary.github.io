import React from 'react';
import {
  Layout,
  Hero,
  Services,
  Work,
  Recommendations,
  Approach,
  Experience,
  About,
  Contact,
} from '@components';

/**
 * Section order follows the research on portfolio pages: proof sits directly
 * under the work it backs up, rather than near the bottom of the page.
 */
const IndexPage = () => (
  <Layout>
    <main id="top">
      <Hero />
      <Services />
      <Work />
      <Recommendations />
      <Approach />
      <Experience />
      <About />
      <Contact />
    </main>
  </Layout>
);

export default IndexPage;
