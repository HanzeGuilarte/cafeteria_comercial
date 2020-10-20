import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    width: "100%",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function ButtonWait() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const history = useHistory();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      // @ts-ignore
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setTimeout(function () {
          history.push("/home");
        }, 1000);
      }, 2000);
    }
  };

  return (
    <div>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
          fullWidth
        >
          Accept terms
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
}
