# comparecloud.io [![Build Status](https://travis-ci.org/rameshvarun/comparecloud.io.svg?branch=master)](https://travis-ci.org/rameshvarun/comparecloud.io)

![screenshot](https://i.imgur.com/06FDEqs.png)

## Contributing

First, get a copy of the repo and dependencies.

```bash
git clone git@github.com:rameshvarun/comparecloud.io.git
cd comparecloud.io
npm install

# Start a live-reloading server.
npm start
```

You can now start editing the providers in `src/providers/*.ts`. Providers conform to the interface in `src/provider.ts`.

```typescript
export default interface Provider {
  readonly name: string;
  ...

  readonly features: {
    ...
  };

  getMonthlyPrice?: (storage: number) => number | undefined;
  getYearlyPrice?: (storage: number) => number | undefined;
}
```
