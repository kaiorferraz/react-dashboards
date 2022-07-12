import React, { Component } from 'react'
import {Line, HorizontalBar, Bar} from 'react-chartjs-2';
import {ProgressBar} from 'react-bootstrap';

export class Dashboard extends Component {
  
  totalAccountsData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
    datasets: [{
      label: 'Current week',
      data: [ 52,51,50,55,52,50,55,57,54,57,61,59,63,62,59,71,71,74,64,61,61,42,44,41,63,65,60,64,62,65],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#70737c'
      ]
    }]
  };
  revenueData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
    datasets: [{
      label: 'Current week',
      data: [ 49,54,59,60,56,57,55,58,57,55,53,54,55,56,58,59,62,59,60,55,54,49,47,50,49,50,53,54,51,49],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#007bff'
      ]
    }]
  };
  retensionData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
    datasets: [{
      label: 'Current week',
      data: [51,55,56,56,58,62,63,60,61,64,67,70,73,75,73,75,77,74,78,75,78,83,81,80,83,80,81,80,80,82],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#fff'
      ]
    }]
  };
  averageAccountData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
    datasets: [{
      label: 'Current week',
      data: [51,56,52,52,55,56,54,54,58,55,56,57,59,61,62,60,58,55,58,55,59,55,54,55,55,53,49,45,46,41],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#fff'
      ]
    }]
  };
  lineChartOptions = {
    maintainAspectRatio:false,
    responsive:true,
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 15,
          padding: 10,
        }
      }],
      xAxes: [{
        display: false,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
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
  averageAccountMonthlyData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149', '150'],
    datasets: [{
      label: 'Current week',
      data: [56,54,59,61,65,70,73,74,73,69,73,69,73,77,72,75,71,69,67,68,67,66,61,58,56,53,52,57,59,63,60,62,64,67,66,67,71,66,64,62,66,65,62,66,63,66,64,65,69,65,69,65,68,73,71,71,75,77,81,79,76,74,75,76,78,81,82,87,85,82,82,77,80,84,83,88,89,88,83,87,85,85,90,92,97,80,82,81,84,85,90,91,90,89,86,83,82,87,85,87,82,87,86,83,84,80,79,78,76,79,74,77,78,80,77,77,76,75,76,76,71,75,71,73,71,72,73,73,75,73,77,76,71,76,71,67,69,65,61,58,59,55,57,58,60,64,61,63,68,71],
      borderWidth: 2,
      fill: true,
      borderColor: [
        'rgba(128,189,255, .4)'
      ],
      backgroundColor: [
        'rgba(128,189,255, .4)'
      ]
    },{
      label: 'Current week',
      data: [53,50,49,47,49,50,48,48,53,52,49,50,48,44,40,41,45,44,41,38,41,39,35,38,38,40,38,42,46,43,40,36,31,28,29,29,33,37,35,37,39,39,34,37,39,38,37,40,35,31,31,30,25,28,28,30,32,32,37,35,39,41,41,43,39,39,43,42,43,38,43,41,44,46,47,49,46,51,50,53,56,52,56,60,58,56,55,54,54,58,57,60,57,56,55,54,52,54,54,51,51,46,48,45,48,43,45,43,41,40,38,40,44,44,41,37,39,35,32,35,38,37,38,37,37,33,35,33,31,29,31,34,32,33,37,32,36,35,38,42,41,45,46,45,45,42,44,39,44],
      borderWidth: 2,
      fill: true,
      borderColor: [
        'rgba(0,123,255, .6)'
      ],
      backgroundColor: [
        'rgba(0,123,255, .8)'
      ]
    },{
      label: 'Current week',
      data: [40,39,35,33,28,28,24,20,17,16,19,16,13,18,17,18,18,19,18,17,20,18,17,17,15,15,14,15,18,19,23,27,30,28,29,29,27,24,22,26,28,27,30,26,22,19,16,17,20,16,12,10,7,11,15,20,22,19,18,20,17,19,18,14,9,10,6,10,12,13,18,22,22,26,22,18,19,19,18,23,20,25,28,29,27,25,25,24,20,18,18,18,22,21,26,29,26,28,30,28,30,27,30,26,25,28,27,30,31,36,32,27,29,32,28,28,29,29,27,30,28,23,18,14,11,12,11,14,11,15,13,17,18,23,21,25,22,17,14,18,20,22,25,27,27,28,26,28,29,26],
      borderWidth: 2,
      fill: true,
      borderColor: [
        'rgba(0,61,128, 1)'
      ],
      backgroundColor: [
        'rgba(0,61,128, 1)'
      ]
    }]
  };
  averageAccountMonthlyOptions = {
    maintainAspectRatio:false,
    responsive:true,
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 15,
          padding: 10,
        }
      }],
      xAxes: [{
        display: false,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
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
  monthlyTrendsChartData = {
    labels: ['Jul', 'Aug', 'Sep'],
    datasets: [{
      data: [12, 39, 20],
      backgroundColor: '#007bff'
    }, {
      data: [22, 30, 25],
      backgroundColor: '#6f42c1'
    },{
      data: [40, 30, 35],
      backgroundColor: '#00cccc'
    },{
      data: [25, 40, 25],
      backgroundColor: '#004a99'
    }]
  };

  monthlyTrendsChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
        labels: {
          display: false
        }
    },
    scales: {
      yAxes: [{
        barPercentage: 0.75,
        ticks: {
          beginAtZero:true,
          fontSize: 11,
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero:true,
          fontSize: 11,
          max: 80
        }
      }]
    }
  };

  accountRetensionChartData = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [{
      data: [150,110,90,115,125,160,160,140,100,110,120,120],
      backgroundColor: '#2b91fe'
    },{
      data: [180,140,120,135,155,170,180,150,140,150,130,130],
      backgroundColor: '#054790'
    }]
  };

  accountRetensionChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
        labels: {
          display: false
        }
    },
    scales: {
      xAxes: [{
        //stacked: true,
        display: false,
        barPercentage: 0.5,
        ticks: {
          beginAtZero:true,
          fontSize: 11
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 10,
          color: '#eee',
          min: 80,
          max: 200
        }
      }]
    }
  };
  render() {
    return (
      <div>
        <div className="container d-block">
          <h2 className="az-content-title tx-24 mg-b-5">Hi, welcome back!</h2>
          <p className="mg-b-20 mg-lg-b-25">Your executive or sass dashboard template.</p>

          <div className="row row-sm mg-b-20">
            <div className="col-lg-8">
              <div className="row row-xs row-sm--sm">
                <div className="col-sm-6 col-md-3">
                  <div className="card card-dashboard-seventeen">
                    <div className="card-body">
                      <h6 className="card-title">Total Accounts</h6>
                      <div>
                        <h4>3,980</h4>
                        <span>Goal: 4,000</span>
                      </div>
                    </div>
                    <div className="chart-wrapper">
                      <Line data={this.totalAccountsData} options={this.lineChartOptions} />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                  <div className="card card-dashboard-seventeen">
                    <div className="card-body">
                      <h6 className="card-title">Monthly Recurring Revenue (MRR)</h6>
                      <div>
                        <h4>368,035</h4>
                        <span>Goal: 300,000</span>
                      </div>
                    </div>
                    <div className="chart-wrapper">
                      <Line data={this.revenueData} options={this.lineChartOptions} />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mg-t-20 mg-md-t-0">
                  <div className="card card-dashboard-seventeen bg-primary-dark tx-white">
                    <div className="card-body">
                      <h6 className="card-title">Monthly MRR Retention</h6>
                      <div>
                        <h4 className="text-white">102.3%</h4>
                        <span className="op-7">Goal: 105.5%</span>
                      </div>
                    </div>
                    <div className="chart-wrapper">
                      <Line data={this.retensionData} options={this.lineChartOptions} />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mg-t-20 mg-md-t-0">
                  <div className="card card-dashboard-seventeen bg-primary tx-white">
                    <div className="card-body">
                      <h6 className="card-title">Average MRR per Account</h6>
                      <div>
                        <h4 className="text-white">$89</h4>
                        <span className="op-7">Goal: $80</span>
                      </div>
                    </div>
                    <div className="chart-wrapper">
                      <Line data={this.retensionData} options={this.lineChartOptions} />
                    </div>
                  </div>
                </div>
                <div className="col-12 mg-t-20">
                  <div className="card card-dashboard-nineteen">
                    <div className="card-header">
                      <h6 className="card-title">Account &amp; Monthly Recurring Revenue Growth</h6>
                      <div className="row">
                        <div className="col-6 col-md-5">
                          <h4><span>$</span>620,076</h4>
                          <label className="az-content-label">MRR Growth</label>
                          <p>Measure How Fast You’re Growing Monthly Recurring Revenue. <a  href="#/">Learn More</a></p>
                        </div>
                        <div className="col-6 col-md-5">
                          <h4><span>$</span>1,200</h4>
                          <label className="az-content-label">Avg. MRR/Customer</label>
                          <p>The revenue generated per account on a monthly or yearly basis.  <a  href="#/">Learn More</a></p>
                        </div>
                      </div>
                      <div className="chart-legend">
                        <div>Growth Actual</div>
                        <div>Actual</div>
                        <div>Plan</div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="">
                        <Line data={this.averageAccountMonthlyData} options={this.averageAccountMonthlyOptions} height={200} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mg-t-20 mg-lg-t-0">
              <div className="card card-dashboard-eighteen">
                <h6 className="card-title mg-b-5">Finance Monitoring</h6>
                <p className="tx-gray-500 mg-b-0">July 01,2018 - September 30,2018</p>
                <div className="card-body row row-xs">
                  <div className="col-6">
                    <h6 className="dot-primary"><span>$</span>387,098</h6>
                    <label>Accounts Receivable</label>
                  </div>
                  <div className="col-6">
                    <h6 className="dot-purple"><span>$</span>657,213</h6>
                    <label>Accounts Payable</label>
                  </div>
                  <div className="col-6 mg-t-30">
                    <h6 className="dot-teal"><span>$</span>332,891</h6>
                    <label>Monthly Burn</label>
                  </div>
                  <div className="col-6 mg-t-30">
                    <h6 className="dot-dark-blue"><span>$</span>78,005</h6>
                    <label>Net Monthly Burn</label>
                  </div>
                </div>
                <h6 className="card-title mg-b-10">Monthly Trends</h6>
                <div className="chartjs-wrapper">
                  <HorizontalBar data={this.monthlyTrendsChartData} options={this.monthlyTrendsChartOptions} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mg-t-20">
              <div className="card card-dashboard-twenty ht-md-100p">
                <div className="card-body">
                  <h6 className="az-content-label tx-13 mg-b-5">Account Retention <span>(This Year)</span></h6>
                  <p className="mg-b-25">Number of customers who have active subscription with you.</p>
                  <div className="chartjs-wrapper">
                  <Bar data={this.accountRetensionChartData} options={this.accountRetensionChartOptions} /> 
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mg-t-20">
              <div className="row row-sm">
                <div className="col-sm-6">
                  <div className="card card-dashboard-twenty">
                    <div className="card-body">
                      <label className="az-content-label tx-13 tx-primary">Expansions</label>
                      <p>Customers who have upgraded the level of your products or service.</p>
                      <div className="expansion-value">
                        <strong>$1,500</strong>
                        <strong>$1,120</strong>
                      </div>
                      <div className="progress">
                        <div className="progress-bar wd-70p" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="expansion-label">
                        <span>This Month</span>
                        <span>Previous Month</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mg-t-20 mg-sm-t-0">
                  <div className="card card-dashboard-twenty ht-md-100p">
                    <div className="card-body">
                      <label className="az-content-label tx-13 tx-danger">Cancellations</label>
                      <p>Customers who have ended their subscription with you.</p>
                      <div className="expansion-value">
                        <strong>$1,900</strong>
                        <strong>$1,680</strong>
                      </div>
                      <div className="progress">
                        <div className="progress-bar wd-50p bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div className="expansion-label">
                        <span>This Month</span>
                        <span>Previous Month</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mg-t-20">
                  <div className="card card-dashboard-progress">
                    <div className="card-body">
                      <div className="d-sm-flex justify-content-between mg-b-20">
                        <label className="az-content-label tx-13 mg-b-10 mg-sm-b-0">MRR (September)</label>
                        <ul className="progress-legend">
                          <li>Expansion</li>
                          <li>New</li>
                        </ul>
                      </div>
                      <div className="media">
                        <label>None:</label>
                        <div className="media-body">
                          <ProgressBar now={50} label={50} className="mg-b-10"/>
                        </div>
                      </div>
                      <div className="media">
                        <label>Partner:</label>
                        <div className="media-body">
                          <ProgressBar now={50} label={80} variant="info" className="mg-b-10"/>
                        </div>
                      </div>
                    </div>
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

export default Dashboard
