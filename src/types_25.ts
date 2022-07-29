import type { RegistryTypes } from "@polkadot/types/types"
import { types23 } from "./types_23"

export const types25: RegistryTypes = {
  ...types23,
  DidAuthorizedCallOperation: {
    did: "DidIdentifierOf",
    txCounter: "u64",
    call: "DidCallableOf",
    submitter: "AccountId",
  },
}
