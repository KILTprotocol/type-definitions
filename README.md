# type-definitions

KILT's type definitions for Polkadot.js 

## example usage


```js
const {
  typeBundleForPolkadot,
} = require('@kiltprotocol/type-definitions')
const { ApiPromise, WsProvider } = require('@polkadot/api')

const api = await ApiPromise.create({
    provider: new WsProvider('wss://peregrine.kilt.io'),
    typesBundle: {
        spec: {
            'mashnet-node': typeBundleForPolkadot,
            'kilt-spiritnet': typeBundleForPolkadot,
        },
    },
})

console.log(`Spec: ${api.runtimeVersion.specName.toString()}`)
```