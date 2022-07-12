import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import { Animate } from "react-move";
import { easeQuadInOut } from 'd3-ease';

export class Progress extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Progress
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Progress</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Colored Progressbar</h4>
                <p className="page-description">Add property <code>variant=&#123;color&#125;</code> for theme colors</p>
                <div className="template-demo">
                  <ProgressBar variant="success" now={10}/>
                  <ProgressBar variant="primary" now={25}/>
                  <ProgressBar variant="info" now={50}/>
                  <ProgressBar variant="warning" now={75}/>
                  <ProgressBar variant="danger" now={100}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Progressbar Striped</h4>
                <p className="page-description">Add property <code>striped</code>.</p>
                <div className="template-demo">
                  <ProgressBar variant="success" now={10} striped/>
                  <ProgressBar variant="primary" now={25} striped/>
                  <ProgressBar variant="info" now={50} striped/>
                  <ProgressBar variant="warning" now={75} striped/>
                  <ProgressBar variant="danger" now={100} striped/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Striped Animated</h4>
                <p className="page-description">Add property <code>animated</code>.</p>
                <div className="template-demo">
                  <ProgressBar variant="success" now={10} animated/>
                  <ProgressBar variant="primary" now={25} animated/>
                  <ProgressBar variant="info" now={50} animated/>
                  <ProgressBar variant="warning" now={75} animated/>
                  <ProgressBar variant="danger" now={100} animated/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">With Label</h4>
                <p className="page-description">Progress bar with labels</p>
                <div className="template-demo">
                  <ProgressBar variant="danger" className="progress-lg" now={60} label={`600%`}/>
                  <ProgressBar variant="success" className="progress-lg" now={90} label={`90%`}/>          
                  <ProgressBar variant="warning" className="progress-lg" now={60} label={`60% complete`}/>        
                  <ProgressBar variant="info" className="progress-lg" now={88} label={`88% complete`}/>        
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 gid-margin grid-margin-md-0 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Progressbar Sizes</h4>
                <p className="page-description">Use className <code>.progress-sm</code>, <code>.progress-lg</code>, <code>.progress-xl</code></p>
                <div className="template-demo">
                  <ProgressBar variant="info" className="progress-sm" now={25}/>
                  <ProgressBar variant="info" className="progress" now={50}/>          
                  <ProgressBar variant="info" className="progress-lg" now={75}/>          
                  <ProgressBar variant="info" className="progress-xl" now={100}/>          
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Circular Progressbar</h4>
                <p className="page-description">Circle progress using react-circular-progressbar plugin</p>
                <div className="template-demo d-flex">
                  <div className="p-2">
                    <CircularProgressbar value={66} text="66" />
                  </div>
                  <div className="p-2">
                    <CircularProgressbar
                      value={48}
                      text="48"
                      styles={buildStyles({
                        strokeLinecap: 'butt',
                      })}
                    />
                  </div>
                  <div className="p-2">
                    <AnimatedProgressProvider
                      valueStart={0}
                      valueEnd={74}
                      duration={1.4}
                      easingFunction={easeQuadInOut}
                      repeat
                    >
                      {value => {
                        const roundedValue = Math.round(value);
                        return (
                          <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            /* This is important to include, because if you're fully managing the
                      animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({ pathTransition: 'none' })}
                          />
                        );
                      }}
                    </AnimatedProgressProvider>
                  </div>
                  <div className="p-2">
                    <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                      {percentage => (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransitionDuration: 0.15,
                          })}
                        />
                      )}
                    </ChangingProgressProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Progress

class AnimatedProgressProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: false
  };

  static defaultProps = {
    valueStart: 0
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueStart
        })}
        update={() => ({
          value: [
            this.state.isAnimated ? this.props.valueEnd : this.props.valueStart
          ],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction
          }
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000
  };

  state = {
    valuesIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
      });
    }, this.props.interval);
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}
