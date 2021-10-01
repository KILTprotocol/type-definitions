import type { RegistryTypes } from "@polkadot/types/types";
import { types25 } from "./types_25";

export const types26: RegistryTypes = {
  ...types25,
  Deposit: {
    owner: "AccountId",
    amount: "Balance",
  },
  AttestationDetails: {
    ctypeHash: "CtypeHashOf",
    attester: "AttesterOf",
    delegationId: "Option<DelegationNodeIdOf>",
    revoked: "bool",
    deposit: "Deposit",
  },
};
