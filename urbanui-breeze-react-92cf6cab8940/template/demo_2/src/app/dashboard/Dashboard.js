import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import { Dropdown } from 'react-bootstrap';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate : new Date(),
      todos: [
        {
            id: 1,
            task: 'Pick up kids from school',
            isCompleted: false
        },
        {
            id: 2,
            task: 'Prepare for presentation',
            isCompleted: false
        },
        {
            id: 3,
            task: 'Print Statements',
            isCompleted: false
        },
        {
            id: 4,
            task: 'Create invoice',
            isCompleted: false
        },
        {
            id: 5,
            task: 'Call John',
            isCompleted: false
        }
    ],
    inputValue: '',
    }
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  } 
  statusChangedHandler(event, id) {
    const todo = {...this.state.todos[id]};
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
        todos: todos
    })
}

addTodo (event) {
    event.preventDefault();

    const todos = [...this.state.todos];
    todos.unshift({
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        task: this.state.inputValue,
        isCompleted: false
        
    })

    this.setState({
        todos: todos,
        inputValue: ''
    })
}

removeTodo (index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
        todos: todos
    })
}

inputChangeHandler(event) {
    this.setState({
        inputValue: event.target.value
    });
}
  barData = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
    datasets: [{
      label: '# of Votes',
      data: [10, 19, 16, 15, 17, 13, 17],
      backgroundColor: [
        '#3f50f6','#3f50f6','#3f50f6','#3f50f6','#3f50f6','#3f50f6','#3f50f6',
      ],
      borderColor: [
        '#3f50f6','#3f50f6','#3f50f6','#3f50f6','#3f50f6','#3f50f6','#3f50f6',
      ],
      borderWidth: 1,
      fill: false
    }]
};

barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        display: false,
        beginAtZero:true
      },
      gridLines: {
        drawBorder: false,
        display: false
      },
    }],
    xAxes: [{
      barPercentage: 0.7,
      categoryPercentage:.9,
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
salesRevenueData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "9", "10", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20","1", "2", "3", "4", "5", "6", "7", "9", "10", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "1", "2", "3", "4", "5", "6", "7", "9", "10", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "1", "2", "3", "4", "5", "6", "7", "9", "10", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "13", "14", "15", "16", "17", "18", "19", "20"],
  datasets: [{
    label: 'sales revenue1',
    data: [8, 8, 8, 7, 6, 5, 6, 5, 4, 3, 4, 3, 5, 5, 4, 3, 4, 5, 4, 5, 4, 4, 3, 4, 6, 5, 6, 5, 6, 7, 6, 7, 6, 6, 5, 4, 5, 4, 6, 5, 7, 7, 6, 5, 3, 5, 4, 5, 3, 5, 4, 5, 6, 4, 5, 4, 3, 5, 4, 5, 6, 7, 5, 4, 5, 6, 4, 3, 4, 5, 7, 4, 6, 7, 6, 5, 4, 3, 4, 6, 5, 7, 6, 7, 5, 7, 5, 2, 3],
    backgroundColor: [
      '#3f50f6'
    ],
    borderColor: [
      '#3f50f6'
    ],
    borderWidth: 1,
    fill: true, // 3: no fill
    datasetKeyProvider: "key1"
  },
  {
    label: 'sales revenue2',
    data: [18, 18, 18, 17, 16, 15, 16, 15, 14, 13, 14, 13, 14, 15, 14, 13, 14, 16, 16, 15, 13, 14, 13, 14, 16, 15, 16, 15, 16, 15, 16, 15, 13, 14, 15, 14, 15, 14, 16, 15, 17, 17, 16, 15, 13, 15, 14, 13, 15, 14, 13, 12, 13, 12, 14, 13, 15, 14, 16, 17, 15, 14, 15, 16, 14, 13, 14, 15, 17, 14, 16, 17, 16, 15, 14, 14, 16, 15, 17, 16, 17, 15, 17, 11, 15, 14, 15, 16, 13],
    backgroundColor: [
      '#bcc1f3',
    ],
    borderColor: [
      '#bcc1f3'
    ],
    borderWidth: 1,
    fill: true, // 3: no fill
    datasetKeyProvider: "key2"
  },
  {
    label: 'sales revenue3',
    data: [29, 27, 26, 27, 27, 28, 26, 27, 28, 27, 25, 26, 24, 25, 27, 26, 27, 25, 27, 28, 26, 28, 27, 29, 27, 28, 26, 26, 27, 26, 27, 25, 24, 23, 25, 27, 25, 26, 27, 29, 27, 26, 28, 29, 27, 30, 31, 31, 30, 31, 30, 31, 30, 31, 32, 31, 30, 28, 27, 29, 28, 26, 27, 28, 26, 28, 27, 29, 28, 27, 25, 26, 27, 26, 27, 25, 26, 27, 29, 28, 27, 28, 26, 27, 25, 23, 25, 26, 27],
    backgroundColor: [
      '#252529'
    ],
    borderColor: [
      '#ffab2d'
    ],
    borderWidth: 2,
    fill: true, // 3: no fill
    datasetKeyProvider: "key3"
  }]
};

salesRevenueOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        display: false,
        beginAtZero: true,
        steps: 20,
        stepValue: 20,
        max: 50
      },
      gridLines: {
        drawBorder: false,
        display: false
      },
    }],
    xAxes: [{
      ticks: {
        display: false,
        beginAtZero: true
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
    },
    line: {
      tension: 0
    }
  }
}
recentCustomersData1 = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      '#00cccd33'
    ],
    borderColor: [
      '#00cccd'
    ],
    borderWidth: 1,
    fill: true, // 3: no fill
  }]
};
recentCustomersData2 = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [{
    label: '# of Votes',
    data: [13, 2, 15, 3, 19, 12],
    backgroundColor: [
      '#00cccd33'
    ],
    borderColor: [
      '#00cccd'
    ],
    borderWidth: 1,
    fill: true, // 3: no fill
  }]
};
recentCustomersData3 = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [{
    label: '# of Votes',
    data: [13, 2, 15, 3, 19, 12],
    backgroundColor: [
      '#ffed924f'
    ],
    borderColor: [
      '#ffab2d'
    ],
    borderWidth: 1,
    fill: true, // 3: no fill
  }]
};
recentCustomersData4 = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [{
    label: '# of Votes',
    data: [2, 19, 13, 5, 12, 10],
    backgroundColor: [
      '#ffed924f'
    ],
    borderColor: [
      '#ffab2d'
    ],
    borderWidth: 1,
    fill: true, // 3: no fill
  }]
};
recentCustomersData5 = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [{
    label: '# of Votes',
    data: [12, 9, 13, 5, 12, 3],
    backgroundColor: [
      '#00cccd33'
    ],
    borderColor: [
      '#00cccd'
    ],
    borderWidth: 1,
    fill: true, // 3: no fill
  }]
};

recentCustomersOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    yAxes: [{
      ticks: {
        display: false,
        beginAtZero: true,
        steps: 5,
        stepValue: 5,
        max: 40
      },
      gridLines: {
        drawBorder: false,
        display: false
      }
    }],
    xAxes: [{
      ticks: {
        display: false,
      },
      gridLines: {
        drawBorder: false,
        display: false,
      }
    }]

  },
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    },
  },
}
surveyBarData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    data: [14, 12, 9, 15, 10, 12, 10],
    backgroundColor: '#3f50f6',
    borderColor: '#3f50f6',
    pointRadius: 0,
    lineTension: 0,
    borderWidth: 1,
    label: "survey bar1",
    datasetKeyProvider: "surver key1"
  }, {
    data: [17, 17, 17, 17, 17, 17, 17],
    backgroundColor: '#e6e6e6',
    borderColor: '#e6e6e6',
    pointRadius: 0,
    lineTension: 0,
    borderWidth: 1,
    label: "survey bar2",
    datasetKeyProvider: "surver key2"
  }]
};

surveyBarOptions = {
responsive: true,
barRoundness: 1,
cornerRadius: 20,
scales: {
  yAxes: [{
    ticks: {
      display: false,
      beginAtZero: true
    },
    gridLines: {
      drawBorder: false,
      display: false
    },
  }],
  xAxes: [{
    stacked: true,
    barPercentage: .3,
    ticks: {
      display: true,
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
  render () {
    return (
      <div>
        <div className="page-header flex-wrap">
          <h3 className="mb-0">Hi, welcome back! <span className="pl-0 h6 pl-sm-2 text-muted d-inline-block">Your web analytics dashboard template.</span>
          </h3>
          <div className="d-flex">
            <button type="button" className="btn btn-sm bg-white text-black btn-icon-text border mr-0">
              <i className="mdi mdi-email btn-icon-prepend"></i> Email </button>
            <button type="button" className="btn btn-sm bg-white text-black btn-icon-text border ml-3 mr-0">
              <i className="mdi mdi-printer btn-icon-prepend"></i> Print </button>
            <button type="button" className="btn btn-sm ml-3 btn-success mr-0"> Add User</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-12 stretch-card grid-margin">
            <div className="row">
              <div className="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                <div className="card bg-warning">
                  <div className="card-body px-3 py-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="color-card">
                        <p className="mb-0 color-card-head">Sales</p>
                        <h2 className="text-white">$8,753.<span className="h5">00</span></h2>
                      </div>
                      <i className="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"></i>
                    </div>
                    <h6 className="text-white">18.33% Since last month</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                <div className="card bg-danger">
                  <div className="card-body px-3 py-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="color-card">
                        <p className="mb-0 color-card-head">Margin</p>
                        <h2 className="text-white">$5,300.<span className="h5">00</span></h2>
                      </div>
                      <i className="card-icon-indicator mdi mdi-cube-outline bg-inverse-icon-danger"></i>
                    </div>
                    <h6 className="text-white">13.21% Since last month</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3 pb-lg-0 pb-xl-3">
                <div className="card bg-primary">
                  <div className="card-body px-3 py-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="color-card">
                        <p className="mb-0 color-card-head">Orders</p>
                        <h2 className="text-white">$1,753.<span className="h5">00</span></h2>
                      </div>
                      <i className="card-icon-indicator mdi mdi-briefcase-outline bg-inverse-icon-primary"></i>
                    </div>
                    <h6 className="text-white">67.98% Since last month</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 stretch-card pb-sm-3 pb-lg-0">
                <div className="card bg-success">
                  <div className="card-body px-3 py-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="color-card">
                        <p className="mb-0 color-card-head">Affiliate</p>
                        <h2 className="text-white">2368</h2>
                      </div>
                      <i className="card-icon-indicator mdi mdi-account-circle bg-inverse-icon-success"></i>
                    </div>
                    <h6 className="text-white">20.32% Since last month</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-7">
                    <h5>Business Survey</h5>
                    <p className="text-muted">Show overview jan 2018 - Dec 2019 <a className="text-muted font-weight-medium pl-2" href="!#" onClick={evt =>evt.preventDefault()}><u>See Details</u></a></p>
                  </div>
                  <div className="col-sm-5 text-md-right">
                    <button type="button" className="btn btn-icon-text mb-3 mb-sm-0 btn-survey font-weight-normal mr-0">
                      <i className="mdi mdi-email btn-icon-prepend"></i>Download Report</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card border mb-3 mb-sm-0">
                      <div className="card-body py-3 px-4">
                        <p className="m-0 survey-head">Today Earnings</p>
                        <div className="d-flex w-100 align-items-end justify-content-between">
                          <div>
                            <h3 className="survey-value">$5,300</h3>
                            <p className="text-success m-0">-310 avg. sales</p>
                          </div>
                          <div>
                            <Bar data={this.barData} options={this.barOptions}  width={70} height={50}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card border mb-3 mb-sm-0">
                      <div className="card-body py-3 px-3">
                        <p className="m-0 survey-head">Product Sold</p>
                        <div className="d-flex w-100 align-items-end justify-content-between">
                          <div>
                            <h3 className="survey-value">$5,300</h3>
                            <p className="text-danger m-0">-310 avg. sales</p>
                          </div>
                          <div>
                            <Bar data={this.barData} options={this.barOptions}  width={70} height={50}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card border">
                      <div className="card-body py-3 px-3">
                        <p className="m-0 survey-head">Today Orders</p>
                        <div className="d-flex w-100 align-items-end justify-content-between">
                          <div>
                            <h3 className="survey-value">$5,300</h3>
                            <p className="text-success m-0">-310 avg. sales</p>
                          </div>
                          <div>
                            <Bar data={this.barData} options={this.barOptions} width={70} height={50}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-sm-12">
                    <div className="sales-chart-height">
                      <Line data={this.salesRevenueData} options={this.salesRevenueOptions} datasetKeyProvider={this.datasetKeyProvider} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <b>Learn More</b></p>
                  </div>
                  <div className="col-sm-4">
                    <p className="mb-0 text-muted">Sales Revenue</p>
                    <h5 className="d-inline-block survey-value mb-0">$2,45,500</h5>
                    <p className="d-inline-block text-danger mb-0 ml-1">last 8 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body px-4 px-xl-0  overflow-auto">
                <h4 className="card-title pl-4">Purchase History</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Customer </th>
                        <th> Project </th>
                        <th> Invoice </th>
                        <th> Amount </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={require("../../assets/images/faces/face1.jpg")} alt="profile" />
                            <div className="table-user-name ml-3">
                              <p className="mb-0 font-weight-medium">Cecelia Cooper</p>
                              <small> Payment on hold</small>
                            </div>
                          </div>
                        </td>
                        <td> Angular Admin</td>
                        <td>
                          <div className="badge badge-inverse-success"> Completed </div>
                        </td>
                        <td> $ 77.99 </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={require("../../assets/images/faces/face10.jpg")} alt="profile" />
                            <div className="table-user-name ml-3">
                              <p className="mb-0 font-weight-medium">Victor Watkins</p>
                              <small>Email verified</small>
                            </div>
                          </div>
                        </td>
                        <td> Angular Admin </td>
                        <td>
                          <div className="badge badge-inverse-success"> Completed </div>
                        </td>
                        <td> $245.30 </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={require("../../assets/images/faces/face11.jpg")} alt="profile" />
                            <div className="table-user-name ml-3">
                              <p className="mb-0 font-weight-medium">Ada Burgess</p>
                              <small>Email verified</small>
                            </div>
                          </div>
                        </td>
                        <td> One page html </td>
                        <td>
                          <div className="badge badge-inverse-danger"> Completed </div>
                        </td>
                        <td> $ 160.25 </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={require("../../assets/images/faces/face13.jpg")} alt="profile" />
                            <div className="table-user-name ml-3">
                              <p className="mb-0 font-weight-medium">Dollie Lynch</p>
                              <small>Email verified</small>
                            </div>
                          </div>
                        </td>
                        <td> Wordpress </td>
                        <td>
                          <div className="badge badge-inverse-success "> Declined </div>
                        </td>
                        <td> $ 123.21 </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img src={require("../../assets/images/faces/face16.jpg")} alt="profile" />
                            <div className="table-user-name ml-3">
                              <p className="mb-0 font-weight-medium">Harry Holloway</p>
                              <small>Payment on process</small>
                            </div>
                          </div>
                        </td>
                        <td> VueJs Application </td>
                        <td>
                          <div className="badge badge-inverse-danger"> Declined </div>
                        </td>
                        <td> $ 150.00 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a className="text-white mt-3 d-block pl-4" href="!#" onClick={evt =>evt.preventDefault()}> <span className="font-weight-medium h6">View all order history</span> <i className="mdi mdi-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="card-title font-weight-medium">Business Survey</div>
                <p className="text-muted">Lorem ipsum dolor sitadipiscing elit, sed amet do eiusmod tempor we find a new solution </p>
                <div className="d-flex flex-wrap border-bottom py-2 border-top justify-content-between">
                  <img className="survey-img mb-lg-3" src={require("../../assets/images/dashboard/img_3.jpg")} alt="" />
                  <div className="pt-2">
                    <h5 className="mb-0">Villa called Archagel</h5>
                    <p className="mb-0 text-muted">St, San Diego, CA </p>
                    <h5 className="mb-0">$600/mo</h5>
                  </div>
                </div>
                <div className="d-flex flex-wrap border-bottom py-2 justify-content-between">
                  <img className="survey-img mb-lg-3" src={require("../../assets/images/dashboard/img_1.jpg")} alt="" />
                  <div className="pt-2">
                    <h5 className="mb-0">Luxury villa in Hermo</h5>
                    <p className="mb-0 text-muted">Glendale, CA </p>
                    <h5 className="mb-0">$900/mo</h5>
                  </div>
                </div>
                <div className="d-flex flex-wrap border-bottom py-2 justify-content-between">
                  <img className="survey-img mb-lg-3" src={require("../../assets/images/dashboard/img_2.jpg")} alt="" />
                  <div className="pt-2">
                    <h5 className="mb-0">House on the Clarita</h5>
                    <p className="mb-0 text-muted">Business Survey </p>
                    <h5 className="mb-0">$459/mo</h5>
                  </div>
                </div>
                <a className="text-white mt-3 d-block font-weight-medium h6" href="!#" onClick={evt =>evt.preventDefault()}>View all <i className="mdi mdi-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                  <h4 className="card-title">To do Task List</h4>
                  <div className="list-wrapper">
                      <ul className="d-flex flex-column todo-list todo-padding-lg">
                        {this.state.todos.map((todo, index) =>{
                            return <ListItem 
                            isCompleted={todo.isCompleted}
                            listId={todo.id}
                            changed={(event) => this.statusChangedHandler(event, index)}
                            key={todo.id}
                            remove={() => this.removeTodo(index) }
                            >{todo.task}</ListItem>
                        })}
                      </ul>
                  </div>
                  <form  className="add-items d-sm-flex" onSubmit={this.addTodo}>
                    <input 
                        type="text" 
                        className="form-control h-auto" 
                        placeholder="What do you need to do today?" 
                        value={this.state.inputValue} 
                        onChange={this.inputChangeHandler}
                        required />
                    <button type="submit" className="btn btn-primary font-weight-bold ml-0 ml-sm-2 mt-2 mt-sm-0">Add</button>
                  </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-white">Recent Customers</h4>
                <p className="text-muted mb-1">All contacts</p>
                <div className="row pt-1 pb-1">
                  <div className="col-12 col-sm-7 mt-3">
                    <div className="row">
                      <div className="col-4 col-md-4">
                        <img className="customer-img" src={require("../../assets/images/faces/face22.jpg")} alt="" />
                      </div>
                      <div className="col-8 col-md-8 p-sm-0">
                        <h6 className="mb-0">Cecelia Cooper</h6>
                        <p className="text-muted font-12">05:58AM</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-sm-5 pl-0">
                      <Line data={this.recentCustomersData1} options={this.recentCustomersOptions} />
                  </div>
                </div>
                <div className="row py-1">
                  <div className="col-sm-7 mt-3">
                    <div className="row">
                      <div className="col-4 col-sm-4">
                        <img className="customer-img" src={require("../../assets/images/faces/face25.jpg")} alt="" />
                      </div>
                      <div className="col-8 col-sm-8 p-sm-0">
                        <h6 className="mb-0">Victor Watkins</h6>
                        <p className="text-muted font-12">05:28AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 pl-0">
                    <Line data={this.recentCustomersData2} options={this.recentCustomersOptions} />
                  </div>
                </div>
                <div className="row py-1">
                  <div className="col-sm-7 mt-3">
                    <div className="row">
                      <div className="col-4 col-sm-4">
                        <img className="customer-img" src={require("../../assets/images/faces/face15.jpg")} alt="" />
                      </div>
                      <div className="col-8 col-sm-8 p-sm-0">
                        <h6 className="mb-0">Ada Burgess</h6>
                        <p className="text-muted font-12">05:57AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 pl-0">
                    <Line data={this.recentCustomersData3} options={this.recentCustomersOptions} />
                  </div>
                </div>
                <div className="row py-1">
                  <div className="col-sm-7 mt-3">
                    <div className="row">
                      <div className="col-4 col-sm-4">
                        <img className="customer-img" src={require("../../assets/images/faces/face5.jpg")} alt="" />
                      </div>
                      <div className="col-8 col-sm-8 p-sm-0">
                        <h6 className="mb-0">Dollie Lynch</h6>
                        <p className="text-muted font-12">05:59AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 pl-0">
                    <Line data={this.recentCustomersData4} options={this.recentCustomersOptions} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-7 mt-3">
                    <div className="row">
                      <div className="col-4 col-sm-4">
                        <img className="customer-img" src={require("../../assets/images/faces/face2.jpg")} alt="" />
                      </div>
                      <div className="col-8 col-sm-8 p-sm-0">
                        <h6 className="mb-0">Harry Holloway</h6>
                        <p className="text-muted font-12 mb-0">05:13AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 pl-0">
                    <Line data={this.recentCustomersData5} options={this.recentCustomersOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-white">Business Survey</h4>
                <p className="text-muted pb-2">Jan 01 2019 - Dec 31 2019</p>
                  <Bar data={this.surveyBarData} options={this.surveyBarOptions} datasetKeyProvider = {this.datasetKeyProvider} id="surveyBarChart" />
                <div className="row border-bottom pb-4 pt-4 align-items-center mx-0">
                  <div className="col-sm-9 pl-0">
                    <div className="d-flex">
                      <img src={require("../../assets/images/dashboard/img_4.jpg")} alt="" />
                      <div className="pl-2">
                        <h6 className="m-0">Red Chair</h6>
                        <p className="m-0">Home Decoration</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 pl-0 pl-sm-3">
                    <div className="badge badge-inverse-success mt-3 mt-sm-0"> +7.7%</div>
                  </div>
                </div>
                <div className="row py-3 pb-0 align-items-center mx-0">
                  <div className="col-sm-9 pl-0">
                    <div className="d-flex">
                      <img src={require("../../assets/images/dashboard/img_5.jpg")} alt="" />
                      <div className="pl-2">
                        <h6 className="m-0">Gray Sofa</h6>
                        <p className="m-0">Home Decoration</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 pl-0 pl-sm-3">
                    <div className="badge badge-inverse-success mt-3 mt-sm-0"> +7.7%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 grid-margin stretch-card">
            <div className="card card-calender">
              <div className="card-body">
                <div className="row pt-4">
                  <div className="col-sm-6">
                    <h1 className="text-white">10:16PM</h1>
                    <h5 className="text-white">Monday 25 October, 2016</h5>
                    <h5 className="text-white pt-2 m-0">Precipitation:50%</h5>
                    <h5 className="text-white m-0">Humidity:23%</h5>
                    <h5 className="text-white m-0">Wind:13 km/h</h5>
                  </div>
                  <div className="col-sm-6 text-sm-right pt-3 pt-sm-0">
                    <h3 className="text-white">Clear Sky</h3>
                    <p className="text-white m-0"> London, UK</p>
                    <h3 className="text-white m-0">21°C</h3>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <ul className="d-flex pl-0 overflow-auto">
                      <li className="weakly-weather-item text-white font-weight-medium text-center active">
                        <p className="mb-0"> TODAY </p>
                        <i className="mdi mdi-weather-cloudy"></i>
                        <p className="mb-0"> 21<span className="symbol">°c</span>
                        </p>
                      </li>
                      <li className="weakly-weather-item text-white font-weight-medium text-center">
                        <p className="mb-0"> MON </p>
                        <i className="mdi mdi-weather-hail"></i>
                        <p className="mb-0"> 21<span className="symbol">°c</span>
                        </p>
                      </li>
                      <li className="weakly-weather-item text-white font-weight-medium text-center">
                        <p className="mb-0"> TUE </p>
                        <i className="mdi mdi-weather-cloudy"></i>
                        <p className="mb-0"> 21<span className="symbol">°c</span>
                        </p>
                      </li>
                      <li className="weakly-weather-item text-white font-weight-medium text-center">
                        <p className="mb-0"> WED </p>
                        <i className="mdi mdi-weather-fog"></i>
                        <p className="mb-0"> 21<span className="symbol">°c</span>
                        </p>
                      </li>
                      <li className="weakly-weather-item text-white font-weight-medium text-center">
                        <p className="mb-0"> THU </p>
                        <i className="mdi mdi-weather-hail"></i>
                        <p className="mb-0"> 21<span className="symbol">°c</span>
                        </p>
                      </li>
                      <li className="weakly-weather-item text-white font-weight-medium text-center">
                        <p className="mb-0"> FRI </p>
                        <i className="mdi mdi-weather-cloudy"></i>
                        <p className="mb-0"> 21<span className="symbol">°c</span>
                        </p>
                      </li>
                      <li className="weakly-weather-item text-white font-weight-medium text-center">
                        <p className="mb-0"> SAT </p>
                        <i className="mdi mdi-weather-hail"></i>
                        <p className="mb-0"> 21<span className="symbol">°c</span>
                        </p>
                      </li>
                      <li className="weakly-weather-item text-white font-weight-medium text-center">
                        <p className="mb-0"> SUN </p>
                        <i className="mdi mdi-weather-cloudy"></i>
                        <p className="mb-0"> 21<span className="symbol">°c</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <span className="d-flex justify-content-between">
                    <span>Activity</span>
                    <span className="dropdown dropleft d-block">
                      <span id="dropdownMenuButton1" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <span><i className="mdi mdi-dots-horizontal"></i></span>
                      </span>
                      <span className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <a className="dropdown-item" href="!#" onClick={evt =>evt.preventDefault()}>Contact</a>
                        <a className="dropdown-item" href="!#" onClick={evt =>evt.preventDefault()}>Helpdesk</a>
                        <a className="dropdown-item" href="!#" onClick={evt =>evt.preventDefault()}>Chat with us</a>
                      </span>
                    </span>
                  </span>
                </h4>
                <ul className="gradient-bullet-list border-bottom">
                  <li>
                    <h6 className="mb-0">It's awesome when we find a new solution </h6>
                    <p className="text-muted"> 2h ago </p>
                  </li>
                  <li>
                    <h6 className="mb-0">Report has been updated</h6>
                    <p className="text-muted">
                      <span>2h ago</span>
                      <span className=" d-inline-block">
                        <span className="d-flex d-inline-block">
                          <img className="ml-1" src={require("../../assets/images/faces/face1.jpg")} alt="" />
                          <img className="ml-1" src={require("../../assets/images/faces/face10.jpg")} alt="" />
                          <img className="ml-1" src={require("../../assets/images/faces/face14.jpg")} alt="" />
                        </span>
                      </span>
                    </p>
                  </li>
                  <li>
                    <h6 className="mb-0">Analytics dashboard has been created#Slack</h6>
                    <p className="text-muted"> 2h ago </p>
                  </li>
                  <li>
                    <h6 className="mb-0">It's awesome when we find a new solution </h6>
                    <p className="text-muted"> 2h ago </p>
                  </li>
                </ul>
                <a className="text-white mt-3 mb-0 d-block h6" href="!#" onClick={evt =>evt.preventDefault()}>View all <i className="mdi mdi-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 grid-margin grid-margin-lg-0 stretch-card">
            <div className="card card-invoice">
              <div className="card-body">
                <h4 className="card-title pb-3">Pending invoices</h4>
                <div className="list-card">
                  <div className="row align-items-center">
                    <div className="col-7 col-sm-8">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <img src={require("../../assets/images/faces/face2.jpg")} alt="" />
                        </div>
                        <div className="col-sm-8 pr-0 pl-sm-0">
                          <span>06 Jan 2019</span>
                          <h6 className="mb-1 mb-sm-0">Isabel Cross</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-5 col-sm-4">
                      <div className="d-flex pt-1 align-items-center justify-content-end">
                        <div className="reload-outer bg-info">
                          <i className="mdi mdi-reload"></i>
                        </div>
                        <div className="dropdown pl-2">
                          <div id="dropdownMenuButton2" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <Dropdown alignRight>
                              <Dropdown.Toggle className="nav-link count-indicator bg-transparent text-muted p-0 border-0 toggle-arrow-hide">
                                <i className="mdi mdi-dots-vertical"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="preview-list navbar-dropdown">
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center py-2" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi mdi-sale mr-2 text-success"></i> Sales
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center py-2" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi mdi-cart mr-2 text-primary"></i> Track Invoice
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center py-2" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi-cash mr-2 text-primary"></i> Payment History
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-card">
                  <div className="row align-items-center">
                    <div className="col-7 col-sm-8">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <img src={require("../../assets/images/faces/face3.jpg")} alt="" />
                        </div>
                        <div className="col-sm-8 pr-0 pl-sm-0">
                          <span>18 Mar 2019</span>
                          <h6 className="mb-1 mb-sm-0">Carrie Parker</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-5 col-sm-4">
                      <div className="d-flex pt-1 align-items-center justify-content-end">
                        <div className="reload-outer bg-info">
                          <i className="mdi mdi-reload"></i>
                        </div>
                        <div className="dropdown pl-2">
                          <div id="dropdownMenuButton2" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <Dropdown alignRight>
                              <Dropdown.Toggle className="nav-link count-indicator bg-transparent text-muted p-0 border-0 toggle-arrow-hide">
                                <i className="mdi mdi-dots-vertical"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="preview-list navbar-dropdown">
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center py-2" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi mdi-sale mr-2 text-success"></i> Sales
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center py-2" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi mdi-cart mr-2 text-primary"></i> Track Invoice
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center py-2" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi-cash mr-2 text-primary"></i> Payment History
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-card">
                  <div className="row align-items-center">
                    <div className="col-7 col-sm-8">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <img src={require("../../assets/images/faces/face11.jpg")} alt="" />
                        </div>
                        <div className="col-sm-8 pr-0 pl-sm-0">
                          <span>10 Apr 2019</span>
                          <h6 className="mb-1 mb-sm-0">Don Bennett</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-5 col-sm-4">
                      <div className="d-flex pt-1 align-items-center justify-content-end">
                        <div className="reload-outer bg-info">
                          <i className="mdi mdi-reload"></i>
                        </div>
                        <div className="dropdown pl-2">
                          <div id="dropdownMenuButton2" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <Dropdown alignRight>
                              <Dropdown.Toggle className="nav-link count-indicator bg-transparent text-muted p-0 border-0 toggle-arrow-hide">
                                <i className="mdi mdi-dots-vertical"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="preview-list navbar-dropdown">
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center py-2" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi mdi-sale mr-2 text-success"></i> Sales
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center py-2" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi mdi-cart mr-2 text-primary"></i> Track Invoice
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center py-2" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi-cash mr-2 text-primary"></i> Payment History
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="list-card">
                  <div className="row align-items-center">
                    <div className="col-7 col-sm-8">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <img src={require("../../assets/images/faces/face3.jpg")} alt="" />
                        </div>
                        <div className="col-sm-8 pr-0 pl-sm-0">
                          <span>18 Mar 2019</span>
                          <h6 className="mb-1 mb-sm-0">Carrie Parker</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-5 col-sm-4">
                      <div className="d-flex pt-1 align-items-center justify-content-end">
                        <div className="reload-outer bg-info">
                          <i className="mdi mdi-reload"></i>
                        </div>
                        <div className="dropdown pl-2">
                          <div id="dropdownMenuButton2" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <Dropdown alignRight>
                              <Dropdown.Toggle className="nav-link count-indicator bg-transparent text-muted p-0 border-0 toggle-arrow-hide">
                                <i className="mdi mdi-dots-vertical"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="preview-list navbar-dropdown">
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi mdi-sale mr-2 text-success"></i> Sales
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi mdi-cart mr-2 text-primary"></i> Track Invoice
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                                  <i className="mdi mdi-cash mr-2 text-primary"></i> Payment History
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 grid-margin grid-margin-lg-0 stretch-card">
            <div className="card">
              <div className="card-body">
                <DatePicker
                  renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled
                  }) => (
                    <div className="datepicker-custom-header d-flex justify-content-between align-items-center">
                      <h5 className="month-name">{date.toLocaleString('default', { month: 'long' }) + ' ' + date.toLocaleString('default', { year: 'numeric' })}</h5>
                      <div>
                        <button className="month-nav-btn btn btn-inverse-primary btn-rounded btn-icon prev-month" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}><i className="mdi mdi-chevron-left"></i></button>
                        <button className="month-nav-btn btn btn-inverse-primary btn-rounded btn-icon next-month" onClick={increaseMonth}><i className="mdi mdi-chevron-right" disabled={nextMonthButtonDisabled}></i></button>
                      </div>
                    </div>
                  )}
                  selected={this.state.startDate}
                  onChange={date => this.setState({startDate: date})}
                  inline
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 stretch-card grid-margin-lg-0 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Browser stats</h4>
                <div className="row py-2">
                  <div className="col-sm-12">
                    <div className="d-flex justify-content-between pb-3 border-bottom">
                      <div>
                        <img className="mr-2" src={require("../../assets/images/browser-logo/opera-logo.png")} alt="" /> <span className="p">opera mini</span>
                      </div>
                      <p className="mb-0">23%</p>
                    </div>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-sm-12">
                    <div className="d-flex justify-content-between pb-3 border-bottom">
                      <div>
                        <img className="mr-2" src={require("../../assets/images/browser-logo/safari-logo.png")} alt="" /> <span className="p">Safari</span>
                      </div>
                      <p className="mb-0">07%</p>
                    </div>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-sm-12">
                    <div className="d-flex justify-content-between pb-3 border-bottom">
                      <div>
                        <img className="mr-2" src={require("../../assets/images/browser-logo/chrome-logo.png")} alt="" /> <span className="p">Chrome</span>
                      </div>
                      <p className="mb-0">33%</p>
                    </div>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-sm-12">
                    <div className="d-flex justify-content-between pb-3 border-bottom">
                      <div>
                        <img className="mr-2" src={require("../../assets/images/browser-logo/firefox-logo.png")} alt="" /> <span className="p">Firefox</span>
                      </div>
                      <p className="mb-0">17%</p>
                    </div>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-sm-12">
                    <div className="d-flex justify-content-between">
                      <div>
                        <img className="mr-2" src={require("../../assets/images/browser-logo/explorer-logo.png")} alt="" /> <span className="p">Explorer</span>
                      </div>
                      <p className="mb-0">05%</p>
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
const ListItem = (props) => {
  return (
      <li className={(props.isCompleted ? 'completed' : null)}>
          <div className="form-check m-0 align-items-start">
              <label htmlFor="" className="form-check-label font-weight-medium"> 
                  <input className="checkbox" type="checkbox" 
                      checked={props.isCompleted} 
                      onChange={props.changed} 
                      /> {props.children} <i className="input-helper"></i>
              </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
      </li>
  )
};
export default Dashboard;