// export const getSender = () => (typeof self !== 'undefined' ? self : null)

export function getSender () {
    return typeof self !== 'undefined' ? self : null
}