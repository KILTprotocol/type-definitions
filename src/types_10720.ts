import type {
  RegistryTypes,
} from "@polkadot/types/types"

export const types10720: RegistryTypes = {
  // DID state_call
  RawDidLinkedInfo: {
    identifier: "AccountId32",
    accounts: "Vec<AccountId32>",
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
    accounts: "Vec<AccountId32>",
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
      Ed25519: "AccountId32",
      Sr25519: "AccountId32",
      Ecdsa: "AccountId33",
    },
  },
  DidEncryptionKey: {
    _enum: {
      // Raw public key
      X25519: "[u8; 32]",
    },
  }
}
