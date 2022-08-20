import { Button, Box, Stack, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import React from "react";

const MAX_WIDTH = 600;
function LearnCard({ children }: React.PropsWithChildren<{}>)  {
  return (
    <Button variant="outlined" sx={{maxWidth: MAX_WIDTH, padding: 3, justifyContent: 'flex-start'}}>
      {children}
    </Button>
  );
}

function LeftH2({ children }: React.PropsWithChildren<{}>) {
  return <Typography level="h2" sx={{textAlign: 'left'}}>{children}</Typography>;
}
export default function WelcomeToNile() {
  return (
    <Stack component="main" spacing={3} sx={{
        marginTop: 10, 
        maxWidth: MAX_WIDTH,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <Typography level="h1">
        Welcome to <a href="https://thenile.dev" target="_blank" rel="noreferrer">Nile!</a>
      </Typography>

      <Typography level="h3">
        Start by changing the workspace name in {' '}
        <code>pages/_app.tsx</code>
      </Typography>

      <LearnCard>
        <a href="https://thenile.dev/docs" target="_blank" rel="noreferrer">
          <LeftH2>Documentation &rarr;</LeftH2>
          <Typography>Find in-depth information about Nile features and API.</Typography>
        </a>
      </LearnCard>

      <LearnCard>
        <a href="https://thenile.dev/docs/current/tutorial" target="_blank" rel="noreferrer">
          <LeftH2>Learn &rarr;</LeftH2>
          <Typography>Build a full control plane by following the Nile tutorial</Typography>
        </a>
      </LearnCard>

      <LearnCard>
        <a href="https://github.com/TheNileDev/examples" target="_blank" rel="noreferrer">
          <LeftH2>Examples &rarr;</LeftH2>
          <Typography>Discover and deploy boilerplate example Nile agents and projects.</Typography>
        </a>

      </LearnCard>

      <LearnCard>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank" 
          rel="noreferrer"
        >
          <LeftH2>Deploy &rarr;</LeftH2>
          <Typography>
            Instantly deploy your Nile Next.js site to a public URL with Vercel.
          </Typography>
        </a>
      </LearnCard>
    </Stack>
  );
}