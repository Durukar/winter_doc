import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to use',
    Svg: require('@site/static/img/undraw_professor_xcrw.svg').default,
    description: (
      <>
        Framework designed for those who want ease and efficiency in creating their web application, 
        build your SaaS or weekend project faster and as light as a snowflake.
      </>
    ),
  },
  {
    title: 'Focus on modularization',
    Svg: require('@site/static/img/undraw_version-control_e4yu.svg').default,
    description: (
      <>
        Fully modularized so that customization can be done efficiently and securely.
      </>
    ),
  },
  {
    title: 'Powered by BUN and Typescript',
    Svg: require('@site/static/img/undraw_dev-productivity_5wps.svg').default,
    description: (
      <>
        100% compatible with Bun and fully structured in TypeScript to ensure speed and security in building your code.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
