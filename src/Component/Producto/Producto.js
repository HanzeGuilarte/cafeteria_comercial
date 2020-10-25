import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Button,
  Grid,
  Box,
  Avatar,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 345,
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  avatar: {
    background: "#ea5455",
    textTransform: "capitalize",
  },
}));

export default function Producto({ nombre, precio, peso, tipo }) {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Grid className={classes.grid} item xs={12} md={4}>
      <Box my={2}>
        <Card className={classes.root} variant="outlined">
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {tipo.charAt(0)}
              </Avatar>
            }
            /* action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            } */
            title={nombre}
          />
          {/* <CardMedia className={classes.media} image="" title="" /> */}

          <CardContent></CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
