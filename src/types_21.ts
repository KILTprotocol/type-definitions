import type { RegistryTypes } from "@polkadot/types/types"
import { types20 } from "./types_20"

export const types21: RegistryTypes = {
  ...types20,

  StorageError: {
    _enum: {
      DidAlreadyPresent: "Null",
      DidNotPresent: "Null",
      DidKeyNotPresent: "DidVerificationKeyRelationship",
      VerificationKeyNotPresent: "Null",
      CurrentlyActiveKey: "Null",
      MaxTxCounterValue: "Null",
      MaxPublicKeysPerDidKeyIdentifierExceeded: "Null",
      // renamed
      MaxTotalKeyAgreementKeysExceeded: "Null",
      MaxOldAttestationKeysExceeded: "Null"
    }
  },
  // removed
  DidUpdateDetails: undefined,
  DidCreationDetails: {
    did: "DidIdentifierOf",
    newKeyAgreementKeys: "DidNewKeyAgreementKeys",
    newAssertionMethodKey: "Option<DidVerificationKey>",
    newCapabilityDelegationKey: "Option<DidVerificationKey>",
    newServiceEndpoints: "Option<ServiceEndpoints>"
  },
  DidDetails: {
    authenticationKey: "KeyIdOf",
    keyAgreementKeys: "DidKeyAgreementKeys",
    // renamed
    capabilityDelegationKey: "Option<KeyIdOf>",
    // renamed
    assertionMethodKey: "Option<KeyIdOf>",
    publicKeys: "DidPublicKeyMap",
    serviceEndpoints: "Option<ServiceEndpoints>",
    lastTxCounter: "u64"
  },
  DelegateSignatureTypeOf: "DidSignature",
  ContentType: {
    _enum: ["application/json", "application/ld+json"]
  },

  // fix: generics mostly don't work here, but OrderedSet is reduced to a Vec anyway
  OrderedSet: undefined,
  Collator: {
    id: "AccountId",
    stake: "Balance",
    // fix
    delegators: "Vec<Stake>",
    total: "Balance",
    state: "CollatorStatus"
  },
  Delegator: {
    // fix
    delegations: "Vec<Stake>",
    total: "Balance"
  }
}
