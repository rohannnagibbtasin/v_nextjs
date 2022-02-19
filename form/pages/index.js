import Head from "next/head";
import { Button, Grid } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          height: "100vh",
        }}
      >
        <Button variant="outlined">Logout</Button>
      </Grid>
    </div>
  );
}
