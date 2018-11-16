$(function () {
  let doc_width = $(window).width();
  // 定义一个开关，判断菜单显示或隐藏
  window.menuFlag = window.menuFlag === undefined ? "" : window.menuFlag;
  // 保存内容高度
  let contentHeight = $('.tea-content').height();

  /**
   * 菜单显示或隐藏按钮
   * 当屏幕小于等于1024时，菜单默认隐藏，相反则显示
   */
  if (doc_width <= 1024) {
    window.menuFlag = false;
  } else {
    window.menuFlag = true;
  };
  
  $('.tea-content .fa-navicon').on('click', function () {
    if (window.menuFlag) {
      if (doc_width <= 1024) {
        $('#menu-mask').fadeOut(200);
        $('.main .tea-menu').stop().animate({ //菜单隐藏滑出动画效果
          'left': '-250px'
        }, 300);
        $('.tea-content').css('height', contentHeight + 'px'); //内容恢复原始高度
      } else {
        $('.main .tea-menu').fadeOut(100);
        $('.main .gotop').css('left','910px');
        $('.tea-content').css('width', '100%') //PC端菜单隐藏时，内容宽度100%
      }
      window.menuFlag = false
    } else {
      if (doc_width <= 1024) {
        $('#menu-mask').fadeIn(200);
        $('.main .tea-menu').stop().animate({ //菜单显示滑入动画效果
          'left': '0px'
        }, 300)
        $('.tea-content').height($('#menu-mask').height()); //内容高度为遮罩高度，使出现遮罩时内容区域无法滚动
      } else {
        $('.main .tea-menu').fadeIn(100);
        $('.main .gotop').css('left', '1160px');
        $('.tea-content').css('width', 'calc(100vw - 250px)'); //PC端菜单显示时，内容宽度100vw-250px
      }
      window.menuFlag = true
    }
  })

  /**
   * 遮罩动画
   * 点击灰色遮罩时， 菜单向左滑出隐藏， window.menuFlag变为false
   */
  $('.main').on('click', '#menu-mask', function () {
    $('#menu-mask').fadeOut(200);
    $('.main .tea-menu').stop().animate({
      'left': '-250px'
    }, 300)
    $('.tea-content').css('height', contentHeight + 'px')
    window.menuFlag = false
  })

  /**
   * 返回顶部
   * 当屏幕滑动距离顶部大于等于100px时， 返回顶部图标显示， 相反则隐藏；
   * PC端为 .tea-container 这一块滚动，移动端整个窗口滚动
   */
  var $win = $(window),
    $container = $('.main .tea-container'),
    // 定义一个ScrollFunc函数， 页面滚动返回顶部图标显示或隐藏
    ScrollFunc = (selectObj) => {
      selectObj.scroll(function () {
        if (selectObj.scrollTop() > 100) {
          $('.main .gotop').addClass('active');
        } else {
          $('.main .gotop').removeClass('active');
        }
      })
    };
  ScrollFunc($win);        //移动端调用
  ScrollFunc($container);  //PC端调用

  // 点击返回顶部按钮， 视图的scrollTop变为0($('html').offset().top)
  $('.gotop').on('click', function (event) {
    event.preventDefault();
    $('html, body,.main .tea-container').animate({
      scrollTop: $('html').offset().top
    }, 300, 'swing');
    return false;
  });
})