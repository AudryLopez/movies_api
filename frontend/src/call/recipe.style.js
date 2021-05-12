import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
	root: {
		minWidth: 275,
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default useStyles;