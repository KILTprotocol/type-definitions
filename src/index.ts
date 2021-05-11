import type {
  OverrideBundleDefinition,
  RegistryTypes,
} from "@polkadot/types/types";

export const types8: RegistryTypes = {
  Address: 'AccountId',
  Attestation: {
    attester: "AccountId",
    ctypeHash: "Hash",
    delegationId: "Option<DelegationNodeId>",
    revoked: "bool",
  },
  Balance: "u128",
  DelegationNode: {
    owner: "AccountId",
    parent: "Option<DelegationNodeId>",
    permissions: "Permissions",
    revoked: "bool",
    rootId: "DelegationNodeId",
  },
  DelegationNodeId: "Hash",
  DelegationRoot: {
    ctypeHash: "Hash",
    owner: "AccountId",
    revoked: "bool",
  },
  DidRecord: {
    boxKey: "Hash",
    docRef: "Option<Vec<u8>>",
    signKey: "Hash",
  },
  Index: "u64",
	LookupSource: 'AccountId',
  Permissions: "u32",
  PublicBoxKey: "Hash",
  PublicSigningKey: "Hash",
  Signature: "MultiSignature",
  XCurrencyId: {
    chainId: "ChainId",
    currencyId: "Vec<u8>",
  },
  ChainId: {
    _enum: {
      RelayChain: "Null",
      ParaChain: "ParaId",
    },
  },
  CurrencyIdOf: "CurrencyId",
  CurrencyId: {
    _enum: {
      DOT: 0,
      KSM: 1,
      KILT: 2,
    },
  },
  XcmError: {
    _enum: {
      Undefined: 0,
      Unimplemented: 1,
      UnhandledXcmVersion: 2,
      UnhandledXcmMessage: 3,
      UnhandledEffect: 4,
      EscalationOfPrivilege: 5,
      UntrustedReserveLocation: 6,
      UntrustedTeleportLocation: 7,
      DestinationBufferOverflow: 8,
      CannotReachDestination: 9,
      MultiLocationFull: 10,
      FailedToDecode: 11,
      BadOrigin: 12,
      ExceedsMaxMessageSize: 13,
      FailedToTransactAsset: 14,
    },
  },
  ReferendumInfo: {
    _enum: {
      Ongoing: "ReferendumStatus",
      Finished: "ReferendumInfoFinished",
    },
  },
};

