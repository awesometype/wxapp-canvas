
function drawWithArr(arr) {
  var radius = 5;
  var space = 200;
  var tempS = 200;
  var a = 200;
  var b = 100;
  var tempB = 100;
  var windowWidth = 320;
  wx.getSystemInfo({
    success: function (res) {
      windowWidth = res.windowWidth;
      // space = windowWidth / 6;
    }
  })

  var ha = Math.cos(Math.PI / 180 * 60)
  console.log(ha)

  var context = wx.createContext()


  context.setLineWidth(2)


  // context.beginPath();
  context.setStrokeStyle("#00ff00")


  //////////////////////////////////////////////////////////////////////////////一层
  context.beginPath();
  context.moveTo(a, b)//一

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//二

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72), b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//三

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72) - space, b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//四

  context.lineTo(a - space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//五

  context.lineTo(a, b)//一
  context.stroke()

  //////////////////////////////////////////////////////////////////////////////五条分割线

  context.beginPath();
  context.moveTo(a, b)
  context.lineTo(a, b + space / 2 / Math.cos(Math.PI / 180 * 54))//中

  console.log(b + space / 2 / Math.cos(Math.PI / 180 * 54))

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//二

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72), b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//三

  context.lineTo(a, b + space / 2 / Math.cos(Math.PI / 180 * 54))//中

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72) - space, b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//四

  context.lineTo(a, b + space / 2 / Math.cos(Math.PI / 180 * 54))//中

  context.lineTo(a - space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//五

  context.stroke()

  //////////////////////////////////////////////////////////////////////////////二层
  context.beginPath();
  context.setStrokeStyle("#0000ff")


  b = b + 0.2 * space / 2 / Math.cos(Math.PI / 180 * 54)
  space = space * 0.8
  console.log(b)
  context.beginPath();
  context.moveTo(a, b)//一

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//二

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72), b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//三

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72) - space, b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//四

  context.lineTo(a - space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//五

  context.lineTo(a, b)//一
  context.stroke()



  //////////////////////////////////////////////////////////////////////////////三层
  context.beginPath();
  context.setStrokeStyle("#0000ff")

  b = tempB;
  space = tempS;
  b = b + 0.4 * space / 2 / Math.cos(Math.PI / 180 * 54)
  space = space * 0.6
  console.log(b)
  context.beginPath();
  context.moveTo(a, b)//一

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//二

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72), b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//三

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72) - space, b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//四

  context.lineTo(a - space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//五

  context.lineTo(a, b)//一
  context.stroke()



  //////////////////////////////////////////////////////////////////////////////四层
  b = tempB;
  space = tempS;
  context.beginPath();
  context.setStrokeStyle("#0000ff")


  b = b + 0.6 * space / 2 / Math.cos(Math.PI / 180 * 54)
  console.log(b)
  space = space * 0.4
  console.log(b)
  context.beginPath();
  context.moveTo(a, b)//一

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//二

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72), b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//三

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72) - space, b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//四

  context.lineTo(a - space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//五

  context.lineTo(a, b)//一
  context.stroke()


  //////////////////////////////////////////////////////////////////////////////五层
  b = tempB;
  space = tempS;
  context.beginPath();
  context.setStrokeStyle("#0000ff")


  b = b + 0.8 * space / 2 / Math.cos(Math.PI / 180 * 54)
  console.log(b)
  space = space * 0.2
  console.log(b)
  context.beginPath();
  context.moveTo(a, b)//一

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//二

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72), b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//三

  context.lineTo(a + space * Math.cos(Math.PI / 180 * 36) - space * Math.cos(Math.PI / 180 * 72) - space, b + space * Math.cos(Math.PI / 180 * 54) + space * Math.cos(Math.PI / 180 * 18))//四

  context.lineTo(a - space * Math.cos(Math.PI / 180 * 36), b + space * Math.cos(Math.PI / 180 * 54))//五

  context.lineTo(a, b)//一
  context.stroke()

  //////////////////////////////////////////////////////////////////////////////绘制比例
  b = tempB;
  space = tempS;
  context.beginPath();
  context.setStrokeStyle("rgba(100%,25%,100%,0.5)")
  context.setFillStyle("rgba(100%,25%,100%,0.5)")
  //总宽 space / 2 / Math.cos(Math.PI / 180 * 54)
  var width = space / 2 / Math.cos(Math.PI / 180 * 54)
  //成绩1  (a, b + 总宽 - g1/100*总宽)
  context.moveTo(a,b+width-0.7*width)
  //成绩2 (a + 总宽*比例*sin72) b+总宽-总宽*比例*cos72
context.lineTo(a+width*0.5*Math.sin(Math.PI / 180 * 72),b+width-width*0.5*Math.cos(Math.PI / 180 * 72))
//成绩3 a+width*bi*cos54
context.lineTo(a+width*0.9*Math.cos(Math.PI / 180 * 54),b+width+width*0.9*Math.cos(Math.PI / 180 * 36))
//成绩4
context.lineTo(a-width*0.7*Math.cos(Math.PI / 180 * 54),b+width+width*0.7*Math.cos(Math.PI / 180 * 36))
// 成绩5
context.lineTo(a-width*0.8*Math.sin(Math.PI / 180 * 72),b+width-width*0.8*Math.cos(Math.PI / 180 * 72))
//huiqu
context.lineTo(a,b+width-0.7*width)
context.stroke()
context.fill()


  //   context.setStrokeStyle("#00ff00")
  //   context.setFillStyle("#ff0000")






  // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
  wx.drawCanvas({
    canvasId: 'snakeCanvas',
    actions: context.getActions(), // 获取绘图动作数组

  })
}

module.exports = {
  drawWithArr: drawWithArr
}
