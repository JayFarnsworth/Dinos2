import React from 'react';


export default function Profile({ dinosaur, expandDetails, expand, show }){
  return <div className="profile-card" onClick={() => expand(dinosaur.name)}>
      <header className="profile-header">
        <img src={dinosaur.image} />
        <h2>{dinosaur.name}</h2>
      </header>
      <section className={"skills-container " + (show ? "" : "hidden")}>
        <h4>Skills</h4>
        <ul className="skills-list">
          {dinosaur.skills.map(skill=>{
            return <li key={skill}>{skill}</li>
          })}
        </ul>
      </section>
    </div>
}
