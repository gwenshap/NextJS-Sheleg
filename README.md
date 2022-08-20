This uses [Next.js](https://nextjs.org/) as a base github template for creating a SaaS appliation with [Nile](https://thenile.dev/)

## Getting Started

First, [create your own repo with this repository](https://github.com/TheNileDev/nextjs/generate)

Clone your repo locally and begin the one time set up

### One time setup

First, you need to create certificates for your local machine and accept them. The Nile backend will only serve cookies to `\*.thenile.dev` domains, which is required for login

1. edit `/etc/hosts` and add `127.0.0.1 local.thenile.dev`.
1. `mkdir .certificates && cd .certificates`
1. add an ssl key (this one lasts 1 year)

   ```bash
   openssl req -x509 -out localhost.crt -keyout localhost.key \
     -days 365 \
     -newkey rsa:2048 -nodes -sha256 \
     -subj '/CN=*.thenile.dev' -extensions EXT -config <( \
     printf "[dn]\nCN=*.thenile.dev\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:*.thenile.dev\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
   ```

1. `$ open localhost.crt`, double click on the certificate in your keychain.
1. Open the dropdown for `Trust` in the pop up window and select `Always Trust`.

## Install the dependencies

```
npm install
# or
yarn install
```

## Running the server

```bash
npm run dev
# or
yarn dev
```

Open [https://local.thenile.dev](http://local.thenile.dev) with your browser to see the result.

You can start editing the page by configuring the workspace to use in `pages/_app.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Nile, take a look at the following resources:

- [Nile Documentation](https://www.thenile.dev/docs) - learn about Nile concepts, features, and API.
- [Learn Nile](https://nextjs.org/docs/current/tutorial) - an interactive Nile tutorial for building a control plane.
- [Building UI](https://mui.com/joy-ui/getting-started/overview/) - learn about Joy UI and the build in components to style your application

You can check out [the Nile js GitHub repository](https://github.com/TheNileDev/nile-js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
