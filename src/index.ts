import type {
  OverrideBundleDefinition,
  RegistryTypes,
} from "@polkadot/types/types";

export const types8: RegistryTypes = {
  AccountInfo: "AccountInfoWithDualRefCount",
  Address: "AccountId",
  Attestation: {
    ctypeHash: "Hash",
    attester: "AccountId",
    delegationId: "Option<DelegationNodeId>",
    revoked: "bool",
  },
  Balance: "u128",
  DelegationNode: {
    rootId: "DelegationNodeId",
    parent: "Option<DelegationNodeId>",
    owner: "AccountId",
    permissions: "Permissions",
    revoked: "bool",
  },
  DelegationNodeId: "Hash",
  DelegationRoot: {
    ctypeHash: "Hash",
    owner: "AccountId",
    revoked: "bool",
  },
  DidRecord: {
    signKey: "Hash",
    boxKey: "Hash",
    docRef: "Option<Vec<u8>>",
  },
  Index: "u64",
  LookupSource: "AccountId",
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
  AccountInfo: "AccountInfoWithTripleRefCount",
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
    ctypeHash: "CtypeHashOf",
    attester: "AttesterOf",
    delegationId: "Option<DelegationNodeIdOf>",
    revoked: "bool",
  },

  // Delegation types
  Permissions: "u32",
  DelegationNodeIdOf: "Hash",
  DelegatorIdOf: "DidIdentifierOf",
  DelegationSignature: "DidSignature",
  DelegationRoot: {
    ctypeHash: "CtypeHashOf",
    owner: "DelegatorIdOf",
    revoked: "bool",
  },
  DelegationNode: {
    rootId: "DelegationNodeIdOf",
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
      InternalError: "Null",
    },
  },
  StorageError: {
    _enum: {
      DidAlreadyPresent: "Null",
      DidNotPresent: "Null",
      DidKeyNotPresent: "DidVerificationKeyRelationship",
      VerificationKeyNotPresent: "Null",
      CurrentlyActiveKey: "Null",
      MaxTxCounterValue: "Null",
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
      Ignore: "Null",
      Change: "DidVerificationKey",
      Delete: "Null",
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
    amount: "Balance",
  },
};

export const types10: RegistryTypes = {
  // Runtime
  AccountInfo: "AccountInfoWithTripleRefCount",
  Address: "MultiAddress",
  AmountOf: "i128",
  Balance: "u128",
  BlockNumber: "u64",
  Index: "u64",
  LookupSource: "MultiAddress",

  // Ctypes
  CtypeCreatorOf: "AccountId",
  CtypeHashOf: "Hash",
  ClaimHashOf: "Hash",

  // Attestations
  AttesterOf: "AccountId",
  AttestationDetails: {
    ctypeHash: "CtypeHashOf",
    attester: "AttesterOf",
    delegationId: "Option<DelegationNodeIdOf>",
    revoked: "bool",
  },

  // Delegations
  Permissions: "u32",
  DelegationNodeIdOf: "Hash",
  DelegatorIdOf: "AccountId",
  DelegateSignatureTypeOf: "Vec<u8>",
  DelegationRoot: {
    ctypeHash: "CtypeHashOf",
    owner: "DelegatorIdOf",
    revoked: "bool",
  },
  DelegationNode: {
    rootId: "DelegationNodeIdOf",
    parent: "Option<DelegationNodeIdOf>",
    owner: "DelegatorIdOf",
    permissions: "Permissions",
    revoked: "bool",
  },

  // DIDs
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
      InputError: "InputError",
      InternalError: "Null",
    },
  },
  StorageError: {
    _enum: {
      DidAlreadyPresent: "Null",
      DidNotPresent: "Null",
      DidKeyNotPresent: "DidVerificationKeyRelationship",
      VerificationKeyNotPresent: "Null",
      CurrentlyActiveKey: "Null",
      MaxTxCounterValue: "Null",
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
  InputError: {
    _enum: [
      "MaxKeyAgreementKeysLimitExceeded",
      "MaxVerificationKeysToRemoveLimitExceeded",
      "MaxUrlLengthExceeded",
    ],
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
      Ignore: "Null",
      Change: "DidVerificationKey",
      Delete: "Null",
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

  // LaunchPallet
  LockedBalance: {
    block: "BlockNumber",
    amount: "Balance",
  },

  // Staking
  BalanceOf: "Balance",
  RoundInfo: {
    current: "SessionIndex",
    first: "BlockNumber",
    length: "BlockNumber",
  },
  OrderedSet: "Vec<Stake>",
  Stake: {
    owner: "AccountId",
    amount: "Balance",
  },
  TotalStake: {
    collators: "Balance",
    delegators: "Balance",
  },
  InflationInfo: {
    collator: "StakingInfo",
    delegator: "StakingInfo",
  },
  StakingInfo: {
    maxRate: "Perquintill",
    rewardRate: "RewardRate",
  },
  RewardRate: {
    annual: "Perquintill",
    perBlock: "Perquintill",
  },
  Delegator: {
    delegations: "Vec<Stake>",
    total: "Balance",
  },
  CollatorSnapshot: {
    stake: "Balance",
    delegators: "Vec<Stake>",
    total: "Balance",
  },
  Collator: {
    id: "AccountId",
    stake: "Balance",
    delegators: "Vec<Stake>",
    total: "Balance",
    state: "CollatorStatus",
  },
  CollatorStatus: {
    _enum: {
      Active: "Null",
      Leaving: "SessionIndex",
    },
  },
};

export const types12: RegistryTypes = {
  ...types10,
  // Staking updated types
  DelegationCounter: {
    round: "SessionIndex",
    counter: "u32",
  },
  // DID updated types
  DidVerificationKey: {
    _enum: {
      Ed25519: "[u8; 32]",
      Sr25519: "[u8; 32]",
      Secp256k1: "[u8; 33]",
    },
  },
  DidSignature: {
    _enum: {
      Ed25519: "Ed25519Signature",
      Sr25519: "Sr25519Signature",
      "Ecdsa-Secp256k1": "EcdsaSignature",
    },
  },
};

export const types17: RegistryTypes = {
  ...types12,
  // Delegation updated types
  DelegationNode: {
    hierarchyRootId: "DelegationNodeIdOf",
    parent: "Option<DelegationNodeIdOf>",
    children: "BTreeSet<DelegationNodeIdOf>",
    details: "DelegationDetails",
  },
  DelegationDetails: {
    owner: "DelegatorIdOf",
    revoked: "bool",
    permissions: "Permissions",
  },
  DelegationHierarchyDetails: {
    ctypeHash: "CtypeHashOf",
  },
  DelegationStorageVersion: {
    _enum: ["V1", "V2"],
  },
};

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
    newEndpointUrl: "Option<Url>",
  },
  DidUpdateDetails: {
    newAuthenticationKey: "Option<DidVerificationKey>",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    attestationKeyUpdate: "DidVerificationKeyUpdateAction",
    delegationKeyUpdate: "DidVerificationKeyUpdateAction",
    publicKeysToRemove: "BTreeSet<KeyIdOf>",
    newEndpointUrl: "Option<Url>",
  },
};

