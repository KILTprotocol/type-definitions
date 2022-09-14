import type { DefinitionRpc, DefinitionRpcSub } from "@polkadot/types/types"

const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = {
  did: {
    query: {
      description:
        "Return the DID information linked to the provided DID identifier, if found.",
      params: [
        {
          name: "did",
          type: "AccountId32"
        },
        {
          name: "at",
          type: "Hash",
          isOptional: true
        }
      ],
      type: "Option<DidLinkedInfo>"
    },
    queryByWeb3Name: {
      description:
        "Return the DID information linked to the provided web3name, if found.",
      params: [
        {
          name: "name",
          type: "String"
        },
        {
          name: "at",
          type: "Hash",
          isOptional: true
        }
      ],
      type: "Option<DidLinkedInfo>"
    },
    queryByAccount: {
      description:
        "Return the DID information linked to the provided account, if found.",
      params: [
        {
          name: "account",
          type: "AccountId32"
        },
        {
          name: "at",
          type: "Hash",
          isOptional: true
        }
      ],
      type: "Option<DidLinkedInfo>"
    }
  }
}

export default rpc
