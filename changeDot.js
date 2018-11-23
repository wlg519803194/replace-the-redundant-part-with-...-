// 多余的变成省略号
/* params: {
    ele: 需要变成点的元素,字符串如（'.a'）
    len: 控制的长度
  }
  返回处理好的字符串 */
export let changeDot = function (ele, len) {
  var el = document.querySelectorAll(ele)
  for (let i = 0; i < el.length; i++) {
    var getLen = GetLength(el[i].innerText)
    if (getLen > len) {
      el[i].innerText = cutstr(el[i].innerText, len)
    }
  }
  function GetLength (str) {
    // <summary>获得字符串实际长度，中文2，英文1</summary>
    // <param name="str">要获得长度的字符串</param>
    var realLength = 0
    var len = str.length
    var charCode = -1
    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i)
      if (charCode >= 0 && charCode <= 128) realLength += 1
      else realLength += 2
    }
    return realLength
  }
  // js截取字符串，中英文都能用
  // 如果给定的字符串大于指定长度，截取指定长度返回，否者返回源字符串。
  // 字符串，长度
  /**
   * js截取字符串，中英文都能用
   * @param str：需要截取的字符串
   * @param len: 需要截取的长度
   */
  function cutstr (str, len) {
    var strLength = 0
    var strLen = 0
    var strCut = ''
    strLen = str.length
    for (var i = 0; i < strLen; i++) {
      var a = str.charAt(i)
      strLength++
      if (escape(a).length > 4) {
        // 中文字符的长度经编码之后大于4
        strLength++
      }
      strCut = strCut.concat(a)
      if (strLength >= len) {
        strCut = strCut.concat('...')
        return strCut
      }
    }
    // 如果给定字符串小于指定长度，则返回源字符串
    if (strLength < len) {
      return str
    }
  }
}
