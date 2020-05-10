import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import PageLayout from "./layouts/page";
import { FetchActivityBoxes } from "./actions/activityboxes";
import { FetchHomepage } from "./actions/homepage";

import backendURL from "./backend";

const bURL = backendURL.backendURL;

export default function App() {
  async function importGraphQLFromStrapi(url) {
    const fetchRequest = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
                      query {
                          activityboxes {
                              id
                              title
                              price
                              duration_days
                              description
                              photos {
                                  url
                              }
                              tags {
                                name  
                              }
                          },
                          homepage{
                              Homepage_sections {
                                __typename
                                ... on ComponentPageTemplateRow {
                                  title
                                  id
                                  column {
                                    title
                                    body
                                  }
                                }
                              }
                            }
                      }`,
      }),
    });
    const data = await fetchRequest.json();
    console.log(data);
    setLoaded(true);
    return data;
  }

  const dispatch = useDispatch();

  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    const url = `${bURL}/graphql`;
    importGraphQLFromStrapi(url).then((data) => {
      dispatch(FetchActivityBoxes(data.data.activityboxes));
      dispatch(FetchHomepage(data.data.homepage));
    });
  }, [dispatch]);

  return <div className="App">{loaded ? <PageLayout /> : "Loading..."}</div>;
}
