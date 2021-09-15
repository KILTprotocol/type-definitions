import type { RegistryTypes } from "@polkadot/types/types";
import { types21 } from "./types_21";

export const types23: RegistryTypes = {
  ...types21,
  DidAuthorizedCallOperation: {
    did: "DidIdentifierOf",
    txCounter: "u64",
    call: "DidCallableOf",
    submitter: "AccountId",
  },
};
