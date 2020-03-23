import {
  createTransportReplayer,
  RecordStore
} from "@ledgerhq/hw-transport-mocker";
import Eth from "../src/Eth";
import { BigNumber } from "bignumber.js";
import { byContractAddress } from "../src/erc20"

test("getAppConfiguration", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => e006000000
    <= 010101069000    
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const result = await eth.getAppConfiguration();
  expect(result).toEqual({ arbitraryDataEnabled: 1, erc20ProvisioningNecessary: 0, starkEnabled: 0, version: "1.1.6" });
});

test("getAddress", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => e002000015058000002c8000003c800000008000000000000000
    <= 4104df00ad3869baad7ce54f4d560ba7f268d542df8f2679a5898d78a690c3db8f9833d2973671cb14b088e91bdf7c0ab00029a576473c0e12f84d252e630bb3809b28436241393833363265313939633431453138363444303932334146393634366433413634383435319000      
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const result = await eth.getAddress("44'/60'/0'/0'/0");
  expect(result).toEqual({
    address: "0xCbA98362e199c41E1864D0923AF9646d3A648451",
    publicKey:
      "04df00ad3869baad7ce54f4d560ba7f268d542df8f2679a5898d78a690c3db8f9833d2973671cb14b088e91bdf7c0ab00029a576473c0e12f84d252e630bb3809b"
  });
});

test("signTransaction", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => e00400003e058000002c8000003c800000008000000000000000e8018504e3b292008252089428ee52a8f3d6e5d15f8b131996950d7f296c7952872bd72a2487400080
    <= 1b3694583045a85ada8d15d5e01b373b00e86a405c9c52f7835691dcc522b7353b30392e638a591c65ed307809825ca48346980f52d004ab7a5f93657f7e62a4009000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const result = await eth.signTransaction(
    "44'/60'/0'/0'/0",
    "e8018504e3b292008252089428ee52a8f3d6e5d15f8b131996950d7f296c7952872bd72a2487400080"
  );
  expect(result).toEqual({
    r: "3694583045a85ada8d15d5e01b373b00e86a405c9c52f7835691dcc522b7353b",
    s: "30392e638a591c65ed307809825ca48346980f52d004ab7a5f93657f7e62a400",
    v: "1b"
  });
});

test("signPersonalMessage", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => e00800001d058000002c8000003c8000000080000000000000000000000474657374
    <= 1b8beafdd56521af1213d6d668a2aed262cc840e7174b642215aec013a1c88b2bd3a407b9125f1bfc015df6983ae8b87a34d54be367b4275834c3039622a73ee009000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const result = await eth.signPersonalMessage(
    "44'/60'/0'/0'/0",
    Buffer.from("test").toString("hex")
  );
  expect(result).toEqual({
    r: "8beafdd56521af1213d6d668a2aed262cc840e7174b642215aec013a1c88b2bd",
    s: "3a407b9125f1bfc015df6983ae8b87a34d54be367b4275834c3039622a73ee00",
    v: 27
  });
});

test("provideERC20TokenInformation", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => e00a000066035a5258e41d2489571d322189246dafa5ebde1f4699f4980000001200000001304402200ae8634c22762a8ba41d2acb1e068dcce947337c6dd984f13b820d396176952302203306a49d8a6c35b11a61088e1570b3928ca3a0db6bd36f577b5ef87628561ff7
    <= 9000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const zrxInfo = byContractAddress("0xe41d2489571d322189246dafa5ebde1f4699f498");
  const result = await eth.provideERC20TokenInformation(zrxInfo);
  expect(result).toEqual(true);
});

test("signAllowance", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => e00a0000670455534454dac17f958d2ee523a2206206994597c13d831ec700000006000000013044022078c66ccea3e4dedb15a24ec3c783d7b582cd260daf62fd36afe9a8212a344aed0220160ba8c1c4b6a8aa6565bed20632a091aeeeb7bfdac67fc6589a6031acbf511c
    <= 9000
    => e004000084058000002c8000003c800000000000000000000000f86d018504e3b2920082520894dac17f958d2ee523a2206206994597c13d831ec7872bd72a24874000b844095ea7b30000000000000000000000000102030405060708090a0b0c0d0e0f101112131400000000000000000000000000000000000000000000000000000000000186a0
    <= 1b0a5a7a8732d95ee05e6dd11b28500c0482fd9ef24028eb5448b5c9c713f13bbb1ef940556853fc8b3883e6ef810d18566f13019e6bea70f340cbfde36947408b9000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const tokenInfo = byContractAddress("0xdac17f958d2ee523a2206206994597c13d831ec7");
  await eth.provideERC20TokenInformation(tokenInfo);  
  const result = await eth.signTransaction(
    "44'/60'/0'/0/0",
    "f86d018504e3b2920082520894dac17f958d2ee523a2206206994597c13d831ec7872bd72a24874000b844095ea7b30000000000000000000000000102030405060708090a0b0c0d0e0f101112131400000000000000000000000000000000000000000000000000000000000186a0"
  );
  expect(result).toEqual({
    r: "0a5a7a8732d95ee05e6dd11b28500c0482fd9ef24028eb5448b5c9c713f13bbb",
    s: "1ef940556853fc8b3883e6ef810d18566f13019e6bea70f340cbfde36947408b",
    v: "1b"
  });
});

