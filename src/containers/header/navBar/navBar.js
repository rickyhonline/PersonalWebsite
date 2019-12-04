import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper'
import {Link, Route} from 'react-router-dom'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div >
      <div>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {/* <Link to="/"><Tab label="About Me"  {...a11yProps(0)}/></Link>
          <Link to="/personality"><Tab label="My Personality" {...a11yProps(1)}/></Link>
          <Link to="/resume"><Tab label="Resume"  {...a11yProps(2)}/></Link> */}
          <Tab label="About Me"  component={Link} to="/" {...a11yProps(0)} />
          <Tab label="Personality" component={Link} to="/personality"  {...a11yProps(0)} />
          <Tab label="Resume" component={Link} to="/resume" {...a11yProps(0)} />
        </Tabs>
      </div>
    </div>
  );
}