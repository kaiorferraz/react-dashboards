import React, { Component } from 'react';
import Rating from 'react-rating';
import { Line, Bar,Doughnut } from 'react-chartjs-2';
import { Trans } from 'react-i18next';

export class Rtl extends Component {

  salesRevenueData = {
    labels: Array.from(Array(37).keys(), (_, k)=> 4 + (k) ),
    datasets: [
        {
        label: '# of Votes',
        data: [24, 28, 28, 27, 32, 24, 29, 24, 23, 30, 44, 37, 29, 23, 32, 40, 30, 28, 43, 21, 20, 34, 31, 36, 23, 27, 21, 40, 36, 26, 35, 27, 41, 25, 39, 26, 37, 29, 22, 42],
        borderColor:'#00cff4',
        borderWidth: 2,
        fill: true,
        lineTension: 0,
        backgroundColor: 'rgba(230, 246, 249, 0.3)'
      },
      {
        label: '# of Votes2',
        data: [71, 62, 50, 57, 42, 47, 40, 44, 67, 70, 73, 59, 64, 40, 55, 54, 48, 42, 49, 44, 64, 44, 50, 46, 65, 41, 50, 72, 60, 51, 68, 66, 69, 42, 63, 58, 52, 60, 68, 71],
        borderColor:'#0033c4',
        borderWidth: 2,
        fill: true,
        backgroundColor: 'rgba(230, 246, 249, 0.3)',
        lineTension: 0
      }
    ]
  };