test("signAllowanceUnlimited", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => e00a0000670455534454dac17f958d2ee523a2206206994597c13d831ec700000006000000013044022078c66ccea3e4dedb15a24ec3c783d7b582cd260daf62fd36afe9a8212a344aed0220160ba8c1c4b6a8aa6565bed20632a091aeeeb7bfdac67fc6589a6031acbf511c
    <= 9000
    => e004000084058000002c8000003c800000000000000000000000f86d018504e3b2920082520894dac17f958d2ee523a2206206994597c13d831ec7872bd72a24874000b844095ea7b30000000000000000000000000102030405060708090a0b0c0d0e0f1011121314ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    <= 1b3fa6a78fb25f87f063fc8db5cb4efc1794e01c973994e26a6fa1603c3ac3db9d3dc98795b5f99ba1eeae84ef01ecbfad188f00446d56b6e9a0eb9ec6f4bae7fe9000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const tokenInfo = byContractAddress("0xdac17f958d2ee523a2206206994597c13d831ec7");
  await eth.provideERC20TokenInformation(tokenInfo);  
  const result = await eth.signTransaction(
    "44'/60'/0'/0/0",
    "f86d018504e3b2920082520894dac17f958d2ee523a2206206994597c13d831ec7872bd72a24874000b844095ea7b30000000000000000000000000102030405060708090a0b0c0d0e0f1011121314ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  );
  expect(result).toEqual({
    r: "3fa6a78fb25f87f063fc8db5cb4efc1794e01c973994e26a6fa1603c3ac3db9d",
    s: "3dc98795b5f99ba1eeae84ef01ecbfad188f00446d56b6e9a0eb9ec6f4bae7fe",
    v: "1b"
  });
});

test("starkGetPublicKey", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => f002000009028000534b00000000
    <= 05e8330615774c27af37530e34aa17e279eb1ac8ac91709932e0a1929bba54ac9000      
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const result = await eth.starkGetPublicKey("21323'/0");
  expect(result).toEqual(Buffer.from("05e8330615774c27af37530e34aa17e279eb1ac8ac91709932e0a1929bba54ac", "hex"));
});

test("starkSignOrderEth", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => f004010091028000534b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000010000000100000000000186a00000000000030d4000000d6a00001618
    <= 00029526c310368e835a2a0ee412a3bf084e0f94d91b8265f88a0bee32488223c4012c34bef05a7b80ba22b0d58a18acd1a8198ee8fc9b525f85d2f4f843c5510f9000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const result = await eth.starkSignOrder("21323'/0", null, new BigNumber(1), null, new BigNumber(1), 1, 1, new BigNumber(100000), new BigNumber(200000), 3434, 5656);
  expect(result).toEqual({
    r: "029526c310368e835a2a0ee412a3bf084e0f94d91b8265f88a0bee32488223c4",
    s: "012c34bef05a7b80ba22b0d58a18acd1a8198ee8fc9b525f85d2f4f843c5510f",
  });
});

