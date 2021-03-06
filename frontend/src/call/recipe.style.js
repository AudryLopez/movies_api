import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#f79845",
		minWidth: 275,
		minHeight: 120,
		maxHeight: 120,
		flexGrow: 1,
		[theme.breakpoints.down("sm")]: {
			minWidth: 125,
			minHeight: 80,
			maxHeight: 80,
		},
	},
	cardHeader: {
		color: "#4caf50",
	},
	paper: {
		minHeight: 140,
		width: 100,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 16,
		"@media (max-width:900)": {
			fontSize: 12,
		},
	},
	subTitle: {
		fontSize: 14,
		"@media (max-width:900)": {
			fontSize: 10,
		},
	},
	pos: {
		marginBottom: 12,
	},
}));

export default useStyles;