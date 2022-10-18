# Development

````
yarn install
yarn start
````

## Put localhost on the internet
We sometimes need to put our localhost on the internet so that we can test it remotely.

Ngrok is a good tool for this. It is free for personal use. But if you want to use a
custom domain, you have to pay. If you want to use custom domain, we suggest Cloudflare
tunnels for this.

### Ngrok [TODO]

### Cloudflare tunnels [for collaborators only]

1. Request a subdomain from the team. For example, `air.zenuml.com`.
2. You will be given a command that install a service locally. Run it.
3. Your localhost:8080 will be available at `air.zenuml.com`.
4. Add your subdomain to `vue.config.js` so that it is allowed to access the dev server.

```js
  devServer: {
    allowedHosts: ["air.zenuml.com", "yanhui.zenuml.com", "localhost"],
    public: "air.zenuml.com:8080",    
  }
```

# Code Structure
This repository contains both the DSL parser and the renderer.

The parser is generated with Antlr4. You can find the definition at `src/g4`. Generated parser is at `src/generated-parser`. 
Parser enhancement with customised functionalities is in the `src/parser` folder.

Almost everything else under serc are for the renderer. The render is based on VueJs 2.x.

