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

  // DID RPC
  DidLinkedInfo: {
    identifier: "AccountId32",
    accounts: "Vec<PalletDidLookupLinkableAccountLinkableAccountId>",
    w3n: "Option<String>",
    serviceEndpoints: "Vec<ServiceEndpoint>",
    details: "DidDetails"
  },
  ServiceEndpoint: {
    id: "String",
    serviceTypes: "Vec<String>",
    urls: "Vec<String>"
  },
  DidDetails: {
    authenticationKey: "Hash",
    keyAgreementKeys: "BTreeSet<Hash>",
    delegationKey: "Option<Hash>",
    attestationKey: "Option<Hash>",
    publicKeys: "BTreeMap<Hash, PublicKeyDetails>",
    lastTxCounter: "BlockNumber",
    deposit: "KiltSupportDeposit<AccountId32, Balance>"
  },
  PublicKeyDetails: {
    key: "DidPublicKey",
    blockNumber: "BlockNumber"
  },
  DidPublicKey: {
    _enum: {
      PublicVerificationKey: "DidVerificationKey",
      PublicEncryptionKey: "DidEncryptionKey",
    },
  },
  DidVerificationKey: {
    _enum: {
      // SS58-encoded public key (consumer must call decodeAddress)
      Ed25519: "Text",
      // SS58-encoded public key (consumer must call decodeAddress)
      Sr25519: "Text",
      // SS58-encoded public key (consumer must call decodeAddress)
      Ecdsa: "Text",
    },
  },
  DidEncryptionKey: {
    _enum: {
      // Raw public key
      X25519: "[u8; 32]",
    },
  },

  // Public credentials RPC
  PublicCredentialFilter: {
    _enum: {
      ctypeHash: "Hash",
      attester: "AccountId32",
    }
  }
}
