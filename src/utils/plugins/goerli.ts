import { CollateralPlugin } from 'types'
import {
  COMPOUND_ADDRESS,
  STAKE_AAVE_ADDRESS,
  ZERO_ADDRESS,
} from 'utils/addresses'
import { ChainId } from 'utils/chains'
import { TARGET_UNITS } from 'utils/constants'

// Plugin addresses
const collateralAddresses = {
  DAI: '0xA6e159b274e00848322B9Fa89F0783876884CeDD',
  USDC: '0xF8Ad2522C049A03C5E6AB56427449162c0502f02',
  USDT: '0xeB1A036E83aD95f0a28d0c8E2F20bf7f1B299F05',
  USDP: '0x80A574cC2B369dc496af6655f57a16a4f180BfAF',
  TUSD: '0x9E8C96d86F1c85BC43200B8093159cf47e0CB921',
  BUSD: '0x440A634DdcFb890BCF8b0Bf07Ef2AaBB37dd5F8C',
  aDAI: '0x50a9d529EA175CdE72525Eaa809f5C3c47dAA1bB',
  aUSDC: '0x5757fF814da66a2B4f9D11d48570d742e246CfD9',
  aUSDT: '0x99bD63BF7e2a69822cD73A82d42cF4b5501e5E50',
  aBUSD: '0x688c95461d611Ecfc423A8c87caCE163C6B40384',
  aUSDP: '0x357d4dB0c2179886334cC33B8528048F7E1D3Fe3',
  cDAI: '0x87A959e0377C68A50b08a91ae5ab3aFA7F41ACA4',
  cUSDC: '0x6B87142C7e6cA80aa3E6ead0351673C45c8990e3',
  cUSDT: '0xEBD07CE38e2f46031c982136012472A4D24AE070',
  cUSDP: '0xC1E16AD7844Da1AEFFa6c3932AD02b823DE12d3F',
  cWBTC: '0x0E6D6cBdA4629Fb2D82b4b4Af0D5c887f21F3BC7',
  cETH: '0x6D05CB2CB647B58189FA16f81784C05B4bcd4fe9',
  WBTC: '0x8A9F74d40c5323E73B63a80c4282658fD43F3AA2',
  WETH: '0xF73EB45d83AC86f8a6F75a6252ca1a59a9A3aED3',
  EURT: '0x714341800AD1913B5FCCBFd5d136553Ad1C314d6',
}

// Addresses for underlying tokens on the plugins
const underlyingCollateralAddresses = {
  DAI: '0x4E35fAA0c4e6BA16534aa28DE0e40f7b702642D3',
  USDC: '0x9276fC221399d81a848E9d543a6FAA5e741E40A7',
  USDT: '0xAE64954A904da3fD9D71945980A849B8A9F755d7',
  BUSD: '0x66FE0f43D9f201474A54a3857c77599DEBbD38F4',
  USDP: '0x5d3E908ff0649F01d51d1513132736e96477C15d',
  TUSD: '0x56e938BC973fB23aCd7f043Fc11b61b1Ae3DDcC5',
  aDAI: '0x8bf8dd4FEf62b4bC942482793f75b1606b9A4Cb0',
  aUSDC: '0x9Fc379726c48A391a4F3Fb8b105184D3c9142E24',
  aUSDT: '0xB2fdE37a7C1c521C25C36f29109bFbBE13893994',
  aBUSD: '0x5Ebd4D0F79D0baEb2b0aEfe3395A930bb26ABc80',
  aUSDP: '0x4E01677488384B851EeAa09C8b8F6Dd0b16d7E9B',
  cDAI: '0xf6508Db0cfCADa4dE3d3e55F7AdB189f19390cB6',
  cUSDC: '0x057357b22Fd6A629367b5434c2af0D5bf44533A8',
  cUSDT: '0x4950dDbBaBa1aEB9b4FAada6B0ADE3DD3bCc0380',
  cUSDP: '0x199E12d58B36deE2D2B3dD2b91aD7bb25c787a71',
  cETH: '0x84E8e5dd7BfD8E9EFa2783eE438091cd17caFb0A',
  cWBTC: '0x3Bd9452C4987e6D5EF3748Bb1230CbefA36617EC',
  COMP: '0x1b4449895037f25b102B28B45b8bD50c8C44Aca1',
  WETH: '0xB5B58F0a853132EA8cB614cb17095dE87AF3E98b',
  WBTC: '0x528FdEd7CC39209ed67B4edA11937A9ABe1f6249',
  EURT: '0xD6da5A7ADE2a906d9992612752A339E3485dB508',
}

