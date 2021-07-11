import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy Read',
    Svg: require('../../static/img/easytoread.svg').default,
    description: (
      <>
        The Documentation was designed to be easy to read and to navigate through
        to get quickly to the part you need.
      </>
    ),
  },
  {
    title: 'Focus on Mobile Applications',
    Svg: require('../../static/img/mobileapplications.svg').default,
    description: (
      <>
        It focuses on the main projects : the two mobile applications of TOMAS.
      </>
    ),
  },
  {
    title: 'All projects docs in one place',
    Svg: require('../../static/img/allprojects.svg').default,
    description: (
      <>
        You need to find documentation on the senior app or the family app to contribute ? All the documentation is in one place !!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
