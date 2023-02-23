/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type ComponentsStruct = {
  rToken: PromiseOrValue<string>;
  stRSR: PromiseOrValue<string>;
  assetRegistry: PromiseOrValue<string>;
  basketHandler: PromiseOrValue<string>;
  backingManager: PromiseOrValue<string>;
  distributor: PromiseOrValue<string>;
  furnace: PromiseOrValue<string>;
  broker: PromiseOrValue<string>;
  rsrTrader: PromiseOrValue<string>;
  rTokenTrader: PromiseOrValue<string>;
};

export type ComponentsStructOutput = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
] & {
  rToken: string;
  stRSR: string;
  assetRegistry: string;
  basketHandler: string;
  backingManager: string;
  distributor: string;
  furnace: string;
  broker: string;
  rsrTrader: string;
  rTokenTrader: string;
};

export type ImplementationsStruct = {
  main: PromiseOrValue<string>;
  components: ComponentsStruct;
  trade: PromiseOrValue<string>;
};

export type ImplementationsStructOutput = [
  string,
  ComponentsStructOutput,
  string
] & { main: string; components: ComponentsStructOutput; trade: string };

export type RevenueShareStruct = {
  rTokenDist: PromiseOrValue<BigNumberish>;
  rsrDist: PromiseOrValue<BigNumberish>;
};

export type RevenueShareStructOutput = [number, number] & {
  rTokenDist: number;
  rsrDist: number;
};

export type DeploymentParamsStruct = {
  dist: RevenueShareStruct;
  minTradeVolume: PromiseOrValue<BigNumberish>;
  rTokenMaxTradeVolume: PromiseOrValue<BigNumberish>;
  shortFreeze: PromiseOrValue<BigNumberish>;
  longFreeze: PromiseOrValue<BigNumberish>;
  rewardRatio: PromiseOrValue<BigNumberish>;
  unstakingDelay: PromiseOrValue<BigNumberish>;
  tradingDelay: PromiseOrValue<BigNumberish>;
  auctionLength: PromiseOrValue<BigNumberish>;
  backingBuffer: PromiseOrValue<BigNumberish>;
  maxTradeSlippage: PromiseOrValue<BigNumberish>;
  issuanceThrottle: ThrottleLib.ParamsStruct;
  redemptionThrottle: ThrottleLib.ParamsStruct;
};

export type DeploymentParamsStructOutput = [
  RevenueShareStructOutput,
  BigNumber,
  BigNumber,
  number,
  number,
  BigNumber,
  number,
  number,
  number,
  BigNumber,
  BigNumber,
  ThrottleLib.ParamsStructOutput,
  ThrottleLib.ParamsStructOutput
] & {
  dist: RevenueShareStructOutput;
  minTradeVolume: BigNumber;
  rTokenMaxTradeVolume: BigNumber;
  shortFreeze: number;
  longFreeze: number;
  rewardRatio: BigNumber;
  unstakingDelay: number;
  tradingDelay: number;
  auctionLength: number;
  backingBuffer: BigNumber;
  maxTradeSlippage: BigNumber;
  issuanceThrottle: ThrottleLib.ParamsStructOutput;
  redemptionThrottle: ThrottleLib.ParamsStructOutput;
};

export declare namespace ThrottleLib {
  export type ParamsStruct = {
    amtRate: PromiseOrValue<BigNumberish>;
    pctRate: PromiseOrValue<BigNumberish>;
  };

  export type ParamsStructOutput = [BigNumber, BigNumber] & {
    amtRate: BigNumber;
    pctRate: BigNumber;
  };
}

export interface DeployerInterface extends utils.Interface {
  functions: {
    "ENS()": FunctionFragment;
    "deploy(string,string,string,address,((uint16,uint16),uint192,uint192,uint48,uint48,uint192,uint48,uint48,uint48,uint192,uint192,(uint256,uint192),(uint256,uint192)))": FunctionFragment;
    "gnosis()": FunctionFragment;
    "implementations()": FunctionFragment;
    "rsr()": FunctionFragment;
    "rsrAsset()": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ENS"
      | "deploy"
      | "gnosis"
      | "implementations"
      | "rsr"
      | "rsrAsset"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ENS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      DeploymentParamsStruct
    ]
  ): string;
  encodeFunctionData(functionFragment: "gnosis", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "implementations",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rsr", values?: undefined): string;
  encodeFunctionData(functionFragment: "rsrAsset", values?: undefined): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ENS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gnosis", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rsr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rsrAsset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "RTokenCreated(address,address,address,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RTokenCreated"): EventFragment;
}

export interface RTokenCreatedEventObject {
  main: string;
  rToken: string;
  stRSR: string;
  owner: string;
  version: string;
}
export type RTokenCreatedEvent = TypedEvent<
  [string, string, string, string, string],
  RTokenCreatedEventObject
>;

export type RTokenCreatedEventFilter = TypedEventFilter<RTokenCreatedEvent>;

export interface Deployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DeployerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ENS(overrides?: CallOverrides): Promise<[string]>;

    deploy(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      mandate: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      params: DeploymentParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    gnosis(overrides?: CallOverrides): Promise<[string]>;

    implementations(
      overrides?: CallOverrides
    ): Promise<
      [string, ComponentsStructOutput, string] & {
        main: string;
        components: ComponentsStructOutput;
        trade: string;
      }
    >;

    rsr(overrides?: CallOverrides): Promise<[string]>;

    rsrAsset(overrides?: CallOverrides): Promise<[string]>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  ENS(overrides?: CallOverrides): Promise<string>;

  deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    mandate: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    params: DeploymentParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  gnosis(overrides?: CallOverrides): Promise<string>;

  implementations(
    overrides?: CallOverrides
  ): Promise<
    [string, ComponentsStructOutput, string] & {
      main: string;
      components: ComponentsStructOutput;
      trade: string;
    }
  >;

  rsr(overrides?: CallOverrides): Promise<string>;

  rsrAsset(overrides?: CallOverrides): Promise<string>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ENS(overrides?: CallOverrides): Promise<string>;

    deploy(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      mandate: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      params: DeploymentParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    gnosis(overrides?: CallOverrides): Promise<string>;

    implementations(
      overrides?: CallOverrides
    ): Promise<
      [string, ComponentsStructOutput, string] & {
        main: string;
        components: ComponentsStructOutput;
        trade: string;
      }
    >;

    rsr(overrides?: CallOverrides): Promise<string>;

    rsrAsset(overrides?: CallOverrides): Promise<string>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "RTokenCreated(address,address,address,address,string)"(
      main?: PromiseOrValue<string> | null,
      rToken?: PromiseOrValue<string> | null,
      stRSR?: null,
      owner?: PromiseOrValue<string> | null,
      version?: null
    ): RTokenCreatedEventFilter;
    RTokenCreated(
      main?: PromiseOrValue<string> | null,
      rToken?: PromiseOrValue<string> | null,
      stRSR?: null,
      owner?: PromiseOrValue<string> | null,
      version?: null
    ): RTokenCreatedEventFilter;
  };

  estimateGas: {
    ENS(overrides?: CallOverrides): Promise<BigNumber>;

    deploy(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      mandate: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      params: DeploymentParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    gnosis(overrides?: CallOverrides): Promise<BigNumber>;

    implementations(overrides?: CallOverrides): Promise<BigNumber>;

    rsr(overrides?: CallOverrides): Promise<BigNumber>;

    rsrAsset(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deploy(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      mandate: PromiseOrValue<string>,
      owner: PromiseOrValue<string>,
      params: DeploymentParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    gnosis(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    implementations(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rsr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rsrAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
