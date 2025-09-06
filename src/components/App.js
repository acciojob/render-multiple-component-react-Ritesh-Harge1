import React from "react";

function App() {
  // Array of projects (you can add more)
  const projects = [
    {
      name: "AI Chatbot",
      description: "An intelligent chatbot that helps users with their queries in real time."
    },
    {
      name: "Food Delivery App",
      description: "A MERN stack-based app that allows users to order food online seamlessly."
    },
    {
      name: "Fitness Tracker",
      description: "A web app to track workouts, meals, and progress using graphs and analytics."
    }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
