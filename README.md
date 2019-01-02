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

### API

The `useEffect(create, inputs)` hook takes two parameters and has no return. The mentioned parameters are:

#### `create`

A function that contains imperative, possibly effectful code and is directly invoked inside a regular React's `useEffect` hook.

#### `inputs`

The array of values that the effect depends on and that will be deeply compared for changes.