export const types19: RegistryTypes = {
  ...types18,

  // Remove old types
  DidVerificationKeyUpdateAction: undefined,

  // New types
  ServiceEndpoints: {
    contentHash: "Hash",
    urls: "Vec<Url>",
    contentType: "ContentType",
  },
  DidFragmentUpdateAction_ServiceEndpoints: {
    _enum: {
      Ignore: "Null",
      Change: "ServiceEndpoints",
      Delete: "Null",
    },
  },
  DidFragmentUpdateAction_DidVerificationKey: {
    _enum: {
      Ignore: "Null",
      Change: "DidVerificationKey",
      Delete: "Null",
    },
  },
  ContentType: {
    _enum: ["ApplicationJson", "ApplicationJsonLd"],
  },

  // Updated types
  DidCreationDetails: {
    did: "DidIdentifierOf",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    newAttestationKey: "Option<DidVerificationKey>",
    newDelegationKey: "Option<DidVerificationKey>",
    newServiceEndpoints: "Option<ServiceEndpoints>",
  },
  DidUpdateDetails: {
    newAuthenticationKey: "Option<DidVerificationKey>",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    attestationKeyUpdate: "DidFragmentUpdateAction_DidVerificationKey",
    delegationKeyUpdate: "DidFragmentUpdateAction_DidVerificationKey",
    publicKeysToRemove: "BTreeSet<KeyIdOf>",
    serviceEndpointsUpdate: "DidFragmentUpdateAction_ServiceEndpoints",
  },
  DidDetails: {
    authenticationKey: "KeyIdOf",
    keyAgreementKeys: "BTreeSet<KeyIdOf>",
    delegationKey: "Option<KeyIdOf>",
    attestationKey: "Option<KeyIdOf>",
    publicKeys: "BTreeMap<KeyIdOf, DidPublicKeyDetails>",
    serviceEndpoints: "Option<ServiceEndpoints>",
    lastTxCounter: "u64",
  },
  DidStorageVersion: {
    _enum: ["V1", "V2"],
  },
};

