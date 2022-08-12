import type {
  RegistryTypes,
} from "@polkadot/types/types"

export const types10700: RegistryTypes = {
  // DID state_call
  RawDidLinkedInfo: {
    identifier: "AccountId32",
    accounts: "Vec<PalletDidLookupLinkableAccountLinkableAccountId>",
    w3n: "Option<Text>",
    serviceEndpoints: "Vec<RawServiceEndpoints>",
    details: "RawDidDetails",
  },
  RawServiceEndpoints: {
    id: "Text",
    serviceTypes: "Vec<Text>",
    urls: "Vec<Text>"
  },
  RawDidDetails: {
    authenticationKey: "Hash",
    keyAgreementKeys: "BTreeSet<Hash>",
    delegationKey: "Option<Hash>",
    attestationKey: "Option<Hash>",
    publicKeys: "BTreeMap<Hash, DidDidDetailsDidPublicKeyDetails<BlockNumber>>",
    lastTxCounter: "BlockNumber",
    deposit: "KiltSupportDeposit<AccountId32, Balance>"
  },

  // Public credentials RPC
  PublicCredentialFilter: {
    _enum: {
      ctypeHash: "Hash",
      attester: "AccountId32",
    }
  }
}