// GOERLI
const plugins: CollateralPlugin[] = [
  // FIAT COLLATERAL
  {
    symbol: 'DAI',
    address: collateralAddresses.DAI,
    decimals: 18,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'DAI',
    collateralToken: 'DAI',
    description: '',
    collateralAddress: underlyingCollateralAddresses.DAI,
    rewardToken: ZERO_ADDRESS,
  },
  {
    symbol: 'USDC',
    address: collateralAddresses.USDC,
    decimals: 6,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'USDC',
    collateralToken: 'USDC',
    description: 'Used in RSV',
    collateralAddress: underlyingCollateralAddresses.USDC,
    rewardToken: ZERO_ADDRESS,
  },
  {
    symbol: 'USDT',
    address: collateralAddresses.USDT,
    decimals: 6,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'USDT',
    collateralToken: 'USDT',
    description: '',
    collateralAddress: underlyingCollateralAddresses.USDT,
    rewardToken: ZERO_ADDRESS,
  },
  {
    symbol: 'USDP',
    address: collateralAddresses.USDP,
    decimals: 18,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'USDP',
    collateralToken: 'USDP',
    description: 'Used in RSV',
    collateralAddress: underlyingCollateralAddresses.USDP,
    rewardToken: ZERO_ADDRESS,
  },
  {
    symbol: 'TUSD',
    address: collateralAddresses.TUSD,
    decimals: 18,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'TUSD',
    collateralToken: 'TUSD',
    description: 'Used in RSV',
    collateralAddress: underlyingCollateralAddresses.TUSD,
    rewardToken: ZERO_ADDRESS,
  },
  {
    symbol: 'BUSD',
    address: collateralAddresses.BUSD,
    decimals: 18,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'BUSD',
    collateralToken: 'BUSD',
    description: '',
    collateralAddress: underlyingCollateralAddresses.BUSD,
    rewardToken: ZERO_ADDRESS,
  },
  // YIELD TOKEN COLLATERAL
  {
    symbol: 'aDAI',
    address: collateralAddresses.aDAI,
    decimals: 18,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'DAI',
    collateralToken: 'aDAI',
    description: '',
    collateralAddress: underlyingCollateralAddresses.aDAI,
    depositContract: '0x7A14687999335289240a15CA714237ebB85EF18E',
    rewardToken: STAKE_AAVE_ADDRESS[ChainId.Goerli],
    underlyingToken: underlyingCollateralAddresses.DAI,
  },
  {
    symbol: 'aUSDC',
    address: collateralAddresses.aUSDC,
    decimals: 6,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'USDC',
    collateralToken: 'aUSDC',
    description: '',
    collateralAddress: underlyingCollateralAddresses.aUSDC,
    depositContract: '0x9cCc7B600F80ed6F3d997698e01301D9016F8656',
    rewardToken: STAKE_AAVE_ADDRESS[ChainId.Goerli],
    underlyingToken: underlyingCollateralAddresses.USDC,
  },
  {
    symbol: 'aUSDT',
    address: collateralAddresses.aUSDT,
    decimals: 6,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'USDT',
    collateralToken: 'aUSDT',
    description: '',
    collateralAddress: underlyingCollateralAddresses.aUSDT,
    depositContract: '0x504e15CA74Ffe0791a7fc2c069dDa486d9F1805F',
    rewardToken: STAKE_AAVE_ADDRESS[ChainId.Goerli],
    underlyingToken: underlyingCollateralAddresses.USDT,
  },
  {
    symbol: 'aBUSD',
    address: collateralAddresses.aBUSD,
    decimals: 18,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'BUSD',
    collateralToken: 'aBUSD',
    description: '',
    collateralAddress: underlyingCollateralAddresses.aBUSD,
    depositContract: '0xE19ae8D1f3FFf987aaEaa65248BAB3A0d1FDC809',
    rewardToken: STAKE_AAVE_ADDRESS[ChainId.Goerli],
    underlyingToken: underlyingCollateralAddresses.BUSD,
  },
  {
    symbol: 'cDAI',
    address: collateralAddresses.cDAI,
    decimals: 6,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'DAI',
    collateralToken: 'cDAI',
    description: '',
    collateralAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    rewardToken: COMPOUND_ADDRESS[ChainId.Goerli],
  },
  {
    symbol: 'cUSDC',
    address: collateralAddresses.cUSDC,
    decimals: 6,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'USDC',
    collateralToken: 'cUSDC',
    description: '',
    collateralAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    rewardToken: COMPOUND_ADDRESS[ChainId.Goerli],
  },
  {
    symbol: 'cUSDT',
    address: collateralAddresses.cUSDT,
    decimals: 6,
    targetUnit: TARGET_UNITS.USD,
    referenceUnit: 'USDT',
    collateralToken: 'aUSDT',
    description: '',
    collateralAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    rewardToken: COMPOUND_ADDRESS[ChainId.Goerli],
  },
  {
    symbol: 'cWBTC',
    address: collateralAddresses.cWBTC,
    decimals: 18,
    targetUnit: TARGET_UNITS.BTC,
    referenceUnit: 'WBTC',
    collateralToken: 'cWBTC',
    description: '',
    collateralAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    rewardToken: COMPOUND_ADDRESS[ChainId.Goerli],
  },
  {
    symbol: 'cETH',
    address: collateralAddresses.cETH,
    decimals: 18,
    targetUnit: TARGET_UNITS.ETH,
    referenceUnit: 'ETH',
    collateralToken: 'cETH',
    description: '',
    collateralAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    rewardToken: COMPOUND_ADDRESS[ChainId.Goerli],
  },
  {
    symbol: 'wBTC',
    address: collateralAddresses.WBTC,
    decimals: 6,
    targetUnit: TARGET_UNITS.BTC,
    referenceUnit: 'wBTC',
    collateralToken: 'wBTC',
    description: '',
    collateralAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    rewardToken: ZERO_ADDRESS,
  },
  {
    symbol: 'wETH',
    address: collateralAddresses.WETH,
    decimals: 18,
    targetUnit: TARGET_UNITS.ETH,
    referenceUnit: 'wETH',
    collateralToken: 'wETH',
    description: '',
    collateralAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    rewardToken: ZERO_ADDRESS,
  },
  {
    symbol: 'EURT',
    address: collateralAddresses.EURT,
    decimals: 6,
    targetUnit: TARGET_UNITS.EUR,
    referenceUnit: 'EURT',
    collateralToken: 'EURT',
    description: '',
    collateralAddress: '0xC581b735A1688071A1746c968e0798D642EDE491',
    rewardToken: ZERO_ADDRESS,
  },
]

export default plugins