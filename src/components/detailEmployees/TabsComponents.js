import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
    paper: {
      width:'100%',
      margin: '4% auto',


    }
};


const TabsComponents = () => (
  <Paper style={styles.paper}  zDepth={1}>
            <Tabs inkBarStyle={{backgroundColor:'white'}}>
                  <Tab label="Tareas" style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264"}}>
                      Hola Mundo
                  </Tab>
                  <Tab label="Proyectos" style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264", borderLeft:"1px dotted #6bb8c1", borderRight:"1px dotted #6bb8c1"}}>
                    asda
                  </Tab>
                  <Tab
                      label="Aportes"
                      data-route="/home"

                      style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264", borderLeft:"1px dotted #6bb8c1", borderRight:"1px dotted #6bb8c1"}}
                  >
                    Mhola mun
                  </Tab>
                  <Tab
                      label="Acuerdos"
                      data-route="/home"
                      style={{backgroundColor:"white", borderBottom:"2px solid #6bb8c1", color:"#5f6264"}}
                  >
                  asadasd
                  </Tab>
                </Tabs>
      </Paper>
);

export default TabsComponents;
