import type { RegistryTypes } from "@polkadot/types/types"
import { types10720 } from "./types_10720"

export const types10900: RegistryTypes = {
  ...types10720,
  // ParachainStakingApi get_staking_rates
  StakingRates: {
    collatorStakingRate: "Perquintill",
    collatorRewardRate: "Perquintill",
    delegatorStakingRate: "Perquintill",
    delegatorRewardRate: "Perquintill"
  }
}
