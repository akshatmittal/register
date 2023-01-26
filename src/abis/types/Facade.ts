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
  PromiseOrValue,
} from "./common";

export declare namespace IFacadeRead {
  export type PendingStruct = {
    index: PromiseOrValue<BigNumberish>;
    availableAt: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
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
    "backupConfig(address,bytes32)": FunctionFragment;
    "basketBreakdown(address)": FunctionFragment;
    "basketTokens(address)": FunctionFragment;
    "issue(address,uint256)": FunctionFragment;
    "maxIssuable(address,address)": FunctionFragment;
    "pendingUnstakings(address,address)": FunctionFragment;
    "price(address)": FunctionFragment;
    "primeBasket(address)": FunctionFragment;
    "stToken(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "backingOverview"
      | "backupConfig"
      | "basketBreakdown"
      | "basketTokens"
      | "issue"
      | "maxIssuable"
      | "pendingUnstakings"
      | "price"
      | "primeBasket"
      | "stToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "backingOverview",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "backupConfig",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "basketBreakdown",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "basketTokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "issue",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "maxIssuable",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingUnstakings",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "price",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "primeBasket",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stToken",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "backingOverview",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "backupConfig",
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
  decodeFunctionResult(functionFragment: "issue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxIssuable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingUnstakings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "primeBasket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stToken", data: BytesLike): Result;

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
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        backing: BigNumber;
        overCollateralization: BigNumber;
      }
    >;

    backupConfig(
      rToken: PromiseOrValue<string>,
      targetName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber] & { erc20s: string[]; max: BigNumber }>;

    basketBreakdown(
      rToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    basketTokens(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    issue(
      rToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    maxIssuable(
      rToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pendingUnstakings(
      rToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [IFacadeRead.PendingStructOutput[]] & {
        unstakings: IFacadeRead.PendingStructOutput[];
      }
    >;

    price(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { low: BigNumber; high: BigNumber }>;

    primeBasket(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], BigNumber[]] & {
        erc20s: string[];
        targetNames: string[];
        targetAmts: BigNumber[];
      }
    >;

    stToken(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { stTokenAddress: string }>;
  };

  backingOverview(
    rToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      backing: BigNumber;
      overCollateralization: BigNumber;
    }
  >;

  backupConfig(
    rToken: PromiseOrValue<string>,
    targetName: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber] & { erc20s: string[]; max: BigNumber }>;

  basketBreakdown(
    rToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  basketTokens(
    rToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  issue(
    rToken: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  maxIssuable(
    rToken: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pendingUnstakings(
    rToken: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IFacadeRead.PendingStructOutput[]>;

  price(
    rToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { low: BigNumber; high: BigNumber }>;

  primeBasket(
    rToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string[], string[], BigNumber[]] & {
      erc20s: string[];
      targetNames: string[];
      targetAmts: BigNumber[];
    }
  >;

  stToken(
    rToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    backingOverview(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        backing: BigNumber;
        overCollateralization: BigNumber;
      }
    >;

    backupConfig(
      rToken: PromiseOrValue<string>,
      targetName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber] & { erc20s: string[]; max: BigNumber }>;

    basketBreakdown(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], string[]] & {
        erc20s: string[];
        uoaShares: BigNumber[];
        targets: string[];
      }
    >;

    basketTokens(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    issue(
      rToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { tokens: string[]; deposits: BigNumber[] }
    >;

    maxIssuable(
      rToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingUnstakings(
      rToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IFacadeRead.PendingStructOutput[]>;

    price(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { low: BigNumber; high: BigNumber }>;

    primeBasket(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], BigNumber[]] & {
        erc20s: string[];
        targetNames: string[];
        targetAmts: BigNumber[];
      }
    >;

    stToken(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    backingOverview(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    backupConfig(
      rToken: PromiseOrValue<string>,
      targetName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    basketBreakdown(
      rToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    basketTokens(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issue(
      rToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    maxIssuable(
      rToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pendingUnstakings(
      rToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    primeBasket(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stToken(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    backingOverview(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    backupConfig(
      rToken: PromiseOrValue<string>,
      targetName: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    basketBreakdown(
      rToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    basketTokens(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issue(
      rToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    maxIssuable(
      rToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pendingUnstakings(
      rToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    primeBasket(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stToken(
      rToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
