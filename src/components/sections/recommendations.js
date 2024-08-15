import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledRecommendationsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .recommendations-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 50px auto 0;
  }
`;

const StyledRecommendation = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);
  padding: 20px;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  
  .recommendation-inner {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .recommendation-author {
    font-size: var(--fz-lg);
    color: var(--lightest-slate);
    margin-bottom: 10px;
  }

  .recommendation-content {
    font-size: 17px;
    color: var(--light-slate);
    line-height: 1.4;
    max-height: ${({ isExpanded }) => (isExpanded ? 'none' : '80px')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    position: relative;

    &:after {
      content: '';
      display: ${({ isExpanded }) => (isExpanded ? 'none' : 'block')};
      height: 50px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(transparent, var(--light-navy));
    }
  }

  .read-more {
    cursor: pointer;
    color: var(--green);
    font-size: var(--fz-sm);
    margin-top: 10px;
    transition: color 0.2s;

    &:hover {
      color: var(--light-green);
    }
  }
`;

const Recommendations = () => {
  const data = useStaticQuery(graphql`
    query {
      recommendations: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/recommendations/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const revealTitle = useRef(null);
  const revealRecommendations = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!prefersReducedMotion) {
      sr.reveal(revealTitle.current, srConfig());
      revealRecommendations.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }
  }, [prefersReducedMotion]);

  const toggleReadMore = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const recommendations = data.recommendations.edges;

  return (
    <StyledRecommendationsSection id="recommendations">
      <h2 className="numbered-heading" ref={revealTitle}>
        People I've worked with
      </h2>

      <ul className="recommendations-grid">
        {prefersReducedMotion ? (
          recommendations.map(({ node }, i) => (
            <StyledRecommendation key={i} isExpanded={expandedIndex === i}>
              <div className="recommendation-inner">
                <h3 className="recommendation-author">{node.frontmatter.title}</h3>
                <div
                  className="recommendation-content"
                  dangerouslySetInnerHTML={{ __html: node.html }}
                />
                <div
                  className="read-more"
                  onClick={() => toggleReadMore(i)}
                >
                  {expandedIndex === i ? 'Read Less' : 'Read More'}
                </div>
              </div>
            </StyledRecommendation>
          ))
        ) : (
          <TransitionGroup component={null}>
            {recommendations.map(({ node }, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={300} exit={false}>
                <StyledRecommendation
                  ref={el => (revealRecommendations.current[i] = el)}
                  isExpanded={expandedIndex === i}
                >
                  <div className="recommendation-inner">
                    <h3 className="recommendation-author">{node.frontmatter.title}</h3>
                    <div
                      className="recommendation-content"
                      dangerouslySetInnerHTML={{ __html: node.html }}
                    />
                    <div
                      className="read-more"
                      onClick={() => toggleReadMore(i)}
                    >
                      {expandedIndex === i ? 'Read Less' : 'Read More'}
                    </div>
                  </div>
                </StyledRecommendation>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
    </StyledRecommendationsSection>
  );
};

export default Recommendations;
