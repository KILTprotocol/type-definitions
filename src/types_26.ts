import type { RegistryTypes } from "@polkadot/types/types";
import { types25 } from "./types_25";

export const types26: RegistryTypes = {
  ...types25,

  // Add deposit for attestations
  Deposit: {
    owner: "AccountId",
    amount: "Balance",
  },
  AttestationDetails: {
    ctypeHash: "CtypeHashOf",
    attester: "AttesterOf",
    delegationId: "Option<DelegationNodeIdOf>",
    revoked: "bool",
    // Added
    deposit: "Deposit",
  },

  DidAuthorizedCallOperation: {
    did: "DidIdentifierOf",
    txCounter: "u64",
    call: "DidCallableOf",
    // Added
    blockNumber: "BlockNumber",
    submitter: "AccountId",
  },

  // Remove serviceEndpoints
  DidDetails: {
    authenticationKey: "KeyIdOf",
    keyAgreementKeys: "DidKeyAgreementKeys",
    capabilityDelegationKey: "Option<KeyIdOf>",
    assertionMethodKey: "Option<KeyIdOf>",
    publicKeys: "DidPublicKeyMap",
    lastTxCounter: "u64",
  },

  // Remove newServiceEndpoints
  DidCreationDetails: {
    did: "DidIdentifierOf",
    newKeyAgreementKeys: "DidNewKeyAgreementKeys",
    newAssertionMethodKey: "Option<DidVerificationKey>",
    newCapabilityDelegationKey: "Option<DidVerificationKey>",
  },

  // Remove UrlError
  DidError: {
    _enum: {
      StorageError: "StorageError",
      SignatureError: "SignatureError",
      InputError: "InputError",
      InternalError: "Null",
    },
  },

  // Remove MaxUrlLengthExceeded
  InputError: {
    _enum: [
      "MaxKeyAgreementKeysLimitExceeded",
      "MaxVerificationKeysToRemoveLimitExceeded",
    ],
  },

  // Remove deprecated types
  ServiceEndpoints: undefined,
  UrlError: undefined,
  ContentType: undefined,
  Url: undefined,
  HttpUrl: undefined,
  FtpUrl: undefined,
  IpfsUrl: undefined,
  MaxEndpointUrlsCount: undefined,
  MaxUrlLength: undefined,

  // Cleaning/fixing up outdated types
  DelegationRoot: undefined,
  StorageError: {
    _enum: {
      DidAlreadyPresent: "Null",
      DidNotPresent: "Null",
      DidKeyNotPresent: "DidVerificationKeyRelationship",
      KeyNotPresent: "Null",
      CurrentlyActiveKey: "Null",
      MaxPublicKeysPerDidExceeded: "Null",
      MaxTotalKeyAgreementKeysExceeded: "Null",
      DidAlreadyDeleted: "Null"
    }
  },
  SignatureError: {
    _enum: [
        "InvalidSignatureFormat",
        "InvalidSignature",
        "InvalidNonce",
        "TransactionExpired",
    ]
  },
  
  // Fix enum to u8 mapping
  DelegationStorageVersion: {
    _enum: {
      None: 255,
      V1: 0,
      V2: 1
    }
  },
  
  // Fix enum to u8 mapping
  DidStorageVersion: {
    _enum: {
      None: 255,
      V1: 0,
      V2: 1,
      V3: 2
    }
  },

  // Fix enum to u8 mapping
  StakingStorageVersion: {
    _enum: {
      None: 255,
      V1_0_0: 0,
      V2_0_0: 1,
      V3_0_0: 2,
      V4: 3,
      V5: 4,
    }
  }
};