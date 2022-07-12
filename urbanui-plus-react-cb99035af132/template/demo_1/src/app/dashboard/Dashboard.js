import React, { Component } from 'react';
import Rating from 'react-rating';
import { Line, Bar,Doughnut } from 'react-chartjs-2';

export class Dashboard extends Component {

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
                <button className="btn btn-primary mr-2 mt-2 mt-sm-0">Create new document</button>
                <button className="btn btn-outline-primary mt-2 mt-sm-0">Import documents</button>
              </div>
              <div className="header-right d-flex flex-wrap mt-2 mt-sm-0">
                <div className="d-flex align-items-center mt-2 mt-md-0">
                  <a href="!#" onClick={evt => evt.preventDefault()}>
                    <p className="m-0 pr-3">Dashboard</p>
                  </a>
                  <a className="pl-3 mr-4" href="!#" onClick={evt => evt.preventDefault()}>
                    <p className="m-0">ADE-00234</p>
                  </a>
                </div>
                <button type="button" className="btn btn-primary mt-2 mt-md-0 btn-icon-text">
                  <i className="mdi mdi-plus-circle"></i> Add Prodcut </button>
              </div>
            </div>
            {/* first row starts here */}
            <div className="row">
              <div className="col-xl-9 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div>
                        <div className="card-title mb-0">Sales Revenue</div>
                        <h3 className="font-weight-bold mb-0">$32,409</h3>
                      </div>
                      <div>
                        <div className="d-flex flex-wrap pt-2 justify-content-between sales-header-right">
                          <div className="d-flex mr-5">
                            <button type="button" className="btn btn-icon btn-outline-sales"><i className="mdi mdi-inbox-arrow-down"></i></button>
                            <div className="pl-2">
                              <h4 className="mb-0 font-weight-semibold head-count">$8,217</h4>
                              <span className="font-10 font-weight-semibold text-muted">TOTAL SALES</span>
                            </div>
                          </div>
                          <div className="d-flex mr-3 mt-2 mt-sm-0">
                            <button type="button" className="btn btn-icon btn-outline-sales profit"><i className="mdi mdi-cash text-info"></i></button>
                            <div className="pl-2">
                              <h4 className="mb-0 font-weight-semibold head-count">2,804</h4>
                              <span className="font-10 font-weight-semibold text-muted">TOTAL PROFIT</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted font-13 mt-2 mt-sm-0">Your sales monitoring dashboard template. <a className="text-muted font-13" href="!#" onClick={evt => evt.preventDefault()}><u>Learn more</u></a></p>
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
                      <h1 className="font-20 font-weight-semibold mb-0">Get premium</h1>
                      <h1 className="font-20 font-weight-semibold">account!</h1>
                      <p>to optimize your selling prodcut</p>
                      <p className="font-10 font-weight-semibold">Enjoy the advantage of premium.</p>
                      <button className="btn bg-white small">Get Premium</button>
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
                      <div className="card-title">Customers <small className="d-block text-muted">August 01 - August 31</small>
                      </div>
                      <div className="d-flex text-muted font-20">
                        <i className="mdi mdi-printer mouse-pointer"></i>
                        <i className="mdi mdi-help-circle-outline ml-2 mouse-pointer"></i>
                      </div>
                    </div>
                    <h3 className="font-weight-bold mb-0">2,409 <span className="text-success h5">4,5%<i className="mdi mdi-arrow-up"></i></span></h3>
                    <span className="text-muted font-13">Avg customers/Day</span>
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
                      <div className="card-title">Conversions <small className="d-block text-muted">August 01 - August 31</small>
                      </div>
                      <div className="d-flex text-muted font-20">
                        <i className="mdi mdi-printer mouse-pointer"></i>
                        <i className="mdi mdi-help-circle-outline ml-2 mouse-pointer"></i>
                      </div>
                    </div>
                    <h3 className="font-weight-bold mb-0">0.40% <span className="text-success h5">0.20%<i className="mdi mdi-arrow-up"></i></span></h3>
                    <span className="text-muted font-13">Avg customers/Day</span>
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
                      <p className="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                      <i className="mdi mdi-heart-outline"></i>
                    </div>
                    <h5 className="font-weight-semibold">Cosy Studio flat in London</h5>
                    <div className="d-flex justify-content-between font-weight-semibold">
                      <p className="mb-0"><i className="mdi mdi-star star-color pr-1"></i>4.60 (35)</p>
                      <p className="mb-0">$5,267/night</p>
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
                      <p className="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                      <i className="mdi mdi-heart-outline"></i>
                    </div>
                    <h5 className="font-weight-semibold">Victoria Bedsit Studio Ensuite</h5>
                    <div className="d-flex justify-content-between font-weight-semibold">
                      <p className="mb-0"><i className="mdi mdi-star star-color pr-1"></i>4.83 (12)</p>
                      <p className="mb-0">$6,144/night</p>
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
                      <p className="text-muted font-13 mb-0">ENTIRE APARTMENT</p>
                      <i className="mdi mdi-heart-outline"></i>
                    </div>
                    <h5 className="font-weight-semibold">Fabulous Huge Room </h5>
                    <div className="d-flex justify-content-between font-weight-semibold">
                      <p className="mb-0"><i className="mdi mdi-star star-color pr-1"></i>3.83 (15)</p>
                      <p className="mb-0">$5,267/night</p>
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
                        <h6>This Month</h6>
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
                      <h4 className="font-weight-semibold mb-1 text-black">Member Profit</h4>
                      <h6 className="text-muted">Average Weekly Profit</h6>
                    </div>
                    <h3 className="text-success font-weight-bold">+168.900</h3>
                  </div>
                </div>
                <div className="card stretch-card mb-3">
                  <div className="card-body d-flex flex-wrap justify-content-between">
                    <div>
                      <h4 className="font-weight-semibold mb-1 text-black">Total Profit</h4>
                      <h6 className="text-muted">Weekly Customer Orders</h6>
                    </div>
                    <h3 className="text-success font-weight-bold">+6890.00</h3>
                  </div>
                </div>
                <div className="card mt-3">
                  <div className="card-body d-flex flex-wrap justify-content-between">
                    <div>
                      <h4 className="font-weight-semibold mb-1 text-black">Issue Reports</h4>
                      <h6 className="text-muted">System bugs and issues</h6>
                    </div>
                    <h3 className="text-danger font-weight-bold">-8380.00</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body pb-0">
                    <h4 className="card-title mb-2 mb-sm-0">Financial management review</h4>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table custom-table text-dark">
                        <thead>
                          <tr>
                            <th> Name </th>
                            <th> Sale Rate </th>
                            <th> Actual </th>
                            <th> Variance </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img src={require('../../assets/images/faces/face2.jpg')} className="mr-2" alt="face" /> Jacob Jensen </td>
                            <td>
                              <div className="d-flex">
                                <span className="pr-2 d-flex align-items-center">85%</span>
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
                              <img src={require('../../assets/images/faces/face3.jpg')} className="mr-2" alt="face" /> Cecelia Bradley </td>
                            <td>
                              <div className="d-flex">
                                <span className="pr-2 d-flex align-items-center">55%</span>
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
                              <img src={require('../../assets/images/faces/face4.jpg')} className="mr-2" alt="face" /> Leah Sherman </td>
                            <td>
                              <div className="d-flex">
                                <span className="pr-2 d-flex align-items-center">23%</span>
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
                              <img src={require('../../assets/images/faces/face5.jpg')} className="mr-2" alt="face" /> Ina Curry </td>
                            <td>
                              <div className="d-flex">
                                <span className="pr-2 d-flex align-items-center">44%</span>
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
                              <img src={require('../../assets/images/faces/face7.jpg')} className="mr-2" alt="face" /> Lida Fitzgerald </td>
                            <td>
                              <div className="d-flex">
                                <span className="pr-2 d-flex align-items-center">65%</span>
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
                              <img src={require('../../assets/images/faces/face2.jpg')} className="mr-2" alt="face" /> Stella Johnson </td>
                            <td>
                              <div className="d-flex">
                                <span className="pr-2 d-flex align-items-center">49%</span>
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
                              <img src={require('../../assets/images/faces/face9.jpg')} className="mr-2" alt="face" /> Maria Ortiz </td>
                            <td>
                              <div className="d-flex">
                                <span className="pr-2 d-flex align-items-center">65%</span>
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
                    <a className="text-black font-13 d-block pt-2 pb-2 pb-lg-0 font-weight-bold pl-4" href="!#" onClick={evt => evt.preventDefault()}>Show more</a>
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
                          <div className="card-title"> Channel Sessions </div>
                          <div className="d-flex flex-wrap">
                            <div className="doughnut-wrapper w-50">
                              <Doughnut data={this.trafficChartData} options={this.trafficChartOptions} width={100} height={100}/>
                            </div>
                            <div className="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left">
                              <ul>
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
                          <div className="card-title"> News Sessions </div>
                          <div className="d-flex flex-wrap">
                            <div className="doughnut-wrapper w-50">
                            <Doughnut data={this.trafficChartData2} options={this.trafficChartOptions} width={100} height={100}/>
                            </div>
                            <div className="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left">
                              <ul>
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
                          <div className="card-title"> Device Sessions </div>
                          <div className="d-flex flex-wrap">
                            <div className="doughnut-wrapper w-50">
                              <Doughnut data={this.deviceSessionsdata} options={this.trafficChartOptions} width={100} height={100}/>
                            </div>
                            <div className="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left">
                              <ul>
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
                    <div className="card-title mb-2"> Upcoming events (3) </div>
                    <h3 className="mb-3">23 september 2019</h3>
                    <div className="d-flex border-bottom border-top py-3">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" defaultChecked={true} />
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      <div className="pl-2">
                        <span className="small text-muted">Tue, Mar 5, 9.30am</span>
                        <p className="m-0 text-black">Hey I attached some new PSD files…</p>
                      </div>
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      <div className="pl-2">
                        <span className="small text-muted">Mon, Mar 11, 4.30 PM</span>
                        <p className="m-0 text-black">Discuss performance with manager</p>
                      </div>
                    </div>
                    <div className="d-flex border-bottom py-3">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      <div className="pl-2">
                        <span className="small text-muted">Tue, Mar 5, 9.30am</span>
                        <p className="m-0 text-black">Meeting with Alisa </p>
                      </div>
                    </div>
                    <div className="d-flex pt-3">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <i className="input-helper"></i>
                        </label>
                      </div>
                      <div className="pl-2">
                        <span className="small text-muted">Mon, Mar 11, 4.30 PM</span>
                        <p className="m-0 text-black">Hey I attached some new PSD files…</p>
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
                      <div className="pl-4">
                        <h4 className="font-weight-bold text-warning mb-0">12.45</h4>
                        <h6 className="text-muted">Schedule Meeting </h6>
                      </div>
                    </div>
                    <div className="d-flex border-bottom mb-4 pb-2">
                      <div className="hexagon">
                        <div className="hex-mid hexagon-danger">
                          <i className="mdi mdi-account-outline"></i>
                        </div>
                      </div>
                      <div className="pl-4">
                        <h4 className="font-weight-bold text-danger mb-0">34568</h4>
                        <h6 className="text-muted">Profile visits</h6>
                      </div>
                    </div>
                    <div className="d-flex border-bottom mb-4 pb-2">
                      <div className="hexagon">
                        <div className="hex-mid hexagon-success">
                          <i className="mdi mdi-laptop-chromebook"></i>
                        </div>
                      </div>
                      <div className="pl-4">
                        <h4 className="font-weight-bold text-success mb-0">33.50%</h4>
                        <h6 className="text-muted">Bounce Rate</h6>
                      </div>
                    </div>
                    <div className="d-flex border-bottom mb-4 pb-2">
                      <div className="hexagon">
                        <div className="hex-mid hexagon-info">
                          <i className="mdi mdi-clock-outline"></i>
                        </div>
                      </div>
                      <div className="pl-4">
                        <h4 className="font-weight-bold text-info mb-0">12.45</h4>
                        <h6 className="text-muted">Schedule Meeting</h6>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="hexagon">
                        <div className="hex-mid hexagon-primary">
                          <i className="mdi mdi-timer-sand"></i>
                        </div>
                      </div>
                      <div className="pl-4">
                        <h4 className="font-weight-bold text-primary mb-0">12.45</h4>
                        <h6 className="text-muted mb-0">Browser Usage</h6>
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
                          <p className="font-weight-semibold mb-0">Delivered</p>
                          <span className="small">15 Packages</span>
                        </div>
                      </div>
                      <div className="col-6 p-0 mb-4">
                        <div className="color-card bg-success  m-auto">
                          <i className="mdi mdi-tshirt-crew"></i>
                          <p className="font-weight-semibold mb-0">Ordered</p>
                          <span className="small">72 Items</span>
                        </div>
                      </div>
                      <div className="col-6 p-0">
                        <div className="color-card bg-info m-auto">
                          <i className="mdi mdi-trophy-outline"></i>
                          <p className="font-weight-semibold mb-0">Arrived</p>
                          <span className="small">34 Upgraded</span>
                        </div>
                      </div>
                      <div className="col-6 p-0">
                        <div className="color-card bg-danger m-auto">
                          <i className="mdi mdi-presentation"></i>
                          <p className="font-weight-semibold mb-0">Reported</p>
                          <span className="small">72 Support</span>
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

export default Dashboard;