import type {
  DefinitionRpc,
  DefinitionRpcSub,
  RegistryTypes,
} from "@polkadot/types/types"

export const SPEC_10800: {
  types: RegistryTypes
  rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>>
} = {
  types: {
    RpcServiceEndpoint: {
      id: "String",
      serviceType: "Vec<String>",
      urls: "Vec<String>",
    },
    RpcDidDetail: {
      authenticationKey: "Hash",
      keyAgreementKeys: "BTreeSet<Hash>",
      delegationKey: "Option<Hash>",
      attestationKey: "Option<Hash>",
      publicKeys: "BtreeMap<Hash, DidPublicKeyDetails<BlockNumber>>",
      lastTxCounter: "U64",
      deposit: "Deposit<AccountId, Balance>",
    },
    RpcDidDocument: {
      identifier: "DidIdentifier",
      accounts: "AccountId",
      w3n: "String",
      serviceEndpoints: "RpcServiceEndpoint",
      details: "RpcDidDetail",
    },
  },
  rpc: {
    did: {
      queryByWeb3Name: {
        description: "Query all DID information for the given web3name.",
        params: [
          { name: "web3name", type: "String" },
          {
            name: "at",
            type: "Hash",
            isOptional: true,
          },
        ],
        type: "RpcDidDocument",
      },
      queryByAccount: {
        description:
          "Query all DID information for the given blockchain account.",
        params: [
          { name: "account", type: "AccountId" },
          {
            name: "at",
            type: "Hash",
            isOptional: true,
          },
        ],
        type: "RpcDidDocument",
      },
      query: {
        description: "Query all DID information for the given DID identifier.",
        params: [
          {
            name: "did",
            type: "DidIdentifier",
          },
          {
            name: "at",
            type: "Hash",
            isOptional: true,
          },
        ],
        type: "RpcDidDocument",
      },
    },
  },
}
