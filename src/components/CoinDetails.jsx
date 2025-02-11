import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Button,
  Paper,
} from "@mui/material";

const CoinDetails = () => {
  const { id } = useParams();
  const [coinDetails, setCoinDetails] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCoinDetails(data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };

    fetchCoinDetails();
  }, [id]);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescription = () => {
    const truncatedDescription =
      coinDetails.description?.en.slice(0, 200) || "";
    return showFullDescription
      ? coinDetails.description?.en || ""
      : truncatedDescription +
          (coinDetails.description?.en.length > 200 ? "..." : "");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      {coinDetails && (
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                height="200"
                image={coinDetails.image.large}
                alt={coinDetails.name}
                style={{ objectFit: "contain", margin: "auto" }}
              />
              <Typography variant="h4" style={{ margin: "10px 0" }}>
                {coinDetails.name}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {coinDetails.symbol.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                style={{
                  marginBottom: "10px",
                  whiteSpace: showFullDescription ? "normal" : "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {getDescription()}
                {coinDetails.description?.en.length > 200 && (
                  <Button
                    variant="text"
                    color="primary"
                    onClick={handleToggleDescription}
                    style={{ display: "block", marginTop: "10px" }}
                  >
                    {showFullDescription ? "Read Less" : "Read More"}
                  </Button>
                )}
              </Typography>
              <Typography variant="body1">
                Current Price: ${coinDetails.market_data.current_price.usd}
              </Typography>
              <Typography variant="body1">
                Market Cap: ${coinDetails.market_data.market_cap.usd}
              </Typography>
              <Typography variant="body1">
                24h Volume: ${coinDetails.market_data.total_volume.usd}
              </Typography>
              {/* Add more details as needed */}
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
};

export default CoinDetails;
