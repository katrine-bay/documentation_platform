import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to use',
    imageUrl: 'img/undraw_calling_kpbp.svg',
    description: (
      <>
        We help your <b> agents </b> take back control of the call. We provide real time analysis of costumer sentiment and agent tone, count interruptions, measure intonation and much more.
      </>
    ),
  },
  {
    title: 'Focus on what matters',
    imageUrl: 'img/undraw_Questions_re_1fy7.svg',
    description: (
      <>
        We empower <b> supervisors </b> to focus on what really matters - <i> the customer service delivered by your employees </i> - and provides a real time dashboard of agent calls and agent performance indicators and alerts for critical calls. 
      </>
    ),
  },
  {
    title: 'Knowledge is power',
    imageUrl: 'img/undraw_work_together_h63l.svg',
      secondparagraph: (
        <>
          
        </>
      ),

    description: (
      <>
        The <b> manager </b> will have access to customer satisfaction reports, historical trends and alerts to critical events. Go ahead - Get Started - and soon we&apos;ll be guiding and supporting you on every call.
      </>         

    ),
  },
];

function Feature({imageUrl, title, description,secondparagraph}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{secondparagraph}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Welcome to  ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/Get_started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
