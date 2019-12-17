import React from 'react';
import Button from '@material-ui/core/Button'
import Locations from './Locations';
import { makeStyles } from '@material-ui/core/styles';
import logo from './xandr-logo.svg';
import './App.css';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

function App() {
	const classes = useStyles();

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<div className="App-body" alt="buttonGroup">
				<Locations />
				<div className={classes.root}>
					<div>What kind of set up are you looking to start?</div>
					<Button
						variant="contained"
						color="primary"
						href="https://wiki.xandr.com/display/api/Buy-Side+Services"
						target="_blank"
						rel="noopener noreferrer"
					>
						Advertiser
					</Button>
					<Button
						variant="contained"
						color="primary"
						href="https://wiki.xandr.com/display/api/Sell-Side+Services"
						target="_blank"
						rel="noopener noreferrer"
					>
						Publisher
					</Button>
					<Button
						variant="contained"
						color="primary"
						href="https://wiki.xandr.com/display/api/API+Getting+Started"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ad Server
					</Button>
				</div>
			</div>
		</div>
	);
}

export default App;
