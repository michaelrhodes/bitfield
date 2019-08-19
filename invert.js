module.exports = invert

function invert (buffer) {
  var u8a = buffer.slice()
  var i = 0, l = u8a.byteLength
  for (; i < l; i++) u8a[i] = ~u8a[i] & 255
  return u8a
}
