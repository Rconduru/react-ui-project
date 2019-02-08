import React from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    borderRadius: "20px"
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
    border: "solid #d0D0D0 1px",
    borderRadius: "20px"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class MaterialComp extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          <DeleteIcon className={classes.leftIcon} />
          Teste Papai
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(MaterialComp);