export const types20: RegistryTypes = {
  ...types19,

  // Staking
  CollatorSnapshot: undefined,
  OrderedSet: "BoundedVec<Stake, MaxCollatorCandidates>",
  MaxCollatorCandidates: "u32",
  Collator: {
    id: "AccountId",
    stake: "Balance",
    // new
    delegators: "OrderedSet<Stake, MaxDelegatorsPerCollator>",
    total: "Balance",
    state: "CollatorStatus",
  },
  MaxDelegatorsPerCollator: "u32",
  Delegator: {
    // new
    delegations: "OrderedSet<Stake, MaxCollatorsPerDelegator>",
    total: "Balance",
  },
  MaxCollatorsPerDelegator: "u32",
  StakingStorageVersion: {
    _enum: ["V1_0_0", "V2_0_0", "V3_0_0", "V4"],
  },

  // Attestation
  MaxDelegatedAttestations: "u32",

  // KILT Launch
  MaxClaims: "u32",

  // Delegation
  DelegationNode: {
    hierarchyRootId: "DelegationNodeIdOf",
    parent: "Option<DelegationNodeIdOf>",
    // new
    children: "BoundedBTreeSet<DelegationNodeIdOf, MaxChildren>",
    details: "DelegationDetails",
  },
  MaxChildren: "u32",

  // DIDs
  DidNewKeyAgreementKeys:
    "BoundedBTreeSet<DidEncryptionKey, MaxNewKeyAgreementKeys>",
  DidKeyAgreementKeys: "BoundedBTreeSet<KeyIdOf, MaxTotalKeyAgreementKeys>",
  DidVerificationKeysToRevoke:
    "BoundedBTreeSet<KeyIdOf, MaxVerificationKeysToRevoke>",
  MaxNewKeyAgreementKeys: "u32",
  MaxTotalKeyAgreementKeys: "u32",
  MaxVerificationKeysToRevoke: "u32",
  MaxPublicKeysPerDid: "u32",
  DidPublicKeyMap:
    "BoundedBTreeMap<KeyIdOf, DidPublicKeyDetails, MaxPublicKeysPerDid>",
  DidCreationDetails: {
    did: "DidIdentifierOf",
    newKeyAgreementKeys: "DidNewKeyAgreementKeys",
    newAttestationKey: "Option<DidVerificationKey>",
    newDelegationKey: "Option<DidVerificationKey>",
    newServiceEndpoints: "Option<ServiceEndpoints>",
  },
  DidUpdateDetails: {
    newAuthenticationKey: "Option<DidVerificationKey>",
    // new
    newKeyAgreementKeys: "DidNewKeyAgreementKeys",
    attestationKeyUpdate: "DidFragmentUpdateAction_DidVerificationKey",
    delegationKeyUpdate: "DidFragmentUpdateAction_DidVerificationKey",
    // new
    publicKeysToRemove: "DidVerificationKeysToRevoke",
    serviceEndpointsUpdate: "DidFragmentUpdateAction_ServiceEndpoints",
  },
  DidDetails: {
    authenticationKey: "KeyIdOf",
    // new
    keyAgreementKeys: "DidKeyAgreementKeys",
    delegationKey: "Option<KeyIdOf>",
    attestationKey: "Option<KeyIdOf>",
    // new
    publicKeys: "DidPublicKeyMap",
    serviceEndpoints: "Option<ServiceEndpoints>",
    lastTxCounter: "u64",
  },
  ServiceEndpoints: {
    contentHash: "Hash",
    // new
    urls: "BoundedVec<Url, MaxEndpointUrlsCount>",
    contentType: "ContentType",
  },
  MaxUrlLength: "u32",
  MaxEndpointUrlsCount: "u32",
  StorageError: {
    _enum: {
      DidAlreadyPresent: "Null",
      DidNotPresent: "Null",
      DidKeyNotPresent: "DidVerificationKeyRelationship",
      VerificationKeyNotPresent: "Null",
      CurrentlyActiveKey: "Null",
      MaxTxCounterValue: "Null",
      // new
      MaxPublicKeysPerDidKeyIdentifierExceeded: "Null",
      MaxTotalKeyAgreementKeysExceeded: "Null",
      MaxOldAttestationKeysExceeded: "Null",
    },
  },
};

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
      MaxOldAttestationKeysExceeded: "Null",
    },
  },
  // removed
  DidUpdateDetails: undefined,
  DidCreationDetails: {
    did: "DidIdentifierOf",
    newKeyAgreementKeys: "DidNewKeyAgreementKeys",
    newAssertionMethodKey: "Option<DidVerificationKey>",
    newCapabilityDelegationKey: "Option<DidVerificationKey>",
    newServiceEndpoints: "Option<ServiceEndpoints>",
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
    lastTxCounter: "u64",
  },
  DelegateSignatureTypeOf: "DidSignature",
  ContentType: {
    _enum: ["application/json", "application/ld+json"],
  },

  // fix: generics mostly don't work here, but OrderedSet is reduced to a Vec anyway
  OrderedSet: undefined,
  Collator: {
    id: "AccountId",
    stake: "Balance",
    // fix
    delegators: "Vec<Stake>",
    total: "Balance",
    state: "CollatorStatus",
  },
  Delegator: {
    // fix
    delegations: "Vec<Stake>",
    total: "Balance",
  },
};

export const typeBundleForPolkadot: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, 8],
      types: types8,
    },
    {
      minmax: [9, 9],
      types: types9,
    },
    {
      minmax: [10, 11],
      types: types10,
    },
    {
      minmax: [12, 16],
      types: types12,
    },
    {
      minmax: [17, 17],
      types: types17,
    },
    {
      minmax: [18, 18],
      types: types18,
    },
    {
      minmax: [19, 19],
      types: types19,
    },
    {
      minmax: [20, 20],
      types: types20,
    },
    {
      minmax: [21, undefined],
      types: types21,
    },
  ],
};
