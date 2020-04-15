import React from 'react';
import Button from '@material-ui/core/Button'
import Locations from './Locations';
import { makeStyles } from '@material-ui/core/styles';
import xandrLogo from './xandr-logo.svg';
import './App.css';
import SummaryCard from './SummaryCard';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const advertiserUrl = 'https://wiki.xandr.com/display/api/Buy-Side+Services';
const publisherUrl = 'https://wiki.xandr.com/display/api/Sell-Side+Services';
const adServerUrl = 'https://wiki.xandr.com/display/api/API+Getting+Started';

function App() {
	const classes = useStyles();
	const [entity, setEntity] = React.useState('');
	const [country, setCountry] = React.useState('');

	let infoLink = '';

	if(entity === 'Advertiser') {
		infoLink = advertiserUrl;
	} else if (entity === 'Publisher') {
		infoLink = publisherUrl;
	} else if (entity === 'Ad Server') {
		infoLink = adServerUrl;
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={xandrLogo} className="App-logo" alt="logo" />
			</header>
			<div className="App-body" alt="buttonGroup">
				<Locations selectedCountry={country} setCountry={setCountry} />
				<div className={classes.root}>
					<div>What kind of set up are you looking to start?</div>
					<Button
						variant="contained"
						color="primary"
						onClick={() => setEntity('Advertiser')}
					>
            Advertiser
					</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={() => setEntity('Publisher')}
					>
            Publisher
					</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={() => setEntity('Ad Server')}
					>
            Ad Server
					</Button>
				</div>
				<SummaryCard entity={entity} infoLink={infoLink} location={country} />
			</div>
		</div>
	);
}

export default App;
