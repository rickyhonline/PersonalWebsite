import React from 'react';
import './App.css';
import ProfileCardContainer from './containers/header/profileCard/profileCardContainer';
import ContactCardContainer from './containers/body/cards/contactCard/cardContainer';
import AboutMeCardContainer from './containers/body/cards/aboutMe/aboutMeContainer';
import PersonalityTabContainer from './containers/body/cards/personalityTab/personalityTabContainer';
import AboutMeTabContainer from './containers/body/cards/aboutMe/aboutMeTabContainer';
import { BrowserRouter, Route} from 'react-router-dom';
import Resume from './containers/body/resume/resume'

function App() {
  const classes = {
    container:{
      backgroundColor: '#DCDCDC	',

    },
    topLayerCards: {
      display: 'flex',
      justifyContent: 'space-between',
    }
  }
  return (
    <div style={classes.container} >
     <BrowserRouter>
      <div style={classes.topLayerCards}>
        <ProfileCardContainer />
        <ContactCardContainer />
      </div> 
        <Route path="/" exact component={AboutMeTabContainer}/>
        <Route path="/personality" exact component={PersonalityTabContainer}/>
        <Route path="/resume" exact component={Resume}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
