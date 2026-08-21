# Interactive Geospatial Dashboard

An interactive web dashboard for exploring geographic patterns in U.S. gun violence incidents.

<img width="560" height="384" alt="Interactive-Geospatial-Dashboard-demo-smaller" src="https://github.com/user-attachments/assets/a5f46a88-617c-4b9b-aa90-c89c6f0945cf" />

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Data](#data)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [Key Takeaways](#key-takeaways)

---

## Overview

An interactive geospatial visualization built with **JavaScript, Mapbox, and deck.gl** to explore the geographic distribution and density of gun violence incidents across the United States.

The dashboard allows users to filter incidents by date and switch between multiple geographic visualizations.

---

## Features

| Feature | Description |
|---|---|
| 🗺️ Interactive Map | Explore incidents across the United States |
| 📅 Date Range | Filter incidents by date |
| 📍 Incidents | View individual incident locations |
| 🔥 Density | Identify areas with higher incident concentration |
| 📊 3D Density | Explore geographic density in 3D |
| 📈 Summary Metrics | View total incidents, killed, and injured |

---

## Technologies

![JavaScript](https://img.shields.io/badge/JavaScript-Interactive%20Visualization-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)

<br>

![deck.gl](https://img.shields.io/badge/deck.gl-Geospatial%20Visualization-FF6B35?style=for-the-badge)
![Mapbox](https://img.shields.io/badge/Mapbox-Interactive%20Mapping-000000?style=for-the-badge&logo=mapbox&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-Data-000000?style=for-the-badge&logo=json&logoColor=white)

<br>

![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-Development-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

---

## Data

The dashboard uses incident-level U.S. gun violence data.

Each record represents an individual incident and includes information such as:

- Incident ID
- Date
- Latitude / Longitude
- Number killed
- Number injured
- Location
- Incident categories

The data was retreived from Kaggle and here is the [link](https://www.kaggle.com/datasets/jameslko/gun-violence-data/data?select=gun-violence-data_01-2013_03-2018.csv).

---

## Demo

### 🎥 Video Demo

[▶️ Watch the Interactive Dashboard Demo](YOUR_VIDEO_LINK_HERE)

The demo shows the dashboard's main features, including date filtering, incident mapping, density visualization, and 3D density visualization.

---

## Project Structure

```text
Interactive-Geospatial-Dashboard/
│
├── index.html
├── gun.js
├── gunData.json
├── styles.css
├── config.js
└── README.md
