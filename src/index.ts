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
  Address: "MultiAddress",
  AmountOf: "i128",
  Balance: "u128",
  BlockNumber: "u64",
  Index: "u64",
  LookupSource: "MultiAddress",
  CtypeCreator: "DidIdentifier",
  CtypeHash: "Hash",
  ClaimHash: "Hash",
  Attester: "DidIdentifier",
  Attestation: {
    ctype_hash: "CtypeHash",
    attester: "Attester",
    delegation_id: "Option<DelegationNodeId>",
    revoked: "bool",
  },
  Permissions: "u32",
  DelegationNodeId: "Hash",
  DelegatorId: "DidIdentifier",
  DelegationSignature: "DidSignature",
  DelegationRoot: {
    ctype_hash: "CtypeHash",
    owner: "DelegatorId",
    revoked: "bool",
  },
  DelegationNode: {
    root_id: "DelegationNodeId",
    parent: "Option<DelegationNodeId>",
    owner: "DelegatorId",
    permissions: "Permissions",
    revoked: "bool",
  },
  KeyId: "Hash",
  DidIdentifier: "AccountId",
  AccountIdentifier: "AccountId",
  DidCallable: "Call",
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
    blockNumber: "BlockNumber",
  },
  DidDetails: {
    authenticationKey: "KeyId",
    keyAgreementKeys: "BTreeSet<KeyId>",
    delegationKey: "Option<KeyId>",
    attestationKey: "Option<KeyId>",
    publicKeys: "BTreeMap<KeyId, DidPublicKeyDetails>",
    endpointUrl: "Option<Url>",
    lastTxCounter: "u64",
  },
  DidCreationOperation: {
    did: "DidIdentifier",
    newAuthenticationKey: "DidVerificationKey",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    newAttestationKey: "Option<DidVerificationKey>",
    newDelegationKey: "Option<DidVerificationKey>",
    newEndpointUrl: "Option<Url>",
  },
  DidUpdateOperation: {
    did: "DidIdentifier",
    newAuthenticationKey: "Option<DidVerificationKey>",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    attestationKeyUpdate: "DidVerificationKeyUpdateAction",
    delegationKeyUpdate: "DidVerificationKeyUpdateAction",
    publicKeysToRemove: "BTreeSet<KeyId>",
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
  DidAuthorizedCallOperation: {
    did: "DidIdentifier",
    call: "DidCallable",
    txCounter: "u64",
  },
  DidDeletionOperation: {
    did: "DidIdentifier",
    txCounter: "u64",
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
