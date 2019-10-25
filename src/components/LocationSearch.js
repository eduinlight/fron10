import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';
import { TextField, CircularProgress, Paper, List, ListItem, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/styles"
import FlightIcon from "@material-ui/icons/Flight"

const styles = theme => ({
  placeItem: {
    cursor: "pointer"
  },
  fullWidth: {
    width: "100%"
  }
})

class LocationSearchInput extends React.Component {

  static propTypes = {
    placeholder: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        console.log(results[0])
        this.setState({
          address: results[0].formatted_address
        })
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    const { placeholder, classes } = this.props

    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Grid container spacing={1} alignItems="flex-end" wrap="nowrap">
              <Grid item>
                <FlightIcon />
              </Grid>
              <Grid item className={classes.fullWidth}>
                <TextField
                  fullWidth
                  {...getInputProps({
                    placeholder: placeholder,
                    className: 'location-search-input',
                  })}
                />
              </Grid>
            </Grid>
            <Paper>
              {loading && <CircularProgress size={25} />}
              {!loading && suggestions.length > 0 &&
                <List>
                  {suggestions.map(suggestion => {
                    return (
                      <ListItem
                        className={classes.placeItem}
                        selected={suggestion.active}
                        {...getSuggestionItemProps(suggestion)}
                      >
                        <span>{suggestion.description}</span>
                      </ListItem>
                    );
                  })}
                </List>}

            </Paper>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default withStyles(styles)(LocationSearchInput)