  salesRevenueOptions = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        gridLines: {
          display:false
        },
        ticks: {
          beginAtZero: true,
          display: false,
        },
      }],
      xAxes: [{
        gridLines:{
          drawBorder: false
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10
        },
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };

  customersChartData = (canvas) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0,0,0,150);

    gradient.addColorStop(0, 'rgba(0, 210, 132, 0.78)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
  
    return {
    
      labels: ["", "JAN 5", "", "JAN 10", "", "JAN 15", "", "JAN 20", "", "JAN 25", "", "JAN 30", ""],
      datasets: [{
        label: 'Custom Label Name',
        backgroundColor: gradient,
        pointBackgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#00d284',
        data: [15, 16, 15, 14, 13, 12, 13, 14, 16, 15, 16, 17, 18],
      }]
    
    }
  }

  customersChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: ['rgba(0,0,0,0)', '#00d180', 'rgba(0,0,0,0)', '#00d180',' rgba(0,0,0,0)', '#00d180', 'rgba(0,0,0,0)', '#00d180', 'rgba(0,0,0,0)', '#00d180', 'rgba(0,0,0,0)', '#00d180', 'rgba(0,0,0,0)'],
          lineWidth: 1,
          drawBorder: false,
        },
        ticks: {
          fontColor: '#60dbb2',
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 8,
          fontStyle: 'bold'
        }
      }],
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 5,
          max: 25,
          padding: 5
        }
      }]
    },
    elements: {
      line: {
        tension: 0.4
      }
    },
    legend: {
      display: false
    },
    point: {
      backgroundColor: 'white'
    }
  }

  conversionChartData = {
    labels: ["10", "", "20", "", "30", "", "40", "", "50", "", "60"],
    datasets: [{
      label: '# of Votes',
      data: [10, 9, 8, 9, 12, 13, 14, 13, 12, 14, 13],
      backgroundColor: '#5e6eed',
      borderColor: '#5e6eed',
      borderWidth: 1,
      fill: false
    }]
  };

  conversionChartOptions = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          min: 0,
          max: 20
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        beginAtZero: true
      }],
      xAxes: [{
        barPercentage: 0.4,
        gridLines: {
          color: ['rgba(169, 169, 169, 0.32)', 'rgba(0,0,0,0)', 'rgba(169, 169, 169, 0.32)', 'rgba(0,0,0,0)', 'rgba(169, 169, 169, 0.32)', 'rgba(0,0,0,0)', 'rgba(169, 169, 169, 0.32)', 'rgba(0,0,0,0)', 'rgba(169, 169, 169, 0.32)', 'rgba(0,0,0,0)', 'rgba(169, 169, 169, 0.32)' ],
          drawBorder: false,
          offsetGridLines: false
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }

  inlineBarChartData = {
    labels: [1,2,3,4,5,6,7,8],
    datasets: [{
      label: '# of Votes',
      data: [5, 6, 7, 6, 7, 8, 7, 9],
      barPercentage: 0.2,
      backgroundColor: '#fff',
      borderColor: '#fff',
      borderWidth: 1,
      fill: true
    }]
  }

  inlineBarChartOptions = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }]
    },
    legend: {
      display: false
    }
  }

  trafficChartData = {
    datasets: [{
      data: [30, 30, 40],
      backgroundColor: [
        '#5e6eed',
        '#00cff4',
        '#ff5730'
      ],
      hoverBackgroundColor: [
        '#5e6eed',
        '#00cff4',
        '#ff5730'
      ],
      borderColor: [
        '#5e6eed',
        '#00cff4',
        '#ff5730'
      ],
      legendColor: [
        '#5e6eed',
        '#00cff4',
        '#ff5730'
      ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Organic search',
      'Refferral',
      'Social Media',
    ]
  };

  trafficChartData2 = {
    datasets: [{
      data: [40, 20, 40],
      backgroundColor: [
        '#5e6eed',
        '#00d284',
        '#ff0d59'
      ],
      hoverBackgroundColor: [
        '#5e6eed',
        '#00d284',
        '#ff0d59'
      ],
      borderColor: [
        '#5e6eed',
        '#00d284',
        '#ff0d59'
      ],
      legendColor: [
        '#5e6eed',
        '#00d284',
        '#ff0d59'
      ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Page views',
      'New users',
      'Bounce rate',
    ]
  }
  
  
  deviceSessionsdata = {
    datasets: [{
      data: [40, 50, 10],
      backgroundColor: [
        '#00cff4',
        '#00d284',
        '#ff0d59'
      ],
      hoverBackgroundColor: [
        '#00cff4',
        '#00d284',
        '#ff0d59'
      ],
      borderColor: [
        '#00cff4',
        '#00d284',
        '#ff0d59'
      ],
      legendColor: [
        '#00cff4',
        '#00d284',
        '#ff0d59'
      ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Iphone',
      'Samsung',
      'Oneplus',
    ]

  }

  trafficChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: false
  }

  render () {
    return (
      <div>
        <div className="page-header flex-wrap">
              <div className="header-left">
                <button className="btn btn-primary ml-2 mt-2 mt-sm-0"><Trans>Create new document</Trans></button>
                <button className="btn btn-outline-primary mt-2 mt-sm-0"><Trans>Import documents</Trans></button>
              </div>
              <div className="header-right d-flex flex-wrap mt-2 mt-sm-0">
                <div className="d-flex align-items-center mt-2 mt-md-0">
                  <a href="!#" onClick={evt => evt.preventDefault()}>
                    <p className="m-0 pl-3"><Trans>Dashboard</Trans></p>
                  </a>
                  <a className="pr-3 ml-4" href="!#" onClick={evt => evt.preventDefault()}>
                    <p className="m-0">ADE-00234</p>
                  </a>
                </div>
                <button type="button" className="btn btn-primary mt-2 mt-md-0 btn-icon-text">
                  <i className="mdi mdi-plus-circle"></i><Trans>Add Prodcut</Trans> </button>
              </div>
            </div>
            {/* first row starts here */}
            <div className="row">
              <div className="col-xl-9 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div>
                        <div className="card-title mb-0"><Trans>Sales Revenue</Trans></div>
                        <h3 className="font-weight-bold mb-0">$32,409</h3>
                      </div>
                      <div>
                        <div className="d-flex flex-wrap pt-2 justify-content-between sales-header-right">
                          <div className="d-flex ml-5">
                            <button type="button" className="btn btn-icon btn-outline-sales"><i className="mdi mdi-inbox-arrow-down"></i></button>
                            <div className="pr-2">
                              <h4 className="mb-0 font-weight-semibold head-count">$8,217</h4>
                              <span className="font-10 font-weight-semibold text-muted"><Trans>TOTAL SALES</Trans></span>
                            </div>
                          </div>
                          <div className="d-flex ml-3 mt-2 mt-sm-0">
                            <button type="button" className="btn btn-icon btn-outline-sales profit"><i className="mdi mdi-cash text-info"></i></button>
                            <div className="pr-2">
                              <h4 className="mb-0 font-weight-semibold head-count">2,804</h4>
                              <span className="font-10 font-weight-semibold text-muted"><Trans>TOTAL PROFIT</Trans></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted font-13 mt-2 mt-sm-0"><Trans>Your sales monitoring dashboard template.</Trans> <a className="text-muted font-13" href="!#" onClick={evt => evt.preventDefault()}><u><Trans>Learn more</Trans></u></a></p>
                    <div className="sales-revenue-chart-wrapper">
                      <Line data={this.salesRevenueData} options={this.salesRevenueOptions} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 stretch-card grid-margin">
                <div className="card card-img">
                  <div className="card-body d-flex align-items-center">
                    <div className="text-white">
                      <h1 className="font-20 font-weight-semibold mb-0"><Trans>Get premium</Trans></h1>
                      <h1 className="font-20 font-weight-semibold"><Trans>account!</Trans></h1>
                      <p><Trans>to optimize your selling product</Trans></p>
                      <p className="font-10 font-weight-semibold"><Trans>Enjoy the advantage of premium.</Trans></p>
                      <button className="btn bg-white small"><Trans>Get Premium</Trans></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* chart row starts here */}
            <div className="row">
              <div className="col-sm-6 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="card-title"><Trans>Customers</Trans> <small className="d-block text-muted"><Trans>August 01 - August 31</Trans></small>
                      </div>
                      <div className="d-flex text-muted font-20">
                        <i className="mdi mdi-printer mouse-pointer"></i>
                        <i className="mdi mdi-help-circle-outline mr-2 mouse-pointer"></i>
                      </div>
                    </div>
                    <h3 className="font-weight-bold mb-0">2,409 <span className="text-success h5">4,5%<i className="mdi mdi-arrow-up"></i></span></h3>
                    <span className="text-muted font-13"><Trans>Avg customers/Day</Trans></span>
                    <div className="customer-chart-wrapper">
                      <Line data={this.customersChartData} options={this.customersChartOptions} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="card-title"><Trans>Conversions</Trans> <small className="d-block text-muted"><Trans>August 01 - August 31</Trans></small>
                      </div>
                      <div className="d-flex text-muted font-20">
                        <i className="mdi mdi-printer mouse-pointer"></i>
                        <i className="mdi mdi-help-circle-outline mr-2 mouse-pointer"></i>
                      </div>
                    </div>
                    <h3 className="font-weight-bold mb-0">0.40% <span className="text-success h5">0.20%<i className="mdi mdi-arrow-up"></i></span></h3>
                    <span className="text-muted font-13"><Trans>Avg customers/Day</Trans></span>
                    <div className="conversion-chart-wrapper">
                      <Bar data={this.conversionChartData} options={this.conversionChartOptions} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* image card row starts here */}
            <div className="row">
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body p-0">
                    <img className="img-fluid w-100" src={require('../../assets/images/dashboard/img_1.jpg')} alt="Cosy Studio flat in London" />
                  </div>
                  <div className="card-body px-3 text-dark">
                    <div className="d-flex justify-content-between">
                      <p className="text-muted font-13 mb-0"><Trans>ENTIRE APARTMENT</Trans></p>
                      <i className="mdi mdi-heart-outline"></i>
                    </div>
                    <h5 className="font-weight-semibold"><Trans>Cosy Studio flat in London</Trans></h5>
                    <div className="d-flex justify-content-between font-weight-semibold">
                      <p className="mb-0"><i className="mdi mdi-star star-color pl-1"></i>4.60 (35)</p>
                      <p className="mb-0"><Trans>$5,267/night</Trans></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body p-0">
                    <img className="img-fluid w-100" src={require('../../assets/images/dashboard/img_2.jpg')} alt="Victoria Bedsit Studio Ensuite" />
                  </div>
                  <div className="card-body px-3 text-dark">
                    <div className="d-flex justify-content-between">
                      <p className="text-muted font-13 mb-0"><Trans>ENTIRE APARTMENT</Trans></p>
                      <i className="mdi mdi-heart-outline"></i>
                    </div>
                    <h5 className="font-weight-semibold"><Trans>Victoria Bedsit Studio Ensuite</Trans></h5>
                    <div className="d-flex justify-content-between font-weight-semibold">
                      <p className="mb-0"><i className="mdi mdi-star star-color pl-1"></i>4.83 (12)</p>
                      <p className="mb-0"><Trans>$6,144/night</Trans></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body p-0">
                    <img className="img-fluid w-100" src={require('../../assets/images/dashboard/img_3.jpg')} alt="Fabulous Huge Room" />
                  </div>
                  <div className="card-body px-3 text-dark">
                    <div className="d-flex justify-content-between">
                      <p className="text-muted font-13 mb-0"><Trans>ENTIRE APARTMENT</Trans></p>
                      <i className="mdi mdi-heart-outline"></i>
                    </div>
                    <h5 className="font-weight-semibold"><Trans>Fabulous Huge Room</Trans> </h5>
                    <div className="d-flex justify-content-between font-weight-semibold">
                      <p className="mb-0"><i className="mdi mdi-star star-color pl-1"></i>3.83 (15)</p>
                      <p className="mb-0"><Trans>$5,267/night</Trans></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* table row starts here */}
            <div className="row">
              <div className="col-xl-4 grid-margin">
                <div className="card card-stat stretch-card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="text-white">
                        <h3 className="font-weight-bold mb-0">$168.90</h3>
                        <h6><Trans>This Month</Trans></h6>
                        <div className="badge badge-danger">23%</div>
                      </div>
                      <div className="inline-bar-chart-wrapper">
                        <Bar data={this.inlineBarChartData} options={this.inlineBarChartOptions} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card stretch-card mb-3">
                  <div className="card-body d-flex flex-wrap justify-content-between">
                    <div>
                      <h4 className="font-weight-semibold mb-1 text-black"><Trans>Member Profit</Trans></h4>
                      <h6 className="text-muted"><Trans>Average Weekly Profit</Trans></h6>
                    </div>
                    <h3 className="text-success font-weight-bold">+168.900</h3>
                  </div>
                </div>
                <div className="card stretch-card mb-3">
                  <div className="card-body d-flex flex-wrap justify-content-between">
                    <div>
                      <h4 className="font-weight-semibold mb-1 text-black"><Trans>Total Profit</Trans></h4>
                      <h6 className="text-muted"><Trans>Weekly Customer Orders</Trans></h6>
                    </div>
                    <h3 className="text-success font-weight-bold">+6890.00</h3>
                  </div>
                </div>
                <div className="card mt-3">
                  <div className="card-body d-flex flex-wrap justify-content-between">
                    <div>
                      <h4 className="font-weight-semibold mb-1 text-black"><Trans>Issue Reports</Trans></h4>
                      <h6 className="text-muted"><Trans>System bugs and issues</Trans></h6>
                    </div>
                    <h3 className="text-danger font-weight-bold">-8380.00</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body pb-0">
                    <h4 className="card-title mb-0"><Trans>Financial management review</Trans></h4>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table custom-table text-dark">
                        <thead>
                          <tr>
                            <th> <Trans>Name</Trans> </th>
                            <th> <Trans>Sale Rate</Trans> </th>
                            <th> <Trans>Actual</Trans> </th>
                            <th> <Trans>Variance</Trans> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img src={require('../../assets/images/faces/face2.jpg')} className="ml-2" alt="face" /> <Trans>Jacob Jensen</Trans> </td>
                            <td>
                              <div className="d-flex">
                                <span className="pl-2 d-flex align-items-center">85%</span>
                                <Rating 
                                  initialRating="4"
                                  emptySymbol={<i className="mdi mdi-star fav-star" ></i>}
                                  fullSymbol={<i className="mdi mdi-star fav-star active" ></i>}
                                />
                              </div>
                            </td>
                            <td> 32,435 </td>
                            <td> 40,234</td>
                          </tr>
                          <tr>
                            <td>
                              <img src={require('../../assets/images/faces/face3.jpg')} className="ml-2" alt="face" /> <Trans>Cecelia Bradley</Trans> </td>
                            <td>
                              <div className="d-flex">
                                <span className="pl-2 d-flex align-items-center">55%</span>
                                <Rating 
                                  initialRating="2"
                                  emptySymbol={<i className="mdi mdi-star fav-star" ></i>}
                                  fullSymbol={<i className="mdi mdi-star fav-star active" ></i>}
                                />
                              </div>
                            </td>
                            <td> 4,36780 </td>
                            <td> 765728 </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={require('../../assets/images/faces/face4.jpg')} className="ml-2" alt="face" /> <Trans>Leah Sherman</Trans> </td>
                            <td>
                              <div className="d-flex">
                                <span className="pl-2 d-flex align-items-center">23%</span>
                                <Rating 
                                  initialRating="4"
                                  emptySymbol={<i className="mdi mdi-star fav-star" ></i>}
                                  fullSymbol={<i className="mdi mdi-star fav-star active" ></i>}
                                />
                              </div>
                            </td>
                            <td> 2300 </td>
                            <td> 22437 </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={require('../../assets/images/faces/face5.jpg')} className="ml-2" alt="face" /> <Trans>Ina Curry</Trans> </td>
                            <td>
                              <div className="d-flex">
                                <span className="pl-2 d-flex align-items-center">44%</span>
                                <Rating 
                                  initialRating="3"
                                  emptySymbol={<i className="mdi mdi-star fav-star" ></i>}
                                  fullSymbol={<i className="mdi mdi-star fav-star active" ></i>}
                                />
                              </div>
                            </td>
                            <td> 53462 </td>
                            <td> 1,75938 </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={require('../../assets/images/faces/face7.jpg')} className="ml-2" alt="face" /> <Trans>Lida Fitzgerald</Trans> </td>
                            <td>
                              <div className="d-flex">
                                <span className="pl-2 d-flex align-items-center">65%</span>
                                <Rating 
                                  initialRating="4"
                                  emptySymbol={<i className="mdi mdi-star fav-star" ></i>}
                                  fullSymbol={<i className="mdi mdi-star fav-star active" ></i>}
                                />
                              </div>
                            </td>
                            <td> 67453 </td>
                            <td> 765377 </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={require('../../assets/images/faces/face2.jpg')} className="ml-2" alt="face" /> <Trans>Stella Johnson</Trans> </td>
                            <td>
                              <div className="d-flex">
                                <span className="pl-2 d-flex align-items-center">49%</span>
                                <Rating 
                                  initialRating="3"
                                  emptySymbol={<i className="mdi mdi-star fav-star" style={{fontSize:'15px', marginRight: '2px', color: '#d6dde4'}}></i>}
                                  fullSymbol={<i className="mdi mdi-star fav-star active" ></i>}
                                />
                              </div>
                            </td>
                            <td> 43662 </td>
                            <td> 96535 </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={require('../../assets/images/faces/face9.jpg')} className="ml-2" alt="face" /> <Trans>Maria Ortiz</Trans> </td>
                            <td>
                              <div className="d-flex">
                                <span className="pl-2 d-flex align-items-center">65%</span>
                                <Rating 
                                  initialRating="3"
                                  emptySymbol={<i className="mdi mdi-star fav-star"></i>}
                                  fullSymbol={<i className="mdi mdi-star fav-star active" ></i>}
                                />
                              </div>
                            </td>
                            <td> 76555 </td>
                            <td> 258546 </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <a className="text-black font-13 d-block pt-2 pb-2 pb-lg-0 font-weight-bold pr-4" href="!#" onClick={evt => evt.preventDefault()}><Trans>Show more</Trans></a>
                  </div>
                </div>
              </div>
            </div>
            {/* doughnut chart row starts */}
            <div className="row">
              <div className="col-sm-12 stretch-card grid-margin">
                <div className="card">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card border-0">
                        <div className="card-body">
                          <div className="card-title"> <Trans>Channel Sessions</Trans> </div>
                          <div className="d-flex flex-wrap">
                            <div className="doughnut-wrapper w-50">
                              <Doughnut data={this.trafficChartData} options={this.trafficChartOptions} width={100} height={100}/>
                            </div>
                            <div className="rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left">
                              <ul className="pr-3">
                                {
                                  this.trafficChartData.labels.map((el, i) => {
                                    return (
                                      <li key={i}><span className="legend-dots" style={{backgroundColor: this.trafficChartData.datasets[0].legendColor[i]}}></span>{el}</li>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card border-0">
                        <div className="card-body">
                          <div className="card-title"> <Trans>News Sessions</Trans> </div>
                          <div className="d-flex flex-wrap">
                            <div className="doughnut-wrapper w-50">
                            <Doughnut data={this.trafficChartData2} options={this.trafficChartOptions} width={100} height={100}/>
                            </div>
                            <div className="rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left">
                              <ul className="pr-3">
                                {
                                  this.trafficChartData2.labels.map((el, i) => {
                                    return (
                                      <li key={i}><span className="legend-dots" style={{backgroundColor: this.trafficChartData2.datasets[0].legendColor[i]}}></span>{el}</li>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card border-0">
                        <div className="card-body">
                          <div className="card-title"> <Trans>Device Sessions</Trans> </div>
                          <div className="d-flex flex-wrap">
                            <div className="doughnut-wrapper w-50">
                              <Doughnut data={this.deviceSessionsdata} options={this.trafficChartOptions} width={100} height={100}/>
                            </div>
                            <div className="rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left">
                              <ul className="pr-3">
                                {
                                  this.deviceSessionsdata.labels.map((el, i) => {
                                    return (
                                      <li key={i}><span className="legend-dots" style={{backgroundColor: this.deviceSessionsdata.datasets[0].legendColor[i]}}></span>{el}</li>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* last row starts here */}
            <div className="row">
              <div className="col-sm-6 col-xl-4 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title mb-2"> <Trans>Upcoming events (3)</Trans> </div>
                    <h3 className="mb-3"><Trans>23 september 2019</Trans></h3>
                    <div className="d-flex border-bottom border-top py-3">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultChecked={true} />
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      <div className="pr-2">
                        <span className="small text-muted"><Trans>Tue, Mar 5, 9.30am</Trans></span>
                        <p className="m-0 text-black"><Trans>Hey I attached some new PSD files…</Trans></p>
                      </div>
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      <div className="pr-2">
                        <span className="small text-muted"><Trans>Mon, Mar 11, 4.30 PM</Trans></span>
                        <p className="m-0 text-black"><Trans>Discuss performance with manager</Trans></p>
                      </div>
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      <div className="pr-2">
                        <span className="small text-muted"><Trans>Tue, Mar 5, 9.30am</Trans></span>
                        <p className="m-0 text-black"><Trans>Meeting with Alisa</Trans> </p>
                      </div>
                    </div>
                    <div className="d-flex pt-3">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      <div className="pr-2">
                        <span className="small text-muted"><Trans>Mon, Mar 11, 4.30 PM</Trans></span>
                        <p className="m-0 text-black"><Trans>Hey I attached some new PSD files…</Trans></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex border-bottom mb-4 pb-2">
                      <div className="hexagon">
                        <div className="hex-mid hexagon-warning">
                          <i className="mdi mdi-clock-outline"></i>
                        </div>
                      </div>
                      <div className="pr-4">
                        <h4 className="font-weight-bold text-warning mb-0">12.45</h4>
                        <h6 className="text-muted"><Trans>Schedule Meeting</Trans> </h6>
                      </div>
                    </div>
                    <div className="d-flex border-bottom mb-4 pb-2">
                      <div className="hexagon">
                        <div className="hex-mid hexagon-danger">
                          <i className="mdi mdi-account-outline"></i>
                        </div>
                      </div>
                      <div className="pr-4">
                        <h4 className="font-weight-bold text-danger mb-0">34568</h4>
                        <h6 className="text-muted"><Trans>Profile visits</Trans></h6>
                      </div>
                    </div>
                    <div className="d-flex border-bottom mb-4 pb-2">
                      <div className="hexagon">
                        <div className="hex-mid hexagon-success">
                          <i className="mdi mdi-laptop-chromebook"></i>
                        </div>
                      </div>
                      <div className="pr-4">
                        <h4 className="font-weight-bold text-success mb-0">33.50%</h4>
                        <h6 className="text-muted"><Trans>Bounce Rate</Trans></h6>
                      </div>
                    </div>
                    <div className="d-flex border-bottom mb-4 pb-2">
                      <div className="hexagon">
                        <div className="hex-mid hexagon-info">
                          <i className="mdi mdi-clock-outline"></i>
                        </div>
                      </div>
                      <div className="pr-4">
                        <h4 className="font-weight-bold text-info mb-0">12.45</h4>
                        <h6 className="text-muted"><Trans>Schedule Meeting</Trans></h6>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="hexagon">
                        <div className="hex-mid hexagon-primary">
                          <i className="mdi mdi-timer-sand"></i>
                        </div>
                      </div>
                      <div className="pr-4">
                        <h4 className="font-weight-bold text-primary mb-0">12.45</h4>
                        <h6 className="text-muted mb-0"><Trans>Browser Usage</Trans></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 stretch-card grid-margin">
                <div className="card color-card-wrapper">
                  <div className="card-body">
                    <img className="img-fluid w-100 card-top-img" src={require('../../assets/images/dashboard/img_5.jpg')} alt="card bg" />
                    <div className="d-flex flex-wrap justify-content-around color-card-outer">
                      <div className="col-6 p-0 mb-4">
                        <div className="color-card primary m-auto">
                          <i className="mdi mdi-clock-outline"></i>
                          <p className="font-weight-semibold mb-0"><Trans>Delivered</Trans></p>
                          <span className="small"><Trans>15 Packages</Trans></span>
                        </div>
                      </div>
                      <div className="col-6 p-0 mb-4">
                        <div className="color-card bg-success  m-auto">
                          <i className="mdi mdi-tshirt-crew"></i>
                          <p className="font-weight-semibold mb-0"><Trans>Ordered</Trans></p>
                          <span className="small"><Trans>72 Items</Trans></span>
                        </div>
                      </div>
                      <div className="col-6 p-0">
                        <div className="color-card bg-info m-auto">
                          <i className="mdi mdi-trophy-outline"></i>
                          <p className="font-weight-semibold mb-0"><Trans>Arrived</Trans></p>
                          <span className="small"><Trans>34 Upgraded</Trans></span>
                        </div>
                      </div>
                      <div className="col-6 p-0">
                        <div className="color-card bg-danger m-auto">
                          <i className="mdi mdi-presentation"></i>
                          <p className="font-weight-semibold mb-0"><Trans>Reported</Trans></p>
                          <span className="small"><Trans>72 Support</Trans></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
}

export default Rtl;