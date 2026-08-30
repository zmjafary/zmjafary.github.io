import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Section,
  SectionStack,
  SectionHead,
  Kicker,
  SectionTitle,
  CardGrid,
  Card,
  GhostToggle,
} from '../ui';

/**
 * Verbatim LinkedIn recommendations. Titles, relationships and dates come from
 * the recommendation itself, so nothing here is inferred.
 */
const recommendations = [
  {
    name: 'Haseeb Ahmed Khan',
    role: 'Senior Software Engineer · Reported to Zille, Oct 2024',
    quote:
      'I had the privilege of learning Laravel, React, and Shopify app development under the mentorship of ZMJ, and I can confidently say that he is one of the most brilliant and generous individuals I’ve had the pleasure to work with. His depth of knowledge in these technologies is impressive, but what truly sets him apart is his ability to teach and inspire. ZMJ has a rare talent for breaking down complex concepts into digestible pieces, making the learning process not only easier but enjoyable. His patience, guidance, and hands-on approach significantly shortened my learning curve, and I wouldn’t be where I am today without his support. If you’re looking for someone who is not only an expert in problem solving, coding skill but also a kind and encouraging mentor, ZMJ is your person. I highly recommend him to anyone seeking to grow both professionally and personally.',
  },
  {
    name: 'Bilal Ahmad',
    role: 'Marketing · Zille’s client, Jul 2023',
    quote:
      'I’m incredibly impressed by Zille Muhammad’s professionalism, dependability and expertise. His unapologetic confidence and competence in his field make him stand out. He approached the project with a level of expertise that inspired trust and confidence in his abilities from the moment we started working together. Zille consistently showed that he was dedicated to producing excellent results. He paid close attention to my requests, was proactive in seeking clarifications and always made sure he understood the requirements clearly. I would, without a doubt, recommend Zille to anyone looking for a skilled and reliable expert for any projects involving Laravel PHP, JavaScript or web development in general.',
  },
  {
    name: 'Sameed Awais',
    role: 'AI Engineer · Reported to Zille, Jul 2023',
    quote:
      'I have worked with him for over 1 year and I can confidently say that he is one of the intellects that Pakistan has created and should cash in every way and form! Zille Muhammad has a hands-on grip on technical knowledge and he has assisted me whenever and however I needed help. I still reach out to Zille Muhammad whenever I am STUCK with technical stuff. This is an appreciation post for you Sir! If you all, need a man who has 360-degree knowledge of development, Zille Muhammad is your guy!',
  },
  {
    name: 'Malik Muhammad Zeeshan',
    role: 'Senior Software Engineer · Reported to Zille, Jul 2023',
    quote:
      'Zille Muhammad Jafary was not just a Team Lead to me at YumyApps (Pvt) Ltd. but also a great Mentor who played an important role in my growth as a developer and as a professional. His problem-solving approach and focus on writing optimized code was always outstanding. His ability to explain complex topics in a clear and concise manner was exceptional. He’s a Master Debugger for me. I always admired his passion and dedication to his work which also holds a deep impact on me as well. He’s truly a team player; despite his workload, he demonstrated his true dedication to helping other developers. It’ll be a great gain for any company who has this Gem in their team.',
  },
  {
    name: 'Tayyeb Hassan',
    role: 'Senior Software Engineer · Same team at YumyApps, Jul 2023',
    quote:
      'Zille Muhammad is a highly skilled Laravel developer whom I have had the pleasure of working with closely at Yumyapps pvt ltd. I would like to express my utmost confidence in his abilities and I wholeheartedly recommend him as a Laravel developer. Their technical expertise, dedication, and collaborative nature make them a valuable asset to any development team.',
  },
  {
    name: 'Shumail Jaffar',
    role: 'Lead QA Engineer · Zille was his senior, Jul 2023',
    quote:
      'Zille Muhammad is my university batchmate but was a senior of mine at YumyApps maybe because he started working early but by the time I got there he was a senior and was the one who recommended me there. Although we worked in different department, professionally he was a delight. Everyone was a fan, including me and lastly this was the only time standups were fun, never before, never after, thank you for that and best of luck to you!',
  },
  {
    name: 'Shahid Mehmood',
    role: 'Senior DevOps Engineer · Was senior to Zille, Jul 2023',
    quote:
      'He was a quick learner and fit in real quick in the company. And until this day, I haven’t met anyone who goes out of his way to protect his teammates and does more than he’s asked to do. Hats off to you boy.',
  },
  {
    name: 'Ilyas Butt',
    role: 'Systems Ltd · Taught Zille at university, Aug 2023',
    quote:
      'It is my pleasure to wholeheartedly recommend Zille for his exceptional professionalism and unwavering dedication. Throughout his time during Degree program, Zille consistently demonstrated a level of commitment to his study that truly sets him apart. His approach to Assignments/Projects was consistently thorough and focused, and he exhibited a high degree of responsibilities. It is with pleasure that I recommend Zille for any opportunity that comes his way.',
  },
];

const VISIBLE = 3;
const LONG = 280;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const MoreRow = styled.div`
  display: flex;
`;

const Quote = styled.p`
  color: var(--n-800);
  font-size: 15.5px;
  line-height: 1.6;

  ${props =>
    props.$clamped &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 7;
    line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

const ReadMore = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--accent-text);
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent-text-2);
  }

  &:active {
    color: var(--accent-press);
  }

  @media (pointer: coarse) {
    min-height: 44px;
  }
`;

const Attr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: auto;
`;

const Name = styled.span`
  color: var(--text);
  font-size: 16px;
  font-weight: 600;
`;

const Role = styled.span`
  color: var(--n-600);
  font-size: 13px;
`;

const Recommendation = ({ name, role, quote }) => {
  const [open, setOpen] = useState(false);
  const isLong = quote.length > LONG;

  return (
    <Card>
      <Quote $clamped={isLong && !open}>&ldquo;{quote}&rdquo;</Quote>
      {isLong && (
        <ReadMore type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Read less' : 'Read more'}
        </ReadMore>
      )}
      <Attr>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Attr>
    </Card>
  );
};

Recommendation.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

const Recommendations = () => {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? recommendations : recommendations.slice(0, VISIBLE);
  const hiddenCount = recommendations.length - VISIBLE;

  return (
    <Section id="recommendations">
      <SectionStack>
        <SectionHead>
          <Kicker>Recommendations</Kicker>
          <SectionTitle>People I&rsquo;ve worked with, in their words.</SectionTitle>
        </SectionHead>

        <Block>
          <CardGrid>
            {shown.map(item => (
              <Recommendation key={item.name} {...item} />
            ))}
          </CardGrid>

          {hiddenCount > 0 && (
            <MoreRow>
              <GhostToggle
                as="button"
                type="button"
                aria-expanded={showAll}
                onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show less' : `Show ${hiddenCount} more`}
              </GhostToggle>
            </MoreRow>
          )}
        </Block>
      </SectionStack>
    </Section>
  );
};

export default Recommendations;
