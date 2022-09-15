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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace IFacadeP1 {
  export type PendingStruct = {
    index: BigNumberish;
    availableAt: BigNumberish;
    amount: BigNumberish;
  };

  export type PendingStructOutput = [BigNumber, BigNumber, BigNumber] & {
    index: BigNumber;
    availableAt: BigNumber;
    amount: BigNumber;
  };
}

export interface FacadeInterface extends utils.Interface {
  functions: {
    "backingOverview(address)": FunctionFragment;
    "basketBreakdown(address)": FunctionFragment;
    "basketTokens(address)": FunctionFragment;
    "claimRewards(address)": FunctionFragment;
    "currentAssets(address)": FunctionFragment;
    "issue(address,uint256)": FunctionFragment;
    "maxIssuable(address,address)": FunctionFragment;
    "pendingIssuances(address,address)": FunctionFragment;
    "pendingUnstakings(address,address)": FunctionFragment;
    "price(address)": FunctionFragment;
    "runAuctionsForAllTraders(address)": FunctionFragment;
    "stToken(address)": FunctionFragment;
    "totalAssetValue(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "backingOverview"
      | "basketBreakdown"
      | "basketTokens"
      | "claimRewards"
      | "currentAssets"
      | "issue"
      | "maxIssuable"
      | "pendingIssuances"
      | "pendingUnstakings"
      | "price"
      | "runAuctionsForAllTraders"
      | "stToken"
      | "totalAssetValue"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "backingOverview",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "basketBreakdown",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "basketTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "currentAssets",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "issue",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxIssuable",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingIssuances",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingUnstakings",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "price", values: [string]): string;
  encodeFunctionData(
    functionFragment: "runAuctionsForAllTraders",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "stToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalAssetValue",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "backingOverview",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "basketBreakdown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "basketTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "issue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxIssuable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingIssuances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingUnstakings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "runAuctionsForAllTraders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAssetValue",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Facade extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FacadeInterface;

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
    backingOverview(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { backing: BigNumber; insurance: BigNumber }
    >;

    basketBreakdown(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    basketTokens(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    claimRewards(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentAssets(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    issue(
      rToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    maxIssuable(
      rToken: string,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pendingIssuances(
      rToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<
      [IFacadeP1.PendingStructOutput[]] & {
        issuances: IFacadeP1.PendingStructOutput[];
      }
    >;

    pendingUnstakings(
      rToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<
      [IFacadeP1.PendingStructOutput[]] & {
        unstakings: IFacadeP1.PendingStructOutput[];
      }
    >;

    price(rToken: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    runAuctionsForAllTraders(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stToken(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<[string] & { stTokenAddress: string }>;

    totalAssetValue(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  backingOverview(
    rToken: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { backing: BigNumber; insurance: BigNumber }
  >;

  basketBreakdown(
    rToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  basketTokens(rToken: string, overrides?: CallOverrides): Promise<string[]>;

  claimRewards(
    rToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentAssets(
    rToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  issue(
    rToken: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  maxIssuable(
    rToken: string,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pendingIssuances(
    rToken: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<IFacadeP1.PendingStructOutput[]>;

  pendingUnstakings(
    rToken: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<IFacadeP1.PendingStructOutput[]>;

  price(rToken: string, overrides?: CallOverrides): Promise<BigNumber>;

  runAuctionsForAllTraders(
    rToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stToken(rToken: string, overrides?: CallOverrides): Promise<string>;

  totalAssetValue(
    rToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    backingOverview(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { backing: BigNumber; insurance: BigNumber }
    >;

    basketBreakdown(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { erc20s: string[]; uoaShares: BigNumber[] }
    >;

    basketTokens(rToken: string, overrides?: CallOverrides): Promise<string[]>;

    claimRewards(rToken: string, overrides?: CallOverrides): Promise<void>;

    currentAssets(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tokens: string[]; amounts: BigNumber[] }
    >;

    issue(
      rToken: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tokens: string[]; deposits: BigNumber[] }
    >;

    maxIssuable(
      rToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingIssuances(
      rToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<IFacadeP1.PendingStructOutput[]>;

    pendingUnstakings(
      rToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<IFacadeP1.PendingStructOutput[]>;

    price(rToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    runAuctionsForAllTraders(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stToken(rToken: string, overrides?: CallOverrides): Promise<string>;

    totalAssetValue(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    backingOverview(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    basketBreakdown(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    basketTokens(rToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentAssets(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    issue(
      rToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    maxIssuable(
      rToken: string,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pendingIssuances(
      rToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingUnstakings(
      rToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(rToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    runAuctionsForAllTraders(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stToken(rToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalAssetValue(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    backingOverview(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    basketBreakdown(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    basketTokens(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentAssets(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    issue(
      rToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    maxIssuable(
      rToken: string,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pendingIssuances(
      rToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingUnstakings(
      rToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    runAuctionsForAllTraders(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stToken(
      rToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalAssetValue(
      rToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
