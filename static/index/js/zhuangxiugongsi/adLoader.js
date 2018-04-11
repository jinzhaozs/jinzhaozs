(function(root, factory) {
    if (typeof exports === 'object') {
        require('./adLoader.css');
        module.exports = factory(require('jquery'));
    } else {
        if (typeof jQuery === 'undefined') {
            throw new Error('adloader\'s JavaScript requires jQuery. jQuery must be included before adloader\'s JavaScript. ')
        }
        root.AdLoader = factory(jQuery);
    }
})(window, function($) {

    var loadedAdsKeys = []

    function getCityName() {
        var r = new RegExp('(\\b)to8to_tname=([^;]*)(;|$)')
        if (getDeviceInfo()) {
            r = new RegExp('(\\b)to8to_wap_tname=([^;]*)(;|$)')
        };
        var m = document.cookie.match(r)
        return (!m ? '' : decodeURIComponent(m[2]))
    }
    // 移动端返回 true
    function getDeviceInfo(){
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
           return true
        } else {
           return false
        }
    }

    function findItem(dataSource, key, value) {
        var item = {}
        if ($.isArray(dataSource)) {
            for (var i = dataSource.length; i > 0; i--) {
                if (dataSource[i - 1][key] === value) {
                    item = dataSource[i - 1]
                    break
                }
            }
        } else if (dataSource && (dataSource[key] === value)) {
            item = dataSource
        }
        return item;
    }

    function isIncludeKeys(keys, key) {
        var flag = false
        $.each(keys, function(index, value) {
            if(value === key) {
                flag = true
                return false
            }
        }) 
        return flag
    }

    function getInlineWidthAndHeight($container) {
        var $c = $($container[0])
        return {
            width: $c.width(),
            height: $c.height()
        }
    }

    function mergeClass() {
        var classes = []
        $.each(arguments, function(index, value) {
            if (value && typeof value === 'string') {
                classes.push(value);
            }
        })
        return classes.join(' ')
    }

    function getAdNodesProps(selector) {
        var props = []
        var $adConatiners = $(selector)
        if ($adConatiners.length === 0) {
            return props
        }
        $.each($adConatiners, function(index, item) {
            var id = $(item).attr('id')
            if(id && !isIncludeKeys(loadedAdsKeys, id)) {
                props.push({
                    id: id
                })
            }
        })
        return props
    }

    function hiddenContainer(container) {
        $(container).css({
            display: 'none'
        })
    }
    function showContainer(container) {
        $(container).css({
            display: 'block'
        })
    }
    /**
     * 添加广告标识
     * @param {*} options
     */
    function getAdmarkDomString(options) {
        var size = options.size || 'normal'
        var theme = options.theme
        var className = mergeClass('ad-mark', size, theme)
        return '<div class="' + className + '"></div>'
    }

    function getAdLoaderUrl(adskeys, options) {
        var api = options.api;
        var client = options.client;
        var pt = options.pt;
        var city = getCityName();
        var material_type = $(options.selector).attr('material-type');
        var joinedKeys = adskeys.join(',')
        var url = api + '?' + 'adskey=' + joinedKeys + '&pt=' + pt
        if (city !== '') {
            url = url + '&city=' + city
        }
        if (client) {
            url = url + '&client=' + client
        }
        if(material_type !== '' && material_type != undefined){
            url = url + '&material_type='+material_type
        }
        return url
    }

    function setWidthAndHeight($ele, width, height) {
        var css = {};
        if (width && parseInt(width) !== 0) {
            css.width = width
        }
        if (height && parseInt(height) !== 0) {
            css.height = height
        }
        $ele.css(css)
    }

    function isWap() {
        var userAgentInfo = navigator.userAgent;
        var agents = ["Android", "iPhone", "Windows Phone", "iPad", "iPod"];
        var flag = false;
        for (var v = 0; v < agents.length; v++) {
            if (userAgentInfo.indexOf(agents[v]) > 0) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    /**
     * 自定义广告渲染
     * @param {*}
     * @param {*} renderOption
     */
    function supportCustomRender(data, $container, renderOption) {
        var render = renderOption.render
        var appendedCallback = renderOption.appendedCallback
        if (typeof render === 'function') {
            var element = render(data)
            $container.append(element)
            if (typeof appendedCallback === 'function') {
                appendedCallback(element)
            }
            return true
        } else {
            return false
        }
    }

    /**
     * 点击、曝光统计
     */
    function reportData() {
        var exptags = []
        var report = function() {
            $(this.selector + ' [data-ptag]').each(function(index, ele) {
                var $ele = $(ele)
                var ptag = $ele.data('ptag')
                var exptag = $ele.data('exptag')
                if ((exptags.join()).indexOf(exptag) === -1) {
                    exptags.push(exptag)
                }
                $ele.click(function() {
                    clickStream.getCvParams(ptag)
                })
            })
            for (var i = exptags.length; i > 0; i--) {
                clickStream.getCvParams(exptags[i - 1])
            }
        }
        if (typeof clickStream !== 'undefined' && typeof clickStream.getCvParams === 'function') {
            report()
        }
    }

    /**
     * 静态图式广告
     * @param {*} data
     * @param {*} container
     * @param {*} renderOption
     */
    function loadAdWithBanner(data, container, renderOption) {
        var $container = $(container)
        if (supportCustomRender(data, $container, renderOption)) {
            return
        }
        if (!data || !data.folder || !data.folder.length > 0) {
            hiddenContainer(container)
            return
        }

        
        var folder = data.folder[0]
        var theme = renderOption.theme || {}
        var showTxt = renderOption.showTxt || ''
        var adMarkOption = renderOption.adMark || {}
        var linkClasses = mergeClass('ad-banner-link', theme.link)
        var imgClasses = mergeClass(theme.img)
        var txtClasses = mergeClass('ad-banner-txt', theme.txt)

        var fragment = '<a href="' + folder.link_to + '"target="_blank" class="' + linkClasses + '" data-ptag="' + (folder.ptag || '') + '" data-exptag="' + (folder.exptag || '') + '">' +
            '<img src="' + folder.resource_url + '" class="' + imgClasses + '">'
        if (showTxt) {
            fragment = fragment + '<span class="' + txtClasses + '">' + folder.txt + '</span>'
        }
        fragment = fragment + '</a>'
        if (parseInt(folder.flag)) {
            fragment = fragment + getAdmarkDomString(adMarkOption)
        }
        $container.append(fragment)

        if (!this.config.isWap) {
            setWidthAndHeight($container.find('img'), data.width, data.height)
        }
        showContainer(container);
    }

    /**
     * 轮播式广告
     * @param {*} data
     * @param {*} container
     * @param {*} renderOption
     */
    function loadAdWithCarousel(data, container, renderOption) {
        var $container = $(container)
        if (supportCustomRender(data, $container, renderOption)) {
            return
        }
        if (!data || !data.folder || !data.folder.length > 0) {
            hiddenContainer(container)
            return
        }
        var folder = data.folder
        var result = folder.length > 1
        var size = getInlineWidthAndHeight($container)
        var swiperId = 'swiperContainer' + data.adskey
        var swiperBtnsId = 'swiperBtns' + data.adskey
        var sliders = ''

        var swiperOptions = $.extend({
            autoplay: result ? 3000 : 0,
            loop: true,
            simulateTouch : result ? true : false,
            pagination: result ? '#' + swiperBtnsId : '',
            paginationType: this.config.isWap ? 'bullets' : 'line',
            autoplayDisableOnInteraction: false
        }, renderOption.swiperOptions)
        var theme = renderOption.theme || {};
        var showTxt = renderOption.showTxt || ''
        var adMarkOption = renderOption.adMark || {}
        var autoplay = renderOption.adMark || 3000
        var loop = renderOption.adMark || true

        // custom theme
        var rootClass = mergeClass('ad-carousel-container', theme.root)
        if(result){
            var arrowLeftClass = mergeClass('ad-carousel-arrow-left', theme.arrow, theme.arrowLeft)
            var arrowRightClass = mergeClass('ad-carousel-arrow-right', theme.arrow, theme.arrowRight)
        }       
        var arrowIconLeftClass = mergeClass('ad-carousel-arrow-icon', 'ad-carousel-arrow-icon-left', theme.arrowIconLeft)
        var arrowIconRightClass = mergeClass('ad-carousel-arrow-icon', 'ad-carousel-arrow-icon-right', theme.arrowIconRight)

        var swiperContainerClass = mergeClass('swiper-container', theme.swiperContainer)
        var swiperWrapperClass = mergeClass('swiper-wrapper', theme.swiperWrapper)
        var swiperSlideClass = mergeClass('swiper-slide', 'ad-carousel-swiper-slide', theme.swiperSlide)

        var swiperSlideLinkClass = mergeClass('ad-carousel-swiper-slide-link', theme.swiperSlideLink)
        var swiperSlideTitle = mergeClass('ad-carousel-swiper-slide-title', theme.swiperSlideTitle)
        var sliderBtnsClass = mergeClass('ad-carousel-slider-btns', 'slider-btns-style-' + swiperOptions.paginationType, theme.sliderBtns)

        for (var i = 0, length = folder.length; i < length; i++) {
            var folderItem = folder[i]
            var sliderItem = '<div class="' + swiperSlideClass + '">' +
                '<a href="' + folderItem.link_to + '" target="_blank" class="' + swiperSlideLinkClass + '" data-ptag="' + (folderItem.ptag || '') + '" data-exptag="' + (folderItem.exptag || '') + '">' +
                '<img src="' + folderItem.resource_url + '">'

            if (showTxt) {
                sliderItem = sliderItem + '<span class="' + swiperSlideTitle + '">' + folderItem.txt + '</span>'
            }
            sliderItem = sliderItem + '</a>'
            if (parseInt(folderItem.flag)) {
                sliderItem = sliderItem + getAdmarkDomString(adMarkOption)
            }
            sliderItem = sliderItem + '</div>'
            sliders = sliders + sliderItem
        }
        var swiperContainer = '<div class="' + swiperContainerClass + '">' +
            '<div class="' + swiperWrapperClass + '">' + sliders + '</div>' +
            '</div>';

        swiperContainer = '<div class="' + rootClass + '" id="' + swiperId + '">' +
            '<a href="javascript:void(0);" class="' + arrowLeftClass + '"><span class="' + arrowIconLeftClass + '"></span></a>' +
            '<a href="javascript:void(0);" class="' + arrowRightClass + '"><span class="' + arrowIconRightClass + '"></span></a>' +
            swiperContainer;
        if (swiperOptions.pagination) {
            swiperContainer = swiperContainer + '<div class="' + sliderBtnsClass + '" id="' + swiperBtnsId + '"></div>'
        }

        swiperContainer = swiperContainer + '</div>'

        $container.append(swiperContainer);

        if (!this.config.isWap) {
            setWidthAndHeight($container.find('.swiper-container'), data.width || size.width, data.height || size.height)
            setWidthAndHeight($container.find('.swiper-container img'), '100%')
        }

        var initSwiper = function() {
            var swiperObj = new Swiper('#' + swiperId + ' .swiper-container', swiperOptions);

            $('#' + swiperBtnsId).css({
                marginLeft: '-' + parseFloat($('#' + swiperBtnsId).width()) / 2 + 'px',
                left: '50%'
            })

            $('#' + swiperId + ' .ad-carousel-arrow-left').click(function() {
                swiperObj.swipePrev();
                setTimeout(function() {
                    swiperObj.startAutoplay();
                }, 3000)
            });
            $('#' + swiperId + ' .ad-carousel-arrow-right').click(function() {
                swiperObj.swipeNext();
                setTimeout(function() {
                    swiperObj.startAutoplay();
                }, 3000)
            });
            var $switch = $('#' + swiperBtnsId + ' .swiper-pagination-switch');
            $switch.click(function() {
                var index = $switch.index(this);
                swiperObj.swipeTo(index, 1000, false)
            });
        }

        if (!window.Swiper) {
            var cssURL = '//static.to8to.com/to8to_pc/common/libs/swiper-2.7/swiper.css'
            var linkTag = $('<link href="' + cssURL + '" rel="stylesheet" type="text/css" " charset="utf-8"/>')
            $($('head')[0]).append(linkTag);
            $.getScript('//static.to8to.com/to8to_pc/common/libs/swiper-2.7/swiper-2.7.js', initSwiper);
        } else {
            initSwiper()
        }
        showContainer(container);
    }

    function loadAdWithScript(data, container, renderOption) {
        var $container = $(container)
        if (supportCustomRender(data, $container, renderOption)) {
            return
        }
        if (!data || !data.folder || !data.folder.length > 0) {
            hiddenContainer(container)
            return
        }
        var folder = data.folder[0]
        var size = getInlineWidthAndHeight($container)

        var theme = renderOption.theme || {}
        var showTxt = renderOption.showTxt || ''
        var adMark = renderOption.adMark || {}
        var iframeClass = mergeClass('ad-script-iframe', theme.iframe)
        var txtClasses = mergeClass('ad-script-txt', theme.txt)

        var adFrame = '<iframe src="' + folder.resource_url + '" class="' + iframeClass + '" data-ptag="' + (folder.ptag || '') + '" data-exptag="' + (folder.exptag || '') + '">' +
            '</iframe>';
        if (showTxt) {
            adFrame = adFrame + '<span class="' + txtClasses + '">' + folder.txt + '</span>'
        }
        if (parseInt(folder.flag)) {
            adFrame = adFrame + getAdmarkDomString(adMark)
        }
        $container.append(adFrame);
        if (!this.config.isWap) {
            setWidthAndHeight($container.find('iframe'), data.width || size.width, data.height || size.height)
        }
    }

    function loadAdWithxTile(data, container, renderOption) {
        var $container = $(container)
        if (supportCustomRender(data, $container, renderOption)) {
            return
        }
        if (!data || !data.folder || !data.folder.length > 0) {
            hiddenContainer(container)
            return
        }
    }

    /**
     * 纯文字式
     * 首次使用: 选材手册中的相关问答，纯文字建议自定义加载
     * @param {*} data
     * @param {*} container
     * @param {*} renderOption
     */
    function loadAdWithText(data, container, renderOption) {
        var $container = $(container)
        if (supportCustomRender(data, $container, renderOption)) {
            return
        }
        if (!data || !data.folder || !data.folder.length > 0) {
            hiddenContainer(container)
            return
        }
    }

    var loaders = {
        carousel: loadAdWithCarousel,
        banner: loadAdWithBanner,
        xTile:loadAdWithxTile,
        third_party_script: loadAdWithScript,
        text: loadAdWithText
    }

    function fetchAdData(adskeys, url, cb) {
        var jsonpCallback = "jsonpCallbackOfGlobalADS" + adskeys.join('')
        $.ajax({
            type: 'get',
            url: url,
            dataType: 'jsonp',
            jsonpCallback: jsonpCallback,
            cache: true,
            success: function(data) {
                cb(data)
            }
        })
    }

    function renderAdNode(data, element, renderOption) {
        if (typeof loaders[data.display || 'banner'] === 'function') {
            loaders[data.display || 'banner'].call(this, data, element, renderOption)
            
            if (renderOption && typeof renderOption.appendedCallback === 'function') {
                renderOption.appendedCallback(data)
            }
        } else {
            throw new Error('can not find any ad loader to mathch `' + data.display + '` display type')
        }
    }

    function renderAllAdNodes(adskeys, data, renderOptions, callback) {
        var $containers = $(this.config.selector)
        if( $containers.length === 0) {
            return
        }
        if (this.config.isWap) {
            $containers.addClass(this.config.wapClass)
        }
        var self = this
        var adskeyStr = adskeys.join()
        $.each($containers, function(index, element) {
            var adskey = $(element).attr('id');
            var dataItem = findItem(data, 'adskey', adskey)
            // 只处理当前请求下的广告位
            if(adskeyStr.indexOf(adskey) === -1) {
                return true
            }
            var renderOption = findItem(renderOptions, 'id', adskey)
            renderAdNode.call(self, dataItem, element, renderOption)
        })
        if (typeof callback === 'function') {
            callback(data)
        }
        return reportData.call(this)
    }

    var defaultConfig = {
        selector: '.ad-rabbit',
        wapClass: 'ad-rabbit-wap',
        api: '//secure.to8to.com/api/ggdata.php',
        pt: 'to8to',
        isWap: isWap()
    }

    /**
     *
     * @param {Object} 可选配置覆盖默认配置
     *
     */
    function AdLoader(cfg) {
        var config = findItem(window.__adLoaderOptions, 'global', true)
        this.config = $.extend({}, defaultConfig, config.config, cfg)
    }

    /**
     *
     * 原型方法，加载页面所有广告
     *
     * @param {*} [renderOption]
     *
     */
    AdLoader.prototype.loadAllAds = function() {
        var callback, renderOptions = []
        if (arguments.length === 1 && typeof arguments[0] === 'function') {
            callback = arguments[0]
        } else {
            renderOptions = arguments[0] || []
            callback = arguments[1]
        }

        if(window.__adLoaderOptions && $.isArray(window.__adLoaderOptions)) {
            $.merge(renderOptions, window.__adLoaderOptions)
        }

        var selector = this.config.selector
        if($(selector).length === 0) {
            return
        }
        var props = getAdNodesProps(selector);
        if(props.length === 0) {
            return
        }
        var adskeys = $.map(props, function(item) {
            // use container's id as adskey
            return item.id
        })
        $.merge(loadedAdsKeys, adskeys)
        var url = getAdLoaderUrl(adskeys, this.config)
        var self = this
        fetchAdData(adskeys, url, function(data) {
            renderAllAdNodes.call(self, adskeys, data, renderOptions, callback)
        });
    }


    $(function() {
         // 等待获取城市站信息回调cookie重设   紧急修复的写法 tracy.xu
        setTimeout(function(){
            var adLoaderInstance = new AdLoader()
            adLoaderInstance.loadAllAds()
        }, 400)
        
    })

    return AdLoader

})