import type {
  DefinitionsCall,
} from "@polkadot/types/types"

const runtime: DefinitionsCall = {
  DidApi: [
    {
      methods: {
        query_did_by_w3n: {
          description: "Return the information relative to the owner of the provided web3name, if any.",
          params: [
            {
              name: "name",
              type: "Text",
            },
          ],
          type: "Option<RawDidLinkedInfo<AccountId32, AccountId32, PalletDidLookupLinkableAccountLinkableAccountId, Balance, Key, BlockNumber>>"
        },
        query_did_by_account_id: {
          description: "Return the information relative to the DID to which the provided account is linked, if any.",
          params: [
            {
              name: "name",
              type: "PalletDidLookupLinkableAccountLinkableAccountId"
            }
          ],
          type: "Option<RawDidLinkedInfo<AccountId32, AccountId32, PalletDidLookupLinkableAccountLinkableAccountId, Balance, Key, BlockNumber>>"
        },
        query_did: {
          description: "Return the information relative to the owner of the provided DID, if present.",
          params: [
            {
              name: "did",
              type: "AccountId32"
            }
          ],
          type: "Option<RawDidLinkedInfo<AccountId32, AccountId32, PalletDidLookupLinkableAccountLinkableAccountId, Balance, Key, BlockNumber>>"
        }
      },
      version: 1
    }
  ]
}

export default runtime
