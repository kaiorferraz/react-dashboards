import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import { VectorMap } from "react-jvectormap"
const mapData = {
  CN: 100000,
  IN: 9900,
  SA: 86,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20
};

export class Dashboard extends Component {
  impressionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'This week',
      data: [12, 25, 20, 32, 25, 18],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['#560bd0', '#560bd0', '#560bd0', '#560bd0', '#560bd0', '#560bd0'],
      borderColor: ['#560bd0', '#560bd0', '#560bd0', '#560bd0', '#560bd0', '#560bd0']
    },{
      label: 'Current week',
      data: [22, 30, 25, 30, 20, 25],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['#cad0e8', '#cad0e8', '#cad0e8', '#cad0e8', '#cad0e8', '#cad0e8'],
      borderColor: ['#cad0e8', '#cad0e8', '#cad0e8', '#cad0e8', '#cad0e8', '#cad0e8'],
    }]
  };

  impressionOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
        labels: {
          display: false
        }
    },
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: false,
          fontSize: 10,
          max: 60,
          padding: 0
        }
      }],
      xAxes: [{
        gridLines: {
          display: true,
          borderDash: [10, 4],
          color: '#ced4da',
          drawBorder: false
        },
        barPercentage: 0.6,
        ticks: {
          beginAtZero:true,
          fontSize: 11,
          fontFamily: 'Arial'
        }
      }]
    }
  };

  clicksData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'This week',
      data: [20, 25, 32, 18, 25, 23],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['#3295ff', '#3295ff', '#3295ff', '#3295ff', '#3295ff', '#3295ff'],
      borderColor: ['#3295ff', '#3295ff', '#3295ff', '#3295ff', '#3295ff', '#3295ff']
    },{
      label: 'Current week',
      data: [22, 30, 25, 30, 20, 30],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['#00cccc', '#00cccc', '#00cccc', '#00cccc', '#00cccc', '#00cccc'],
      borderColor: ['#00cccc', '#00cccc', '#00cccc', '#00cccc', '#00cccc', '#00cccc'],
    }]
  };

  clicksOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
        labels: {
          display: false
        }
    },
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: false,
          fontSize: 10,
          max: 60,
          padding: 0
        }
      }],
      xAxes: [{
        gridLines: {
          display: true,
          borderDash: [10, 4],
          color: '#ced4da',
          drawBorder: false
        },
        barPercentage: 0.6,
        ticks: {
          beginAtZero:true,
          fontSize: 11,
          fontFamily: 'Arial'
        }
      }]
    }
  };
  realTimeData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
    datasets: [{
      label: 'This week',
      data: [48,44,45,44,44,44,41,44,46,45,46,43,40,42,39,40,37,41,39,36,36,36,35,32,30,31,27,25,30,30,34,37,41,41,36,37,37,34,31,34,39,40,36,40,44,48,43,40,39,42,40,38,39,42,38,33,37,38,39,43,41,41,44,44,42,41,44,47,48,43,40,42,46,48,52,49,52,56,60,57,57,59,58,63,60,60,63,58,54,49,45,43,46,46,50,46,47,44,41,43,46,48,50,47,51,46,43,46,46,41,44,39,39,40,39,40,41,45,46,48,50,55,55,55,54,52,49,54,57,58,60,65,67,62,65,66,68,71,68,67,70,70,69,68,72,70,70,65,67,62],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(86,11,208, .3)'],
      borderColor: ['rgba(86,11,208)']
    }]
  };

  realTimeOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
        labels: {
          display: false
        }
    },
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: false,
          fontSize: 10,
          max: 75,
          stepSize:20,
          padding: 0
        }
      }],
      xAxes: [{

        display: false,
        gridLines: {
          display: false,
          borderDash: [10, 4],
          color: '#ced4da',
          drawBorder: false
        },
        barPercentage: 0.6,
        ticks: {
          beginAtZero:true,
          fontSize: 11,
          fontFamily: 'Arial'
        }
      }]
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
  };
 
  render() {
    return (
      <div>
        <div className="az-content-body az-content-body-dashboard-three">
          <h2 className="az-content-title mg-b-5">Hi, welcome back!</h2>
          <p className="mg-b-20">Your ad campaign performance dashboard template.</p>

          <div className="row row-sm mg-b-20">
            <div className="col-lg-9">
              <div className="row row-sm">
                <div className="col-md-6">
                  <div className="card card-dashboard-nine">
                    <div className="card-header">
                      <h6 className="az-content-label">Estimated Unique Impressions</h6>
                      <h1 className="card-title">321,212</h1>
                      <small className="az-content-text">The estimated number of unique people that see the ad over the past 30 days.</small>
                    </div>
                    <div className="bar-chart">
                      <Bar data={this.impressionData} options={this.impressionOptions}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mg-t-20 mg-md-t-0">
                  <div className="card card-dashboard-nine">
                    <div className="card-header">
                      <h6 className="az-content-label">Estimated Unique Clicks</h6>
                      <h1 className="card-title">305,294</h1>
                      <small className="az-content-text">The estimated number of clicks for the ad over the past 30 days. A click is... <a href="#/">Learn more</a></small>
                    </div>
                    <div className="bar-chart">
                      <Bar data={this.clicksData} options={this.clicksOptions}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mg-t-20 mg-lg-t-0">
              <div className="card card-dashboard-ten bg-purple">
                <h6 className="az-content-label">Popularity</h6>
                <div className="card-body">
                  <div>
                    <h6>1,137</h6>
                    <label>Global Rank</label>
                  </div>
                  <div>
                    <h6>953</h6>
                    <label>US Rank</label>
                  </div>
                </div>
              </div>
              <div className="card card-dashboard-ten bg-primary">
                <h6 className="az-content-label">Search Traffic</h6>
                <div className="card-body">
                  <div>
                    <h6>26.5<span className="percent">%</span></h6>
                    <label>Search Visits</label>
                  </div>
                  <div>
                    <h6>10.6<span className="percent">%</span></h6>
                    <label>Unique Visits</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card card-dashboard-eleven">
            <div className="card-header">
              <h6 className="az-content-label">Real Time Metrics For Your Campaign Statistics</h6>
              <p className="card-text">The global and country campaign stats show how popular your ad is relative to your other ads.</p>
            </div>
            <div className="card-body">
              <Line data={this.realTimeData} options={this.realTimeOptions}/>
            </div>
            <div className="card-footer">
              <div>
                <label>Click Through Conversions</label>
                <h6>3,605 <span className="up">2.1%</span></h6>
                <small>The number of clicks to the ad that consist of a single impression.</small>
              </div>
              <div>
                <label>View Through Conversions</label>
                <h6>3,313 <span className="down">0.6%</span></h6>
                <small>Estimated daily unique views per visitor on the ads.</small>
              </div>
              <div>
                <label>Total Conversions</label>
                <h6>8,765 <span className="up">6.4%</span></h6>
                <small>Estimated total conversions on ads per impressions to the ads.</small>
              </div>
            </div>
            <div className="jqvmap">
            <VectorMap
              map={"world_mill"}
              backgroundColor="transparent" //change it to ocean blue: #0077be
              zoomOnScroll={false}
              containerClassName="map"
              containerStyle={{
                width: '100%',
                height: '520px'
              }}
              regionStyle={{
                initial: {
                  fill: "#e2e6e9",
                  "fill-opacity": 1,
                  stroke: "none",
                  "stroke-width": 0,
                  "stroke-opacity": 0
                },
                hover: {
                  "fill-opacity": 0.8,
                  cursor: "pointer"
                },
                selected: {
                  fill: "#e2e6e9" //color for the clicked country
                },
                selectedHover: {}
              }}
              regionsSelectable={true}
              series={{
                regions: [
                  {
                    values: mapData, //this is your data
                    scale: ["#e2e6e9"], //your color game's here
                    normalizeFunction: "polynomial"
                  }
                ]
              }}
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
