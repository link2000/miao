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
         ary.push(ary[i])
      }
    }
    return ary
  },

  fill: function() {},
}
