# Interactive Geospatial Dashboard

An interactive web dashboard for exploring geographic patterns in U.S. gun violence incidents.

<img width="820" height="424" alt="Interactive-Geospatial-Dashboard-demo-smaller" src="https://github.com/user-attachments/assets/a5f46a88-617c-4b9b-aa90-c89c6f0945cf" />

---

## ⏬ Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Data](#data)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)

---

## Overview

An interactive geospatial visualization built with **JavaScript, Mapbox, and deck.gl** to explore the geographic distribution and density of gun violence incidents across the United States.

The dashboard allows users to filter incidents by date and switch between multiple geographic visualizations.

---

## Features

| Feature | Description |
|---|---|
|  Interactive Map | Explore incidents across the United States |
|  Date Range | Filter incidents by date |
|  Incidents | View individual incident locations |
|  Density | Identify areas with higher incident concentration |
|  3D Density | Explore geographic density in 3D |
|  Summary Metrics | View total incidents, killed, and injured |

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

The data was retrieved from Kaggle and here is the [link](https://www.kaggle.com/datasets/jameslko/gun-violence-data/data?select=gun-violence-data_01-2013_03-2018.csv).

---

## Demo

### 🎥 Video Demo

[![Watch the 54-second demo](photo/cover_gv.png)](https://www.youtube.com/watch?v=E6m55ILnQLg)

**▶️ Click the map above to watch the interactive dashboard demo**

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
├── photo/
│   └── cover_gv.png
└── README.md

```
---

## How It Works

The dashboard follows a simple data-to-visualization workflow:

```text
gunData.json
     ↓
Load & Parse Data
     ↓
Date Range Filter
     ↓
Update Dashboard Metrics
     ↓
Update Visualization Layer
     ↓
Scatterplot / Density / 3D Density
```
---

### 1. Load the Data

**Concept:**  
The incident data is loaded from a JSON file and stored in JavaScript arrays.

<details>
<summary>View JavaScript Code</summary>
<img width="700" height="249" alt="Screenshot 2026-08-21 at 5 08 50 AM" src="https://github.com/user-attachments/assets/f1eb0e09-deb8-4ab1-937b-3d4e508b9153" />

</details>

---

### 2. Filter By Date

**Concept:**  
When a user selects a date range, the incident data is filtered before the dashboard is updated.

<details>
<summary>View JavaScript Code</summary>
<img width="700" height="250" alt="Screenshot 2026-08-21 at 5 10 08 AM" src="https://github.com/user-attachments/assets/32f61ffe-0cfb-4a7a-a48f-4e04fb41e6c9" />

</details>

---

### 3. Load the Data

**Concept:**  
The dashboard dynamically switches between three deck.gl layers based on the selected visualization.

<details>
<summary>View JavaScript Code</summary>
<img width="700" height="340" alt="Screenshot 2026-08-21 at 5 11 13 AM" src="https://github.com/user-attachments/assets/08bc040f-302a-41cf-9d28-d1a84f893503" />


</details>

---

### 4. Calculate Dashboard Metrics

**Concept:**  
The filtered data is also used to dynamically calculate total incidents, deaths, and injuries.

<details>
<summary>View JavaScript Code</summary>
<img width="644" height="144" alt="Screenshot 2026-08-21 at 5 12 47 AM" src="https://github.com/user-attachments/assets/43e8c864-8ce3-4e25-aa6c-7a3b23d306f2" />

</details>

---

## Author

**Heesoo Kim**  
- Data Analytics | Business Intelligence | Software Development

