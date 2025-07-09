import React from "react";
import "./App.css";

const agents = [
  {
    name: "Amanda Davis",
    photo: "https://via.placeholder.com/100",
    maritalStatus: "Single",
    location: "Cebu City, Lahug",
    commute: "Jeepney + Walking (45 min)",
    timeInCompany: "6 months",
    experience: "2 years in Telco Sales",
    languages: "English, Tagalog",
    schedule: "9 AM – 6 PM",
    kpis: {
      sales: 8,
      meetings: 35,
      lowQuality: 3,
      sameDay: 6,
      shotguns: 12,
      attendance: "97%",
      callTime: "6 min",
      qa: "82%",
    },
    managerNotes: "Improving steadily. Next focus: objection handling."
  }
];

function App() {
  return (
    <div className="container">
      {agents.map((agent, index) => (
        <div key={index} className="card">
          <img src={agent.photo} alt={agent.name} />
          <h2>{agent.name}</h2>
          <p><strong>Status:</strong> {agent.maritalStatus}</p>
          <p><strong>Location:</strong> {agent.location}</p>
          <p><strong>Commute:</strong> {agent.commute}</p>
          <p><strong>KPIs:</strong></p>
          <ul>
            {Object.entries(agent.kpis).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
          <p><em>{agent.managerNotes}</em></p>
        </div>
      ))}
    </div>
  );
}

export default App;