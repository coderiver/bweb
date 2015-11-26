$(document).ready(function() {
	
	function tab() {
        $('.js-tab-group').each(function(){
            var tab_cont = $(this).find('.js-tab-cont'),
                tab_link = $(this).find('.js-tab-link');

            tab_link.first().addClass('is-active');
            tab_cont.hide();
            tab_cont.first().show();

            $('body').on('click', '.btn-tab, .js-tab-link', function(){
                var link = $(this).attr('href');
                var activeTab = $(this).parents('.js-tab-group').find('.' + link);
                $(this).parents('.js-tab-group').find('.btn-tab,.js-tab-link').removeClass('is-active');
                $(this).addClass('is-active');
                $(this).parents('.js-tab-group').find('.js-tab-cont').hide();
                activeTab.show();

                return false;
            });
        });
    }
    tab();

    (function () {
        var tabs = $('.js-tabs');
        tabs.each(function () {
            var _this = $(this),
                nav   = _this.find('> .js-tabs-nav'),
                btn   = nav.find('> .js-tabs-btn'),
                wrap  = _this.find('> .js-tabs-wrap'),
                item  = wrap.find('> .js-tabs-item');
            btn.on('click', function () {
                var _this = $(this),
                    index = _this.index();
                btn.removeClass('is-active');
                _this.addClass('is-active');
                item.hide();
                item.eq(index).show();
                return false;
            }).first().trigger('click');
        });
    }());

    $('.js-rules').on('click', function() {
        $('.js-order').addClass('is-active');
    });

    $('.js-close').on('click', function() {
        $('.js-order').removeClass('is-active');
    });


    $('.js-btn').click(function(event) {
        $('body').addClass('scroll')
        $('.overlay').show();
        $('.js-request').addClass('is-visible');
        return false;
    });

    $('.js-popup-opt').click(function(event) {
        $('.overlay').show();
        $('.popup_opt').addClass('is-visible');
        return false;
    });

    $('.js-popup-close').on('click', function() {
        $('body').removeClass('scroll')
        $('.overlay').hide();
        $('.js-request').removeClass('is-visible');
    });
    
});