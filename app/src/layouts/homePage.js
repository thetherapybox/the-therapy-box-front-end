import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import ButtonJoin from "../components/homePage/buttonJoin";
import ButtonBorrow from "../components/homePage/buttonBorrow";
import { useSelector } from "react-redux";

export default function HomePage() {
  const homepage = useSelector((state) => state.homepage);
  const test = homepage.Homepage_sections && homepage.Homepage_sections;
  console.log(test);

  /* 
    Design:
    https://www.figma.com/proto/IQSLstsDcsIhljMamKyJnJ/TherapyBox?node-id=970%3A853&scaling=min-zoom
    
    Components Needed:
    1. Grey container component stylized appropriately containing the following components
    2. Borrow a box button - please use import {Button} from "@material-ui/core", styled appropriately
    3. Join button - Disabled currently, but will lead to the registration flow eventually, also a Button

    2 and 3 don't need to be seperate component files, but can just be a modified Button component from 
    Material UI.

    Please put all the components in the "components/homePage/" folder.
    */
  const styles = {
    sectionContainer: {
      background: "#F2F2F2",
      padding: "30px",
      minHeight: "500px",
    },
    sectionTitle: {
      fontFamily: "Comfortaa",
      fontWeight: "normal",
      fontSize: "48px",
      margin: "25px 20px 25px 20px",
      color: "#434343",
    },
    sectionSubtitle: {
      fontFamily: "Helvetica Neue",
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: "21px",
      lineHeight: "25px",
      width: "574px",
      height: "60px",
      alignItems: "center",
      textAlign: "center",
      marginRight: "auto",
      marginLeft: "auto",
      marginTop: "25px",
      marginBottom: "30px",
      color: "#43;4343",
    },
  };
  return (
    <>
      {homepage.Homepage_sections &&
        homepage.Homepage_sections.map((item) => {
          return (
            <div style={styles.sectionContainer} key={item.id}>
              <Container>
                <Typography style={styles.sectionTitle}>
                  {item.title}
                </Typography>
                <Typography style={styles.sectionSubtitle}>
                  {item.column[0].body}
                </Typography>
                <Grid
                  container
                  spacing={10}
                  alignItems={"center"}
                  justify={"center"}
                ></Grid>
              </Container>
            </div>
          );
        })}
    </>
  );
}
