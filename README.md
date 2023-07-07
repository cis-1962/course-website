## Development

This repository uses a private git submodule for course content. To clone the submodule (assuming you have the permissions) run:

```sh
git submodule init && git submodule update
```

Then make sure to commit the submodule hash to this repository whenever we want to update the content. This can be done just using `git add .`.

Make sure to `npm install`, then run a dev server with `npm run dev` and test a production build with `npm run build` and `npm run start`.

## CI/CD

The `deploy` action creates a new build every day and uploads it to the Penn servers.

**Note: Currently we only upload to GitHub Pages on every push.**
