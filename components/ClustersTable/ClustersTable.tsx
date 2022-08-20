import React from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/joy';
import Card from '@mui/joy/Card';
import { Organization, User } from '@theniledev/js';
import { useQuery, InstanceTable, useNile } from '@theniledev/react';

const ENTITY = "clusters";

const useFirstOrg = (): [boolean, User | undefined, Organization | undefined] => {
  const nile = useNile();
  const { isLoading, data: user } = useQuery(['/me'], () => nile.users.me())
  const { orgMemberships } = user ?? {};
  const theFirstOne = React.useMemo(() => {
    if (orgMemberships) {

    const ids = Object.keys(orgMemberships);
      return ids[0]
    }

  }, [orgMemberships])

  const { isLoading: orgLoading, data: org } = useQuery(['/orgs'], () => 
    nile.organizations.getOrganization({ org: String(theFirstOne) }), 
    { enabled: !!theFirstOne }
  )
  return [isLoading && orgLoading, user, org];
}


const CreateInstance = () => {
  return (
    <Button onClick={() => { 
        alert('Implement a form for a user to create a cluster instance')
      }}
    >
      Create Instance
    </Button>
  );
}

export default function ClustersTable(){
  const [isLoading, user, org] = useFirstOrg();

  if (isLoading || !user || !org) {
    return null;
  }

  if (!org) {
    return (
      <Stack spacing={2}>
        <Typography level="h1">Welcome, {user?.email}!</Typography>
        <Typography>No organizations have been found.</Typography>
        <Typography>
          To fix this for demo purposes,{' '}
          <Link 
            href="https://www.thenile.dev/docs/current/quick-start-ui#sign-up-as-a-tenant"
            target="_blank"
          >
            follow the quickstart for adding a tenant
          </Link>
          .
        </Typography>
      </Stack>
    );
 
  }

  return (
    <Stack spacing={2}>
      <Typography level="h1">Welcome, {user?.email}!</Typography>
      <Link href="/">Log out</Link>
      <Card variant="outlined" sx={{ background: 'transparent' }}>
        <Stack direction="row" spacing={2} sx={{alignItems: 'center', marginBottom: 3 }}>
          <Typography>Organization:</Typography>
          <Typography component="strong">{org.name}</Typography>
          <Box sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <CreateInstance key="create-instance"/>
          </Box>
        </Stack>
        <InstanceTable 
          org={org.id} 
          entity={ENTITY} 
          handleRowClick={() => alert('handle a row click')}
          columns={['cluster_name']} 
        />
      </Card>
    </Stack>
  )
}