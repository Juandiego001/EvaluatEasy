import React, { Component } from 'react';
import styles from './Dashboard.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Chart } from 'react-google-charts';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBBtn, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {
  Button, Navbar, Container, NavDropdown, Offcanvas, Nav, FormControl, Form,
  Card, CardGroup, CardDeck, CardColumns, CardBody, CardHeader, CardFooter,
} from 'react-bootstrap';
import Menu from '../../components/Menu/Menu';


export const data = [
  [
    "Mes",
    "Gestion",
    "Puntualidad",
    "Eficiencia",
    "Calidad",
    "Comunicación",
    "Intervenciones",
  ],
  ["2022/05", 100, 93, 52, 98, 45, 61.65],
  ["2022/06", 13, 12, 59, 68, 88, 82],
  ["2022/07", 57, 67, 87, 80, 39, 62],
  ["2022/08", 39, 10, 61, 96, 21, 69.4],
  ["2022/09", 36, 91, 62, 26, 66, 59.6],
];

export const options = {
  title: "Progresos de habilidades por mes",
  vAxis: { title: "Habilidades" },
  hAxis: { title: "Mes" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
};

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "1",
    "Spring 2014",
    "spring",
    new Date(2014, 2, 22),
    new Date(2014, 5, 20),
    null,
    100,
    null,
  ],
  [
    "2",
    "Summer 2014",
    "summer",
    new Date(2014, 5, 21),
    new Date(2014, 8, 20),
    null,
    100,
    null,
  ],
  [
    "3",
    "Autumn 2014",
    "autumn",
    new Date(2014, 8, 21),
    new Date(2014, 11, 20),
    null,
    100,
    null,
  ],
  [
    "4",
    "Winter 2014",
    "winter",
    new Date(2014, 11, 21),
    new Date(2015, 2, 21),
    null,
    100,
    null,
  ],
  [
    "5",
    "Spring 2015",
    "spring",
    new Date(2015, 2, 22),
    new Date(2015, 5, 20),
    null,
    50,
    null,
  ],
  [
    "6",
    "Summer 2015",
    "summer",
    new Date(2015, 5, 21),
    new Date(2015, 8, 20),
    null,
    0,
    null,
  ],
  [
    "7",
    "Autumn 2015",
    "autumn",
    new Date(2015, 8, 21),
    new Date(2015, 11, 20),
    null,
    0,
    null,
  ],
  [
    "8",
    "Winter 2015",
    "winter",
    new Date(2015, 11, 21),
    new Date(2016, 2, 21),
    null,
    0,
    null,
  ],
  [
    "9",
    "Football Season",
    "sports",
    new Date(2014, 8, 4),
    new Date(2015, 1, 1),
    null,
    100,
    null,
  ],
  [
    "10",
    "Baseball Season",
    "sports",
    new Date(2015, 2, 31),
    new Date(2015, 9, 20),
    null,
    14,
    null,
  ],
  [
    "11",
    "Basketball Season",
    "sports",
    new Date(2014, 9, 28),
    new Date(2015, 5, 20),
    null,
    86,
    null,
  ],
  [
    "12",
    "Hockey Season",
    "sports",
    new Date(2014, 9, 8),
    new Date(2015, 5, 21),
    null,
    89,
    null,
  ],
];
const data2 = [columns, ...rows];
export const options2 = {
  height: 400,
  gantt: {
    trackHeight: 30,
  },
};

export const data3 = [
  ["Pais", "Trabajadores"],
  ["Germany", 400],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["Mexico", 600],
  ["Colombia", 700],
  ["Argentina", 200],
  ["Spain", 700],
];

const Dashboard = () => {

  return (
    <div>
      {/* Componente Menú */}
      <Menu />


      <div className="container">
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          <MDBCol>
            <MDBCard >
              <MDBCardBody>
                <MDBCardTitle><b>Progreso de evaluaciones del mes</b></MDBCardTitle>
                <MDBCardText className='row-cols-1 row-cols-md-12 g-4'>
                  <progress className="progress" value="75" max="100"></progress>
                </MDBCardText>
              </MDBCardBody>
              <Card.Footer className="text-muted"><b>75%</b></Card.Footer>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard >
              <MDBCardBody>
                <MDBCardTitle><b>Implementacion de mejoras</b></MDBCardTitle>
                <MDBCardText className='row-cols-1 row-cols-md-12 g-4'>
                  <progress className="progress" value="25" max="100"></progress>
                </MDBCardText>
              </MDBCardBody>
              <Card.Footer className="text-muted"><b>25%</b></Card.Footer>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard >
              <MDBCardBody>
                <MDBCardTitle><b>Evaluaciones realizadas </b></MDBCardTitle>
                <MDBBtn routes="/Trabajadores" >Ver</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>


      <div className="container">
        <Card className="text-center">
          <Card.Header><b>Progreso de competencias genereales</b></Card.Header>
          <Card.Body>
            <Chart
              chartType="ComboChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </Card.Body>
          <Card.Footer className="text-muted">Hace 1 minuto</Card.Footer>
        </Card>
      </div>


      <div className="container">
        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
          <MDBCol>
            <MDBCard >
              <MDBCardBody>
                <MDBCardTitle>Actividades Del Año</MDBCardTitle>
                <Chart
                  chartType="Gantt"
                  width="100%"
                  height="50%"
                  data={data2}
                  options={options2}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard >
              <MDBCardBody>
                <MDBCardTitle>Empleados Por Localidad</MDBCardTitle>
                <Chart
                  chartEvents={[
                    {
                      eventName: "select",
                      callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                      },
                    },
                  ]}
                  chartType="GeoChart"
                  width="100%"
                  height="400px"
                  data={data3}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>


    </div>
  );
}

export default Dashboard;