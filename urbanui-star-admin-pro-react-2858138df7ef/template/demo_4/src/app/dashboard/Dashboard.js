import React, { Component } from 'react';
import { Line, Bar, Doughnut} from 'react-chartjs-2';
import { ProgressBar, Dropdown } from 'react-bootstrap';
import Rating from 'react-rating';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
const { SearchBar } = Search;

var products = [
  {
    id: "1",
    ProductName: "Tobasco Sauce",
    customer: "Ketti",
    Amount: "183.00",
    QTY: 8,
    PurchasedOn: "16-Jun-2018",
    TrackNo: 416024,
    Status: "Hold"
},
{
    id: "2",
    ProductName: "Glove - Cutting",
    customer: "Corette",
    Amount: "56.00",
    QTY: 8,
    PurchasedOn: "19-Apr-2018",
    TrackNo: 926898,
    Status: "Paid"
},
{
    id: "3",
    ProductName: "Pork - Bones",
    customer: "Riki",
    Amount: "176.00",
    QTY: 7,
    PurchasedOn: "16-May-2018",
    TrackNo: 452046,
    Status: "New"
},
{
    id: "4",
    ProductName: "Spice - Pepper Portions",
    customer: "Zorana",
    Amount: "28.00",
    QTY: 9,
    PurchasedOn: "08-Oct-2017",
    TrackNo: 412253,
    Status: "Paid"
},
{
    id: "5",
    ProductName: "Coffee - Almond Amaretto",
    customer: "Noby",
    Amount: "66.00",
    QTY: 2,
    PurchasedOn: "18-Dec-2017",
    TrackNo: 941226,
    Status: "New"
},
{
    id: "6",
    ProductName: "Muffin Mix - Chocolate Chip",
    customer: "Serge",
    Amount: "69.00",
    QTY: 2,
    PurchasedOn: "10-Jun-2018",
    TrackNo: 959659,
    Status: "Paid"
},
{
    id: "7",
    ProductName: "Cheese - Shred Cheddar",
    customer: "Yvette",
    Amount: "80.00",
    QTY: 1,
    PurchasedOn: "17-Feb-2018",
    TrackNo: 654130,
    Status: "Paid"
},
{
    id: "8",
    ProductName: "Papayas",
    customer: "Ernesto",
    Amount: "125.00",
    QTY: 3,
    PurchasedOn: "04-May-2018",
    TrackNo: 840824,
    Status: "Paid"
},
{
    id: "9",
    ProductName: "Ice Cream Bar - Oreo Cone",
    customer: "Emmaline",
    Amount: "101.00",
    QTY: 1,
    PurchasedOn: "30-Dec-2017",
    TrackNo: 719506,
    Status: "Hold"
},
{
    id: "10",
    ProductName: "Beer - Moosehead",
    customer: "Nikoletta",
    Amount: "150.00",
    QTY: 4,
    PurchasedOn: "12-Nov-2017",
    TrackNo: 352961,
    Status: "New"
},
{
    id: "11",
    ProductName: "Pastry",
    customer: "Hyacinthe",
    Amount: "172.00",
    QTY: 9,
    PurchasedOn: "04-Aug-2018",
    TrackNo: 510486,
    Status: "Paid"
},
{
    id: "12",
    ProductName: "Beef - Diced",
    customer: "Sybila",
    Amount: "11.00",
    QTY: 1,
    PurchasedOn: "30-Aug-2017",
    TrackNo: 604776,
    Status: "Hold"
},
{
    id: "13",
    ProductName: "Wine - Alicanca Vinho Verde",
    customer: "Corella",
    Amount: "57.00",
    QTY: 7,
    PurchasedOn: "06-Jun-2018",
    TrackNo: 791237,
    Status: "New"
},
{
    id: "14",
    ProductName: "Bread - Calabrese Baguette",
    customer: "Corinne",
    Amount: "71.00",
    QTY: 3,
    PurchasedOn: "09-Sep-2017",
    TrackNo: 537409,
    Status: "Paid"
},
{
    id: "15",
    ProductName: "Soup - Campbells Beef Stew",
    customer: "Lonny",
    Amount: "70.00",
    QTY: 5,
    PurchasedOn: "13-Feb-2018",
    TrackNo: 656593,
    Status: "Hold"
},
{
    id: "16",
    ProductName: "Milk - Skim",
    customer: "Junina",
    Amount: "165.00",
    QTY: 1,
    PurchasedOn: "01-Mar-2018",
    TrackNo: 757718,
    Status: "Hold"
},
{
    id: "17",
    ProductName: "Island Oasis - Banana Daiquiri",
    customer: "Valry",
    Amount: "82.00",
    QTY: 4,
    PurchasedOn: "09-Feb-2018",
    TrackNo: 350995,
    Status: "Review"
},
{
    id: "18",
    ProductName: "Beef Dry Aged Tenderloin",
    customer: "Rodolfo",
    Amount: "125.00",
    QTY: 8,
    PurchasedOn: "24-Jul-2018",
    TrackNo: 818067,
    Status: "Review"
},
{
    id: "19",
    ProductName: "Scrubbie - Scotchbrite",
    customer: "Tamera",
    Amount: "11.00",
    QTY: 6,
    PurchasedOn: "30-Jul-2018",
    TrackNo: 403768,
    Status: "New"
},
{
    id: "20",
    ProductName: "Phyllo Dough",
    customer: "Holly-anne",
    Amount: "10.00",
    QTY: 6,
    PurchasedOn: "14-Dec-2017",
    TrackNo: 911014,
    Status: "Review"
},
{
    id: "21",
    ProductName: "Bread - Olive",
    customer: "Orin",
    Amount: "108.00",
    QTY: 5,
    PurchasedOn: "09-Oct-2017",
    TrackNo: 762536,
    Status: "New"
},
{
    id: "22",
    ProductName: "Grapefruit - Pink",
    customer: "Aguie",
    Amount: "53.00",
    QTY: 2,
    PurchasedOn: "02-Sep-2017",
    TrackNo: 379570,
    Status: "Paid"
},
{
    id: "23",
    ProductName: "Higashimaru Usukuchi",
    customer: "Roanne",
    Amount: "105.00",
    QTY: 4,
    PurchasedOn: "20-Oct-2017",
    TrackNo: 551470,
    Status: "Hold"
},
{
    id: "24",
    ProductName: "Pie Filling - Apple",
    customer: "Roch",
    Amount: "180.00",
    QTY: 6,
    PurchasedOn: "01-Oct-2017",
    TrackNo: 372636,
    Status: "New"
},
{
    id: "25",
    ProductName: "Beef - Prime Rib Aaa",
    customer: "Cloe",
    Amount: "22.00",
    QTY: 1,
    PurchasedOn: "04-Jun-2018",
    TrackNo: 430212,
    Status: "Review"
},
{
    id: "26",
    ProductName: "Glass - Wine, Plastic, Clear 5 Oz",
    customer: "Lyn",
    Amount: "155.00",
    QTY: 1,
    PurchasedOn: "23-Jun-2018",
    TrackNo: 444536,
    Status: "Hold"
},
{
    id: "27",
    ProductName: "Lobster - Tail, 3 - 4 Oz",
    customer: "Rey",
    Amount: "142.00",
    QTY: 9,
    PurchasedOn: "13-Sep-2017",
    TrackNo: 816834,
    Status: "Review"
},
{
    id: "28",
    ProductName: "Aspic - Amber",
    customer: "Blake",
    Amount: "132.00",
    QTY: 1,
    PurchasedOn: "21-Feb-2018",
    TrackNo: 523600,
    Status: "Hold"
},
{
    id: "29",
    ProductName: "Mortadella",
    customer: "Daune",
    Amount: "25.00",
    QTY: 3,
    PurchasedOn: "18-Apr-2018",
    TrackNo: 852063,
    Status: "Paid"
},
{
    id: "30",
    ProductName: "Kellogs All Bran Bars",
    customer: "Trixi",
    Amount: "150.00",
    QTY: 1,
    PurchasedOn: "20-Jan-2018",
    TrackNo: 396324,
    Status: "Review"
},
{
    id: "31",
    ProductName: "Sardines",
    customer: "Aime",
    Amount: "132.00",
    QTY: 4,
    PurchasedOn: "05-Jul-2018",
    TrackNo: 728652,
    Status: "Review"
},
{
    id: "32",
    ProductName: "Cabbage - Nappa",
    customer: "Care",
    Amount: "111.00",
    QTY: 1,
    PurchasedOn: "30-Oct-2017",
    TrackNo: 947042,
    Status: "Paid"
},
{
    id: "33",
    ProductName: "Coffee Cup 12oz 5342cd",
    customer: "Stephannie",
    Amount: "179.00",
    QTY: 5,
    PurchasedOn: "31-Jul-2018",
    TrackNo: 623883,
    Status: "Hold"
},
{
    id: "34",
    ProductName: "Chocolate Bar - Reese Pieces",
    customer: "Bertine",
    Amount: "23.00",
    QTY: 10,
    PurchasedOn: "16-Jun-2018",
    TrackNo: 839423,
    Status: "Paid"
},
{
    id: "35",
    ProductName: "Pork - Belly Fresh",
    customer: "Nathalie",
    Amount: "94.00",
    QTY: 10,
    PurchasedOn: "07-Apr-2018",
    TrackNo: 803363,
    Status: "Hold"
},
{
    id: "36",
    ProductName: "Wine - White, Pinot Grigio",
    customer: "Marie-ann",
    Amount: "76.00",
    QTY: 3,
    PurchasedOn: "16-Oct-2017",
    TrackNo: 603331,
    Status: "Review"
},
{
    id: "37",
    ProductName: "Celery",
    customer: "Cyndy",
    Amount: "38.00",
    QTY: 10,
    PurchasedOn: "20-Oct-2017",
    TrackNo: 776976,
    Status: "Hold"
},
{
    id: "38",
    ProductName: "Tea - Herbal I Love Lemon",
    customer: "Zonnya",
    Amount: "51.00",
    QTY: 7,
    PurchasedOn: "01-Jan-2018",
    TrackNo: 440721,
    Status: "New"
},
{
    id: "39",
    ProductName: "Fond - Chocolate",
    customer: "Gabriel",
    Amount: "67.00",
    QTY: 5,
    PurchasedOn: "02-Apr-2018",
    TrackNo: 633535,
    Status: "Paid"
},
{
    id: "40",
    ProductName: "Beans - Fava, Canned",
    customer: "Dorisa",
    Amount: "42.00",
    QTY: 4,
    PurchasedOn: "05-Oct-2017",
    TrackNo: 680439,
    Status: "Hold"
},
{
    id: "41",
    ProductName: "Beef - Top Butt",
    customer: "Emerson",
    Amount: "124.00",
    QTY: 3,
    PurchasedOn: "26-May-2018",
    TrackNo: 928429,
    Status: "Review"
},
{
    id: "42",
    ProductName: "Tray - 16in Rnd Blk",
    customer: "Stacy",
    Amount: "114.00",
    QTY: 9,
    PurchasedOn: "15-Mar-2018",
    TrackNo: 810823,
    Status: "New"
},
{
    id: "43",
    ProductName: "Tea - Honey Green Tea",
    customer: "Kissee",
    Amount: "84.00",
    QTY: 7,
    PurchasedOn: "04-Apr-2018",
    TrackNo: 471677,
    Status: "Hold"
},
{
    id: "44",
    ProductName: "Bread - Bagels, Plain",
    customer: "Tann",
    Amount: "69.00",
    QTY: 3,
    PurchasedOn: "18-Feb-2018",
    TrackNo: 663009,
    Status: "New"
},
{
    id: "45",
    ProductName: "Steel Wool S.o.s",
    customer: "Nelson",
    Amount: "120.00",
    QTY: 1,
    PurchasedOn: "11-Mar-2018",
    TrackNo: 375081,
    Status: "Review"
},
{
    id: "46",
    ProductName: "Sugar - Sweet N Low, Individual",
    customer: "Hagen",
    Amount: "67.00",
    QTY: 3,
    PurchasedOn: "09-Jun-2018",
    TrackNo: 853510,
    Status: "Review"
},
{
    id: "47",
    ProductName: "Cabbage - Red",
    customer: "Gizela",
    Amount: "143.00",
    QTY: 2,
    PurchasedOn: "24-Jul-2018",
    TrackNo: 940598,
    Status: "New"
},
{
    id: "48",
    ProductName: "Peas - Frozen",
    customer: "Fidela",
    Amount: "180.00",
    QTY: 1,
    PurchasedOn: "17-Feb-2018",
    TrackNo: 381911,
    Status: "Paid"
},
{
    id: "49",
    ProductName: "Beef - Eye Of Round",
    customer: "Waiter",
    Amount: "156.00",
    QTY: 4,
    PurchasedOn: "21-Jun-2018",
    TrackNo: 769430,
    Status: "New"
},
{
    id: "50",
    ProductName: "Macaroons - Homestyle Two Bit",
    customer: "Gris",
    Amount: "26.00",
    QTY: 7,
    PurchasedOn: "15-Jul-2018",
    TrackNo: 549154,
    Status: "New"
}
];

