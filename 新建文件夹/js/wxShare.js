// 寰俊鍒嗕韩鍑芥暩
function wxShare(title, pagelink, imgUrl, desc,shareFunc) {
  var share_title = title;
  var share_link = pagelink;
  var share_img_url = imgUrl;//鍥剧墖URL
  var share_desc = desc;
  var share_Func= shareFunc;
  var app_id = 'wxd2055d67ada0f37b';
  function is_weixn() {  
    var ua = navigator.userAgent.toLowerCase();  
    if(ua.match(/MicroMessenger/i) == "micromessenger") {  
      return true;  
    } else {  
      return false;  
    }  
  } 

  if(is_weixn()) {
    $.ajax({
      url: "http://www.1905.com" +
      "/m/api/weixin/getSignature?appId=" + app_id + "&url=" + encodeURIComponent(window.parent.document.URL.split('#')[0]),
      type: "get",
      dataType: "jsonp",
      success: function(data) {
        wx.config({
          debug: false,
          appId: app_id, 
          timestamp: data.times, 
          nonceStr: data.nonceStr, 
          signature: data.signature, 
          jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
        });
      }
    });
  }
  
  wx.ready(function() {
    // 鍒嗕韩鍒版湅鍙嬪湀
    wx.onMenuShareTimeline({
      title: share_title,
      desc: share_desc,
      link: share_link,
      imgUrl: share_img_url,
      success: share_Func,
      cancel: share_Func,
      fail: share_Func
    });
    // 鍒嗕韩鍒版湅鍙�
    wx.onMenuShareAppMessage({
      title: share_title,
      desc: share_desc,
      link: share_link,
      imgUrl: share_img_url
    });
  }); 
}