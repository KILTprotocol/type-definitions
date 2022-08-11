import type {
  DefinitionRpc, DefinitionRpcSub
} from "@polkadot/types/types"

const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = {
  credentials: {
    getCredential: {
      description: "Return the credential details for the provided credential ID, if found.",
      params: [
        {
          name: "credential_id",
          type: "Hash",
        },
        {
          name: "at",
          type: "Hash",
          isOptional: true,
        },
      ],
      type: "Option<PublicCredentialsCredentialsCredentialEntry>"
    },
    getCredentials: {
      description: "Return all the credentials issued to the provided subject, optionally filtering with the provided logic.",
      params: [
        {
          name: "subject",
          type: "String",
        },
        {
          name: "filter",
          type: "PublicCredentialFilter",
          isOptional: true,
        },
        {
          name: "at",
          type: "Hash",
          isOptional: true,
        },
      ],
      type: "Vec<(Hash, PublicCredentialsCredentialsCredentialEntry)>"
    }
  }
}

export default rpc