const columns = [
  {
    dataField: 'id',
    text: '#',
    sort: true
  },{
    dataField: 'ProductName',
    text: "Product Name",
    sort: true
  }, {
    dataField: 'customer',
    text: 'Customer',
    sort: true
  }, {
    dataField: 'Amount',
    text: 'Amount',
    sort: true
  }, {
    dataField: 'QTY',
    text: 'QTY',
    sort: true
  }, {
    dataField: 'PurchasedOn',
    text: 'Purchased On',
    sort: true
  }, {
    dataField: 'TrackNo',
    text: 'Track No',
    sort: true
  }, {
    dataField: 'Status',
    text: 'Status',
    sort: true,
    formatter: (cellContent, row) => {
      if (cellContent === 'Hold') {
        return (
          <label className="badge badge-info">Hold</label>
        );
      } else if (cellContent === 'Paid' ) {
        return (
          <label className="badge badge-danger">Paid</label>
        );
      } else if (cellContent === 'New') {
        return (
          <label className="badge badge-success">New</label>
        );
      } else if (cellContent === 'Review') {
        return (
          <label className="badge badge-warning">Review</label>
        );
      }
    }
  }
];

const defaultSorted = [{
  dataField: 'id',
  order: 'desc'
}];
export class Dashboard extends Component {
  totalInvoiceData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
      label: 'Profit',
      data: [1, 3, 7, 4, 1, 9, 6],
      backgroundColor: [
        'rgba(182, 109, 255, .1 )',
      ],
      borderColor: [
        '#b66dff',
      ],
      borderWidth: 2,
      fill: true
    }]
  };

  lineOptions = {
    responsive : true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: false
        } 
      }],
      xAxes: [{
          display: false
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
  },
  stepsize: 10
  };
  totalExpenceData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
      label: 'Profit',
      data: [1, 4, 8, 3, 4, 6, 1],
      backgroundColor: [
        'rgba(255, 178, 66, .1)',
      ],
      borderColor: [
        '#ffc542',
      ],
      borderWidth: 2,
      fill: true
    }]
  };
  totalunpaidInvoiceData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
      label: 'Profit',
      data: [8, 12, 5, 4, 1, 12, 4],
      backgroundColor: [
        'rgba(0, 98, 255, .1)',
      ],
      borderColor: [
        '#0062ff',
      ],
      borderWidth: 2,
      fill: true
    }]
  };
  totalAmountDueData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [{
      label: 'Profit',
      data: [6, 9, 3, 4, 2, 5, 6],
      backgroundColor: [
        'rgba(252, 90, 90, .1)',
      ],
      borderColor: [
        '#fc5a5a',
      ],
      borderWidth: 2,
      fill: true
    }]
  };

  realTimeData= {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
            label: 'Profit',
            data: [330, 380, 230, 400, 309, 530, 340, 400, 490, 380, 300, 510],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
            borderWidth: 0
        },
        {
            label: 'Target',
            data: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
            backgroundColor: 'rgba(238, 242, 245, 1)',
            borderColor: 'rgba(238, 242, 245, 1)',
            borderWidth: 0
        }
    ]
};
realTimeOptions= {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    },
    scales: {
        yAxes: [{
            display: false,
            gridLines: {
                display: false
            }
        }],
        xAxes: [{
            stacked: true,
            ticks: {
                beginAtZero: true,
                fontColor: "#354168"
            },
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
            },
            barPercentage: 0.4
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
doughnutPieData = {
  datasets: [{
    data: [20, 80, 85, 45],
    backgroundColor: [
        "#19d895",
        "#2196f3",
        "#ff6258",
        "#dde4eb"
    ],
    borderColor: [
      "#19d895",
      "#2196f3",
      "#ff6258",
      "#dde4eb"
    ],
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Pink',
    'Blue',
    'Yellow',
  ]
};

doughnutPieOptions = {
  cutoutPercentage: 75,
  animationEasing: "easeOutBounce",
  animateRotate: true,
  animateScale: false,
  responsive: true,
  maintainAspectRatio: true,
  showScale: true,
  legend: {
      display: false
  },
  layout: {
      padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
      }
  }
};
usersDoughnutChartData = {
  datasets: [{
    data: [80, 34, 100],
    backgroundColor: [
      '#44ce42',
      '#b66dff',
      '#d8d8d8',
    ],
    borderColor: [
      '#44ce42',
      '#b66dff',
      '#d8d8d8',
    ],
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Pink',
    'Blue',
    'Yellow',
  ]
};

usersDoughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      animateRotate: true
    },
  legend: {
    display: false
  },
};

amountDueBarData = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
  datasets: [{
    label: 'Profit',
    data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
    backgroundColor: [
      '#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3',
    ],
    borderColor: [
      '#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3','#198ae3',
    ],
    borderWidth: 2,
    fill: true
  }]
};