test("starkSignOrderTokens", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => e00a000066035a5258e41d2489571d322189246dafa5ebde1f4699f4980000001200000001304402200ae8634c22762a8ba41d2acb1e068dcce947337c6dd984f13b820d396176952302203306a49d8a6c35b11a61088e1570b3928ca3a0db6bd36f577b5ef87628561ff7
    <= 9000
    => e00a0000670455534454dac17f958d2ee523a2206206994597c13d831ec700000006000000013044022078c66ccea3e4dedb15a24ec3c783d7b582cd260daf62fd36afe9a8212a344aed0220160ba8c1c4b6a8aa6565bed20632a091aeeeb7bfdac67fc6589a6031acbf511c
    <= 9000
    => f004010091028000534b00000000e41d2489571d322189246dafa5ebde1f4699f4980000000000000000000000000000000000000000000000000000000000000001dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000000000000000000000000000000000000000000001000000010000000100000000000186a00000000000030d4000000d6a00001618
    <= 0003c4a1aef46539c90eaad9a71eee8319586e2b749793335060a2431c42d0d48901faac9386aaaf9d8d2cc3229aecf9e202f4b83f63e3fff7426ca07725d10fb29000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const tokenInfo1 = byContractAddress("0xe41d2489571d322189246dafa5ebde1f4699f498");
  await eth.provideERC20TokenInformation(tokenInfo1);
  const tokenInfo2 = byContractAddress("0xdac17f958d2ee523a2206206994597c13d831ec7");
  await eth.provideERC20TokenInformation(tokenInfo2);
  const result = await eth.starkSignOrder("21323'/0", "e41d2489571d322189246dafa5ebde1f4699f498", new BigNumber(1), "dac17f958d2ee523a2206206994597c13d831ec7", new BigNumber(1), 1, 1, new BigNumber(100000), new BigNumber(200000), 3434, 5656);
  expect(result).toEqual({
    r: "03c4a1aef46539c90eaad9a71eee8319586e2b749793335060a2431c42d0d489",
    s: "01faac9386aaaf9d8d2cc3229aecf9e202f4b83f63e3fff7426ca07725d10fb2",
  });
});

test("starkSignTransfer1", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => f004020075028000534b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001f1f789e47bb134082b2e901f779a0d188af7fbd7d97d10a9e121f22adadb5b05000000010000000100000000000186a000000d6a00001618
    <= 00028c0e3b4d2e7b0c1055c7d40e8df12676bc90cf19d0006225d500baecd5e11c0305fe1782f050839619c3e9627121bacd3a8dc87859e1ba5376fbd1b3bee4d49000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const result = await eth.starkSignTransfer("21323'/0", null, new BigNumber(1), "f1f789e47bb134082b2e901f779a0d188af7fbd7d97d10a9e121f22adadb5b05", 1, 1, new BigNumber(100000), 3434, 5656);
  expect(result).toEqual({
    r: "028c0e3b4d2e7b0c1055c7d40e8df12676bc90cf19d0006225d500baecd5e11c",
    s: "0305fe1782f050839619c3e9627121bacd3a8dc87859e1ba5376fbd1b3bee4d4",
  });
});

test("starkProvideQuantum", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => f008000034e41d2489571d322189246dafa5ebde1f4699f4980000000000000000000000000000000000000000000000000000000000000001
    <= 9000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const result = await eth.starkProvideQuantum("e41d2489571d322189246dafa5ebde1f4699f498", new BigNumber(1));
  expect(result).toEqual(true);
});

test("starkDepositEth", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => f00800003400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
    <= 9000
    => e004000084058000002c8000003c800000000000000000000000f86d018504e3b29200825208940102030405060708090a0b0c0d0e0f1011121314872bd72a24874000b844e2bbb15801142460171646987f20c714eda4b92812b22b811f56f27130937c267e29bd9e0000000000000000000000000000000000000000000000000000000000000001
    <= 1be263d5b15fb088411683ac652f5429173e78bd3f6934a905fbb67f302874d49122b175206744fe898c0f7ed21520e06c919fd9ef61fc5368e62def1f86b991439000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  await eth.starkProvideQuantum(null, new BigNumber(1))
  const result = await eth.signTransaction(
    "44'/60'/0'/0/0",
    "f86d018504e3b29200825208940102030405060708090a0b0c0d0e0f1011121314872bd72a24874000b844e2bbb15801142460171646987f20c714eda4b92812b22b811f56f27130937c267e29bd9e0000000000000000000000000000000000000000000000000000000000000001"
  );
  expect(result).toEqual({
    r: "e263d5b15fb088411683ac652f5429173e78bd3f6934a905fbb67f302874d491",
    s: "22b175206744fe898c0f7ed21520e06c919fd9ef61fc5368e62def1f86b99143",
    v: "1b"
  });
});

