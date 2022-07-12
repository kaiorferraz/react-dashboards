import React, { Component } from 'react'
import {Line, Bar, Doughnut} from 'react-chartjs-2';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import {ProgressBar} from 'react-bootstrap';

export class Dashboard extends Component {
  
  websiteAudienceChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', 
    '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149'],
    datasets: [{
      label: 'This week',
      data: [36.57, 38.9, 42.3, 41.8, 37.4, 32.5, 28.1, 24.7, 23.4, 20.4, 16.5, 12.1, 9.2, 5.1, 9.6, 10.8, 13.2, 18.2, 13.9, 18.7, 13.7, 11.3, 13.7, 15.8, 12.9, 17.5, 21.9, 18.2, 14.3, 18.2, 14.8, 13.01, 14.5, 15.4, 16.6, 19.4, 14.5, 17.7, 13.8, 9.4, 11.9, 9.7, 6.1, 1.4, 2.3, 2.3, 4.5, 3.7, 5.7, 5.08, 1.9, 8.2,
        7.9, 5.02, 2.8, 6.8, 6.2, 9.8, 9.3, 11.9, 10, 9, 6, 4.5, 2.7, 4.3, 3.6, 4.2, 2, 1.4, 3.7, 1.5, 5.7, 4.9, 1, 4.7, 6.3, 4.2, 5.1, 5.2, 3.8, 8.2, 7.2, 6.5, 1.7, 11.4, 10.5, 3.8, 4.7, 8.5, 10.2, 11, 15.6, 19.7, 18.1, 13.5, 12, 7.5, 3.7, 9.7, 9.2, 13.4, 18.4, 22.4, 18.7, 15.2, 14.5, 14.4, 12, 13.7, 13.3, 15.4,
         15.8, 17.7, 14.3, 10.6, 12.7, 14.7, 18.6, 22.9, 18, 22.8, 23.8, 27.1, 24.7, 20, 22.7, 20.9, 16.6, 15.1, 13.1, 10.7, 11.4, 13.1, 10.1, 9.2, 9.2, 10.3, 15.2, 12.5, 14, 18.2, 16.3, 17.7, 18.9, 15.3, 18.1, 16.3, 14.8, 10 ],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(255, 255, 255, 1)'],
      borderColor: ['rgb(0, 123, 255)']
    },{
      label: 'Current week',
      data: [53, 50.3, 49.4, 47.7, 49, 50.6, 48.7, 48.8, 53.5, 52.9, 49, 50.2, 48.3, 44.8, 40.7, 41.2, 45.6, 44.6, 41.3, 38.2, 39.6, 41, 39.4, 35.6, 38.5, 38.5, 40.6, 38.7, 42.9, 46.3, 43.5, 40.6, 36.5, 31.7, 28.9, 29.6, 29.5, 33.1, 37, 35.8, 37.6, 39.6, 39, 34.1, 37.4, 39.2, 38.4, 37.7, 40.1, 35.8, 31.5, 31.8,
        30.5, 25.7, 28.2, 28.4, 30, 32.1, 32.9, 37.6, 35.2, 39.1, 41.3, 41.4, 43.7, 39.4, 39.2, 43.8, 42.4, 43.6, 38.7 , 43.5, 41.8, 44.8, 46.1, 47.6, 49, 46.4, 51.2, 50.1, 53.6, 56, 52.7, 56.6, 60.2, 58.3, 56.5, 55.7, 54.7, 54.2, 58.6, 57, 60.5, 57.6, 56.1, 55.1, 54.3, 52.3, 54.5, 54.1, 51.9, 51.1, 46.3, 48.3,
         45.8, 48.2, 43.3, 45.8, 43.4, 41.3, 40.9, 38.4, 40.1, 44.8, 44, 41.4, 37.8, 39.2, 35.2, 32.1, 35.6, 38, 37.9, 38.7, 37.4, 37.5, 33.1, 35, 33.1, 31.8, 29.1, 31.9, 34.3, 32.9, 33.1, 37.1, 32.6, 36.9, 35.9, 38.1, 42.5, 41.5, 45.5, 46.3, 45.7, 45.4, 42.5, 44.4, 39.7, 44.7],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(86, 11, 208, .05)'],
      borderColor: ['rgb(86, 11, 208)'],
    }]
  };

  websiteAudienceChartOptions = {
    scales: {
      yAxes: [{
        display: true,
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
          stepSize: 22,
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
  ticketSalesChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35'],
    datasets: [
      {
        label: 'Current week',
        data: [1,2,4,4,7,5,9,10,6,4,4,7,5,9,10,5,9,10,6,4,4,7,5,9,10,9,10,6,4,4,7,5,6,4,3,4],
        borderWidth: 2,
        fill: true,
        backgroundColor: ['#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1' , '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1'],
        borderColor: ['#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1' , '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1', '#6f42c1'],
      },{
      label: 'This week',
      data: [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef'],
      borderColor: ['#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef', '#e9ecef']
    },]
  };

  ticketSalesChartOptions = {
    scales: {
      yAxes: [{
        display: true,
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
          max:20,
          stepSize: 10,
          padding: 10,
        }
      }],
      xAxes: [{
        display: false,
        stacked:true,
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
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <div>
        <div className="container-fluid d-block">
        <div className="media media-dashboard row">
          <div className="media-body col-xl-9 col-lg-8">
            <div className="d-flex justify-content-between mb-3">
              <div>
                <h6 className="az-content-title tx-18 mg-b-5">Event Monitoring Dashboard</h6>
                <p className="az-content-text tx-13 mg-b-0">Hi, welcome back! Here's your summary of your events.</p>
              </div>

              <div className="az-content-header-right">
                <div className="media">
                  <div className="media-body">
                    <label>Start Date</label>
                    <h6>Oct 10, 2018</h6>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <label>End Date</label>
                    <h6>Oct 23, 2018</h6>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <label>Event Category</label>
                    <h6>All Categories</h6>
                  </div>
                </div>
                <a href="#/" className="btn btn-purple">Export</a>
              </div>
            </div>

            <div className="card card-dashboard-twelve mg-b-20">
              <div className="card-header">
                <h6 className="card-title">Sales Overview <span>(All Events)</span></h6>

                <div className="sales-overview">
                  <div className="media">
                    <div className="media-icon bg-purple"><i className="typcn typcn-ticket"></i></div>
                    <div className="media-body">
                      <label>Tickets Sold</label>
                      <h4>3,375</h4>
                      <span><strong>10.5%</strong> of 20,000 Total</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-icon bg-teal"><i className="typcn typcn-ticket"></i></div>
                    <div className="media-body">
                      <label>Tickets Available</label>
                      <h4>16,625</h4>
                      <span><strong>89.5%</strong> of 20,000 Total</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-icon bg-primary"><i className="typcn typcn-chart-area-outline"></i></div>
                    <div className="media-body">
                      <label>Net Revenue</label>
                      <h4><span>$</span>20,832</h4>
                      <span><strong>3.4%</strong> of Sales Avg.</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <label>About Revenue</label>
                      <p>The total revenue from all events transactions. Depending on your implementation, this can include tax, discounts such as early bird promo. <a href="#/">Learn more</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-legend">
                  <div><span className="bg-indigo"></span> Tickets Sold</div>
                  <div><span className="bg-teal"></span> Tickets Available</div>
                </div>
                <div className="chart-wrapper">
                   <Line data={this.websiteAudienceChartData} options={this.websiteAudienceChartOptions} height={70} />
                </div>
              </div>
            </div>

            <div className="row row-sm mg-b-20">
              <div className="col-md-6">
                <div className="card card-dashboard-fourteen">
                  <label className="az-content-label">Ticket Sales <span>(This Month)</span></label>
                  <div className="card-body">
                  <Bar data={this.ticketSalesChartData} options={this.ticketSalesChartOptions} height={70} />
                  </div>
                  <div className="card-footer row no-gutters">
                    <div className="col-4">
                      <h6>9,800</h6>
                      <label>Tickets For Sale</label>
                    </div>
                    <div className="col-4">
                      <h6>7,258</h6>
                      <label>Tickets Sold</label>
                    </div>
                    <div className="col-4">
                      <h6>2,542</h6>
                      <label>Tickets Unsold</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mg-t-20 mg-md-t-0">
                <div className="card card-dashboard-fourteen">
                  <label className="az-content-label">Sales Revenue <span>(This Month)</span></label>
                  <div className="card-body">
                    <h1><span>$</span>876,899.60</h1>
                    <label>Total Revenue</label>
                    <div className="row mg-t-15">
                      <div className="col-6">
                        <h4>1,500</h4>
                        <span>Events Hosted</span>
                        <div className="progress mg-t-5 ht-5">
                          <div className="progress-bar wd-80p" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>80% of your goals</small>
                      </div>
                      <div className="col-6">
                        <h4>991</h4>
                        <span>Events that earned</span>
                        <div className="progress mg-t-5 ht-5">
                          <div className="progress-bar wd-50p bg-teal" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>50% of your goals</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-dashboard-thirteen">
              <label className="az-content-label">Events Interest Comparison</label>
              <p className="az-content-text">A comparison of people who mark themeselves of their interest based from the date range given above.</p>
              <div className="row mg-t-20 mg-b-20">
                <div className="col-lg-4">
                  <Doughnut data={this.doughnutPieData} options={this.doughnutPieOptions} height={70} />
                </div>
                <div className="col-lg-8 mg-t-40 mg-lg-t-0">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="media">
                        <div className="media-icon tx-purple">
                          <i className="icon ion-ios-man"></i>
                        </div>
                        <div className="media-body">
                          <h6>3,890 <span>(26%)</span></h6>
                          <label>Interested</label>
                        </div>
                      </div>
                      <span>People who have a ticket reservation of the event is automatically mark as interested.</span>
                    </div>
                    <div className="col-sm-6 mg-t-20 mg-sm-t-0">
                      <div className="media">
                        <div className="media-icon tx-primary">
                          <i className="icon ion-ios-man"></i>
                        </div>
                        <div className="media-body">
                          <h6>8,005 <span>(39%)</span></h6>
                          <label>Going</label>
                        </div>
                      </div>
                      <span>People who have bought a ticket of the event is automatically mark as going.</span>
                    </div>
                    <div className="col-sm-6 mg-t-20 mg-lg-t-40">
                      <div className="media">
                        <div className="media-icon tx-teal">
                          <i className="icon ion-ios-man"></i>
                        </div>
                        <div className="media-body">
                          <h6>2,120 <span>(20%)</span></h6>
                          <label>Maybe</label>
                        </div>
                      </div>
                      <span>People who have viewed the event details and set themeselves as maybe.</span>
                    </div>
                    <div className="col-sm-6 mg-t-20 mg-lg-t-40">
                      <div className="media">
                        <div className="media-icon tx-gray-500">
                          <i className="icon ion-ios-man"></i>
                        </div>
                        <div className="media-body">
                          <h6>1,613 <span>(15%)</span></h6>
                          <label>Not Going</label>
                        </div>
                      </div>
                      <span>People who have viewed the event details and set themeselves as not going.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="media-aside col-xl-3 col-lg-4">
            <div className="row row-sm">
              <div className="col-md-12 col-lg-12 col-xl-12">
                <div className="card card-dashboard-calendar">
                  <h6 className="card-title">Event Calendar</h6>
                  <div className="media az-media-date">
                    <h1>17</h1>
                    <div className="media-body">
                      <p>Nov 2018</p>
                      <span>Saturday</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      inline
                    />
                    </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-xl-12 mg-t-20 mg-md-t-0 mg-xl-t-20">
                <div className="card card-dashboard-events">
                  <div className="card-header">
                    <h6 className="card-title">November 2018</h6>
                    <h5 className="card-subtitle">Upcoming Events</h5>
                  </div>
                  <div className="card-body">
                    <div className="list-group">
                      <div className="list-group-item">
                        <div className="event-indicator bg-purple"></div>
                        <label>Nov 20 <span>Tuesday</span></label>
                        <h6>PH World Mall Lantern Festival</h6>
                        <p><strong>8AM - 4PM</strong> Bay Area, San Francisco</p>
                        <small><span className="tx-danger">Sold Out</span> (3000 tickets sold)</small>

                        <div className="event-user">
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img9.jpg")} alt="" /></a>
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img10.jpg")} alt="" /></a>
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img1.jpg")} alt="" /></a>
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img2.jpg")} alt="" /></a>
                          <a href="#/">20+ more</a>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="event-indicator bg-primary"></div>
                        <label>Nov 23 <span>Friday</span></label>
                        <h6>Asia Pacific Generation Workshop</h6>
                        <p><strong>8AM - 5PM</strong> Singapore</p>
                        <small><span className="tx-warning">Sold Out Soon</span> (12 tickets left)</small>

                        <div className="event-user">
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img1.jpg")} alt="" /></a>
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img2.jpg")} alt="" /></a>
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img3.jpg")} alt="" /></a>
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img4.jpg")} alt="" /></a>
                          <a href="#/">20+ more</a>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="event-indicator bg-pink"></div>
                        <label>Nov 23 <span>Friday</span></label>
                        <h6>Korea Smart Device Trade Show</h6>
                        <p><strong>8AM - 5PM</strong> Singapore</p>
                        <small><span className="tx-success">Free Registration</span> (Limited seats only)</small>

                        <div className="event-user">
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img5.jpg")} alt="" /></a>
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img6.jpg")} alt="" /></a>
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img7.jpg")} alt="" /></a>
                          <a href="#/" className="az-img-user"><img src={require("../../assets/images/img8.jpg")} alt="" /></a>
                          <a href="#/">20+ more</a>
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
      </div>
    )
  }
}

export default Dashboard