amountDueBarOptions = {
  responsive : true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      display: false,
      ticks: {
        beginAtZero: false
      } 
    }],
    xAxes: [{
        display: false
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
},
stepsize: 10
};
supportCaseData= {
  labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017"],
  datasets: [{
      label: 'Total Profit',
      data: [150, 200, 150, 220, 350, 275, 365],
      borderColor: "#2196f3",
      backgroundColor: '#E9F7FB',
      borderWidth: 2,
      fill: true
  }, {
      label: 'Total Sales',
      data: [300, 400, 300, 440, 700, 550, 730],
      borderColor: "#19d895",
      backgroundColor: '#E9F7FB',
      borderWidth: 2,
      fill: true
  }]
};
supportCaseOptions= {
  scales: {
      yAxes: [{
          display: false
      }],
      xAxes: [{
          display: false
      }]
  },
  legend: {
      display: false
  },
  elements: {
      point: {
          radius: 3
      },
      line: {
          tension: 0
      }
  },
  stepsize: 100 
}
  constructor(props) {
    super(props);
    this.state = {
    }
  } 
  componentDidMount(){
  }
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-12 grid-margin d-none d-lg-block">
            <div className="intro-banner">
              <div className="banner-image">
                <img src={require("../../assets/images/dashboard/banner_img.png")} alt="banner" />
              </div>
              <div className="content-area">
                <h3 className="mb-0">Welcome back, Adam!</h3>
                <p className="mb-0">Need anything more to know more? Feel free to contact us at any point.</p>
              </div>
              <a href="!#" onClick={evt =>evt.preventDefault()} className="btn btn-light">Subscribe Now</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body pb-0">
                <p className="text-dark">Total Invoice</p>
                <div className="d-flex align-items-center">
                  <h4 className="font-weight-semibold text-dark">$65,650</h4>
                  <h6 className="text-success font-weight-semibold ml-2">+876</h6>
                </div>
                <small className="text-muted">This has been a great</small>
              </div>
              <div className="graph-wrapper">
                <Line data={this.totalInvoiceData} options={this.lineOptions} />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body pb-0">
                <p className="text-dark">Total expenses</p>
                <div className="d-flex align-items-center">
                  <h4 className="font-weight-semibold text-dark">$65,650</h4>
                  <h6 className="text-danger font-weight-semibold ml-2">-43</h6>
                </div>
                <small className="text-muted">view statement</small>
              </div>
              <div className="graph-wrapper">
                <Line data={this.totalExpenceData} options={this.lineOptions} />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body pb-0">
                <p className="text-dark">Unpaid Invoices</p>
                <div className="d-flex align-items-center">
                  <h4 className="font-weight-semibold text-dark">$2,542</h4>
                  <h6 className="text-success font-weight-semibold ml-2">+876</h6>
                </div>
                <small className="text-muted">view history</small>
              </div>
              <div className="graph-wrapper">
                <Line data={this.totalunpaidInvoiceData} options={this.lineOptions} />
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body pb-0">
                <p className="text-dark">Amount Due</p>
                <div className="d-flex align-items-center">
                  <h4 className="font-weight-semibold text-dark">$3450</h4>
                  <h6 className="text-success font-weight-semibold ml-2">+23</h6>
                </div>
                <small className="text-muted">65% lower growth</small>
              </div>
              <div className="graph-wrapper">
                <Line data={this.totalAmountDueData} options={this.lineOptions} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8 d-flex flex-column">
                    <div className="d-flex align-items-center">
                      <h4 className="card-title mb-0">Realtime Statistics</h4>
                      <div className="badge badge-pill badge-sm badge-danger my-auto ml-3 d-none d-lg-block">New</div>
                    </div>
                    <h2 className="mb-4">24.456%</h2>
                    <Bar data={this.realTimeData} options={this.realTimeOptions} />
                  </div>
                  <div className="col-md-4">
                    <small className="text-muted ml-auto d-none d-lg-block mb-3">Updated at 08.32pm, Aug 2018</small>
                    <div className="d-flex justify-content-between py-2 border-bottom">
                      <div className="wrapper">
                        <p className="mb-0">Marketing</p>
                        <h5 className="font-weight-medium">34%</h5>
                      </div>
                      <div className="wrapper d-flex flex-column align-items-center">
                        <small className="text-muted mb-2">2018</small>
                        <div className="badge badge-pill badge-danger">Mar</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between py-2 border-bottom">
                      <div className="wrapper">
                        <p className="mb-0">Develpment</p>
                        <h5 className="font-weight-medium">49%</h5>
                      </div>
                      <div className="wrapper d-flex flex-column align-items-center">
                        <small className="text-muted mb-2">2018</small>
                        <div className="badge badge-pill badge-warning">DVR</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                      <div className="wrapper">
                        <p className="mb-0">Human Resources</p>
                        <h5 className="font-weight-medium">75%</h5>
                      </div>
                      <div className="wrapper d-flex flex-column align-items-center">
                        <small className="text-muted mb-2">2017</small>
                        <div className="badge badge-pill badge-success">H&R</div>
                      </div>
                    </div>
                    <div className="wrapper mt-4 d-none d-lg-block">
                      <p className="text-muted mb-0">Note: These statistics are aggregates over all of your application's users. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Human Resources</h4>
                <div className="aligner-wrapper">
                <Doughnut data={this.doughnutPieData} options={this.doughnutPieOptions} />
                  <div className="wrapper d-flex flex-column justify-content-center absolute absolute-center">
                    <h4 className="text-center mb-0">8.234</h4>
                    <small className="d-block text-center text-muted mb-0">Units</small>
                  </div>
                </div>
                <div className="wrapper mt-4">
                  <div className="d-flex align-items-center py-3 border-bottom">
                    <span className="dot-indicator bg-danger"></span>
                    <p className="mb-0 ml-3">Human Resources</p>
                    <p className="ml-auto mb-0 text-muted">86%</p>
                  </div>
                  <div className="d-flex align-items-center py-3 border-bottom">
                    <span className="dot-indicator bg-success"></span>
                    <p className="mb-0 ml-3">Manager</p>
                    <p className="ml-auto mb-0 text-muted">28%</p>
                  </div>
                  <div className="d-flex align-items-center pt-3">
                    <span className="dot-indicator bg-primary"></span>
                    <p className="mb-0 ml-3">Other</p>
                    <p className="ml-auto mb-0 text-muted">20%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-5 d-flex align-items-center">
                    <Doughnut data={this.usersDoughnutChartData} options={this.usersDoughnutChartOptions} />
                  </div>
                  <div className="col-md-7">
                    <h4 className="card-title font-weight-medium mb-0 d-none d-md-block">Active Users</h4>
                    <div className="wrapper mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 font-weight-medium">67,550</p>
                          <small className="text-muted ml-2">Email account</small>
                        </div>
                        <p className="mb-0 font-weight-medium">80%</p>
                      </div>
                        <ProgressBar variant="success" now={80}/>
                    </div>
                    <div className="wrapper mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 font-weight-medium">21,435</p>
                          <small className="text-muted ml-2">Requests</small>
                        </div>
                        <p className="mb-0 font-weight-medium">34%</p>
                      </div>
                        <ProgressBar variant="primary" now={34}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-7">
                    <h4 className="card-title font-weight-medium mb-3">Amount Due</h4>
                    <h1 className="font-weight-medium mb-0 text-dark">$5998</h1>
                    <p className="text-muted">Milestone Completed</p>
                    <p className="mb-0">Payment for next week</p>
                  </div>
                  <div className="col-md-5 d-flex align-items-end mt-4 mt-md-0">
                    <Bar data={this.amountDueBarData} options={this.amountDueBarOptions} />    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-5 grid-margin stretch-card top-selling-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4">Total selling product</h4>
                <Line data={this.supportCaseData} options={this.supportCaseOptions} />
                <div className="column-wrapper">
                  <div className="column">
                    <div className="d-flex flex-column flex-md-row">
                      <i className="mdi mdi-shield-half-full text-primary"></i>
                      <div className="d-flex flex-column ml-md-2">
                        <p className="text-muted mb-0 font-weight-medium">Total Profit</p>
                        <h4 className="font-weight-bold">$748</h4>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="d-flex flex-column flex-md-row">
                      <i className="mdi mdi-cart-outline text-success"></i>
                      <div className="d-flex flex-column ml-md-2">
                        <p className="text-muted mb-0 font-weight-medium">Total sales</p>
                        <h4 className="font-weight-bold">$1,253</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive item-wrapper">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Samsung Tab</td>
                        <td>4323</td>
                        <td>
                          <div className="badge badge-success">+12.14%</div>
                        </td>
                      </tr>
                      <tr>
                        <td>Galaxy S9</td>
                        <td>11,456</td>
                        <td>
                          <div className="badge badge-danger">-04.03%</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 grid-margin stretch-card top-selling-card">
            <div className="card review-card">
              <div className="card-header header-sm d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Reviews</h4>
                <div className="wrapper d-flex align-items-center">
                  <p className="mb-0">23 New Reviews</p>
                  <Dropdown alignRight>
                    <Dropdown.Toggle variant="btn btn-transparent p-0" id="dropdownMenuOutlineButton1">
                    <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Header>Today</Dropdown.Header>
                      <Dropdown.Item>Yesterday</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body no-gutter">
                <div className="list-item pt-0">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face10.jpg")} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-dark">Air Pod</h6>
                      <small className="time ml-3 d-none d-sm-block">08.34 AM</small>
                      <div className="ml-auto">
                        <Rating 
                          initialRating="1"
                          emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-dark">Christine :</p>
                      <p className="review-text d-block">The brand apple is original !</p>
                    </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face13.jpg")} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-dark">Macbook</h6>
                      <small className="time ml-3 d-none d-sm-block">12.56 PM</small>
                      <div className="ml-auto">
                        <Rating 
                          initialRating="2"
                          emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-dark">Arthur Cole :</p>
                      <p className="review-text d-block">The brand apple is original also the iphone x.</p>
                    </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-dark">Apple watch</h6>
                      <small className="time ml-3 d-none d-sm-block">09.24 AM</small>
                      <div className="ml-auto">
                        <Rating 
                          initialRating="3"
                          emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-dark">James Tate :</p>
                      <p className="review-text d-block">The brand apple is original.</p>
                    </div>
                  </div>
                </div>
                <div className="list-item">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face11.jpg")} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-dark">Homepod</h6>
                      <small className="time ml-3 d-none d-sm-block">5.12 AM</small>
                      <div className="ml-auto">
                        <Rating 
                          initialRating="4"
                          emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-dark">Clyde Parker :</p>
                      <p className="review-text d-block">The brand apple is original also the iphone !!</p>
                    </div>
                  </div>
                </div>
                <div className="list-item pb-0">
                  <div className="preview-image">
                    <img className="img-sm rounded-circle" src={require("../../assets/images/faces/face12.jpg")} alt="profile icon" />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <h6 className="product-name text-dark">Imac</h6>
                      <small className="time ml-3 d-none d-sm-block">10.00 AM</small>
                      <div className="ml-auto">
                        <Rating 
                          initialRating="5"
                          emptySymbol={<i className="mdi mdi-star text-muted mr-1" style={{fontSize:'20px', marginRight: '2px', display:'block'}}></i>}
                          fullSymbol={<i className="mdi mdi-star text-primary mr-1" style={{fontSize:'20px', marginRight: '2px'}}></i>}
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="user-name text-dark">James Tate :</p>
                      <p className="review-text d-block">The brand apple is original.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-header header-sm">
                <div className="d-flex align-items-center">
                  <h5 className="card-title">Recent Orders</h5>
                  <div className="wrapper ml-auto action-bar">
                    <Dropdown alignRight>
                    <Dropdown.Toggle className="btn btn-secondary dropdown-toggle btn-sm">
                      Today
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="preview-list navbar-dropdown">
                      <Dropdown.Item className="dropdown-item d-flex align-items-center preview-item">
                        Today
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item className="dropdown-item d-flex align-items-center preview-item">
                        Last 7 Days
                      </Dropdown.Item>
                      <div className="dropdown-divider"></div>
                      <Dropdown.Item className="dropdown-item d-flex align-items-center preview-item">
                        This week
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <ToolkitProvider
                      keyField="id"
                      bootstrap4
                      data={ products }
                      columns={ columns }
                      search
                    >
                      {
                        props => (
                          <div>
                            <div className="d-flex align-items-center">
                              <p className="mb-2 mr-2">Search in table:</p>
                              <SearchBar { ...props.searchProps } />
                            </div>
                            <BootstrapTable striped
                              defaultSorted={ defaultSorted }
                              pagination={ paginationFactory() }
                              { ...props.baseProps }
                              wrapperClasses="table-responsive"
                            />
                          </div>
                        )
                      }
                    </ToolkitProvider>
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