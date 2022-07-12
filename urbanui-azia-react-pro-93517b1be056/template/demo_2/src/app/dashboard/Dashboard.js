import React, { Component } from 'react'
import {Line, Bar } from 'react-chartjs-2'
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
  totalUsersChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    datasets: [{
      data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#007bff',
      borderColor: '#007bff'
    }]
  };

  totalUsersChartOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }],
      xAxes: [{
        display: false,
        barThickness: 5.5,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
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
  };

  allSessionsChartData = {
    labels: [0,1,2,3,4,5,6,7],
    datasets: [{
      label: '# of Votes',
      data: [2, 4, 10, 20, 45, 40, 35, 18],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#560bd0'
    },
    {
      label: '# of Rate',
      data: [3, 6, 15, 35, 50, 45, 35, 25],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#cad0e8'
    }]
  };

  allSessionsChartOptions = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero:true,
          fontSize: 11,
          max: 80
        },
        gridLines: {
          drawBorder: false,
        }
      }],
      xAxes: [{
        barPercentage: 0.6,
        gridLines: {
          color: 'rgba(0,0,0,0.08)',
          drawBorder: false
        },
        ticks: {
          beginAtZero:true,
          fontSize: 11,
          display: false
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
  };

  sessionsChannelChartData = {
    labels: ['Search', 'Email', 'Referral', 'Social', 'Other'],
    datasets: [{
      data: [25,20,30,15,10],
      backgroundColor: ['#6f42c1', '#007bff','#17a2b8','#00cccc','#adb2bd'],
    }]
  };

  sessionsChannelChartOptions = {
    cutoutPercentage: 50,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  acquisitionChart1Data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
      data: [4,2.5,5,3,5],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#fff',
      borderColor: '#fff'
    }]
  };

  acquisitionChart1Options = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }],
      xAxes: [{
        display: false,
        barThickness: 5.5,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
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
  };

  acquisitionChart2Data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
      data: [5,2,3,5,1.5],
      borderWidth: 1,
      fill: false,
      backgroundColor: '#fff',
      borderColor: '#fff'
    }]
  };

  acquisitionChart2Options = {
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }],
      xAxes: [{
        display: false,
        barThickness: 5.5,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
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
  };

  sessionsChart1Data = {
    labels: ['Search', 'Email'],
    datasets: [{
      data: [40,60],
      backgroundColor: ['#007bff', '#cad0e8'],
      borderColor: ['#007bff', '#cad0e8'],
    }]
  };

  sessionsChart1Options = {
    cutoutPercentage: 78,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  sessionsChart2Data = {
    labels: ['Search', 'Email'],
    datasets: [{
      data: [25,75],
      backgroundColor: ['#00cccc', '#cad0e8'],
      borderColor: ['#00cccc', '#cad0e8']
    }]
  };

  sessionsChart2Options = {
    cutoutPercentage: 78,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };


  // dashboard this demo   
  quantityData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    datasets: [{
      data: [5,9,5,6,4,12,18,14,10,15,12,5,8,5,12,5,12,10,16,12],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(249, 249, 249, .6)'],
      borderColor: ['#cecece']
    }]
  };
  quantityOptions = {
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 20,
          stepSize: 2,
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

  costData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    datasets: [{
      data: [3,2,4,6,12,14,8,7,14,16,12,7,8,4,3,2,2,5,6,7],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(249, 249, 249, .6)'],
      borderColor: ['#cecece']
    }]
  };
  costOptions = {
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 20,
          stepSize: 2,
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
  revenueData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    datasets: [{
      data: [5,9,5,6,4,12,18,14,10,15,12,5,8,5,12,5,12,10,16,12],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(249, 249, 249, .6)'],
      borderColor: ['#cecece']
    }]
  };
  revenueOptions = {
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 20,
          stepSize: 2,
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
  profitData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    datasets: [{
      data: [5,10,5,20,22,12,15,18,20,15,8,12,22,5,10,12,22,15,16,10],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(249, 249, 249, .6)'],
      borderColor: ['#cecece']
    }]
  };
  profitOptions = {
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 20,
          stepSize: 2,
        }
      }],
      xAxes: [{
        display: true,
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
  totalProfitData = {
    labels: ['Oct 01', 'Oct 05', 'Oct 10', 'Oct 15', 'Oct 20', 'Oct 25', 'Oct 30'],
    datasets: [{
      data: [95000,75000,50000,75000,50000,80000,75000],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['#5b47fb', '#5b47fb', '#5b47fb', '#5b47fb', '#5b47fb', '#5b47fb', '#5b47fb'],
      borderColor: ['#5b47fb', '#5b47fb', '#5b47fb', '#5b47fb', '#5b47fb', '#5b47fb', '#5b47fb']
    },
    {
      data: [70000,55000,40000,65000,40000,90000,65000],
      borderWidth: 2,
      fill: true,
      backgroundColor: ['#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd'],
      borderColor: ['#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd']
    }]
  };
  totalProfitOptions = {
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: true,
          display: true,
          drawTicks: true,
          zeroLineColor: '#fff',
        },
        ticks: {
          display: true,
          beginAtZero: true,
          min: 0,
          max: 100000,
          stepSize: 25000,
          fontColor: "#031b4e",
          fontSize:"11",
          fontStyle: "bold",
          callback: function(value, index, values) {
            return '$' + value;
          }
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        categoryPercentage: .6,
			  barPercentage: .8,
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#031b4e",
          fontSize:"11",
          fontStyle: "bold",
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
  render() {
    return (
      <div>
          <div className="az-content-body">
          <div className="az-content-header d-block d-md-flex">
            <div>
              <h2 className="az-content-title tx-24 mg-b-5 mg-b-lg-8">Hi, welcome back!</h2>
              <p className="mg-b-0">Your sales monitoring dashboard template.</p>
            </div>
            <div className="az-dashboard-header-right">
              <div>
                <label className="tx-13">Customer Ratings</label>
                <div className="az-star">
                  <i className="typcn typcn-star active"></i>
                  <i className="typcn typcn-star active"></i>
                  <i className="typcn typcn-star active"></i>
                  <i className="typcn typcn-star active"></i>
                  <i className="typcn typcn-star"></i>
                  <span>(12,775)</span>
                </div>
              </div>
              <div>
                <label className="tx-13">All Sales (Online)</label>
                <h5>431,007</h5>
              </div>
              <div>
                <label className="tx-13">All Sales (Offline)</label>
                <h5>932,210</h5>
              </div>
            </div>
          </div>
          <div className="card card-dashboard-seven">
            <div className="card-header">
              <div className="row row-sm">
                <div className="col-6 col-md-4 col-xl">
                  <div className="media">
                    <div><i className="icon ion-ios-calendar"></i></div>
                    <div className="media-body">
                      <label>Start Date</label>
                      <div className="date">
                        <span>Sept 01, 2018</span> <a href="#/"><i className="icon ion-md-arrow-dropdown"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl">
                  <div className="media">
                    <div><i className="icon ion-ios-calendar"></i></div>
                    <div className="media-body">
                      <label>End Date</label>
                      <div className="date">
                        <span>Sept 30, 2018</span> <a href="#/"><i className="icon ion-md-arrow-dropdown"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl mg-t-15 mg-md-t-0">
                  <div className="media">
                    <div><i className="icon ion-logo-usd"></i></div>
                    <div className="media-body">
                      <label>Sales Measure</label>
                      <div className="date">
                        <span>Revenue</span> <a href="#/"><i className="icon ion-md-arrow-dropdown"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-xl mg-t-15 mg-xl-t-0">
                  <div className="media">
                    <div><i className="icon ion-md-person"></i></div>
                    <div className="media-body">
                      <label>Customer Type</label>
                      <div className="date">
                        <span>All Customers</span> <a href="#/"><i className="icon ion-md-arrow-dropdown"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xl mg-t-15 mg-xl-t-0">
                  <div className="media">
                    <div><i className="icon ion-md-stats"></i></div>
                    <div className="media-body">
                      <label>Transaction Type</label>
                      <div className="date">
                        <span>All Transactions</span> <a href="#/"><i className="icon ion-md-arrow-dropdown"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row row-sm">
                <div className="col-6 col-lg-3">
                  <label className="az-content-label">Total Quantity</label>
                  <h2>110,000</h2>
                  <div className="desc up">
                    <i className="icon ion-md-stats"></i>
                    <span><strong>2.00%</strong> (30 days)</span>
                  </div>
                  <Line data={this.quantityData} options={this.quantityOptions} height={20} />
                </div>
                <div className="col-6 col-lg-3">
                  <label className="az-content-label">Total Cost</label>
                  <h2><span>$</span>523,200</h2>
                  <div className="desc up">
                    <i className="icon ion-md-stats"></i>
                    <span><strong>12.09%</strong> (30 days)</span>
                  </div>
                  <Line data={this.costData} options={this.costOptions} height={20} />
                </div>
                <div className="col-6 col-lg-3 mg-t-20 mg-lg-t-0">
                  <label className="az-content-label">Total Revenue</label>
                  <h2><span>$</span>753,098</h2>
                  <div className="desc down">
                    <i className="icon ion-md-stats"></i>
                    <span><strong>0.51%</strong> (30 days)</span>
                  </div>
                  <Line data={this.revenueData} options={this.revenueOptions} height={20} />
                </div>
                <div className="col-6 col-lg-3 mg-t-20 mg-lg-t-0">
                  <label className="az-content-label">Total Profit</label>
                  <h2><span>$</span>331,886</h2>
                  <div className="desc up">
                    <i className="icon ion-md-stats"></i>
                    <span><strong>5.32%</strong> (30 days)</span>
                  </div>
                  <Line data={this.profitData} options={this.profitOptions} height={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="row row-sm mg-b-15 mg-sm-b-20">
            <div className="col-lg-6 col-xl-7">
              <div className="card card-dashboard-six">
                <div className="card-header">
                  <div>
                    <label className="az-content-label">This Year's Total Revenue</label>
                    <span className="d-block">Sales Performance for Online and Offline Revenue</span>
                  </div>
                  <div className="chart-legend">
                    <div><span>Online Revenue</span> <span className="bg-indigo"></span></div>
                    <div><span>Offline Revenue</span> <span className="bg-teal"></span></div>
                  </div>
                </div>
                <Bar data={this.totalProfitData} options={this.totalProfitOptions} height={120} />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 mg-t-20 mg-lg-t-0">
              <div className="card card-dashboard-map-one">
                <label className="az-content-label">Sales Revenue by Customers in USA</label>
                <span className="d-block mg-b-20">Sales Performance of all states in the United States</span>
                <div className="map-hieght">
                <VectorMap
                  map={"world_mill"}
                  backgroundColor="transparent" //change it to ocean blue: #0077be
                  zoomOnScroll={false}
                  containerClassName="map"
                  containerStyle={{
                    width: '100%',
                    height: '220px'
                  }}
                  regionStyle={{
                    initial: {
                      fill: "#60acf8",
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
                      fill: "#5b47fb" //color for the clicked country
                    },
                    selectedHover: {}
                  }}
                  regionsSelectable={true}
                  series={{
                    regions: [
                      {
                        values: mapData, //this is your data
                        scale: ["#5b47fb"], //your color game's here
                        normalizeFunction: "polynomial"
                      }
                    ]
                  }}
                />
                </div>
              </div>
            </div>
          </div>
          <div className="row row-sm mg-b-20 mg-lg-b-0">
            <div className="col-md-6 col-xl-7">
              <div className="card card-table-two">
                <h6 className="card-title">Your Most Recent Earnings</h6>
                <span className="d-block mg-b-20">This is your most recent earnings for today's date.</span>
                <div className="table-responsive">
                  <table className="table table-striped table-dashboard-two">
                    <thead>
                      <tr>
                        <th className="wd-lg-25p">Date</th>
                        <th className="wd-lg-25p tx-right">Sales Count</th>
                        <th className="wd-lg-25p tx-right">Earnings</th>
                        <th className="wd-lg-25p tx-right">Tax Witheld</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>05 Oct 2018</td>
                        <td className="tx-right tx-medium tx-inverse">25</td>
                        <td className="tx-right tx-medium tx-inverse">$380.50</td>
                        <td className="tx-right tx-medium tx-danger">-$23.50</td>
                      </tr>
                      <tr>
                        <td>04 Oct 2018</td>
                        <td className="tx-right tx-medium tx-inverse">34</td>
                        <td className="tx-right tx-medium tx-inverse">$503.20</td>
                        <td className="tx-right tx-medium tx-danger">-$13.45</td>
                      </tr>
                      <tr>
                        <td>03 Oct 2018</td>
                        <td className="tx-right tx-medium tx-inverse">30</td>
                        <td className="tx-right tx-medium tx-inverse">$489.65</td>
                        <td className="tx-right tx-medium tx-danger">-$20.98</td>
                      </tr>
                      <tr>
                        <td>02 Oct 2018</td>
                        <td className="tx-right tx-medium tx-inverse">27</td>
                        <td className="tx-right tx-medium tx-inverse">$421.80</td>
                        <td className="tx-right tx-medium tx-danger">-$22.22</td>
                      </tr>
                      <tr>
                        <td>01 Oct 2018</td>
                        <td className="tx-right tx-medium tx-inverse">31</td>
                        <td className="tx-right tx-medium tx-inverse">$518.60</td>
                        <td className="tx-right tx-medium tx-danger">-$23.01</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-5 mg-t-20 mg-md-t-0">
              <div className="card card-dashboard-eight">
                <h6 className="card-title">Your Top Countries</h6>
                <span className="d-block mg-b-20">Sales performance revenue based by country</span>

                <div className="list-group">
                  <div className="list-group-item">
                    <i className="flag-icon flag-icon-us flag-icon-squared"></i>
                    <p>United States</p>
                    <span>$1,671.10</span>
                  </div>
                  <div className="list-group-item">
                    <i className="flag-icon flag-icon-nl flag-icon-squared"></i>
                    <p>Netherlands</p>
                    <span>$1,064.75</span>
                  </div>
                  <div className="list-group-item">
                    <i className="flag-icon flag-icon-gb flag-icon-squared"></i>
                    <p>United Kingdom</p>
                    <span>$1,055.98</span>
                  </div>
                  <div className="list-group-item">
                    <i className="flag-icon flag-icon-ca flag-icon-squared"></i>
                    <p>Canada</p>
                    <span>$1,045.49</span>
                  </div>
                  <div className="list-group-item">
                    <i className="flag-icon flag-icon-au flag-icon-squared"></i>
                    <p>Australia</p>
                    <span>$1,042.00</span>
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
