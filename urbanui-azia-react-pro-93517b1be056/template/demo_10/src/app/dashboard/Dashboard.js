import React, { Component } from 'react'
import { Line, Bar } from 'react-chartjs-2'
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
  balanceData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100'],
    datasets: [{
      label: 'This week',
      data: [52,51,50,55,52,50,55,57,54,57,61,59,63,62,59,61,61,64,64,61,61,62,64,61,63,65,60,64,62,65,63,59,61,65,65,63,67,65,64,60,59,62,62,60,65,65,67,71,71,73,72,76,75,71,69,74,70,71,73,72,73,71,72,76,75,73,70,72,72,72,68,69,67,65,66,65,67,71,75,77,74,78,79,74,77,81,84,85,90,87,89,90,87,90,89,90,93,90,90,95,94],
      borderWidth: 1,
      fill: false,
      borderColor: ['#969dab']
    }]
  };

  balanceOptions = {
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
          beginAtZero: true,
          fontSize: 20,
          max: 120,
          padding: 0
        }
      }],
      xAxes: [{
        display:false,
        gridLines: {
          display: true,
          borderDash: [10, 4],
          color: '#ced4da',
          drawBorder: false
        },
        barPercentage: 0.6,
        ticks: {
          beginAtZero:false,
          fontSize: 11,
          fontFamily: 'Arial'
        }
      }]
    }
  };
  incomeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'This week',
      data: [7,5,9,10,1,4,4,7,5,10,4,4],
      borderWidth: 1,
      fill: true,
      backgroundColor: "#560bd0",
      borderColor: ['#560bd0']
    }]
  };
  expencesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'This week',
      data: [10,4,4,7,5,9,10,3,4,4,7,5],
      borderWidth: 1,
      fill: true,
      backgroundColor: "#007bff",
      borderColor: ['#007bff']
    }]
  };
  recievableData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'This week',
      data: [7,5,9,10,5,4,4,7,5,10,4,4],
      borderWidth: 1,
      fill: true,
      backgroundColor: "#00cccc",
      borderColor: ['#00cccc']
    }]
  };
  payableData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'This week',
      data: [1,4,4,7,5,10,4,7,5,9,10,4],
      borderWidth: 1,
      fill: true,
      backgroundColor: "#f10075",
      borderColor: ['#f10075']
    }]
  };

  barOptions = {
    maintainAspectRatio: true,
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
          beginAtZero: true,
          fontSize: 20,
          max: 10,
          padding: 0
        }
      }],
      xAxes: [{
        display:false,
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
  render() {
    return (
      <div>
        <div className="az-content-body az-content-body-dashboard-six">
          <h2 className="az-content-title tx-24 mg-b-5">Hi, welcome back!</h2>
          <p className="mg-b-25">Your finance performance and monitoring dashboard template.</p>

          <div className="row row-sm">
            <div className="col-sm-6 col-lg-3">
              <div className="card card-dashboard-donut">
                <div className="card-header">
                  <h6 className="card-title mg-b-10">Gross Profit Margin</h6>
                  <p className="mg-b-0 tx-12 tx-gray-500">The profit you make on each dollar of sales... <a href="#/">Learn more</a></p>
                </div>
                <div className="card-body">
                  <div className="az-donut-chart chart1">
                    <div className="slice one"></div>
                    <div className="slice two"></div>
                    <div className="chart-center">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mg-t-20 mg-sm-t-0">
              <div className="card card-dashboard-donut">
                <div className="card-header">
                  <h6 className="card-title mg-b-10">Net Profit Margin</h6>
                  <p className="mg-b-0 tx-12 tx-gray-500">Measures your business at generating prof... <a href="#/">Learn more</a></p>
                </div>
                <div className="card-body">
                  <div className="az-donut-chart chart2">
                    <div className="slice one"></div>
                    <div className="slice two"></div>
                    <div className="chart-center">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mg-t-20 mg-lg-t-0">
              <div className="card card-dashboard-balance">
                <div className="card-body">
                  <i className="fab fa-cc-visa"></i>
                  <label className="az-content-label mg-b-0">Your Balance</label>
                  <h1 className="balance-amount"><span>$</span>780,560<small>.00</small></h1>

                  <label className="az-content-label mg-b-2">Your Account Number</label>
                  <div className="account-number">
                    <span><i></i><i></i><i></i><i></i></span>
                    <span><i></i><i></i><i></i><i></i></span>
                    <span><i></i><i></i><i></i><i></i></span>
                    <span>5637</span>
                  </div>

                  <div className="d-sm-flex">
                    <div>
                      <label className="az-content-label">Account Holder</label>
                      <h5 className="account-name">Alicia Christensen</h5>
                    </div>
                    <div className="mg-t-20 mg-sm-t-0 mg-sm-l-50">
                      <label className="az-content-label">Account Type</label>
                      <h5 className="account-name">Savings</h5>
                    </div>
                  </div>
                </div>
                <div className="chart-wrapper">
                  <Line data={this.balanceData} options={this.balanceOptions}/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mg-t-20">
              <div className="card card-dashboard-ratio">
                <div className="card-body">
                  <div>
                    <div className="card-icon"><i className="typcn typcn-chart-line-outline"></i></div>
                  </div>
                  <div>
                    <h6 className="card-title mg-b-7">Quick Ratio</h6>
                    <h5>0.9:8</h5>
                    <div className="progress ht-5 mg-b-5">
                      <div className="progress-bar bg-warning wd-90p" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="tx-12 tx-gray-500">Quick Ratio Goal: 1.0 or higher</span>

                    <p className="mg-t-10 mg-b-0">Measures your Current Assets + Accounts Receivable / Current Liabilities <a href="#/">Learn more</a></p>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <div className="card-icon"><i className="typcn typcn-chart-area-outline"></i></div>
                  </div>
                  <div>
                    <h6 className="card-title mg-b-7">Current Ratio</h6>
                    <h5>2.8</h5>
                    <div className="progress ht-5 mg-b-5">
                      <div className="progress-bar bg-success wd-60p" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="tx-12 tx-gray-500">Quick Ratio Goal: 2.0 or higher</span>
                    <p className="mg-t-10 mg-b-0">Measures your Current Assets / Current Liabilities. <a href="#/">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mg-t-20">
              <div className="row row-sm">
                <div className="col-sm-6">
                  <div className="card card-dashboard-finance">
                    <h6 className="card-title">Total Income</h6>
                    <div className="wd-80">
                      <Bar data={this.incomeData} options={this.barOptions} height={87}/>
                    </div>
                    <h2><span>$</span>83,320<small>.50</small></h2>
                    <span className="tx-12"><span className="tx-success tx-bold">18.2%</span> higher vs previous month</span>
                  </div>
                </div>
                <div className="col-sm-6 mg-t-20 mg-sm-t-0">
                  <div className="card card-dashboard-finance">
                    <h6 className="card-title">Total Expenses</h6>
                    <div className="wd-80">
                      <Bar data={this.expencesData} options={this.barOptions} height={87}/>
                    </div>
                    <h2><span>$</span>32,370<small>.00</small></h2>
                    <span className="tx-12"><span className="tx-danger tx-bold">0.7%</span> higher vs previous month</span>
                  </div>
                </div>
                <div className="col-sm-6 mg-t-20">
                  <div className="card card-dashboard-finance">
                    <h6 className="card-title">Accounts Receivable</h6>
                    <div className="wd-80">
                      <Bar data={this.payableData} options={this.barOptions} height={87}/>
                    </div>                    
                    <h2><span>$</span>9,112<small>.00</small></h2>
                    <span className="tx-12"><span className="tx-success tx-bold">0.7%</span> higher vs previous month</span>
                  </div>
                </div>
                <div className="col-sm-6 mg-t-20">
                  <div className="card card-dashboard-finance">
                    <h6 className="card-title">Accounts Payable</h6>
                    <div className="wd-80">
                      <Bar data={this.recievableData} options={this.barOptions} height={87}/>
                    </div>                    
                    <h2><span>$</span>8,216<small>.00</small></h2>
                    <span className="tx-12"><span className="tx-success tx-bold">0.7%</span> higher vs previous month</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mg-t-20">
              <div className="card card-dashboard-table-six">
                <h6 className="card-title">Financial Management Review</h6>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th colSpan="5">Quarter To Date (QTD)</th>
                        <th colSpan="2">Year To Date (YTD)</th>
                      </tr>
                      <tr>
                        <th>&nbsp;</th>
                        <th>Actual</th>
                        <th>Forecast</th>
                        <th>Variance</th>
                        <th>% Variance</th>
                        <th>Actual</th>
                        <th>Forecast</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Office &amp; Supplies</td>
                        <td>232,243</td>
                        <td>399,768</td>
                        <td>40,234</td>
                        <td>5.1%</td>
                        <td>2,983,098</td>
                        <td>2,092,243</td>
                      </tr>
                      <tr>
                        <td>Salaries &amp; Benefits</td>
                        <td>2,232,877</td>
                        <td>3,099,565</td>
                        <td>400,020</td>
                        <td>6.8%</td>
                        <td>28,983,091</td>
                        <td>29,092,765</td>
                      </tr>
                      <tr>
                        <td>Professional Services</td>
                        <td>32,435</td>
                        <td>99,789</td>
                        <td>20,020</td>
                        <td>16.9%</td>
                        <td>183,566</td>
                        <td>292,897</td>
                      </tr>
                      <tr>
                        <td>Human Resources</td>
                        <td>76,877</td>
                        <td>98,565</td>
                        <td>123,020</td>
                        <td>15.0%</td>
                        <td>101,675</td>
                        <td>122,232</td>
                      </tr>
                      <tr>
                        <td>Travel &amp; Entertainment</td>
                        <td>2,232</td>
                        <td>3,099</td>
                        <td>400</td>
                        <td>1.2%</td>
                        <td>13,091</td>
                        <td>14,765</td>
                      </tr>
                      <tr>
                        <td>Grand Total</td>
                        <td>3,433,232</td>
                        <td>4,768,099</td>
                        <td>999,400</td>
                        <td>88.2%</td>
                        <td>30,643,091</td>
                        <td>31,644,765</td>
                      </tr>
                    </tbody>
                  </table>
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
