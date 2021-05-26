import React, { useEffect, useState } from "react";
import {
	Grid,
	Card,
	Typography,
	CardHeader,
	CardContent,
} from "@material-ui/core";
import Style from "./recipe.style";

function Movies() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const classes = Style();

	const getData = async (url)=>{
		const data = await fetch(url);
		const response = await data.json();
		setItems(response);
		setIsLoaded(true);
	}

	useEffect(() => {
		getData("http://127.0.0.1:8000/api/peliculas");
	}, []);

 if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<Grid item container justify="space-around">
				<Grid item container xs={12} sm={8}>
					<Grid container spacing={2}>
						{items.map((item) => (
							<Grid item xs={4}>
								<Card variant="outlined" className={classes.root}>
									<CardHeader subheader={item.nombre} />
									<CardContent>
										<Typography
											className={classes.subTitle}
											variant="body2"
											component="p">
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
