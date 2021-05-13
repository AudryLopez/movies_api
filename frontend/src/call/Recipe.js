import React, { useEffect, useState } from "react";
import { Grid, Card, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Style from "./recipe.style";

function Movies() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const classes = Style();

	useEffect(() => {
		fetch("http://127.0.0.1:8000/api/peliculas")
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<Grid item container justify="space-around">
				<Grid item container xs={12} sm={8}>
					<Grid container spacing={2}>
						{items.map((item) => (
							<Grid item xs={4}>
								<Card variant="outlined" className={classes.root}>
									<CardContent>
										<Typography className={classes.title} variant="h5" component="h2">
											{item.nombre}
										</Typography>
										<Typography className={classes.subTitle} variant="body2" component="p">
											{item.calificacion}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default Movies;
