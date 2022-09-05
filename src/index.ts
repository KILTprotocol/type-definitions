import type { OverrideBundleDefinition } from "@polkadot/types/types"

import { types8 } from "./types_8"
import { types9 } from "./types_9"
import { types10 } from "./types_10"
import { types12 } from "./types_12"
import { types17 } from "./types_17"
import { types18 } from "./types_18"
import { types19 } from "./types_19"
import { types20 } from "./types_20"
import { types21 } from "./types_21"
import { types23 } from "./types_23"
import { types25 } from "./types_25"
import { types2700 } from "./types_2700"
import { types10720 } from "./types_10720"

import runtime from "./runtime"
import rpc from "./rpc"

// Export type definitions
export {
  types8,
  types9,
  types10,
  types12,
  types17,
  types18,
  types19,
  types20,
  types21,
  types23,
  types25,
  types2700,
  types10720,
  types10720 as latest,
}

// Export runtime APIs definitions
export { runtime }

// Export custom RPC definitions
export { rpc }

// Export complete package
export const typeBundleForPolkadot: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, 8],
      types: types8,
    },
    {
      minmax: [9, 9],
      types: types9,
    },
    {
      minmax: [10, 11],
      types: types10,
    },
    {
      minmax: [12, 16],
      types: types12,
    },
    {
      minmax: [17, 17],
      types: types17,
    },
    {
      minmax: [18, 18],
      types: types18,
    },
    {
      minmax: [19, 19],
      types: types19,
    },
    {
      minmax: [20, 20],
      types: types20,
    },
    {
      minmax: [21, 22],
      types: types21,
    },
    {
      minmax: [23, 24],
      types: types23,
    },
    {
      minmax: [25, 2699],
      types: types25,
    },
    {
      minmax: [2700, 10710],
      types: types2700,
    },
    {
      minmax: [10720, undefined],
      types: types10720,
    },
  ],
  runtime: runtime,
  rpc: rpc
}
