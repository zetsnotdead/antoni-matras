import { css } from 'emotion';
import * as React from 'react';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
import { BlockAccent, BlockPrimary, BlockWhite } from '../components/block';
import Container from '../components/container';
import Layout from '../components/layout';
import {
  MediaBlock,
  MediaBlockContent,
  MediaBlockIcon,
} from '../components/media-block';
import AntekImage from '../images/antek-mami.jpg';

const ContactMeBanner: React.StatelessComponent<{ className: string }> = ({
  className,
}) => (
  <BlockPrimary className={className}>
    <Container>
      <MediaBlock responsive={true}>
        <MediaBlockContent>
          <BlockAccent
            className={css`
              margin-bottom: 1rem;
            `}
          >
            <h1>Masz pytania?</h1>
            <h1>Skontaktuj się ze mną</h1>
          </BlockAccent>
          <BlockWhite
            color="primary"
            className={css`
              text-align: center;
              padding: 1rem 2rem;
            `}
          >
            <h1>Antoni Matras</h1>
            <h2>Okręg 2, Miejsce 5</h2>
            <h3>KWW Jacka Majchrowskiego Obywatelski Kraków</h3>
          </BlockWhite>
        </MediaBlockContent>
        <MediaBlockIcon>
          <img
            src={AntekImage}
            className={css`
              display: none;
              @media (min-width: 768px) {
                display: block;
                height: 300px;
                margin: 0 2rem;
              }
            `}
          />
        </MediaBlockIcon>
      </MediaBlock>
    </Container>
  </BlockPrimary>
);

const ContactOptions: React.StatelessComponent<{ className: string }> = ({
  className,
}) => {
  const options = [
    { icon: <FaEnvelope size="32" />, body: 'antoni@example.com' },
    { icon: <FaFacebook size="32" />, body: 'facebook.com/antoni' },
  ];

  return (
    <BlockAccent className={className}>
      <Container>
        {options.map(({ icon, body }) => (
          <BlockWhite
            key={body}
            className={css`
              padding: 1rem;
              & + & {
                margin-top: 2rem;
              }
            `}
          >
            <MediaBlock>
              <MediaBlockIcon size="medium">{icon}</MediaBlockIcon>
              <MediaBlockContent
                className={css`
                  display: flex;
                  align-items: center;
                `}
              >
                {body}
              </MediaBlockContent>
            </MediaBlock>
          </BlockWhite>
        ))}
      </Container>
    </BlockAccent>
  );
};

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <ContactMeBanner
          className={css`
            @media (min-width: 640px) {
              padding: 4rem 1rem;
            }
          `}
        />
        <ContactOptions
          className={css`
            padding: 4rem 1rem;
          `}
        />
      </Layout>
    );
  }
}

export default Contact;
