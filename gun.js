let deckgl;

let gunData = [];
let filteredData = [];

let currentLayer = "scatter";


const map = document.getElementById("map-container");
const tooltip = document.getElementById("tooltip");

    $(function() {
      $('input[name="daterange"]').daterangepicker({
        opens: 'left',
        startDate: '01/01/2013',
        endDate: '12/31/2018',
        locale: {
          format: 'MM/DD/YYYY'
        }
      }, function(start, end) {
        console.log("Date selected: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        filterByDate(start, end);
      });


    });

    fetch('./gunData.json')
    .then(res => res.json())
    .then(data => {
      gunData = data;
      filteredData = data;

      createDeck();
      updateDashboard();
      updateLayer();
    })
    .catch(error => {
      console.log('Error:', error)
    });

const filterByDate = (startDate, endDate) => {
        filteredData = gunData.filter(d => {
          const incidentDate = moment(d.date,
            ['M/D/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'], true);

          return incidentDate.isSameOrAfter(startDate, 'day') &&
                 incidentDate.isSameOrBefore(endDate, 'day');
        });

        console.log("Filtered data:", filteredData.length); 
        updateDashboard();
        updateLayer();
}

const showToolTip = (object, x, y) => {
      console.log( object);
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;

      tooltip.innerHTML = `<div>Occurred on: ${object.date}</div>
                           <div>Death: ${object.n_killed} Injuried: ${object.n_injured}</div>
                           <div>Details: ${object.categories}</div>
                           <div></div>`

      tooltip.style.display = 'flex';
    }

const hideToolTip = () => {
  tooltip.style.display = 'none';
}

/*map.addEventListener('click', (e) => {
  const clickedElement = e.target;
  if(!clickedElement.closest('scatter') && clickedElement !== tooltip) {
    hideToolTip();
  }
}) */

const createDeck = () => {
  deckgl = new deck.DeckGL({
      container: 'map-container',
      // Set your Mapbox access token here
      mapboxApiAccessToken: 'REMOVED_MAPBOX_TOKEN',

      mapStyle: 'mapbox://styles/mapbox/dark-v10',

      useDevicePixels: 1,

      initialViewState: {
        latitude: 39.7392,
        longitude: -96.9903,
        zoom: 3.5,
        minZoom: 3,
        maxZoom: 18,
        bearing: 0,
        pitch: 40,
      },
      controller: true,

      /* Possible Layers: ScatterplotLayer, ArcLayer, LineLayer, PolygonLayer, GeoJsonLayer, IconLayer, TextLayer, HexagonLayer
      HeatmapLayer, 3D Layer, TripsLayer, Custom Layer*/ //
      layers: [],
      getTooltip: ({object}) => object && {
        html: `<div>Occurred on: ${object.date}</div>
        <div>Death: ${object.n_killed} Injuried: ${object.n_injured}</div>
        <div>Details: ${object.categories}</div>
        <div></div>`,
        style: {
          'background-color' : 'rgba(0, 0, 0, 0.5)',
          color: 'aliceblue',
          fontSize: '0.8em',
          'max-width': '500px'
        }
      }
    });
    }


    const createScatterplot = () => {
      return new deck.ScatterplotLayer({
      id: 'scatter',
      data: filteredData,
      opacity: 0.6,
      filled: true,
      radiusMinPixels: 2,
      radiusMaxPixels: 4,
      getPosition: d => [d.longitude, d.latitude],
      getFillColor: d => d.n_killed > 0 ? [200, 0, 40, 150] : [255, 140, 0, 100],
      pickable: true
    })
  }

  const createHeatMap = () => {
    return new deck.HeatmapLayer({
      id: 'heat',
      data: filteredData,
      getPosition: d => [d.longitude, d.latitude],
      getWeight: d => d.n_killed + (d.n_injured * 0.5),
      radiusPixels: 60
    })
  }

  const createHexagon = () => {
    return new deck.HexagonLayer({
      id: 'hex',
      data: filteredData,

      gpuAggregation: false,

      getPosition: d => [
        Number(d.longitude), Number(d.latitude)],
      
      // Height = number/severity of incidents in each hexagon  
      getElevationWeight: d =>
      1 +
      Number(d.n_killed || 0) * 5 +
      Number(d.n_injured || 0) * 0.25,

    // Color of each hexagon
    getColorWeight: d =>
      1 +
      Number(d.n_killed || 0) * 5 +
      Number(d.n_injured || 0) * 0.25,


      radius: 800,
      elevationScale: 500,
      extruded: true,
      coverage: 0.85,
      opacity: 0.7,
      pickable: false,
      colorRange: [
          [255, 245, 200],
          [255, 200, 100],
          [255, 140, 50],
          [230, 60, 30],
          [180, 0, 30]
        ]
    });
  }

  const updateDashboard = () => {

  const totalIncidents = filteredData.length;

  const totalKilled = filteredData.reduce((sum, d) => {
    return sum + Number(d.n_killed || 0);
  }, 0);

  const totalInjured = filteredData.reduce((sum, d) => {
    return sum + Number(d.n_injured || 0);
  }, 0);

  console.log("Dashboard:", {
    incidents: totalIncidents,
    killed: totalKilled,
    injured: totalInjured
  });

  document.getElementById("total-incidents").textContent =
    totalIncidents.toLocaleString();

  document.getElementById("total-killed").textContent =
    totalKilled.toLocaleString();

  document.getElementById("total-injured").textContent =
    totalInjured.toLocaleString();
}

  const updateLayer = () => {

      let activeLayer;

      if (currentLayer === "scatter") {
        activeLayer = createScatterplot();
      } else if (currentLayer === "heat") {
        activeLayer = createHeatMap();
        } else if (currentLayer === "hex") {
        activeLayer = createHexagon();
        }

        console.log("Switching layer:", currentLayer, activeLayer);
      
      deckgl.setProps({
        layers: [activeLayer]
      });
    }
    
  
  document.querySelectorAll('input[name="layer"]').forEach((input) => {

    input.addEventListener('change', (event) => {
      currentLayer = event.target.value;

      console.log("Radio selected:", currentLayer);

      updateLayer();
    });
  })

  /*
  onHover: ({object, x, y}) => {
        if(object) {
          showToolTip(object, x, y);
        } else {
          //console.log("out")
          hideToolTip();
        }
          /*info.object && alert(`${info.object.properties.name} (${info.object.properties.abbrev})`);*/


        /*
        const el = document.getElementById('tooltip');
        if(object) {
          const { n_killed, incident_id } = object;
          el.innerHTML = `<h1>${incident_id} Killed: ${n_killed}</h1>`;
          el.style.display = 'block';
          el.style.opacity;
          el.style.left = x + 'px';
          el.style.top = y + 'px';
        } else {
          el.style.opacity = 0.0;
        }*
      }




       getTooltip: ({object}) => object && {
        html: `<h2>${object.date}</h2><div>${object.categories}</div>`,
        style: {
          backgroundColor: '#f00',
          fontSize: '0.8em'
        }
      }
  */
