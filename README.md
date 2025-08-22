# Reproduce Angular Vitest Fixtures bug

1. run `pnpm install`
2. run `pnpm test`

## Expected

The test should pass.

## Actual

The test fails with the following error:


```bash
Error: The first argument inside a fixture must use object destructuring pattern, e.g. ({ test } => {}). Instead, received "_a".
```