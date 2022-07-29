import type { OverrideBundleDefinition } from "@polkadot/types/types"

import { SPEC_10800 } from "./spec_10800"

export {
  SPEC_10800,
  SPEC_10800 as latest,
}

export const bundleDefinition: OverrideBundleDefinition = {
  types: [
    {
      minmax: [10800, undefined],
      types: SPEC_10800.types,
    },
  ],
  rpc: SPEC_10800.rpc,
}
