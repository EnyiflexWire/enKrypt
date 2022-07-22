import { NetworkNames } from "@enkryptcom/types";
import { EvmNetwork, EvmNetworkOptions } from "../types/evm-network";
import { EtherscanActivity } from "../libs/activity-handlers";

const kovOptions: EvmNetworkOptions = {
  name: NetworkNames.Kovan,
  name_long: "Kovan",
  homePage: "https://github.com/kovan-testnet",
  blockExplorerTX: "https://kovan.etherscan.io/tx/[[txHash]]",
  blockExplorerAddr: "https://kovan.etherscan.io/address/[[address]]",
  chainID: 42,
  isTestNetwork: true,
  currencyName: "KOV",
  node: "wss://nodes.mewapi.io/ws/kovan",
  icon: require("./icons/eth.svg"),
  gradient: "#E6007A",
  activityHandler: EtherscanActivity,
};

const kov = new EvmNetwork(kovOptions);

export default kov;
