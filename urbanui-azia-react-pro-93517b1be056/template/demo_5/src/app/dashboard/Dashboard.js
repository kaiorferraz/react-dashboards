import React, { Component } from 'react'
import {Line, Bar} from 'react-chartjs-2';
export class Dashboard extends Component {
  customersData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
    datasets: [{
      label: 'Current week',
      data: [27,29,29,25,25,29,31,27,28,25,23,18,14,12,11,13,9,12,10,12,13,12,13,10,5,7,8,5,5,6,4,3,5,6,8,10,7,9,10,9,5,4,0,2,5,10,10,8,8,8,5,1,0,4,9,4,1,5,1,5,5,7,10,5,3,2,6,3,0,7,9,13,13,9,6,6,6,2,2,6],
      borderWidth: 2,
      fill: true,
      borderColor: [
        '#00cccc'
      ],
      backgroundColor: [
        '#00cccc'
      ]
    },{
      label: 'Current week',
      data: [6,10,10,8,9,4,3,3,4,8,6,4,2,3,0,4,3,0,2,3,7,4,2,3,2,7,3,5,0,0,3,2,9,12,16,20,23,21,18,20,19,17,18,18,21,22,25,28,24,19,16,17,19,18,16,20,18,19,20,24,21,26,21,18,15,10,11,14,10,7,10,8,10,9,7,5,1,0,0,5],
      borderWidth: 2,
      fill: true,
      borderColor: [
        '#560bd0'
      ],
      backgroundColor: [
        '#560bd0'
      ]
    },{
      label: 'Current week',
      data: [6,4,6,7,5,4,0,3,3,8,6,7,9,7,9,11,13,9,13,15,18,19,22,23,20,22,21,20,21,20,16,21,24,21,24,21,19,21,20,21,17,21,23,20,17,13,12,10,12,14,16,17,20,17,14,12,14,12,10,14,14,14,17,17,15,13,15,12,12,13,11,7,9,4,8,12,14,16,16,21],
      borderWidth: 2,
      fill: true,
      borderColor: [
        '#936edf'
      ],
      backgroundColor: [
        '#936edf'
      ]
    }]
  };
  customersOptions = {
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
          max: 70,
          stepSize: 1,
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
          stepSize: 1,
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
  conversionData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
    datasets: [{
      label: 'Current week',
      data: [6,4,6,7,5,4,0,3,3,8,6,7,9,7,9,11,13,9,13,15,18,19,22,23,20,22,21,20,21,20,16,21,24,21,24,21,19,21,20,21,17,21,23,20,17,13,12,10,12,14,16,17,20,17,14,12,14,12,10,14,14,14,17,17,15,13,15,12,12,13,11,7,9,4,8,12,14,16,16,21
      ],
      borderWidth: 2,
      fill: true,
      borderColor: [
        '#00cccc'
      ],
      backgroundColor: [
        '#00cccc'
      ]
    }]
  };
  conversionOptions = {
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
          max: 70,
          stepSize: 1,
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
          stepSize: 1,
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
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
    datasets: [{
      label: 'Current week',
      data: [6,4,6,7,5,4,0,3,3,8,6,7,9,7,9,11,13,9,13,15,18,19,22,23,20,22,21,20,21,20,16,21,24,21,24,21,19,21,20,21,17,21,23,20,17,13,12,10,12,14,16,17,20,17,14,12,14,12,10,14,14,14,17,17,15,13,15,12,12,13,11,7,9,4,8,12,14,16,16,21
      ],
      borderWidth: 2,
      fill: true,
      borderColor: [
        '#fff'
      ],
      backgroundColor: [
        'rgba(255,255,255,.16)'
      ]
    }]
  };
  revenueOptions = {
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
          max: 70,
          stepSize: 1,
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
          stepSize: 1,
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
  conversionLineData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69'],
    datasets: [{
      label: 'Current week',
      data: [0,0,0,0,0,0,0,0,0,0,0,40,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,1,0,0,35,0,0,40,0,0,45,0,0,0,5,0,0,20,0,5,0,0,0,0,0,0,0,0,0,0],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#006adb'
      ],
      backgroundColor: [
        'rgba(255,255,255,.16)'
      ]
    }]
  };
  revenueLineData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69'],
    datasets: [{
      label: 'Current week',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,45,0,0,37,0,39,0,0,0,5,0,31,0,43,0,0,30,0,0,0,0,0,0,0,0,0],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#560bd0'
      ],
      backgroundColor: [
        'rgba(255,255,255,.16)'
      ]
    }]
  };
  uniqueLineData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69'],
    datasets: [{
      label: 'Current week',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0,10,0,0,0,0,0,0,0,0,0,0,0,50,0,40,0,5,0,0,10,0,0,25,0,0,0,5,0,0,0,0,25,0,0,0,0,40,0,0,0,0,0],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#00cccc'
      ],
      backgroundColor: [
        'rgba(255,255,255,.16)'
      ]
    }]
  };
  transactionLineData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69'],
    datasets: [{
      label: 'Current week',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,45,0,0,37,0,39,0,0,0,5,0,31,0,43,0,0,30,0,0,0,0,0,0,0,0,0],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#f10075'
      ],
      backgroundColor: [
        'rgba(255,255,255,.16)'
      ]
    }]
  };
  orderLineData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69'],
    datasets: [{
      label: 'Current week',
      data: [0,0,0,0,0,0,0,0,0,0,0,40,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,1,0,0,35,0,0,40,0,0,45,0,0,0,5,0,0,20,0,5,0,0,0,0,0,0,0,0,0,0],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#3bb001'
      ],
      backgroundColor: [
        'rgba(255,255,255,.16)'
      ]
    }]
  };
  quantityLineData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69'],
    datasets: [{
      label: 'Current week',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0,10,0,0,0,0,0,0,0,0,0,0,0,50,0,40,0,5,0,0,10,0,0,25,0,0,0,5,0,0,0,0,25,0,0,0,0,40,0,0,0,0,0],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#fd7e14'
      ],
      backgroundColor: [
        'rgba(255,255,255,.16)'
      ]
    }]
  };
  lineOptions = {
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
          max: 150,
          stepSize: 1,
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
          stepSize: 1,
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
  realTimeData = {
    labels: ['3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
    datasets: [{
      label: 'Current week',
      data: [0,0,0,1,3,3,10,11,10,9,12,8,10,6,3],
      borderWidth: 2,
      fill: true,
      borderColor: [
        '#dee2e6'
      ],
      backgroundColor: [
        '#dee2e6', '#dee2e6', '#dee2e6', '#dee2e6', '#dee2e6', '#dee2e6', '#dee2e6', '#dee2e6', '#dee2e6', '#dee2e6', '#dee2e6'
      ]
    },{
      label: 'Current week',
      data: [0,0,1,2,2,5,8,12,10,11,3],
      borderWidth: 2,
      fill: true,
      borderColor: [
        '#006adb'
      ],
      backgroundColor: [
        '#006adb','#006adb','#006adb','#006adb','#006adb','#006adb','#006adb','#006adb','#006adb','#006adb','#006adb','#006adb','#006adb','#006adb',
      ]
    }]
  };
  realTimeOptions = {
    maintainAspectRatio:false,
    responsive:true,
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: true,
          display: true,
          drawTicks: true,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: true,
          beginAtZero: true,
          min: 0,
          max: 15,
          stepSize: 5,
          padding: 10,
          fontColor: "#a7afb7",
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        barPercentage: .4,
        categoryPercentage: 1.4,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          fontColor: "#a7afb7",
          padding: 10,
          fontSize: 9
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
  storeVisitorData = {
    labels: ['3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
    datasets: [{
      label: 'Current week',
      data: [0,0,0,1,3,3,10,11,12,9,12,8,5,10,11],
      borderWidth: 2,
      fill: true,
      borderColor: [
        '#ced4da'
      ],
      backgroundColor: [
        'rgba(206, 212, 218, .1)'
      ]
    },
    {
      label: 'Current week',
      data: [0,0,1,2,2,5,8,12,9,11,5],
      borderWidth: 2,
      fill: true,
      borderColor: [
        '#f10075'
      ],
      backgroundColor: [
        'rgba(241, 0, 117, .05)'
      ]
    }]
  };
  storeVisitorOptions = {
    maintainAspectRatio:false,
    responsive:true,
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: true,
          display: true,
          drawTicks: true,
          color: '#eef0fa',
          zeroLineColor: 'rgba(90, 113, 208, 0)',
        },
        ticks: {
          display: true,
          beginAtZero: true,
          min: 0,
          max: 15,
          stepSize: 5,
          padding: 10,
          fontColor: "#a7afb7",
        }
      }],
      xAxes: [{
        display: true,
        position: 'bottom',
        barPercentage: .4,
        categoryPercentage: 1.4,
        gridLines: {
          drawBorder: false,
          display: true,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          fontColor: "#a7afb7",
          padding: 10,
          fontSize: 9
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
        <div className="az-content-body d-lg-flex az-content-dashboard-ten">
          <div className="az-content-body-left">
            <h2 className="az-content-title tx-24 mg-b-5">Hi, welcome back!</h2>
            <p className="mg-b-20">Your product performance and management dashboard template.</p>
            <div className="row row-sm mg-b-20">
              <div className="col-sm-6 col-lg-4">
                <div className="card card-dashboard-twentysix">
                  <div className="card-header">
                    <h6 className="card-title">Customers</h6>
                    <div className="chart-legend">
                      <div><span className="bg-primary"></span> New</div>
                      <div><span className="bg-teal"></span> Returning</div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="pd-x-15">
                      <h6>156 <span className="tx-success"><i className="icon ion-md-arrow-up"></i> 3.7%</span></h6>
                      <label>Avg. Customers/Day</label>
                    </div>
                    <div className="chart-wrapper">
                      <Line data={this.customersData} options={this.customersOptions} height={150} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mg-t-20 mg-sm-t-0">
                <div className="card card-dashboard-twentysix card-dark-one">
                  <div className="card-header">
                    <h6 className="card-title">Conversions</h6>
                  </div>
                  <div className="card-body">
                    <div className="pd-x-15">
                      <h6>0.23% <span><i className="icon ion-md-arrow-up"></i> 0.20%</span></h6>
                      <label>Purchased</label>
                    </div>
                    <div className="chart-wrapper">
                      <Bar data={this.conversionData} options={this.conversionOptions} height={150} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                <div className="card card-dashboard-twentysix card-dark-two">
                  <div className="card-header">
                    <h6 className="card-title">Revenue</h6>
                  </div>
                  <div className="card-body">
                    <div className="pd-x-15">
                      <h6>$7,299 <span><i className="icon ion-md-arrow-up"></i> 1.18%</span></h6>
                      <label>Total Sales</label>
                    </div>
                    <div className="chart-wrapper">
                    <Line data={this.revenueData} options={this.revenueOptions} height={150} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-body card-dashboard-twentyfive mg-b-20">
              <h6 className="card-title">Conversions</h6>
              <div className="row row-sm">
                <div className="col-6 col-sm-4 col-lg">
                  <label className="card-label">Conversion Rate</label>
                  <h6 className="card-value">0.81<small>%</small></h6>
                  <div className="chart-wrapper">
                    <Line data={this.conversionLineData} options={this.lineOptions} height={35} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg">
                  <label className="card-label">Revenue</label>
                  <h6 className="card-value"><span>$</span>1,095,190</h6>
                  <div className="chart-wrapper">
                    <Line data={this.revenueLineData} options={this.lineOptions} height={35} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg mg-t-20 mg-sm-t-0">
                  <label className="card-label">Unique Purchases</label>
                  <h6 className="card-value">53</h6>
                  <div className="chart-wrapper">
                    <Line data={this.uniqueLineData} options={this.lineOptions} height={35} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg mg-t-20 mg-lg-t-0">
                  <label className="card-label">Transactions</label>
                  <h6 className="card-value">31</h6>
                  <div className="chart-wrapper">
                    <Line data={this.transactionLineData} options={this.lineOptions} height={35} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg mg-t-20 mg-lg-t-0">
                  <label className="card-label">Avg. Order Value</label>
                  <h6 className="card-value"><span>$</span>306.20</h6>
                  <div className="chart-wrapper">
                    <Line data={this.orderLineData} options={this.lineOptions} height={35} />
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg mg-t-20 mg-lg-t-0">
                  <label className="card-label">Quantity</label>
                  <h6 className="card-value">52</h6>
                  <div className="chart-wrapper">
                    <Line data={this.quantityLineData} options={this.lineOptions} height={35} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-sm">
              <div className="col-lg-6">
                <div className="card card-dashboard-twentyfour">
                  <div className="card-header">
                    <h6 className="card-title">Real Time Sales</h6>
                    <span>This Week</span>
                  </div>
                  <div className="card-body">
                    <div className="card-body-top">
                      <div>
                        <h6><span>$</span>150,200<small>.00</small></h6>
                        <label>Total Sales</label>
                      </div>
                      <div>
                        <h6><span>$</span>21,830<small>.25</small></h6>
                        <label>Avg. Sales per Day</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mg-b-15">
                      <label className="az-content-label">Sales Per Hour</label>
                      <div className="chart-legend">
                        <div><span className="bg-primary"></span> Today</div>
                        <div><span className="bg-gray-400"></span> Yesterday</div>
                      </div>
                    </div>
                    <div className="chart-wrapper">
                      <Bar data={this.realTimeData} options={this.realTimeOptions} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mg-t-20 mg-lg-t-0">
                <div className="card card-dashboard-twentyfour">
                  <div className="card-header">
                    <h6 className="card-title">Store Visitors</h6>
                    <span>This Week</span>
                  </div>
                  <div className="card-body">
                    <div className="card-body-top">
                      <div>
                        <h6>297,506</h6>
                        <label>Total Visitors</label>
                      </div>
                      <div>
                        <h6>38,130</h6>
                        <label>Visits per Day</label>
                      </div>
                      <div>
                        <h6>35.07%</h6>
                        <label>Bounce Rate</label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mg-b-15">
                      <label className="az-content-label">Visitors Per Hour</label>
                      <div className="chart-legend">
                        <div><span className="bg-pink"></span> Today</div>
                        <div><span className="bg-gray-400"></span> Yesterday</div>
                      </div>
                    </div>
                    <div className="chart-wrapper">
                      <Line data={this.storeVisitorData} options={this.storeVisitorOptions} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mg-t-20">
                <div className="card card-table-two">
                  <h6 className="card-title">Most Recent Earnings</h6>
                  <span className="d-block mg-b-20">This is the most recent earnings for today's date.</span>
                  <div className="table-responsive">
                    <table className="table table-striped table-dashboard-two mg-b-0">
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
              <div className="col-lg-4 mg-t-20">
                <div className="card card-dashboard-eight bg-white">
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
          </div>
          <div className="az-content-body-right">
            <div className="row mg-b-20">
              <div className="col">
                <label className="az-rating-label">Seller Score</label>
                <h6 className="az-rating-value">98%</h6>
              </div>
              <div className="col">
                <label className="az-rating-label">Rating Score</label>
                <h6 className="az-rating-value">4.5</h6>
              </div>
            </div>
            <hr className="mg-y-25" />
            <label className="az-content-label tx-base mg-b-25">2 Recent Reviews</label>
            <div className="az-media-list-reviews">
              <div className="media">
                <div className="az-img-user"><img src={require("../../assets/images/img16.jpg")} alt="" /></div>
                <div className="media-body">
                  <div className="d-flex justify-content-between mg-b-10">
                    <div>
                      <h6 className="mg-b-0">Socrates Itumay</h6>
                      <div className="az-star-group">
                        <div className="az-star-item"><i className="icon ion-md-star"></i></div>
                        <div className="az-star-item"><i className="icon ion-md-star"></i></div>
                        <div className="az-star-item"><i className="icon ion-md-star"></i></div>
                        <div className="az-star-item"><i className="icon ion-md-star"></i></div>
                        <div className="az-star-item"><i className="icon ion-md-star"></i></div>
                        <span>4.1</span>
                      </div>
                    </div>
                    <small>1 hour ago</small>
                  </div>
                  <p className="mg-b-0">Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed amet...<a href="#/">Read more</a></p>
                </div>
              </div>
              <div className="media">
                <div className="az-img-user"><img src={require("../../assets/images/img17.jpg")} alt="" /></div>
                <div className="media-body">
                  <div className="d-flex justify-content-between mg-b-10">
                    <div>
                      <h6 className="mg-b-0">Reynante Labares</h6>
                      <div className="az-star-group">
                        <div className="az-star-item"><i className="icon ion-md-star"></i></div>
                        <div className="az-star-item"><i className="icon ion-md-star"></i></div>
                        <div className="az-star-item"><i className="icon ion-md-star"></i></div>
                        <div className="az-star-item"><i className="icon ion-md-star"></i></div>
                        <div className="az-star-item"><i className="icon ion-md-star"></i></div>
                        <span>4.5</span>
                      </div>
                    </div>
                    <small>2 days ago</small>
                  </div>
                  <p className="mg-b-0">Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed amet...<a href="#/">Read more</a></p>
                </div>
              </div>
            </div>
            <hr className="mg-y-25" />
            <label className="az-content-label tx-base mg-b-25">Activity Stream</label>
            <div className="az-media-list-activity mg-b-20">
              <div className="media">
                <div className="media-icon bg-success"><i className="typcn typcn-tick-outline"></i></div>
                <div className="media-body">
                  <h6>Successful Purchase</h6>
                  <span>Product ID: #0102</span>
                </div>
                <div className="media-right">2 hours</div>
              </div>
              <div className="media">
                <div className="media-icon bg-primary"><i className="typcn typcn-shopping-cart"></i></div>
                <div className="media-body">
                  <h6>Order Verification</h6>
                  <span>Product ID: #2200</span>
                </div>
                <div className="media-right">3 hours</div>
              </div>
              <div className="media">
                <div className="media-icon bg-purple"><i className="typcn typcn-arrow-forward-outline"></i></div>
                <div className="media-body">
                  <h6>Orders For Shipment</h6>
                  <span>Cleared By: Agent#20</span>
                </div>
                <div className="media-right">5 hours</div>
              </div>
              <div className="media">
                <div className="media-icon bg-danger"><i className="typcn typcn-times-outline"></i></div>
                <div className="media-body">
                  <h6>Purchase Cancellation</h6>
                  <span>Product ID: #0102</span>
                </div>
                <div className="media-right">6 hours</div>
              </div>
              <div className="media">
                <div className="media-icon bg-success"><i className="typcn typcn-tick-outline"></i></div>
                <div className="media-body">
                  <h6>Successful Purchase</h6>
                  <span>Product ID: #2070</span>
                </div>
                <div className="media-right">10 hours</div>
              </div>
              <div className="media">
                <div className="media-icon bg-warning"><i className="typcn typcn-tick-outline"></i></div>
                <div className="media-body">
                  <h6>Overdue Shipments</h6>
                  <span>Reminder from: Agent#30</span>
                </div>
                <div className="media-right">18 hours</div>
              </div>
              <div className="media">
                <div className="media-icon bg-danger"><i className="typcn typcn-times-outline"></i></div>
                <div className="media-body">
                  <h6>Purchase Cancellation</h6>
                  <span>Product ID: #0102</span>
                </div>
                <div className="media-right">Yesterday</div>
              </div>
              <div className="media">
                <div className="media-icon bg-info"><i className="typcn typcn-times-outline"></i></div>
                <div className="media-body">
                  <h6>New Item Added</h6>
                  <span>Department: Wearables</span>
                </div>
                <div className="media-right">Yesterday</div>
              </div>
              <div className="media">
                <div className="media-icon bg-orange"><i className="typcn typcn-times-outline"></i></div>
                <div className="media-body">
                  <h6>New Registered Seller</h6>
                  <span>Seller Name: Socrates</span>
                </div>
                <div className="media-right">3 days</div>
              </div>
              <div className="media">
                <div className="media-icon bg-success"><i className="typcn typcn-tick-outline"></i></div>
                <div className="media-body">
                  <h6>Successful Purchase</h6>
                  <span>Product ID: #2070</span>
                </div>
                <div className="media-right">4 days</div>
              </div>
            </div>
            <a href="#/" className="btn btn-outline-light btn-block">View All Activities</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
