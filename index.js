module.exports = (s, b) => (b = new Uint8Array((s % 8 ? 1 : 0) + (s >> 3)), {
  buffer: b,
  get: (i, v) => !!(b[i >> 3] & (128 >> (i % 8))),
  set: (i, v) => !!(v ? b[i >> 3] |= 128 >> (i % 8) : b[i >> 3] &= ~(128 >> i % 8))
})
