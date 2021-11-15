import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Values and Principles',
    paragraph: 'When it comes to technology, especially software development, there are always too many possible solutions for each and every problem. The below are some of the foundations of my decision-making process when writing code and choosing technologies.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/recycle-solid.svg')}
                      alt="Features tile icon 01"
                      style={{padding: 15}}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Reusability
                  </h4>
                  <p className="m-0 text-sm">
                    Life is too short to solve the same problem over and over again for different projects. That's why I always do my best to make sure I don't write the code to only solve the current problem I'm trying to solve for the current project, but instead, solve it once and for all!
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/layer-group-solid.svg')}
                      alt="Features tile icon 02"
                      style={{padding: 15}}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Cutting-edge
                  </h4>
                  <p className="m-0 text-sm">
                    I used to have OCD for building everything from scratch, but at some point, I realized life is too short to do that. And I started to focus more on studying the most up-to-date technologies and figuring out how I can accelerate the development phase by studying and reusing existing projects and technologies so I can focus more on how I can add more to them instead.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/plug-solid.svg')}
                      alt="Features tile icon 03"
                      style={{padding: 15}}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Extensibility
                  </h4>
                  <p className="m-0 text-sm">
                    A software project cannot be used for too long if "updates" are the only way it can instroduce new features. That's why it's important to always have other means to add more capabilities, such as plugins, modules, or whatever you'd call it.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/quinscape-brands.svg')}
                      alt="Features tile icon 04"
                      style={{padding: 15}}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Scallability
                  </h4>
                  <p className="m-0 text-sm">
                    "Limits" are very unacceptable. I always do my best to make sure every part of the software is meant to have almost no limits or at least be very upgradable whenever needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/pencil-alt-solid.svg')}
                      alt="Features tile icon 05"
                      style={{padding: 15}}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Flexibility
                  </h4>
                  <p className="m-0 text-sm">
                    The more customizable a software is, the more usable, so this is another side of "Reusability"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;