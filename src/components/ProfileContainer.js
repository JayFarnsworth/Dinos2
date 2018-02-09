import React from 'react';
import Profile from './Profile';


export default function ProfileContainer({ dinosaurs, expandDetails, expand, expandedSkills, selectedProfile }){
  dinosaurs = dinosaurs.filter(dino => {
    if (!selectedProfile) return true // all visible
    if (selectedProfile === dino.name) return true
  })

  return <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">
            {dinosaurs.map(dino=>{
              return <Profile key={dino.name} dinosaur={dino} expandDetails={expandDetails} 
                expand={expand} 
                show={expandedSkills[dino.name]} />
            })}
          </ul>
      </section>

}
