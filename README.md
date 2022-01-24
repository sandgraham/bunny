# bunny

Experimenting with bun via a simple SPA type react app.

```
> bun install
> bun bun src/index.tsx
> bun
```

Issues:
- HMR doesn't seem to work
- `bun install` isn't deterministic? `bun.lockb` changes most times I run it (with same deps)
- `bun install` doesn't install dependencies after initial install. Adding deps to package.json and running install seems to not do anything. Clearing `node_modules` and installing picks up the changes.
