$((function() {
  const e = void 0 !== GLOBAL_CONFIG.Snackbar
    , t = $("#sidebar .sidebar-toc__content").children().length > 0
    , a = void 0 !== $("#search_button").outerWidth() ? $("#search_button").outerWidth() : 0
    , s = $("#blog_name").width();
  for (var i = 0, o = 0; o < $("#page-header .menus_item").length; o++)
      i += $("#page-header .menus_item").eq(o).outerWidth();
  function n(e) {
      var t;
      1 === e ? t = s + a + i > $("#page-header").width() - 300 : 2 === e && (t = s + a + i > $("#page-header").width()),
      t ? r() : ($("#page-header .toggle-menu").removeClass("is_visible"),
      $("#page-header .menus,.search span").removeClass("is_invisible"))
  }
  function r() {
      $("#page-header .toggle-menu").addClass("is_visible"),
      $("#page-header .menus,.search span").addClass("is_invisible")
  }
  function c() {
      $("#page-header").addClass("open-sidebar"),
      $("body").animate({
          paddingLeft: 300
      }, 400),
      $("#sidebar").css("transform", "translateX(300px)"),
      $("#toggle-sidebar").css({
          transform: "rotateZ(180deg)",
          color: "#99a9bf",
          opacity: "1"
      })
  }
  n(2),
  $("#page-header").css({
      opacity: "1",
      animation: "headerNoOpacity 1s"
  }),
  $(window).bind("resize", (function() {
      window.innerWidth > 768 ? n(2) : r()
  }
  )),
  GLOBAL_CONFIG.isHome && (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) || $(".full_page").css("background-attachment", "fixed")),
  GLOBAL_CONFIG.isPost && ($("#sidebar").hasClass("auto_open") && t && ($("#toggle-sidebar").addClass("on"),
  setTimeout((function() {
      $("#toggle-sidebar").addClass("on"),
      c()
  }
  ), 400),
  n(1)),
  t ? $("#toggle-sidebar").css("opacity", "1") : $("#sidebar,#toggle-sidebar").css("display", "none"),
  0 === $("#mobile-sidebar-toc .sidebar-toc__content").children().length && $("#mobile-sidebar-toc,#mobile-toc-button").css("display", "none")),
  $("#toggle-sidebar").on("click", (function() {
      if (!isMobile() && $("#sidebar").is(":visible")) {
          var e = $(this).hasClass("on");
          e ? $(this).removeClass("on") : $(this).addClass("on"),
          e ? ($("#page-header").removeClass("open-sidebar"),
          $("body").animate({
              paddingLeft: 0
          }, 400),
          $("#sidebar").css("transform", "translateX(0px)"),
          $("#toggle-sidebar").css({
              transform: "rotateZ(0deg)",
              color: "#1F2D3D",
              opacity: "1"
          }),
          setTimeout((function() {
              n(2)
          }
          ), 500)) : (n(1),
          c())
      }
  }
  )),
  $(".scroll-down").on("click", (function() {
      scrollTo("#content-outer")
  }
  )),
  $("#bookmark-it").on("click", (function() {
      if (window.sidebar && window.sidebar.addPanel)
          window.sidebar.addPanel(document.title, window.location.href, "");
      else if (window.external && "AddFavorite"in window.external)
          window.external.AddFavorite(location.href, document.title);
      else {
          if (window.opera && window.print)
              return this.title = document.title,
              !0;
          if (e) {
              var t = GLOBAL_CONFIG.Snackbar.bookmark.message_prev + " " + (-1 !== navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + "+ D " + GLOBAL_CONFIG.Snackbar.bookmark.message_next + ".";
              snackbarShow(t)
          } else
              alert(GLOBAL_CONFIG.bookmark.message_prev + " " + (-1 !== navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + "+ D " + GLOBAL_CONFIG.bookmark.message_next + ".")
      }
  }
  )),
  $(document).on("click", ".code-area-wrap .fa-clipboard", (function() {
      var t = window.getSelection()
        , a = document.createRange();
      a.selectNodeContents($(this).parent().siblings("figure").find(".code pre")[0]),
      t.removeAllRanges(),
      t.addRange(a);
      t.toString();
      !function(t, a) {
          if (document.queryCommandSupported && document.queryCommandSupported("copy"))
              try {
                  document.execCommand("copy"),
                  e ? snackbarShow(GLOBAL_CONFIG.copy.success) : $(a).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({
                      opacity: 1,
                      right: 30
                  }, 450, (function() {
                      setTimeout((function() {
                          $(a).prev(".copy-notice").animate({
                              opacity: 0,
                              right: 0
                          }, 650)
                      }
                      ), 400)
                  }
                  ))
              } catch (t) {
                  if (!e)
                      return $(a).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({
                          opacity: 1,
                          right: 30
                      }, 650, (function() {
                          setTimeout((function() {
                              $(a).prev(".copy-notice").animate({
                                  opacity: 0,
                                  right: 0
                              }, 650)
                          }
                          ), 400)
                      }
                      )),
                      !1;
                  snackbarShow(GLOBAL_CONFIG.copy.success)
              }
          else
              e ? snackbarShow(GLOBAL_CONFIG.copy.noSupport) : $(a).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)
      }(0, this),
      t.removeAllRanges()
  }
  )),
  $(document).on("click", ".code-area-wrap .code-expand", (function() {
      var e = $(this).parent().next();
      $(this).hasClass("code-closed") ? (e.slideDown(300),
      $(this).removeClass("code-closed")) : (e.slideUp(300),
      $(this).addClass("code-closed"))
  }
  ));
  var l = GLOBAL_CONFIG.medium_zoom;
  if (GLOBAL_CONFIG.fancybox)
      $().fancybox({
          selector: "[data-fancybox]",
          loop: !0,
          transitionEffect: "slide",
          protect: !0,
          buttons: ["slideShow", "fullScreen", "thumbs", "close"]
      });
  else if (l) {
      const e = mediumZoom(document.querySelectorAll(":not(a)>img"));
      e.on("open", t=>{
          const a = "dark" === $(document.documentElement).attr("data-theme") ? "#121212" : "#fff";
          e.update({
              background: a
          })
      }
      )
  }
  function d(e) {
      $("body").css("overflow", "hidden"),
      $("#body-wrap").css("transform", "translateX(-250px)"),
      $("#page-header").css("transform", "translateX(-250px)"),
      $("#page-header.fixed.visible").css("transform", "translate3d(-250px, 100%, 0)"),
      $("#rightside").css("transform", "translateX(-288px)"),
      $("#menu_mask").fadeIn(),
      "menu" === e && ($(".toggle-menu").removeClass("close").addClass("open"),
      $("#mobile-sidebar-menus").css({
          transform: "translateX(-254px)"
      })),
      "toc" === e && ($("#mobile-toc-button").removeClass("close").addClass("open"),
      $("#mobile-sidebar-toc").css("transform", "translateX(-254px)"))
  }
  function u(e) {
      $("body").css("overflow", ""),
      $("#body-wrap").css("transform", ""),
      $("#page-header").css("transform", ""),
      $("#page-header.fixed.visible").css("transform", ""),
      $("#rightside").css("transform", "translateX(-38px)"),
      $("#menu_mask").fadeOut(),
      "menu" === e && ($(".toggle-menu").removeClass("open").addClass("close"),
      $("#mobile-sidebar-menus").css({
          transform: "translateX(0)"
      })),
      "toc" === e && ($("#mobile-toc-button").removeClass("open").addClass("close"),
      $("#mobile-sidebar-toc").css("transform", ""))
  }
  $(".toggle-menu").on("click", (function() {
      $(".toggle-menu").hasClass("close") && (d("menu"),
      $("#toggle-sidebar").hasClass("on") && ($("body").css("padding-left", "0"),
      $("#sidebar").css("transform", "")))
  }
  )),
  $("#mobile-toc-button").on("click", (function() {
      $("#mobile-toc-button").hasClass("close") && d("toc")
  }
  )),
  $("#menu_mask").on("click touchstart", (function(e) {
      $(".toggle-menu").hasClass("open") && (u("menu"),
      $("#toggle-sidebar").hasClass("on") && setTimeout((function() {
          c()
      }
      ), 600)),
      $("#mobile-toc-button").hasClass("open") && u("toc")
  }
  )),
  $(window).on("resize", (function(e) {
      $(".toggle-menu").is(":visible") || $(".toggle-menu").hasClass("open") && u("menu"),
      $("#mobile-toc-button").is(":visible") || $("#mobile-toc-button").hasClass("open") && u("toc")
  }
  )),
  $("#mobile-sidebar-toc a").on("click", (function() {
      u("toc")
  }
  ));
  var h = 0;
  function m(e) {
      var t = parseFloat($("body").css("font-size"))
        , a = parseFloat($("pre").css("font-size"))
        , s = parseFloat($("code").css("font-size"));
      "plus" === e ? ($("body").css("font-size", t + 1),
      $("pre").css("font-size", a + 1),
      $("code").css("font-size", s + 1)) : ($("body").css("font-size", t - 1),
      $("pre").css("font-size", a - 1),
      $("code").css("font-size", s - 1))
  }
  $(".toc-child").hide(),
  $(window).scroll(throttle((function(e) {
      var a = $(this).scrollTop();
      !isMobile() && t && (function(e) {
          var t = $("#content-outer").height()
            , a = $(window).height()
            , s = t > a ? t - a : $(document).height() - a
            , i = e / s
            , o = Math.round(100 * i)
            , n = o > 100 ? 100 : o;
          $(".progress-num").text(n),
          $(".sidebar-toc__progress-bar").animate({
              width: n + "%"
          }, 100)
      }(a),
      function(e) {
          if (0 === $(".toc-link").length)
              return !1;
          var t = $("#post-content").find("h1,h2,h3,h4,h5,h6")
            , a = "";
          t.each((function() {
              var t = $(this);
              e > t.offset().top - 25 && (a = "#" + $(this).attr("id"))
          }
          )),
          "" === a && ($(".toc-link").removeClass("active"),
          $(".toc-child").hide());
          var s = $(".toc-link.active");
          if (a && s.attr("href") !== a) {
              r = a,
              window.history.replaceState && r !== window.location.hash && window.history.replaceState(void 0, void 0, r),
              $(".toc-link").removeClass("active");
              var i = $('.toc-link[href="' + a + '"]');
              i.addClass("active");
              var o = i.parents(".toc-child")
                , n = o.length > 0 ? o.last() : i;
              !function(e) {
                  if (e.is(":visible"))
                      return;
                  e.fadeIn(400)
              }(n.closest(".toc-item").find(".toc-child")),
              n.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()
          }
          var r
      }(a),
      function(e) {
          if ($(".toc-link").hasClass("active")) {
              var t = $(".active").offset().top
                , a = $("#sidebar").scrollTop();
              t > e + $(window).height() - 50 ? $("#sidebar").scrollTop(a + 100) : t < e + 50 && $("#sidebar").scrollTop(a - 100)
          }
      }(a));
      var s = function(e) {
          var t = e > h;
          return h = e,
          t
      }(a);
      a > 56 ? (s ? $("#page-header").hasClass("visible") && $("#page-header").removeClass("visible") : $("#page-header").hasClass("visible") || $("#page-header").addClass("visible"),
      $("#page-header").addClass("fixed"),
      "0" === $("#rightside").css("opacity") && $("#rightside").animate({}, (function() {
          $(this).css({
              opacity: "1",
              transform: "translateX(-38px)"
          })
      }
      ))) : (0 === a && $("#page-header").removeClass("fixed").removeClass("visible"),
      $("#rightside").animate({}, (function() {
          $("#rightside").css({
              opacity: "",
              transform: ""
          })
      }
      )))
  }
  ), 300)),
  $("#go-up").on("click", (function() {
      scrollTo("body")
  }
  )),
  $(".toc-link").on("click", (function(e) {
      var t;
      e.preventDefault(),
      t = $(this).attr("href"),
      scrollTo(t)
  }
  )),
  $("#readmode").click((function() {
      var e = "dark" === $(document.documentElement).attr("data-theme")
        , t = "" === $(document.documentElement).attr("data-theme");
      $("body").toggleClass("read-mode"),
      $("#to_comment").toggleClass("is_invisible"),
      t && $(document.documentElement).attr("data-theme", "dark"),
      e && $(document.documentElement).attr("data-theme", "")
  }
  )),
  $("#font_plus").click((function() {
      m("plus")
  }
  )),
  $("#font_minus").click((function() {
      m("minus")
  }
  )),
  $(".menus-expand").on("click", (function() {
      $(this).hasClass("menus-closed") ? ($(this).parents(".menus_item").find(".menus_item_child").slideDown(),
      $(this).removeClass("menus-closed")) : ($(this).parents(".menus_item").find(".menus_item_child").slideUp(),
      $(this).addClass("menus-closed"))
  }
  )),
  $("#rightside_config").on("click", (function() {
      $("#rightside-config-hide").hasClass("rightside-in") ? $("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out") : $("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")
  }
  ));
  var g = GLOBAL_CONFIG.copyright;
  function p() {
      $("#darkmode").removeClass("fa-moon-o").addClass("fa-sun-o")
  }
  function f() {
      $("#darkmode").removeClass("fa-sun-o").addClass("fa-moon-o")
  }
  if (void 0 !== g && (document.body.oncopy = e=>{
      let t;
      e.preventDefault();
      const a = window.getSelection(0).toString();
      return t = a.length > 45 ? a + "\n\n\n" + g.languages.author + "\n" + g.languages.link + "\n" + g.languages.source + "\n" + g.languages.info : a,
      e.clipboardData ? e.clipboardData.setData("text", t) : window.clipboardData.setData("text", t)
  }
  ),
  $(".justified-gallery").length && ($(".justified-gallery > p > .fancybox").unwrap(),
  $("head").append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/justifiedGallery@3.7.0/dist/css/justifiedGallery.min.css">'),
  loadScript("https://cdn.jsdelivr.net/npm/justifiedGallery@3.7.0/dist/js/jquery.justifiedGallery.min.js", (function() {
      "function" == typeof $.fn.justifiedGallery && $(".justified-gallery").justifiedGallery({
          rowHeight: 220,
          margins: 4
      })
  }
  ))),
  "undefined" != typeof autoChangeMode && ("1" !== autoChangeMode && "2" !== autoChangeMode || ("dark" === Cookies.get("theme") ? p() : f())),
  $("#darkmode").click((function() {
      "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (p(),
      activateDarkMode(),
      Cookies.set("theme", "dark", {
          expires: 2
      }),
      e && snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (f(),
      activateLightMode(),
      Cookies.set("theme", "light", {
          expires: 2
      }),
      e && snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day))
  }
  )),
  GLOBAL_CONFIG.runtime) {
      var b, v = $("#webinfo-runtime-count").attr("start_date"), C = function() {
          var e = new Date(v)
            , t = ((new Date).getTime() - e.getTime()) / 864e5
            , a = Math.floor(t);
          $(".webinfo-runtime-count").text(a + " " + GLOBAL_CONFIG.runtime_unit)
      };
      C(),
      clearInterval(b),
      b = setInterval(C, 1e4)
  }
  if (void 0 === GLOBAL_CONFIG.localSearch && void 0 !== GLOBAL_CONFIG.algolia) {
      $("a.social-icon.search").on("click", (function() {
          L(),
          $(".ais-search-box--input").focus()
      }
      )),
      $(".search-mask, .search-close-button").on("click", k);
      var y = GLOBAL_CONFIG.algolia;
      if (!(y.appId && y.apiKey && y.indexName))
          return console.error("Algolia setting is invalid!");
      var _ = instantsearch({
          appId: y.appId,
          apiKey: y.apiKey,
          indexName: y.indexName,
          searchParameters: {
              hitsPerPage: y.hits.per_page || 10
          },
          searchFunction: function(e) {
              $("#algolia-search-input").find("input").val() && e.search()
          }
      });
      _.addWidget(instantsearch.widgets.searchBox({
          container: "#algolia-search-input",
          reset: !1,
          magnifier: !1,
          placeholder: GLOBAL_CONFIG.algolia.languages.input_placeholder
      })),
      _.addWidget(instantsearch.widgets.hits({
          container: "#algolia-hits",
          templates: {
              item: function(e) {
                  return '<a href="' + (e.permalink ? e.permalink : GLOBAL_CONFIG.root + e.path) + '" class="algolia-hit-item-link">' + e._highlightResult.title.value + "</a>"
              },
              empty: function(e) {
                  return '<div id="algolia-hits-empty">' + GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/, e.query) + "</div>"
              }
          },
          cssClasses: {
              item: "algolia-hit-item"
          }
      })),
      _.addWidget(instantsearch.widgets.stats({
          container: "#algolia-stats",
          templates: {
              body: function(e) {
                  return "<hr>" + GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/, e.nbHits).replace(/\$\{time}/, e.processingTimeMS) + '<span class="algolia-logo pull_right">  <img src="' + GLOBAL_CONFIG.root + 'img/algolia.svg" alt="Algolia" /></span>'
              }
          }
      })),
      _.addWidget(instantsearch.widgets.pagination({
          container: "#algolia-pagination",
          scrollTo: !1,
          showFirstLast: !1,
          labels: {
              first: '<i class="fa fa-angle-double-left"></i>',
              last: '<i class="fa fa-angle-double-right"></i>',
              previous: '<i class="fa fa-angle-left"></i>',
              next: '<i class="fa fa-angle-right"></i>'
          },
          cssClasses: {
              root: "pagination",
              item: "pagination-item",
              link: "page-number",
              active: "current",
              disabled: "disabled-item"
          }
      })),
      _.start()
  }
  if (void 0 !== GLOBAL_CONFIG.localSearch && void 0 === GLOBAL_CONFIG.algolia) {
      $("a.social-icon.search").on("click", (function() {
          var e = !1;
          L(),
          $("#local-search-input input").focus(),
          e || (w(GLOBAL_CONFIG.localSearch.path),
          e = !0)
      }
      )),
      $(".search-mask, .search-close-button").on("click", k);
      var w = function(e) {
          $.ajax({
              url: GLOBAL_CONFIG.root + e,
              dataType: "xml",
              success: function(e) {
                  var t = $("entry", e).map((function() {
                      return {
                          title: $("title", this).text(),
                          content: $("content", this).text(),
                          url: $("url", this).text()
                      }
                  }
                  )).get()
                    , a = $("#local-search-input input")[0]
                    , s = $("#local-hits")[0];
                  a.addEventListener("input", (function() {
                      var e = '<div class="search-result-list">'
                        , a = this.value.trim().toLowerCase().split(/[\s]+/);
                      if (s.innerHTML = "",
                      this.value.trim().length <= 0)
                          $(".local-search-stats__hr").hide();
                      else {
                          var i = 0;
                          t.forEach((function(t) {
                              var s = !0
                                , o = t.title.trim().toLowerCase()
                                , n = t.content.trim().replace(/<[^>]+>/g, "").toLowerCase()
                                , r = t.url
                                , c = -1
                                , l = -1;
                              "" !== o && "" !== n && a.forEach((function(e, t) {
                                  c = o.indexOf(e),
                                  l = n.indexOf(e),
                                  c < 0 && l < 0 ? s = !1 : l < 0 && (l = 0)
                              }
                              )),
                              s && (e += '<div class="local-search__hit-item"><a href="' + r + '" class="search-result-title">' + o + "</a></div>",
                              i += 1,
                              $(".local-search-stats__hr").show())
                          }
                          )),
                          0 === i && (e += '<div id="local-search__hits-empty">' + GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/, this.value.trim()) + "</div>"),
                          s.innerHTML = e
                      }
                  }
                  ))
              }
          })
      }
  }
  function L() {
      $("body").css("width", "100%"),
      $("body").css("overflow", "hidden"),
      $(".search-dialog").css({
          display: "block"
      }),
      $(".search-mask").fadeIn(),
      document.addEventListener("keydown", (function e(t) {
          "Escape" === t.code && (k(),
          document.removeEventListener("keydown", e))
      }
      ))
  }
  function k() {
      $("body").css("width", ""),
      $("body").css("overflow", ""),
      $(".search-dialog").css({
          animation: "search_close .5s"
      }),
      $(".search-dialog").animate({}, (function() {
          setTimeout((function() {
              $(".search-dialog").css({
                  animation: "",
                  display: "none"
              })
          }
          ), 500)
      }
      )),
      $(".search-mask").fadeOut()
  }
  GLOBAL_CONFIG.baiduPush && function() {
      var e = document.createElement("script")
        , t = window.location.protocol.split(":")[0];
      e.src = "https" === t ? "https://zz.bdstatic.com/linksubmit/push.js" : "http://push.zhanzhang.baidu.com/push.js";
      var a = document.getElementsByTagName("script")[0];
      a.parentNode.insertBefore(e, a)
  }()
}
));
