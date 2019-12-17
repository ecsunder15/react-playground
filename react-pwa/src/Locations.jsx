import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {
	CountryRegionData
} from "react-country-region-selector";

const useStyles = makeStyles(theme => ({
	button: {
		display: 'block',
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const countryOptions = _.map(CountryRegionData, country => {
	return _.first(country);
});

export default function Locations(props) {
	const {
		selectedCountry,
		setCountry
	} = props;
	const classes = useStyles();
	//const [country, setCountry] = React.useState('');
	const [open, setOpen] = React.useState(false);

	const handleChange = event => {
		setCountry(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return(
		<div>
			<h2>Where you at?</h2>
			<FormControl className={classes.formControl}>
				<InputLabel id="controlled-open-select-label">Country</InputLabel>
				<Select
					labelId="controlled-open-select-label"
					id="controlled-open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={selectedCountry}
					onChange={handleChange}
				>
					<MenuItem value="">
						<em>Select</em>
					</MenuItem>
					{_.map(countryOptions, (country, idx) => {
						return (
							<MenuItem key={idx} value={country}>{country}</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</div>
	)
}