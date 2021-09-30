import type { RegistryTypes } from "@polkadot/types/types";
import { types25 } from "./types_25";

export const types26: RegistryTypes = {
  ...types25,
  DidAuthorizedCallOperation: {
    did: "DidIdentifierOf",
    txCounter: "u64",
    call: "DidCallableOf",
    // Added
    blockNumber: "BlockNumber",
    submitter: "AccountId",
  },
};