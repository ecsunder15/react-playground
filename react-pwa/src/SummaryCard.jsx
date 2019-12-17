import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		maxWidth: 700
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)"
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});

export default function SummaryCard(props) {
	const {
		entity,
		infoLink,
		location
	} = props;
	const classes = useStyles();
	console.log({location});

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
          Your New Xandr Configuration
				</Typography>
				<Typography variant="h5" component="h2">
					{entity}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{location}
				</Typography>
				<Typography variant="body2" component="p">
          This is some information about the option you just chose, and probably
          a link to documentation
					<br />
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					target="_blank"
					rel="noopener noreferrer"
					href={infoLink}
				>
          Learn More
				</Button>
			</CardActions>
		</Card>
	);
}
