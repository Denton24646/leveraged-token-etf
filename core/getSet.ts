import SetProtocol from 'setprotocol.js';
import * as Web3 from 'web3';

//const web3 = new Web3();
const provider = new Web3.providers.HttpProvider('http://localhost:8545');

const config = {
    coreAddress: '0x5315e44798395d4a952530d131249fe00f554565',
    setTokenFactoryAddress: '0xdff540fe764855d3175dcfae9d91ae8aee5c6d6f',
    transferProxyAddress: '0x2ebb94cc79d7d0f1195300aaf191d118f53292a8',
    vaultAddress: '0x72d5a2213bfe46df9fbda08e22f536ac6ca8907e',
    rebalancingSetTokenFactoryAddress: '0xc1be2c0bb387aa13d5019a9c518e8bc93cb53360',
  };

  const setProtocol = new SetProtocol(provider, config);