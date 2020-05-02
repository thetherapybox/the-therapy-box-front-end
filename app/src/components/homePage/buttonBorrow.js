import {Button, Grid} from "@material-ui/core";
import React from "react";

export default function ButtonBorrow() {
const styles = {
        bigButton: {
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#FFFFFF",
            border: "#C80ACA solid 1px",
            textTransform: "none",
            background: "#E123E3",
            width: "195px",
            height: "60px"
        }
    }
    return (
        <Grid item>
            <Button
                style={styles.bigButton}
                variant={'contained'}
                onClick={ev => window.location.href = `#`}
            >Borrow A Box</Button>
        </Grid>
    );
}

