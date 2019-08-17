module.exports = bitfield

function bitfield (s, b) {
  return b = typeof s !== 'number' ? s : new Uint8Array((s % 8 ? 1 : 0) + (s >> 3)), {
    get: (i, v) => !!(b[i >> 3] & (128 >> (i % 8))),
    set: (i, v) => !!(v ? b[i >> 3] |= 128 >> (i % 8) : b[i >> 3] &= ~(128 >> i % 8)),
    buffer: b
  }
}
