import React from './node_modules/react';
import axios from './node_modules/axios';

import { makeStyles } from './node_modules/@material-ui/core/styles';
import Card from './node_modules/@material-ui/core/Card';
import CardActionArea from './node_modules/@material-ui/core/CardActionArea';
import CardActions from './node_modules/@material-ui/core/CardActions';
import CardContent from './node_modules/@material-ui/core/CardContent';
import CardMedia from './node_modules/@material-ui/core/CardMedia';
import Typography from './node_modules/@material-ui/core/Typography';
import Grid from './node_modules/@material-ui/core/Grid';

import '../../css/card.css';

class PersonList extends React.Component {
    state = {
      persons: []
    }

    componentDidMount() {
      axios.get('http://localhost:3200/findeat/api/user/usersList')
        .then((res) => {
          const persons = res.data;
          this.setState({ persons });
        });
    }

    render() {
      return (
        <div className="center">
          <Card className="card">
            <CardContent>
              <Typography color="primary" variant="h6" component="h2" gutterBottom>
              Usuarios
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body2" component="p">
                    <p>Nombre</p>
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2">
                    {this.state.persons.map(person => <p>{person.name}</p>)}
                    {/* {this.state.persons.map(person => <p>{person.username}</p>)} */}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
        // <ul>
        //   {this.state.persons.map(person => <li>{person.name}</li>)}
        // </ul>
      );
    }
}

export default PersonList;
