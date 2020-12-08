import React, { useContext } from "react";
import { TurnoContext } from "../../Context/TurnoContext";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Modal from "@material-ui/core/Modal";
import useStyles from "../../Css/modalTurnoCss";
import {
  Button,
  Fade,
  Backdrop,
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Checkbox,
  Avatar,
} from "@material-ui/core";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" color="primary" />;

export default function ModalTurno() {
  const classes = useStyles();
  const {
    // user: { nombre, rolCargoElaboracion },
    userList,
    openModal,
    handleOpenModal,
    handleCloseModal,
    checkedVenta,
    handleToggleVenta,
    devolverVenta,
  } = useContext(TurnoContext);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Agregar usuarios
      </Button>
      <Modal
        disableAutoFocus
        disableEnforceFocus
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            {/* Text */}
            <Typography
              className={classes.typoField}
              variant="h4"
              color="initial"
            >
              Añadir Usuarios
            </Typography>
            <List dense className={classes.rootList}>
              {userList.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value._id}`;
                return (
                  <ListItem key={value._id} button>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${value + 1}`}
                        src={`/static/images/avatar/${value + 1}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={`${value.nombre}`} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        edge="end"
                        onChange={handleToggleVenta(value)}
                        checked={checkedVenta.indexOf(value) !== -1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
            <Button
              className={classes.buttonAdd}
              variant="contained"
              color="primary"
              onClick={devolverVenta}
            >
              Añadir usuarios
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}