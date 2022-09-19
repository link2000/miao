var link2000 = {
  chunk: function (array, size = 1) {

    var ary = []
    var ary1 = []

    if (size == 0) {
      return array
    }
    if (size >= array.length) {      //小于和等于sise的数组都返回原数组
      return array
    }

    for (var i = 0; i < array.length; i++) {
      ary.push(array[i])
      if (ary.length == size) {
        ary1.push(ary)        //将分好的数组放进ary1里
        ary = []              //重新设置空数组
      }
    }
    if (ary[0]) {     //将多出的数push进数组
      ary1.push(ary)
    }
    return ary1
  },

  compact: function (array) {
    var ary = []

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
         ary.push(array[i])
      }
    }
    return ary
  },

  drop: function (array, n = 1) {
    var ary = []

    for (var i = n; i < array.length; i++) {
      ary.push(array[i])
    }
    return ary
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return ary
  },

  flatten: function (array, depth = 1) {
    var ary = []

    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        var ary1 = array[i]
        var len = ary1.length
        for (var j = 0; j < len; j++) {
          ary.push(ary1[j])
        }
      } else {
        ary.push(array[i])
      }
    }
    return ary
  },

  drop: function (ary, n = 1) {
    var res = []
    for (var i = n; i < ary.length; i++) {
      res.push(ary[i])
    }
    return res
  },


}
