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
  },
  paper: {
    position: "absolute",
    zIndex: 10
  }
})

class LocationSearchInput extends React.Component {

  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = address => {
    this.props.onChange(address)
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        this.handleChange(results[0].formatted_address)
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    const { placeholder, address, classes, onChange } = this.props

    return (
      <PlacesAutocomplete
        value={address}
        onChange={onChange}
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
            <Paper className={classes.paper}>
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