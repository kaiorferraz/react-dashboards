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
  bounceRateChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
      data: [ 27, 29, 29, 25, 25, 29, 31, 27, 28, 25, 23, 18, 14, 12, 11, 13, 9, 12, 10, 12, 13, 12, 13, 10, 5, 7, 8, 5, 5, 6, 4, 3, 5, 6, 8, 10, 7, 9, 10, 9, 5, 4, 10, 2, 5, 10, 10, 8, 8, 8, 5, 1, 0, 4, 9, 4, 1, 5, 1, 5, 5, 7, 10, 5, 3, 2, 6, 3, 11, 7, 9, 13, 13, 9, 6, 6, 6, 2, 2, 6],
      borderColor: '#6f42c1',
      borderWidth: 2,
      fill: false,
      backgroundColor: [
        'rgba(255, 255, 255, .1)',
      ],
    }]
  };
  pageViewChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
      data: [ 26, 25, 28, 24, 24, 22, 22, 18, 17, 21, 22, 20, 16, 12, 13, 17, 12, 8, 5, 8, 5, 8, 8, 9, 13, 11, 6, 6, 5, 4, 3, 5, 3, 0, 4, 0, 9, 8, 12, 16, 21, 17, 20, 16, 15, 19, 21, 17, 16, 19, 15, 13, 12, 8, 12, 11, 15, 13, 9, 4, 4, 8, 5, 4, 4, 0, 9, 6, 2, 6, 6, 9, 14, 13, 10, 7, 3, 7, 3, 0],
      borderColor: '#3564f6',
      borderWidth: 2,
      fill: false,
      backgroundColor: [
        'rgba(255, 255, 255, .1)',
      ],
    }]
  };
  newSessionChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
      data: [ 26, 25, 28, 24, 24, 22, 22, 18, 17, 21, 22, 20, 16, 12, 13, 17, 12, 8, 5, 8, 5, 8, 8, 9, 13, 11, 6, 6, 5, 4, 3, 5, 3, 0, 4, 0, 9, 8, 12, 16, 21, 17, 20, 16, 15, 19, 21, 17, 16, 19, 15, 13, 12, 8, 12, 11, 15, 13, 9, 4, 4, 8, 5, 4, 4, 0, 9, 6, 2, 6, 6, 9, 14, 13, 10, 7, 3, 7, 3, 0],
      borderColor: '#ec3e75',
      borderWidth: 2,
      fill: false,
      backgroundColor: [
        'rgba(255, 255, 255, .1)',
      ],
    }]
  };
  timeOnSiteChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
      data: [ 26, 25, 28, 24, 24, 22, 22, 18, 17, 21, 22, 20, 16, 12, 13, 17, 12, 8, 5, 8, 5, 8, 8, 9, 13, 11, 6, 6, 5, 4, 3, 5, 3, 0, 4, 0, 9, 8, 12, 16, 21, 17, 20, 16, 15, 19, 21, 17, 16, 19, 15, 13, 12, 8, 12, 11, 15, 13, 9, 4, 4, 8, 5, 4, 4, 0, 9, 6, 2, 6, 6, 9, 14, 13, 10, 7, 3, 7, 3, 0],
      borderColor: '#58cdcd',
      borderWidth: 2,
      fill: false,
      backgroundColor: [
        'rgba(255, 255, 255, .1)',
      ],
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

  audienceMetricsChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
      label: 'Current week',
      data: [ 26, 25, 28, 24, 24, 22, 22, 18, 17, 21, 22, 20, 16, 12, 13, 17, 12, 8, 5, 8, 5, 8, 8, 9, 13, 11, 6, 6, 5, 4, 3, 5, 3, 0, 4, 0, 9, 8, 12, 16, 21, 17, 20, 16, 15, 19, 21, 17, 16, 19, 15, 13, 12, 8, 12, 11, 15, 13, 9, 4, 4, 8, 5, 4, 4, 0, 9, 6, 2, 6, 6, 9, 14, 13, 10, 7, 3, 7, 3, 0],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#3564f6'
      ]
    },
      {
        label: 'Current week',
        data: [ 27, 29, 29, 25, 25, 29, 31, 27, 28, 25, 23, 18, 14, 12, 11, 13, 9, 12, 10, 12, 13, 12, 13, 10, 5, 7, 8, 5, 5, 6, 4, 3, 5, 6, 8, 10, 7, 9, 10, 9, 5, 4, 0, 2, 5, 10, 10, 8, 8, 8, 5, 1, 0, 4, 9, 4, 1, 5, 1, 5, 5, 7, 10, 5, 3, 2, 6, 3, 1, 7, 9, 13, 13, 9, 6, 6, 6, 2, 2, 6],
        borderWidth: 2,
        fill: false,
        borderColor: [
          '#ec3e75'
        ]
    }, {
      label: 'Current week',
      data: [ 27, 29, 29, 25, 25, 29, 31, 27, 28, 25, 23, 18, 14, 12, 11, 13, 9, 12, 10, 12, 13, 12, 13, 10, 5, 7, 8, 5, 5, 6, 4, 3, 5, 6, 8, 10, 7, 9, 10, 9, 5, 4, 10, 2, 5, 10, 10, 8, 8, 8, 5, 1, 0, 4, 9, 4, 1, 5, 1, 5, 5, 7, 10, 5, 3, 2, 6, 3, 11, 7, 9, 13, 13, 9, 6, 6, 6, 2, 2, 6],
      borderWidth: 2,
      fill: false,
      borderColor: [
        '#58cdcd'
      ]
    }]
  };

  trafficSourceChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
      {
        label: 'Current week',
        data: [ 27, 29, 29, 25, 25, 29, 31, 27, 28, 25, 23, 18, 14, 12, 11, 13, 9, 12, 10, 12, 13, 12, 13, 10, 5, 7, 8, 5, 5, 6, 4, 3, 5, 6, 8, 10, 7, 9, 10, 9, 5, 4, 0, 2, 5, 10, 10, 8, 8, 8, 5, 1, 0, 4, 9, 4, 1, 5, 1, 5, 5, 7, 10, 5, 3, 2, 6, 3, 1, 7, 9, 13, 13, 9, 6, 6, 6, 2, 2, 6],
        borderWidth: 2,
        fill: true,
        backgroundColor: [
          '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6'
        ],
        borderColor: [
          '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6', '#3564f6'
        ]
      },
        {
          label: 'Current week',
          data: [ 26, 25, 28, 24, 24, 22, 22, 18, 17, 21, 22, 20, 16, 12, 13, 17, 12, 8, 5, 8, 5, 8, 8, 9, 13, 11, 6, 6, 5, 4, 3, 5, 3, 0, 4, 0, 9, 8, 12, 16, 21, 17, 20, 16, 15, 19, 21, 17, 16, 19, 15, 13, 12, 8, 12, 11, 15, 13, 9, 4, 4, 8, 5, 4, 4, 0, 9, 6, 2, 6, 6, 9, 14, 13, 10, 7, 3, 7, 3, 0],
          borderWidth: 2,
          fill: true,
          backgroundColor: [
            '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75'
          ],
          borderColor: [
            '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75', '#ec3e75'
          ]
       },
       {
        label: 'Current week',
        data: [ 27, 29, 29, 25, 25, 29, 31, 27, 28, 25, 23, 18, 14, 12, 11, 13, 9, 12, 10, 12, 13, 12, 13, 10, 5, 7, 8, 5, 5, 6, 4, 3, 5, 6, 8, 10, 7, 9, 10, 9, 5, 4, 10, 2, 5, 10, 10, 8, 8, 8, 5, 1, 0, 4, 9, 4, 1, 5, 1, 5, 5, 7, 10, 5, 3, 2, 6, 3, 11, 7, 9, 13, 13, 9, 6, 6, 6, 2, 2, 6],
        borderWidth: 2,
        fill: true,
        backgroundColor: [
          '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd'
        ],
          borderColor: [
            '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd', '#58cdcd'
          ]
      }
    ]
  };
  trafficSourceChartOptions = {
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

        stacked:true,
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

  render() {
    return (
      <div>
        <div className="az-content-body p-0 az-body-dashboard-nine az-content-dashboard-nine">
          <div className="az-content-header">
            <div className="d-block d-md-flex justify-content-between mb-3">
              <div>
                <h2 className="az-content-title mg-b-5 mg-b-lg-8">Hi, welcome back!</h2>
                <p className="mg-b-0">Your campaign monitoring dashboard template.</p>
              </div>
              <div className="az-dashboard-date">
                <div className="date">
                  <div>20</div>
                  <div>
                    <span>OCT 2018</span>
                    <span>Sunday</span>
                  </div>
                </div>
                <i className="icon ion-md-arrow-forward"></i>
                <div className="date">
                  <div>27</div>
                  <div>
                    <span>OCT 2018</span>
                    <span>Monday</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-wrapper">
              <nav className="nav az-nav-line">
                <a href="#/" className="nav-link active">Overview</a>
                <a href="#/" className="nav-link">Earnings</a>
                <a href="#/" className="nav-link">Reviews</a>
                <a href="#/" className="nav-link">Notifications</a>
                <a href="#/" className="nav-link ml-auto">Web Settings</a>
                <a href="#/" className="nav-link">Report Settings</a>
              </nav>
            </div>
          </div>
          
          <div className="px-3">
            <div className="row row-sm">
              <div className="col-sm-6 col-xl-3">
                <div className="card card-dashboard-twentytwo">
                  <div className="media">
                    <div className="media-icon bg-purple"><i className="typcn typcn-chart-line-outline"></i></div>
                    <div className="media-body">
                      <h6>32.53% <small className="down">-0.5%</small></h6>
                      <span>Bounce Rate</span>
                    </div>
                  </div>
                  <div className="chart-wrapper">
                    <Line data={this.bounceRateChartData} options={this.lineChartOptions} height={100} />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 mg-t-20 mg-sm-t-0">
                <div className="card card-dashboard-twentytwo">
                  <div className="media">
                    <div className="media-icon bg-primary"><i className="typcn typcn-chart-line-outline"></i></div>
                    <div className="media-body">
                      <h6>7,682 <small className="up">+0.1%</small></h6>
                      <span>Page Views</span>
                    </div>
                  </div>
                  <div className="chart-wrapper">
                    <Line data={this.pageViewChartData} options={this.lineChartOptions} height={100} />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0">
                <div className="card card-dashboard-twentytwo">
                  <div className="media">
                    <div className="media-icon bg-pink"><i className="typcn typcn-chart-line-outline"></i></div>
                    <div className="media-body">
                      <h6>68.8 <small className="down">-2.1%</small></h6>
                      <span>New Sessions</span>
                    </div>
                  </div>
                  <div className="chart-wrapper">
                    <Line data={this.newSessionChartData} options={this.lineChartOptions} height={100} />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0">
                <div className="card card-dashboard-twentytwo">
                  <div className="media">
                    <div className="media-icon bg-teal"><i className="typcn typcn-chart-line-outline"></i></div>
                    <div className="media-body">
                      <h6>2m:35s <small className="up">+0.8%</small></h6>
                      <span>Avg. Time on Site</span>
                    </div>
                  </div>
                  <div className="chart-wrapper">
                    <Line data={this.timeOnSiteChartData} options={this.lineChartOptions} height={100} />
                  </div>
                </div>
              </div>
              <div className="col-xl-9 mg-t-20">
                <div className="card card-dashboard-twentyone">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <div className="card-body">
                        <h6 className="az-content-label">Users By Country</h6>
                        <p>The top locations where users of your product are located for this month</p>

                        <div className="list-group">
                          <div className="list-group-item">
                            <span>United States</span>
                            <span>5,508</span>
                            <div className="progress">
                              <div className="progress-bar wd-85p bg-purple" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <span>United Kingdom</span>
                            <span>5,122</span>
                            <div className="progress">
                              <div className="progress-bar wd-75p bg-indigo" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <span>Russia</span>
                            <span>4,750</span>
                            <div className="progress">
                              <div className="progress-bar wd-65p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <span>China</span>
                            <span>4,300</span>
                            <div className="progress">
                              <div className="progress-bar wd-55p bg-info" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div className="list-group-item">
                            <span>Australia</span>
                            <span>4,018</span>
                            <div className="progress">
                              <div className="progress-bar wd-45p bg-teal" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="map-hieght">
                        <VectorMap
                          map={"world_mill"}
                        backgroundColor="transparent" //change it to ocean blue: #0077be
                        zoomOnScroll={false}
                        containerClassName="map"
                        containerStyle={{
                          width: '100%',
                          height: '100%'
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
              </div>
              <div className="col-md-4 col-xl-3 mg-t-20">
                <div className="card card-body card-dashboard-twentythree ht-xl-100p">
                  <h6 className="card-title tx-14 mg-b-10">Mobile Sessions</h6>
                  <p className="mg-b-15">The percentage of users who uses mobile devices compare to other devices.</p>

                  <div className="d-flex flex-column align-items-center mg-b-25">
                    <div>
                      <div className="az-donut-chart chart1">
                        <div className="slice one"></div>
                        <div className="slice two"></div>
                        <div className="chart-center">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row row-sm">
                    <div className="col-6">
                      <label><span className="bg-indigo"></span> Mobile</label>
                      <h5>6,098</h5>
                    </div>
                    <div className="col-6">
                      <label><span className="bg-gray-500"></span> Desktop</label>
                      <h5>3,902</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-xl-6 mg-t-20">
                <div className="card card-dashboard-audience-metrics ht-md-100p">
                  <div className="card-header">
                    <h6 className="card-title">Audience Metrics</h6>
                    <p className="mg-b-15">Measures your user's sessions and page views metrics to your website for this month.</p>
                  </div>
                  <div className="card-body">
                    <div>
                      <h4>120,500</h4>
                      <label><span className="bg-primary"></span>Users</label>
                    </div>
                    <div>
                      <h4>360,108</h4>
                      <label><span className="bg-teal"></span>Page Views</label>
                    </div>
                    <div>
                      <h4>150,712</h4>
                      <label><span className="bg-pink"></span>Sessions</label>
                    </div>
                  </div>
                  <div className="chart-wrapper">
                    <Line data={this.audienceMetricsChartData} options={this.lineChartOptions} />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 mg-t-20">
                <div className="card card-dashboard-audience-metrics">
                  <div className="card-header">
                    <h6 className="card-title">Traffic Sources</h6>
                    <p className="mg-b-15">Measures your user's sources that generate traffic metrics to your website for this month.</p>
                  </div>
                  <div className="card-body">
                    <div>
                      <h4>86,376</h4>
                      <label><span className="bg-purple"></span>Organic</label>
                    </div>
                    <div>
                      <h4>25,001</h4>
                      <label><span className="bg-primary"></span>Direct</label>
                    </div>
                    <div>
                      <h4>12,909</h4>
                      <label><span className="bg-teal"></span>Referral</label>
                    </div>
                  </div>
                  <div className="chart-wrapper">
                  <Bar data={this.trafficSourceChartData} options={this.trafficSourceChartOptions} />
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
