# `@rehooks/deeply-checked-effect`

> React hook for handling deep object comparison in React's `useEffect` hook.

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/deeply-checked-effect
```

## Usage

### Sample

```jsx
import useEffect from "@rehooks/deeply-checked-effect";

function UseEffect({ state }) {
  useEffect(
    () => {
      console.log("useEffect", state);
    },
    [state]
  );

  return <div />;
}
```
