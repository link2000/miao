var link2000 = {
  chunk: function (array, size = 1) {

    var ary = []
    var ary1 = []

    if (size == 0) {
      return array
    }
    if (size >= array.length && size !== 0) {
      return array
    }

    for (var i = 0; i < array.length; i++) {
      ary.push(array[i])
      if (ary.length == size) {
        ary1.push(ary)
        ary = []
      }
    }
    if (ary[0]) {
      ary1.push(ary)
    }
    return ary1
  },

  compact: function() {},

  fill: function() {},
}
