import type { RegistryTypes } from "@polkadot/types/types"
import { types17 } from "./types_17"

export const types18: RegistryTypes = {
  ...types17,
  // Remove old DID types
  DidCreationOperation: undefined,
  DidUpdateOperation: undefined,
  DidDeletionOperation: undefined,

  // DID management update
  DidCreationDetails: {
    did: "DidIdentifierOf",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    newAttestationKey: "Option<DidVerificationKey>",
    newDelegationKey: "Option<DidVerificationKey>",
    newEndpointUrl: "Option<Url>"
  },
  DidUpdateDetails: {
    newAuthenticationKey: "Option<DidVerificationKey>",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    attestationKeyUpdate: "DidVerificationKeyUpdateAction",
    delegationKeyUpdate: "DidVerificationKeyUpdateAction",
    publicKeysToRemove: "BTreeSet<KeyIdOf>",
    newEndpointUrl: "Option<Url>"
  }
}
