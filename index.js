"use strict";
const { useEffect: coreUseEffect, useRef } = require("react");
const isEqual = require("lodash/isEqual");

// ~
// Hook
// ~
function useEffect(create, inputs) {
  const previousInputs = useRef();

  coreUseEffect(() => {
    if (isEqual(previousInputs.current, inputs)) {
      return;
    }

    create();

    previousInputs.current = inputs;
  });
}

module.exports = useEffect;
