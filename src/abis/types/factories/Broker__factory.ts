/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Broker, BrokerInterface } from "../Broker";

const _abi = [
  {
    inputs: [],
    name: "UIntOutOfBounds",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint48",
        name: "oldVal",
        type: "uint48",
      },
      {
        indexed: true,
        internalType: "uint48",
        name: "newVal",
        type: "uint48",
      },
    ],
    name: "AuctionLengthSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "prevVal",
        type: "bool",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "newVal",
        type: "bool",
      },
    ],
    name: "DisabledSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_AUCTION_LENGTH",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "auctionLength",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gnosis",
    outputs: [
      {
        internalType: "contract IGnosis",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMain",
        name: "main_",
        type: "address",
      },
      {
        internalType: "contract IGnosis",
        name: "gnosis_",
        type: "address",
      },
      {
        internalType: "contract ITrade",
        name: "tradeImplementation_",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "auctionLength_",
        type: "uint48",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "main",
    outputs: [
      {
        internalType: "contract IMain",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IAsset",
            name: "sell",
            type: "address",
          },
          {
            internalType: "contract IAsset",
            name: "buy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "sellAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minBuyAmount",
            type: "uint256",
          },
        ],
        internalType: "struct TradeRequest",
        name: "req",
        type: "tuple",
      },
    ],
    name: "openTrade",
    outputs: [
      {
        internalType: "contract ITrade",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reportViolation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "newAuctionLength",
        type: "uint48",
      },
    ],
    name: "setAuctionLength",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "disabled_",
        type: "bool",
      },
    ],
    name: "setDisabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tradeImplementation",
    outputs: [
      {
        internalType: "contract ITrade",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class Broker__factory {
  static readonly abi = _abi;
  static createInterface(): BrokerInterface {
    return new utils.Interface(_abi) as BrokerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Broker {
    return new Contract(address, _abi, signerOrProvider) as Broker;
  }
}
