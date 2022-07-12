import React, { Component } from 'react'
import {Line, Doughnut, Bar } from 'react-chartjs-2'
// import { VectorMap } from "react-jvectormap"
// const mapData = {
//   CN: 100000,
//   IN: 9900,
//   SA: 86,
//   EG: 70,
//   SE: 0,
//   FI: 0,
//   FR: 0,
//   US: 20
// };

export class Dashboard extends Component {
  supportRequestData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
    datasets: [{
      label: 'This week',
      data: [48,44,45,44,44,44,41,44,46,45,46,43,40,42,39,40,37,41,39,36,36,36,35,32,30,31,27,25,30,30,34,37,41,41,36,37,37,34,31,34,39,40,36,40,44,48,43,40,39,42,40,38,39,42,38,33,37,38,39,43,41,41,44,44,42,41,44,47,48,43,40,42,46,48,52,49,52,56,60,57,57,59,58,63,60,60,63,58,54,49,45,43,46,46,50,46,47,44,41,43,46,48,50,47,51,46,43,46,46,41,44,39,39,40,39,40,41,45,46,48,50,55,55,55,54,52,49,54,57,58,60,65,67,62,65,66,68,71,68,67,70,70,69,68,72,70,70,65,67,62],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(128, 57, 244, .1)'],
      borderColor: ['#8039f4']
    }]
  };

  complaintsRecievedtData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
    datasets: [{
      label: 'This week',
      data: [49,48,50,53,54,53,54,56,56,56,56,60,58,61,61,58,54,52,51,47,48,48,53,50,46,48,51,51,50,54,52,53,57,52,48,52,53,58,55,58,61,57,60,61,57,56,58,62,58,58,56,52,52,50,55,50,52,48,47,43,38,34,31,32,36,35,32,33,30,28,28,27,27,25,24,21,22,23,27,30,27,29,25,23,23,23,27,23,23,19,15,15,11,9,7,11,15,13,12,13,15,13,13,18,20,21,25,25,20,18,15,14,17,15,16,14,12,14,17,17,14,18,18,22,25,28,28,24,24,28,26,29,26,23,28,25,21,23,20,19,15,16,21,24,20,16,16,15,14,16],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(0, 123, 255, .1)'],
      borderColor: ['#007bff']
    }]
  };
  complaintsResolvedtData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
    datasets: [{
      label: 'This week',
      data: [48,44,45,44,44,44,41,44,46,45,46,43,40,42,39,40,37,41,39,36,36,36,35,32,30,31,27,25,30,30,34,37,41,41,36,37,37,34,31,34,39,40,36,40,44,48,43,40,39,42,40,38,39,42,38,33,37,38,39,43,41,41,44,44,42,41,44,47,48,43,40,42,46,48,52,49,52,56,60,57,57,59,58,63,60,60,63,58,54,49,45,43,46,46,50,46,47,44,41,43,46,48,50,47,51,46,43,46,46,41,44,39,39,40,39,40,41,45,46,48,50,55,55,55,54,52,49,54,57,58,60,65,67,62,65,66,68,71,68,67,70,70,69,68,72,70,70,65,67,62],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(0, 204, 204, .1)'],
      borderColor: ['#00cccc']
    }]
  };

  lineChartOptions = {
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 100,
          padding: 10,
        }
      }],
      xAxes: [{
        display: true,
        position: 'top',
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
          zeroLineColor: 'rgba(255, 0, 255, 1)',
        },
        ticks: {
          beginAtZero: true,
          fontColor: "#a7afb7",
          padding: 10,
          diplay:false,
          stepSize: 50,
          maxTicksLimit: 7
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      backgroundColor: 'rgba(2, 171, 254, 1)',
    },
  };
  doughnutPieData = {
    labels: ['Interested', 'Going', 'Maybe', 'Not Going'],
    datasets: [{
      data: [25,38,20,15],
      backgroundColor: ['#6f42c1', '#007bff','#00cccc','#969dab']
    }]
  };

  doughnutPieOptions = {
    maintainAspectRatio: false,
    responsive: true,
    series: {
      pie: {
        show: true,
        radius: 1,
        innerRadius: 0.5,
        label: {
          show: true,
        }
      }
    },
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  customerComplaintsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'This week',
      data: [10, 24, 20, 25, 35, 50, 20, 30, 28, 33, 45, 65],
      backgroundColor: '#6610f2',
      borderWidth: 1,
      fill: true
    },
    {
      label: 'This week',
      data: [20, 30, 28, 33, 45, 65, 25, 35, 50, 20, 30, 28],
      backgroundColor: '#00cccc',
      borderWidth: 1,
      fill: true
    }]
  };

  customerComplaintsOptions = {
    maintainAspectRatio: false,
      legend: {
        display: false,
          labels: {
            display: false
          }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            fontSize: 11
          }
        }],
        xAxes: [{
          barPercentage: 0.4,
          ticks: {
            fontSize: 11
          }
        }]
      }
  };
  render() {
    return (
      <div>
        <div className="az-content-body">
          <div className="az-content-header d-block d-md-flex">
            <div>
              <h2 className="az-content-title mg-b-5 mg-b-lg-8">Hi, welcome back!</h2>
              <p className="mg-b-0">Your customer service/help desk monitoring dashboard template.</p>
            </div>
          </div>
          <div className="row row-sm">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card card-body card-dashboard-fifteen">
                <h1>257</h1>
                <label className="tx-purple">Support Requests</label>
                <span>The total number of support requests that have come in.</span>
                <div className="chart-wrapper">
                  <Line data={this.supportRequestData} options={this.lineChartOptions} />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mg-t-20 mg-sm-t-0">
              <div className="card card-body card-dashboard-fifteen">
                <h1>187</h1>
                <label className="tx-primary">Complaints Received</label>
                <span>The total number of complaints that have been received.</span>
                <div className="chart-wrapper">
                  <Line data={this.complaintsRecievedtData} options={this.lineChartOptions} />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 mg-t-20 mg-sm-t-20 mg-lg-t-0">
              <div className="card card-body card-dashboard-fifteen">
                <h1>125<span>/187</span></h1>
                <label className="tx-teal">Complaints Resolved</label>
                <span>The total number of complaints that resolved.</span>
                <div className="chart-wrapper">
                <Line data={this.complaintsResolvedtData} options={this.lineChartOptions} />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-12 col-xl-3 mg-t-20 mg-xl-t-0">
              <div className="d-lg-flex d-xl-block">
                <div className="card wd-lg-50p wd-xl-auto">
                  <div className="card-header">
                    <h6 className="card-title tx-14 mg-b-0">Time to Resolve Complaint</h6>
                  </div>
                  <div className="card-body">
                    <h3 className="tx-bold tx-inverse lh--5 mg-b-15">7m:32s <span className="tx-base tx-normal tx-gray-600">/ Goal: 8m:0s</span></h3>
                    <div className="progress mg-b-0 ht-3">
                      <div className="progress-bar wd-85p bg-purple" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="card mg-t-20 mg-lg-t-0 mg-xl-t-20 mg-lg-l-20 mg-xl-l-0">
                  <div className="card-header">
                    <h6 className="card-title tx-14 mg-b-5">Avg. Speed of Answer</h6>
                    <p className="tx-12 lh-4 tx-gray-500 mg-b-0">Measure how quickly support staff answer incoming calls.</p>
                  </div>
                  <div className="card-body">
                    <h2 className="tx-bold tx-inverse lh--5 mg-b-5">0m:20s</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mg-t-15 mg-t-20">
              <div className="card">
                <div className="card-header">
                  <h6 className="card-title tx-14 mg-b-5">Customer Satisfaction</h6>
                  <p className="tx-gray-600 mg-b-0">Measures the quality or your support team’s efforts. It is important to monitor your customer satisfaction status, as the opinion... <a href="#/">Learn more</a></p>
                </div>
                <div className="card-body row pd-25">
                  <div className="col-sm-8 col-md-7">
                    <Doughnut data={this.doughnutPieData} options={this.doughnutPieOptions} height={205} />
                  </div>
                  <div className="col-sm-4 col-md-5 mg-t-30 mg-sm-t-0">
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-center"><span className="d-inline-block wd-10 ht-10 bg-purple mg-r-10"></span> Very Satisfied (26%)</li>
                      <li className="d-flex align-items-center mg-t-5"><span className="d-inline-block wd-10 ht-10 bg-primary mg-r-10"></span> Satisfied (39%)</li>
                      <li className="d-flex align-items-center mg-t-5"><span className="d-inline-block wd-10 ht-10 bg-teal mg-r-10"></span> Not Satisfied (20%)</li>
                      <li className="d-flex align-items-center mg-t-5"><span className="d-inline-block wd-10 ht-10 bg-gray-500 mg-r-10"></span> Satisfied (15%)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-gl-5 col-xl-6 mg-t-20">
              <div className="card">
                <div className="card-header">
                  <h6 className="card-title tx-14 mg-b-5">Talk Time</h6>
                  <p className="mg-b-0">Measure the amount of time your support agents spend talking to a customer. It gives your team insight into how long they should set aside... <a href="#/">Learn more</a></p>
                </div>
                <div className="table-responsive mg-t-15">
                  <table className="table table-striped table-talk-time">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Call Agent</th>
                        <th>Talk Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>21</td>
                        <td>Socrates Itumay</td>
                        <td>2m:12s</td>
                      </tr>
                      <tr>
                        <td>22</td>
                        <td>Isidore Dilao</td>
                        <td>1m:17s</td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>Joyce Chua</td>
                        <td>2m:0s</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Reynante Labares</td>
                        <td>2m:1s</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>Owen Bongcaras</td>
                        <td>2m:21s</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>Kirby Avendula</td>
                        <td>2m:33s</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xl-4 mg-t-20">
              <div className="card card-dashboard-sixteen">
                <div className="card-header">
                  <h6 className="card-title tx-14 mg-b-0">Top Performer Help Agents</h6>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table mg-b-0">
                      <tbody>
                        <tr>
                          <td>
                            <div className="az-img-user"><img src={require("../../assets/images/img5.jpg")} alt="" /></div>
                          </td>
                          <td>
                            <h6 className="mg-b-0 tx-inverse">Socrates Itumay</h6>
                            <small className="tx-11 tx-gray-500">Agent ID: 12022</small>
                          </td>
                          <td>
                            <h6 className="mg-b-0 tx-inverse">87/100</h6>
                            <small className="tx-11 tx-gray-500">Reached Goal</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="az-img-user"><img src={require("../../assets/images/img6.jpg")} alt="" /></div>
                          </td>
                          <td>
                            <h6 className="mg-b-0 tx-inverse">Reynante Labares</h6>
                            <small className="tx-11 tx-gray-500">Agent ID: 12028</small>
                          </td>
                          <td>
                            <h6 className="mg-b-0 tx-inverse">85/100</h6>
                            <small className="tx-11 tx-gray-500">Reached Goal</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="az-img-user"><img src={require("../../assets/images/img7.jpg")} alt="" /></div>
                          </td>
                          <td>
                            <h6 className="mg-b-0 tx-inverse">Owen Bongcaras</h6>
                            <small className="tx-11 tx-gray-500">Agent ID: 11500</small>
                          </td>
                          <td>
                            <h6 className="mg-b-0 tx-inverse">83/100</h6>
                            <small className="tx-11 tx-gray-500">Reached Goal</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="az-img-user"><img src={require("../../assets/images/img8.jpg")} alt="" /></div>
                          </td>
                          <td>
                            <h6 className="mg-b-0 tx-inverse">Mariane Galeon</h6>
                            <small className="tx-11 tx-gray-500">Agent ID: 11600</small>
                          </td>
                          <td>
                            <h6 className="mg-b-0 tx-inverse">82/100</h6>
                            <small className="tx-11 tx-gray-500">Reached Goal</small>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="az-img-user"><img src={require("../../assets/images/img9.jpg")} alt="" /></div>
                          </td>
                          <td>
                            <h6 className="mg-b-0 tx-inverse">Joyce Chua</h6>
                            <small className="tx-11 tx-gray-500">Agent ID: 11990</small>
                          </td>
                          <td>
                            <h6 className="mg-b-0 tx-inverse">80/100</h6>
                            <small className="tx-11 tx-gray-500">Reached Goal</small>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-7 col-xl-8 mg-t-20">
              <div className="card">
                <div className="card-header">
                  <h6 className="card-title tx-14 mg-b-5">Customer Complaints Comparison</h6>
                  <p className="mg-b-0">Monitor the total number of complaints that are resolved and unresolved.</p>
                </div>
                <div className="card-body">
                  <div className="dashboard-five-stacked-chart">
                    <Bar data={this.customerComplaintsData} options={this.customerComplaintsOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/* az-content-body */}
      </div>
    )
  }
}

export default Dashboard
