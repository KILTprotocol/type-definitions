import { typeBundleForPolkadot } from '../src'

const bundleTypes = typeBundleForPolkadot.types
if (!bundleTypes || !bundleTypes.length) {
    console.log("No types were defined.")
} else {
    const lastDeclaredTypes = bundleTypes[bundleTypes.length - 1]
    console.log("Types minmax version:")
    console.log(JSON.stringify(lastDeclaredTypes.minmax, undefined, 2))
    console.log("\nTypes definition:")
    console.log(JSON.stringify(lastDeclaredTypes.types, undefined, 2))
}