test("starkDepositToken", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => e00a0000670455534454dac17f958d2ee523a2206206994597c13d831ec700000006000000013044022078c66ccea3e4dedb15a24ec3c783d7b582cd260daf62fd36afe9a8212a344aed0220160ba8c1c4b6a8aa6565bed20632a091aeeeb7bfdac67fc6589a6031acbf511c
    <= 9000
    => f008000034dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000000000000000000000000000000000000000000001
    <= 9000
    => e004000096058000002c8000003c800000000000000000000000f88d018504e3b29200825208940102030405060708090a0b0c0d0e0f1011121314872bd72a24874000b86400aeef8a02ce625e94458d39dd0bf3b45a843544dd4a14b8169045a3a3d15aa564b936c50000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000
    <= 9000
    => e00480000e0000000000000000000000030d40
    <= 1b294214de6341a0a63609f5643700c58be4b7aa46a5f56dea8c9ff5ecf4d5228662a3a4c8a6a0714d147b2a98071cfb892ed3f3edd5da049a2608605970b63dc29000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const tokenInfo = byContractAddress("0xdac17f958d2ee523a2206206994597c13d831ec7");
  await eth.provideERC20TokenInformation(tokenInfo);
  await eth.starkProvideQuantum("0xdac17f958d2ee523a2206206994597c13d831ec7", new BigNumber(1));    
  const result = await eth.signTransaction(
    "44'/60'/0'/0/0",
    "f88d018504e3b29200825208940102030405060708090a0b0c0d0e0f1011121314872bd72a24874000b86400aeef8a02ce625e94458d39dd0bf3b45a843544dd4a14b8169045a3a3d15aa564b936c500000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000030d40"
  );
  expect(result).toEqual({
    r: "294214de6341a0a63609f5643700c58be4b7aa46a5f56dea8c9ff5ecf4d52286",
    s: "62a3a4c8a6a0714d147b2a98071cfb892ed3f3edd5da049a2608605970b63dc2",
    v: "1b"
  });
});

test("starkWithdrawEth", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => f00800003400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
    <= 9000
    => e004000063058000002c8000003c800000000000000000000000f84c018504e3b29200825208940102030405060708090a0b0c0d0e0f1011121314872bd72a24874000a42e1a7d4d01142460171646987f20c714eda4b92812b22b811f56f27130937c267e29bd9e
    <= 1b27839551fb3d8b7717ebb02a81308740a6d4b719afa12159b4c41308edc3d82c07c40a39ea0aa3c5114b05f1441de594467e152e7b267a25433236da78d201ee9000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  await eth.starkProvideQuantum(null, new BigNumber(1))
  const result = await eth.signTransaction(
    "44'/60'/0'/0/0",
    "f84c018504e3b29200825208940102030405060708090a0b0c0d0e0f1011121314872bd72a24874000a42e1a7d4d01142460171646987f20c714eda4b92812b22b811f56f27130937c267e29bd9e"
  );
  expect(result).toEqual({
    r: "27839551fb3d8b7717ebb02a81308740a6d4b719afa12159b4c41308edc3d82c",
    s: "07c40a39ea0aa3c5114b05f1441de594467e152e7b267a25433236da78d201ee",
    v: "1b"
  });
});

test("starkWithdrawToken", async () => {
  const Transport = createTransportReplayer(
    RecordStore.fromString(`
    => e00a0000670455534454dac17f958d2ee523a2206206994597c13d831ec700000006000000013044022078c66ccea3e4dedb15a24ec3c783d7b582cd260daf62fd36afe9a8212a344aed0220160ba8c1c4b6a8aa6565bed20632a091aeeeb7bfdac67fc6589a6031acbf511c
    <= 9000
    => f008000034dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000000000000000000000000000000000000000000001
    <= 9000
    => e004000063058000002c8000003c800000000000000000000000f84c018504e3b29200825208940102030405060708090a0b0c0d0e0f1011121314872bd72a24874000a42e1a7d4d02ce625e94458d39dd0bf3b45a843544dd4a14b8169045a3a3d15aa564b936c5
    <= 1bad0d49ea55b2fd57523ad94698e16acb8b151fa57afd4ae37bb457e9200aac1b53162e87514d7a0ebc383a69f9c27a6abc4ee038f1360b4ffe9cd3f63b4c7f429000
    `)
  );
  const transport = await Transport.open();
  const eth = new Eth(transport);
  const tokenInfo = byContractAddress("0xdac17f958d2ee523a2206206994597c13d831ec7");
  await eth.provideERC20TokenInformation(tokenInfo);
  await eth.starkProvideQuantum("0xdac17f958d2ee523a2206206994597c13d831ec7", new BigNumber(1));    
  const result = await eth.signTransaction(
    "44'/60'/0'/0/0",
    "f84c018504e3b29200825208940102030405060708090a0b0c0d0e0f1011121314872bd72a24874000a42e1a7d4d02ce625e94458d39dd0bf3b45a843544dd4a14b8169045a3a3d15aa564b936c5"
  );
  expect(result).toEqual({
    r: "ad0d49ea55b2fd57523ad94698e16acb8b151fa57afd4ae37bb457e9200aac1b",
    s: "53162e87514d7a0ebc383a69f9c27a6abc4ee038f1360b4ffe9cd3f63b4c7f42",
    v: "1b"
  });
});
