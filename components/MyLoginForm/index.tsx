import { Chip, Link, Stack, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';
import { LoginForm } from '@theniledev/react';
import { useRouter } from 'next/router';
import React from 'react';
import ChipDelete from '@mui/joy/ChipDelete';
import Logo from '~/components/Logo';

export default function MyLoginForm() {

  const router = useRouter();
  const [error, setErrorMessage] = React.useState<null | string>(null);
  return (
    <Stack
      sx={{
        height: '98vh',
        alignItems:"center",
        justifyContent:"center",
      }}
    >
    <Card variant="outlined" sx={{ background: 'transparent', padding: 14, paddingTop: 10}}>
      <Stack spacing={10}>
        <Logo width={300}/>
        {error && (
          <Chip 
            variant="soft" 
            color="danger" 
            endDecorator={
              <ChipDelete 
                variant="plain"  
                onClick={() => { setErrorMessage(null) }}
              />
            }
          >
            {error}
          </Chip>
        )}
        <LoginForm 
          onSuccess={() => {
            router.push('/instances/clusters');
          }}
          onError={(error) => {
            // for demo purposes only
            if (/workspace .* not found/.test(error.message)) {
              setErrorMessage('Double check your workspace name in pages/_app.tsx')
            }
          }}
        />
      </Stack>
      <Typography level="body4" sx={{ marginTop: 1 }}>
        Sign in using an organization user email and password.
      </Typography>
      <Typography level="body4" sx={{ marginTop: 1 }}>
        Don&apos;t have a user yet? {' '}
        <Link href="https://www.thenile.dev/docs/current/quick-start-ui#create-a-workspace-user" target="_blank">
          Create one by following the quickstart.
        </Link>
      </Typography>
    </Card>
    </Stack>
  );
}