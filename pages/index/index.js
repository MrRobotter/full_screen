Page({
  data:{
    text:"欢迎使用横屏全屏字幕小程序",
    fontSize:60,
    speed:5,
    speedNum:5,
    colorIndex:0,
    colorList:["#ffffff","#ff0000","#00ff00","#00ccff","#ffff00"],
    fullScreen:false
  },
  onTextInput(e){
    this.setData({text:e.detail.value})
  },
  onFontSizeChange(e){
    this.setData({fontSize:e.detail.value})
  },
  onSpeedChange(e){
    const val = e.detail.value;
    //数值越大，动画时间越小，滚动越快
    this.setData({
      speed:val,
      speedNum:11-val
    })
  },
  onColorChange(e){
    this.setData({colorIndex:e.detail.value})
  },
  enterFull(){
    if(!this.data.text.trim()){
      wx.showToast({title:"请输入字幕",icon:"none"})
      return
    }
    // 锁定横屏
    wx.setPageOrientation({
      orientation: 'landscape',
      success: () => {
        this.setData({fullScreen:true})
        wx.showToast({title:"点击屏幕退出",icon:"none"})
      }
    })
  },
  exitFull(){
    //退出字幕，恢复竖屏 
    wx.setPageOrientation({
      orientation: 'portrait',
      success:()=>{
        this.setData({fullScreen:false})
      }
    })
  },
  clearText(){
    this.setData({text:""})
  }
})
