import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Box,
  Avatar,
  IconButton,
} from "@material-ui/core/";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import { ProductoContext } from "../../Context/ProductContext";

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
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function Producto({
  nombre,
  peso,
  tipoProducto,
  img,
  unidad,
  descripcion,
  _id,
}) {
  const classes = useStyles();
  const { eliminarProducto } = React.useContext(ProductoContext);

  /* const bull = <span className={classes.bullet}>•</span>; */
  return (
    <Grid className={classes.grid} item xs={12} md={4}>
      <Box my={2}>
        <Card className={classes.root} variant="outlined">
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {tipoProducto.charAt(0)}
              </Avatar>
            }
            title={nombre}
          />

          <CardContent>
            <Typography color="textPrimary">
              {`Contenido Neto: ${peso} ${unidad}`}
            </Typography>

            <Typography color="textPrimary">{descripcion}</Typography>
          </CardContent>
          <CardActions>
            <IconButton
              onClick={() => {
                eliminarProducto(_id);
              }}
              aria-label="add to favorites"
            >
              <DeleteForeverRoundedIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