export const types9: RegistryTypes = {
  // Runtime types
  Address: "MultiAddress",
  AmountOf: "i128",
  Balance: "u128",
  BlockNumber: "u64",
  Index: "u64",
  LookupSource: "MultiAddress",

  // Ctype types
  CtypeCreatorOf: "DidIdentifierOf",
  CtypeHashOf: "Hash",

  // Attestation types
  ClaimHashOf: "Hash",
  AttesterOf: "DidIdentifierOf",
  AttestationDetails: {
    ctype_hash: "CtypeHashOf",
    attester: "AttesterOf",
    delegation_id: "Option<DelegationNodeIdOf>",
    revoked: "bool",
  },

  // Delegation types
  Permissions: "u32",
  DelegationNodeIdOf: "Hash",
  DelegatorIdOf: "DidIdentifierOf",
  DelegationSignature: "DidSignature",
  DelegationRoot: {
    ctype_hash: "CtypeHashOf",
    owner: "DelegatorIdOf",
    revoked: "bool",
  },
  DelegationNode: {
    root_id: "DelegationNodeIdOf",
    parent: "Option<DelegationNodeIdOf>",
    owner: "DelegatorIdOf",
    permissions: "Permissions",
    revoked: "bool",
  },
  
  // Did types
  KeyIdOf: "Hash",
  DidIdentifierOf: "AccountId",
  AccountIdentifierOf: "AccountId",
  BlockNumberOf: "BlockNumber",
  DidCallableOf: "Call",
  DidVerificationKey: {
    _enum: {
      Ed25519: "[u8; 32]",
      Sr25519: "[u8; 32]",
    },
  },
  DidEncryptionKey: {
    _enum: {
      X25519: "[u8; 32]",
    },
  },
  DidPublicKey: {
    _enum: {
      PublicVerificationKey: "DidVerificationKey",
      PublicEncryptionKey: "DidEncryptionKey",
    },
  },
  DidVerificationKeyRelationship: {
    _enum: [
      "Authentication",
      "CapabilityDelegation",
      "CapabilityInvocation",
      "AssertionMethod",
    ],
  },
  DidSignature: {
    _enum: {
      Ed25519: "Ed25519Signature",
      Sr25519: "Sr25519Signature",
    },
  },
  DidError: {
    _enum: {
      StorageError: "StorageError",
      SignatureError: "SignatureError",
      UrlError: "UrlError",
      InternalError: "null",
    },
  },
  StorageError: {
    _enum: {
      DidAlreadyPresent: "null",
      DidNotPresent: "null",
      DidKeyNotPresent: "DidVerificationKeyRelationship",
      VerificationKeyNotPresent: "null",
      CurrentlyActiveKey: "null",
      MaxTxCounterValue: "null",
    },
  },
  SignatureError: {
    _enum: ["InvalidSignatureFormat", "InvalidSignature", "InvalidNonce"],
  },
  KeyError: {
    _enum: ["InvalidVerificationKeyFormat", "InvalidEncryptionKeyFormat"],
  },
  UrlError: {
    _enum: ["InvalidUrlEncoding", "InvalidUrlScheme"],
  },
  DidPublicKeyDetails: {
    key: "DidPublicKey",
    blockNumber: "BlockNumberOf",
  },
  DidDetails: {
    authenticationKey: "KeyIdOf",
    keyAgreementKeys: "BTreeSet<KeyIdOf>",
    delegationKey: "Option<KeyIdOf>",
    attestationKey: "Option<KeyIdOf>",
    publicKeys: "BTreeMap<KeyIdOf, DidPublicKeyDetails>",
    endpointUrl: "Option<Url>",
    lastTxCounter: "u64",
  },
  DidCreationOperation: {
    did: "DidIdentifierOf",
    newAuthenticationKey: "DidVerificationKey",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    newAttestationKey: "Option<DidVerificationKey>",
    newDelegationKey: "Option<DidVerificationKey>",
    newEndpointUrl: "Option<Url>",
  },
  DidUpdateOperation: {
    did: "DidIdentifierOf",
    newAuthenticationKey: "Option<DidVerificationKey>",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    attestationKeyUpdate: "DidVerificationKeyUpdateAction",
    delegationKeyUpdate: "DidVerificationKeyUpdateAction",
    publicKeysToRemove: "BTreeSet<KeyIdOf>",
    newEndpointUrl: "Option<Url>",
    txCounter: "u64",
  },
  DidVerificationKeyUpdateAction: {
    _enum: {
      Ignore: "null",
      Change: "DidVerificationKey",
      Delete: "null",
    },
  },
  DidDeletionOperation: {
    did: "DidIdentifierOf",
    txCounter: "u64",
  },
  DidAuthorizedCallOperation: {
    did: "DidIdentifierOf",
    txCounter: "u64",
    call: "DidCallableOf",
  },
  HttpUrl: {
    payload: "Text",
  },
  FtpUrl: {
    payload: "Text",
  },
  IpfsUrl: {
    payload: "Text",
  },
  Url: {
    _enum: {
      Http: "HttpUrl",
      Ftp: "FtpUrl",
      Ipfs: "IpfsUrl",
    },
  },

  // Launch types
  LockedBalance: {
    block: "BlockNumber",
    amount: "Balance"
  }
};

export const typeBundleForPolkadot: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, 8],
      types: types8,
    }, {
      minmax: [9, undefined],
      types: types9,
    }
  ],
};
