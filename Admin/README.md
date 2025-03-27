# formative-one-Turn1Data

![Logo](/frontend/src/images/logo.png)


# About Turn1 Data

Turn1 Data is a js react web application built using the JolpicaF1 API which is a database that stores a variety of data related to the motorsport Formula1. This application leverages the api to provide you detailed statistics about a drivers wins, pole positions, experience, WDC wins and more. All these stats are visually represented to you by graphs to provide you with the best insight possible.

## Built With

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

![Chart.js](https://img.shields.io/badge/-Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

## Table of contents
* [Deployment]()
* [Detailed guide on what the project does]()
* [FAQ](#faq)
* [Acknowledgements]()
* [API Reference]()
* [License]()


## Deployment

To try this webapp follow these steps

Clone The Repo

```bash
  https://github.com/Kai-Barker/formative-one-Turn1Data.git
```
In your terminal run the following
```bash
  npm install
```
```bash
  npm install react-bootstrap bootstrap
```
```bash
  npm install react-router-dom
```
```bash
  npm install chart.js react-chartjs-2 react
```
```bash
  npm install axios
```
```bash
  cd frontend
```
And Finally

```bash
  npm start
```


## The Different Pages
#### The Dashboard page 
Allows you to view information about an individual driver. The information shown includes a text overview, a graph to show the driver's accomplishments, a graph to show their experience, and a pie chart for their winrate
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

#### The Comparison page 
Allows you to view information about two drivers and compare their achivements and experience against eachother. Shown through a text overview, a radar graph, a bar graph, and two pie charts.
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

#### The Timeline page 
Allows you to view information about an individual driver and a line chart depicting their race results over any season they raced in
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Features

- View statistics related to any formula 1 driver since the very beginning of the sport
- View a drivers achievements and experience
- Compare your favourite drivers against eachother. Including their wins, pole positions, experience and even their grand prix winrates
- View a drivers performance over a season

## Demo

Here are some videos showing how the application works.

### Dashboard Page


### Comparison Page


### Timeline Page


## FAQ

#### Why are the pole positions innacurate for some drivers?

Unfortunately, the API only contains qualifying data from the 1994 season onwards. As such any qualifying sessions prior to the 1994 season are unavailable.

#### How can i select different drivers?

The search bar present at the top of each screen allows you to search for a driver and select your preferred driver from the dropdown.


## Acknowledgements

 - [Jolpica F1 API](https://github.com/jolpica/jolpica-f1)
 - [Readme.so](https://readme.so/editor)


## API Reference
Jolpica. (n.d.). Jolpica F1 API. https://api.jolpi.ca/ergast/?format=api

Found on Github at: https://github.com/jolpica/jolpica-f1

#### Get all seasons

```http
  GET /ergast/f1/seasons/
```

#### Get item

```http
  GET /ergast/f1/circuits/
```

#### Get Race List
```http
  GET /ergast/f1/${season}/races/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `season`      | `int` | **Required**. Season the race sessions took place in |

#### Get Individual Driver

```http
  GET ergast/f1/drivers/${driverID}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of driver to fetch |

#### Get the wins of a driver
```http
  GET /ergast/f1/drivers/${driverId}/results/1
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of driver to fetch |

#### Get the pole positions of a driver

```http
  GET /ergast/f1/drivers/${driverId}/qualifying/1
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of driver to fetch |

#### Get the races the driver raced in

```http
  GET /ergast/f1/drivers/${driverId}/races/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of driver to fetch |

#### Get the seasons the driver raced in

```http
  GET /ergast/f1/drivers/${driverId}/seasons/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of driver to fetch |


## License

[MIT](https://choosealicense.com/licenses/mit/)

