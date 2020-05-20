(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-views-users-users-module"],{

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/***/ }),

/***/ "./src/app/frontend/views/home/index-component.css":
/*!*********************************************************!*\
  !*** ./src/app/frontend/views/home/index-component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bnr-txt a{\r\n\tbackground-color:#37D61A;\r\n\tcolor:#fff;\r\n\tfont-weight:600;\r\n}\r\n/* .service-cont div[class*=\"col\"] .serv-txt h4{\r\n\tpadding-top:85px\r\n} */\r\n.serviceclass {\r\n    width: 100%;\r\n}\r\n.how-to:nth-child(n+3)::before {\r\n    display:none;\r\n}\r\n/* .service-cont div[class*=\"col\"] label.serviceclass{\r\n\t    background: #179dce;\r\n​\r\n}\r\n.serv-txt h4 {\r\n​\r\n\t\r\n\tfont-size: 26px;\r\n    text-transform: capitalize;\r\n    color: #fff;\r\n    padding: 0 5px;\r\n    margin: 0;\r\n    line-height: 40px;\r\n\t\r\n}\r\n */\r\n.service-cont div[class*=\"col\"]::before {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    content: \"\";\r\n    border: 1px dashed #C8D3D7;\r\n    margin: 5px;\r\n}\r\n.service-cont div[class*=\"col\"]:hover::before{\r\n    border: 1px dashed #ECF7FB;\r\n}\r\n​\r\n.service-cont .container {\r\n    max-width: 1350px;\r\n}\r\n.service-cont div[class*=\"col\"] {\r\n    background-color: #ecf7fb;\r\n    height: 200px;\r\n    padding: 0;\r\n    margin: 0 20px;\r\n        margin-top: 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    margin-top: -105px;\r\n    box-shadow: 1px 2px 31px -7px rgba(0,0,0,0.69);\r\n    transition: all ease 0.3s;\r\n}\r\n.service-cont div[class*=\"col\"]:hover {\r\n    box-shadow: 1px 2px 31px 7px rgba(0,0,0,0.69);\r\n}\r\n.serv-txt img{\r\n margin-bottom:15px;\r\n}\r\n.serv-txt h4 {\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    color: #202020;\r\n    padding: 0 15px;\r\n    margin: 0;\r\n}\r\n.service-cont div[class*=\"col\"]:hover h4 {\r\n    color: #179DCE;\r\n}\r\n​\r\n@media(max-width:991px){\r\n.service-cont div[class*=\"col\"] {\r\n    min-width: 28.333%;\r\n    margin-top: 50px;\r\n}\t\r\n.banner-cont {\r\n    padding-bottom: 40px;\r\n    padding-top: 40px;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvaG9tZS9pbmRleC1jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msd0JBQXdCO0NBQ3hCLFVBQVU7Q0FDVixlQUFlO0FBQ2hCO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRTtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFVBQVU7SUFDVixjQUFjO1FBQ1YsZUFBZTtJQUduQixhQUFhO0lBR0wsbUJBQW1CO0lBQzNCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBRVYsOENBQThDO0lBR3RELHlCQUF5QjtBQUM3QjtBQUNBO0lBR1ksNkNBQTZDO0FBQ3pEO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixTQUFTO0FBQ2I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL3ZpZXdzL2hvbWUvaW5kZXgtY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibnItdHh0IGF7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzdENjFBO1xyXG5cdGNvbG9yOiNmZmY7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi8qIC5zZXJ2aWNlLWNvbnQgZGl2W2NsYXNzKj1cImNvbFwiXSAuc2Vydi10eHQgaDR7XHJcblx0cGFkZGluZy10b3A6ODVweFxyXG59ICovXHJcbi5zZXJ2aWNlY2xhc3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmhvdy10bzpudGgtY2hpbGQobiszKTo6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG4vKiAuc2VydmljZS1jb250IGRpdltjbGFzcyo9XCJjb2xcIl0gbGFiZWwuc2VydmljZWNsYXNze1xyXG5cdCAgICBiYWNrZ3JvdW5kOiAjMTc5ZGNlO1xyXG7igItcclxufVxyXG4uc2Vydi10eHQgaDQge1xyXG7igItcclxuXHRcclxuXHRmb250LXNpemU6IDI2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuXHRcclxufVxyXG4gKi9cclxuLnNlcnZpY2UtY29udCBkaXZbY2xhc3MqPVwiY29sXCJdOjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjQzhEM0Q3O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLnNlcnZpY2UtY29udCBkaXZbY2xhc3MqPVwiY29sXCJdOmhvdmVyOjpiZWZvcmV7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI0VDRjdGQjtcclxufVxyXG7igItcclxuLnNlcnZpY2UtY29udCAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTM1MHB4O1xyXG59XHJcbi5zZXJ2aWNlLWNvbnQgZGl2W2NsYXNzKj1cImNvbFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmN2ZiO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMDVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzMXB4IC03cHggcmdiYSgwLDAsMCwwLjY5KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAzMXB4IC03cHggcmdiYSgwLDAsMCwwLjY5KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xyXG59XHJcbi5zZXJ2aWNlLWNvbnQgZGl2W2NsYXNzKj1cImNvbFwiXTpob3ZlciB7XHJcbiAgICBcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDJweCAzMXB4IDdweCByZ2JhKDAsMCwwLDAuNjkpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDMxcHggN3B4IHJnYmEoMCwwLDAsMC42OSk7XHJcbn1cclxuLnNlcnYtdHh0IGltZ3tcclxuIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG4uc2Vydi10eHQgaDQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5zZXJ2aWNlLWNvbnQgZGl2W2NsYXNzKj1cImNvbFwiXTpob3ZlciBoNCB7XHJcbiAgICBjb2xvcjogIzE3OURDRTtcclxufVxyXG7igItcclxuQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XHJcbi5zZXJ2aWNlLWNvbnQgZGl2W2NsYXNzKj1cImNvbFwiXSB7XHJcbiAgICBtaW4td2lkdGg6IDI4LjMzMyU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHRcclxuLmJhbm5lci1jb250IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/frontend/views/home/index.component.html":
/*!**********************************************************!*\
  !*** ./src/app/frontend/views/home/index.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <section>\r\n <div class=\"block no-padding homepage\">\r\n <div class=\"banner-cont\">\r\n <div class=\"container\">\r\n <div class=\"row\">\r\n\r\n        <div class=\"col-md-9\">\r\n\t\t <div class=\"bnr-txt\">\r\n          <h1><span> Moving Professionals </span><br>\r\n              Easier, Faster and Safer</h1>\r\n          <p>We make your moving process easy!</p>\r\n\t\t  <p>With only a few clicks we connect you with moving professionals in your area.</p>\r\n          \r\n\t\t  <a *ngIf =\"!isLoggedIn()\"  routerLink=\"/register\" (click) = \"setuserpartner('user')\">Get FREE Moving Quotes</a>\r\n\t\t  <a *ngIf =\"isLoggedIn()\" routerLink=\"/create-job\">Get FREE Moving Quotes</a>\r\n\t\t\t\t\t\t\r\n        </div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"col-md-3 hidden-md d-none d-md-block\">\r\n\t\t<img class=\"img-fluid mx-auto d-block\" alt=\"Responsive image\" src=\"../../assets/images/mp-man.png\">\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t\t</div>\r\n\t\t\r\n </div>\r\n </div>\r\n <!-- \r\n <div class=\"service-cont\">\r\n <div class=\"container\">\r\n    <div class=\"row\">\r\n\t\t\t\t<div class=\"col-12 col-sm\" *ngFor=\"let services of jobservices; let i=index\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label for=\"moving_{{i}}\" class=\"serviceclass\">\r\n\t\t\t\t\t\t<div class=\"serv-txt moving_{{i}}\">\r\n\t\t\t\t\t\t\t<label for=\"sad\"></label>\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/{{services.slug}}.png\">\r\n\t\t\t\t\t\t\t<h4>{{services.name}} </h4>\r\n\t\t\t\t\t\t</div>\t\t\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>\r\n </div>\r\n </div>\r\n \r\n </section> -->\r\n \r\n \r\n\t<section>\r\n\t<div class=\"block happy-cand\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<!-- <div class=\"heading\">\r\n\t\t\t\t\t\t\t<h2>Kind Words From Happy Candidates</h2>\r\n\t\t\t\t\t\t\t<div class=\"sub-info\">What other people thought about the service provided by JobHunt</div>\r\n\t\t\t\t\t\t\t<div class=\"brd clearfix\"></div>\r\n\t\t\t\t\t\t</div><!-- Heading  -->\r\n\t\t\t\t\t\t<div class=\"reviews-sec\" id=\"reviews\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"reviews style2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/r1.jpg\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t<h3>Katie S.<span>Redondo Beach, CA</span></h3>\r\n\t\t\t\t\t\t\t\t\t<p>Will use MoveLaunch again for my next move!  I was able to get estimates really quick without getting bombarded by phone calls and emails.  The guys that showed up did a great job!</p>\r\n\t\t\t\t\t\t\t\t</div><!-- Reviews -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"reviews style2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/r2.jpg\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t<h3>Ali T.<span>Chicago, IL</span></h3>\r\n\t\t\t\t\t\t\t\t\t<p>This site was REALLY easy to use.  After sending out my move details I just sat back and waited for the estimates to come to me. Highly recommend.</p>\r\n\t\t\t\t\t\t\t\t</div><!-- Reviews -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"reviews style2\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/janifir.png\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t<h3>Jessica S. <span>Tampa, FL</span></h3>\r\n\t\t\t\t\t\t\t\t\t<p>WOW! This was so easy and I will definitely do this again next time I move or need storage.</p>\r\n\t\t\t\t\t\t\t\t</div><!-- Reviews -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t\t</div>\t\r\n\t</section> \r\n \r\n <section>\r\n <div class=\"block how-works\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"heading\">\r\n\t\t\t\t\t\t\t<h2>How It Works</h2>\r\n\t\t\t\t\t\t\t<span class=\"sub-info\">Let us do the work of finding you the best moving quotes in your area. Did we mention it's FREE?</span>\r\n\t\t\t\t\t\t\t<div class=\"brd clearfix\"></div>\r\n\t\t\t\t\t\t</div><!-- Heading -->\r\n\t\t\t\t\t\t<div class=\"how-to-sec\">\r\n\t\t\t\t\t\t\t<div class=\"how-to\">\r\n\t\t\t\t\t\t\t\t<span class=\"how-icon\"><img src=\"../../assets/images/pj-icon.png\"></span>\r\n\t\t\t\t\t\t\t\t<h3>Post your move details</h3>\r\n\t\t\t\t\t\t\t\t<p>Post the details about your move ONE time to get FREE quotes from companies in your area. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"how-to\">\r\n\t\t\t\t\t\t\t\t<span class=\"how-icon\"><img src=\"../../assets/images/quta-icon.png\"></span>\r\n\t\t\t\t\t\t\t\t<h3>Get quotes</h3>\r\n\t\t\t\t\t\t\t\t<p>We remove your personal information such as last names, addresses, phone numbers and emails and send your request to local moving companies. </p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"how-to\">\r\n\t\t\t\t\t\t\t\t<span class=\"how-icon\"><img src=\"../../assets/images/cp-icon.png\"></span>\r\n\t\t\t\t\t\t\t\t<h3>Choose a Moving Company</h3>\r\n\t\t\t\t\t\t\t\t<p>Review the quotes you receive and select a moving company.  Then we release your contact information to ONLY the company you've selected.  Finalize your move with the company of your choice.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t</section>\r\n \r\n \r\n<section>\r\n<div class=\"block abt-section\">\r\n<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"simple-text-block\">\r\n\t\t\t\t\t\t\t<h2 class=\"heading-title\">About Us</h2>\r\n\t\t\t\t\t\t\t<div class=\"sub-info\">We exist to provide our customers a hassle-free moving experience </div>\r\n\t\t\t\t\t\t\t<div class=\"brd\"></div>\r\n\t\t\t\t\t\t\t<p>MoveLaunch.com was established to help move people forward through the use of automating and expediting the process of getting moving estimates.  Having been in the moving industry for almost a decade founder and CEO Tim Finnerty thought there has to be a better way for customers to get moving estimates.  The old fashioned \"calling around for quotes\" and repeating your job details over and over was not efficient and simply a waste of time.  Also, for smaller but hard working moving companies it's very hard to compete with the moving industry giants.  We aim to revolutionize the moving industry by connecting reputable moving companies to customers in the most automated way possible.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n</section> \r\n \r\n \r\n \r\n<!--  \r\n \r\n <section>\r\n <div class=\"block our-partners\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"heading\">\r\n\t\t\t\t\t\t\t<h2>Our Top Partners</h2>\r\n\t\t\t\t\t\t\t<div class=\"sub-info\">Duis aute irure dolor in reprehenderit in voluptate velit esse pariatur. </div>\r\n\t\t\t\t\t\t\t<div class=\"brd\"></div>\r\n\t\t\t\t\t\t</div><!-- Heading\r\n\t\t\t\t\t\t<div class=\"top-company-sec\">\r\n\t\t\t\t\t\t\t<div class=\"row\" id=\"companies-carousel\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"top-compnay style2\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/tc1.jpg\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h3><a href=\"#\" title=\"\">Symtech</a></h3>\r\n\t\t\t\t\t\t\t\t\t\t<span>United States, Los Angeles</span>\r\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/login\"  title=\"\">View Profile</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"top-compnay style2\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/tc2.jpg\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h3><a href=\"#\" title=\"\">Symtech</a></h3>\r\n\t\t\t\t\t\t\t\t\t\t<span>United States, Los Angeles</span>\r\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/login\"  title=\"\">View Profile</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"top-compnay style2\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/tc3.jpg\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h3><a routerLink=\"/login\"  title=\"\">Symtech</a></h3>\r\n\t\t\t\t\t\t\t\t\t\t<span>United States, Los Angeles</span>\r\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/login\" title=\"\">View Profile</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"top-compnay style2\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/tc4.jpg\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h3><a href=\"#\" title=\"\">Symtech</a></h3>\r\n\t\t\t\t\t\t\t\t\t\t<span>United States, Los Angeles</span>\r\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/login\"  title=\"\">View Profile</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"top-compnay style2\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/tc2.jpg\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t<h3><a href=\"#\" title=\"\">Symtech</a></h3>\r\n\t\t\t\t\t\t\t\t\t\t<span>United States, Los Angeles</span>\r\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/login\" title=\"\">View Profile</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t</section>\r\n \r\n \r\n \r\n<section>\r\n\t\t<div class=\"block level-service\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"heading\">\r\n\t\t\t\t\t\t\t<h2>Find the level of service that works for you</h2>\r\n\t\t\t\t\t\t\t<span>onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. </span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"plans-sec\">\r\n\t\t\t\t\t\t\t<div class=\"row justify-content-center\" >\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\" *ngFor=\"let plans of allplans\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"pricetable style2\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"pricetable-head\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>{{plans.name}}</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>{{plans.plan_bid}} Bids</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>${{plans.price/100}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit, sed</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>Contrary to popular belief</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>Lorem Ipsum is not simply random text</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit, sed</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>dolore eu fugiat nulla pariatur.</li> \r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-lg-12 text-center\">\r\n\t\t\t\t\t\t<a *ngIf =\"!isLoggedIn()\" class=\"partner-btn btn\" routerLink=\"/register\" (click) = \"setuserpartner('partner')\">Become a partner</a>\r\n\t\t\t\t\t\t<a *ngIf =\"isLoggedIn()\" class=\"partner-btn btn\" routerLink=\"/create-job\">Create a Job</a>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>  -->"

/***/ }),

/***/ "./src/app/frontend/views/home/index.component.ts":
/*!********************************************************!*\
  !*** ./src/app/frontend/views/home/index.component.ts ***!
  \********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);




//import { ActivatedRoute, Router } from '@angular/router';
//import { UserService } from './../../../../services/user.service';


//import { PasswordValidator } from '../../../validator/password.validator';

var IndexComponent = /** @class */ (function () {
    function IndexComponent(_flashMessagesService, jobservice, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.jobservice = jobservice;
        this.titleService = titleService;
        this.title = 'Home Page';
        this.allplans = "";
        this.jobservices = "";
        this.getAllplans();
        this.getServices();
        this.titleService.setTitle('Home | MoveLaunch');
    }
    IndexComponent.prototype.getAllplans = function () {
        var _this = this;
        this.jobservice.getAllPlans().subscribe(function (result) {
            if (result.success) {
                _this.allplans = result.data;
            }
        });
    };
    IndexComponent.prototype.setuserpartner = function (usertype) {
        localStorage.setItem('usertype', usertype);
    };
    IndexComponent.prototype.getServices = function () {
        var _this = this;
        this.jobservice.getServices().subscribe(function (result) {
            console.log(result);
            _this.jobservices = result.data;
        });
    };
    IndexComponent.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('login_token');
        if (token) {
            return true;
        }
        else {
            return false;
        }
    };
    IndexComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#reviews').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: false,
                slide: 'div',
                fade: false,
                infinite: true,
                dots: true
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('#companies-carousel').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                autoplay: true,
                slide: 'div',
                fade: false,
                infinite: true,
                dots: false,
                responsive: [
                    {
                        breakpoint: 980,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            vertical: false,
                            centerMode: false,
                            centerPadding: '0px',
                            dots: true,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            vertical: false,
                            centerMode: false,
                            centerPadding: '0px',
                            dots: true,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 520,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            vertical: false,
                            centerMode: false,
                            centerPadding: '0px',
                            dots: true,
                            arrows: false
                        }
                    }
                ]
            });
        });
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/frontend/views/home/index.component.html"),
            styles: [__webpack_require__(/*! ./index-component.css */ "./src/app/frontend/views/home/index-component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _services_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/changepassword/changepassword.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/frontend/views/users/changepassword/changepassword.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrapper signin-form\">\r\n<div class=\"form-inner\">\r\n<div class=\"form-header\">Change Password</div> \r\n           <form class=\"form-main\" [formGroup]=\"angForm\" novalidate>\r\n\t\t    <div class=\"first_form\">\r\n\t\t\t\t<img class=\"logo-icon\" src=\"../../../../assets/images/logo-icon.png\">\r\n\t\t\t\t<h1>Change <span>Password</span></h1>\r\n\t\t\t\t<flash-messages></flash-messages>   \r\n\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\"  [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"  placeholder=\"Password\" #password />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.password.errors.required\">Password is required</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.password.errors?.minlength\"> Password must be at least 5 characters long.</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.password.errors?.maxlength\"> Password can be max 10 characters long.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"confirm_password\"  [ngClass]=\"{ 'is-invalid': (submitted && f.confirm_password.errors) || submitted && angForm.errors}\"  placeholder=\"Confirm Password\" #confirm_password />\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div *ngIf=\"(submitted && f.confirm_password.errors) || (submitted && angForm.errors)\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.confirm_password.errors?.required\">Confirm Password is required</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.confirm_password.errors?.minlength\">Confirm Password must be at least 5 characters long.</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.confirm_password.errors?.maxlength\">Confirm Password can be max 10 characters long.</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && angForm.errors\">Password do not match.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t  <button (click)=\"onSubmit()\"  (ngSubmit)=\"onSubmit()\" class=\"btn btn-lg btn-primary\">Submit</button><br />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t\t</form>\r\n     </div>\r\n </div>\r\n \r\n \r\n"

/***/ }),

/***/ "./src/app/frontend/views/users/changepassword/changepassword.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/frontend/views/users/changepassword/changepassword.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MyErrorStateMatcher, ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());

var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(_flashMessagesService, route, router, userservice, fb, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.titleService = titleService;
        this.title = 'Login User';
        //error :any="";
        this.result = "";
        this.submitted = false;
        this.verifycode = '';
        this.matcher = new MyErrorStateMatcher();
        this.LoginForm();
        this.titleService.setTitle('Change Passowrd | MoveLaunch');
    }
    ChangepasswordComponent.prototype.LoginForm = function () {
        this.angForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)])],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)])],
        }, { validator: this.checkPasswords });
    };
    Object.defineProperty(ChangepasswordComponent.prototype, "f", {
        get: function () {
            return this.angForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ChangepasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.angForm.invalid) {
            return;
        }
        else {
            var user = this.angForm.value;
            //this.verifycode = this.route.snapshot.paramMap.get('verifycode');
            this.userservice.updatePassword(user.password).subscribe(function (result) {
                if (result.success) {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 5000 });
                }
                else {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 10000 });
                }
            });
        }
    };
    ChangepasswordComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirm_password.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    ChangepasswordComponent.prototype.ngOnInit = function () {
        /* this.verifycode = this.route.snapshot.paramMap.get('verifycode');
        this.userservice.password_code(this.verifycode).subscribe(result => {
            if(!result.success){
                this._flashMessagesService.show("This code has been expired.", { cssClass: 'alert-danger',timeout:2000});
            }
            
        }); */
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/frontend/views/users/changepassword/changepassword.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/dashboard/dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/frontend/views/users/dashboard/dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#1691be !important}\r\n.mat-checkbox{display:block}\r\ninput[type=checkbox], input[type=radio]{margin-right:8px}\r\n.job_dashboard .table .hire{\r\n    margin: 3px 0;\r\n}\r\n.payment_banner{\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tcolor: red;\r\n\tbackground: #fffccc;\r\n\tpadding: 10px;\r\n}\r\n.checkbox label{display:block;width:100%}\r\n.rating:not(:checked) > input {\r\n    position:absolute;\r\n    top:-9999px;\r\n    clip:rect(0,0,0,0);\r\n}\r\n.rating:not(:checked) > label {\r\n    float:right;\r\n    width:1em;\r\n    padding:0.1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:100%;\r\n    line-height:1.2;\r\n    color:#ddd;\r\n}\r\n.rating:not(:checked) > label:before {\r\n    content: '★ ';\r\n}\r\n.rating > input:checked ~ label {\r\n    color: #51b608;\r\n}\r\n.rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n    color: #1691be;\r\n}\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n    color: #51b608;\r\n}\r\n.star-ratings-sprite {\r\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png\") repeat-x;\r\n  font-size: 0;\r\n  height: 21px;\r\n  line-height: 0;\r\n  overflow: hidden;\r\n  text-indent: -999em;\r\n  width: 110px;\r\n  float: left;\r\n  margin: 0 auto;\r\n}\r\n.star-ratings-sprite-rating{\r\n    background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png\") repeat-x;\r\n    background-position: 0 100%;\r\n    float: left;\r\n    height: 21px;\r\n    display:block;\r\n  }\r\n.main_title{\r\n\t\tfont-size: 2rem;\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhGQUE4RixtQ0FBbUM7QUFDakksY0FBYyxhQUFhO0FBRTNCLHdDQUF3QyxnQkFBZ0I7QUFDeEQ7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLGFBQWE7QUFDZDtBQUVBLGdCQUFnQixhQUFhLENBQUMsVUFBVTtBQUV4QztJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBOztJQUVJLGNBQWM7QUFDbEI7QUFHQTs7O0lBR0ksY0FBYztBQUNsQjtBQUdBO0VBQ0Usb0dBQW9HO0VBQ3BHLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBR0E7SUFDSSxvR0FBb0c7SUFDcEcsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBRUE7RUFDQSxlQUFlO0lBQ2Isa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzE2OTFiZSAhaW1wb3J0YW50fVxyXG4ubWF0LWNoZWNrYm94e2Rpc3BsYXk6YmxvY2t9XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb117bWFyZ2luLXJpZ2h0OjhweH1cclxuLmpvYl9kYXNoYm9hcmQgLnRhYmxlIC5oaXJle1xyXG4gICAgbWFyZ2luOiAzcHggMDtcclxufVx0XHJcbi5wYXltZW50X2Jhbm5lcntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IHJlZDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmY2NjO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGVja2JveCBsYWJlbHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDotOTk5OXB4O1xyXG4gICAgY2xpcDpyZWN0KDAsMCwwLDApO1xyXG59XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbCB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHdpZHRoOjFlbTtcclxuICAgIHBhZGRpbmc6MC4xZW07XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZToxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6MS4yO1xyXG4gICAgY29sb3I6I2RkZDtcclxufVxyXG5cclxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICfimIUgJztcclxufVxyXG5cclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzUxYjYwODtcclxufVxyXG5cclxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xyXG4gICAgY29sb3I6ICMxNjkxYmU7XHJcbn1cclxuXHJcblxyXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxyXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyIH4gbGFiZWwsXHJcbi5yYXRpbmcgPiBsYWJlbDpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzUxYjYwODtcclxufVxyXG5cclxuXHJcbi5zdGFyLXJhdGluZ3Mtc3ByaXRlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8yNjA1L3N0YXItcmF0aW5nLXNwcml0ZS5wbmdcIikgcmVwZWF0LXg7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIGhlaWdodDogMjFweDtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtaW5kZW50OiAtOTk5ZW07XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5cclxuLnN0YXItcmF0aW5ncy1zcHJpdGUtcmF0aW5ne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMjYwNS9zdGFyLXJhdGluZy1zcHJpdGUucG5nXCIpIHJlcGVhdC14O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuICBcclxuICAubWFpbl90aXRsZXtcclxuXHRcdGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/frontend/views/users/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/frontend/views/users/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container job_dashboard\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col\"> \r\n\t\t<h1 class=\"main_title\">Dashboard</h1>\r\n\t\t<h3 class=\"mb-4\">Open Estimates</h3>\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<flash-messages></flash-messages>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"table-responsive\">\r\n\t\t\t<table class=\"table table-striped text-center\">\r\n\t\t\t\t<thead class=\"thead-dark\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Job ID</th>\r\n\t\t\t\t\t\t<th>Request Date</th>\r\n\t\t\t\t\t\t<th>Company Name</th>\r\n\t\t\t\t\t\t<th>Response On</th>\r\n\t\t\t\t\t\t<th>$</th>\r\n\t\t\t\t\t\t<th>Attachments</th>\r\n\t\t\t\t\t\t<th>Rating</th>\r\n\t\t\t\t\t\t<th>Hiring</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody *ngIf=\"userslist && userslist.length > 0\">\r\n\t\t\t\t\t<tr *ngFor=\"let jobs of userslist\" ngClass=\"myclass_{{jobs.jobId}}\">\r\n\t\t\t\t\t\t<td><a class=\"job_id\" routerLink=\"/detail-job/{{jobs.job_id}}\">{{jobs.jobId}}</a></td>\r\n\t\t\t\t\t\t<td>{{jobs.job_created | date:'mediumDate'}}</td>\r\n\t\t\t\t\t\t<td>{{jobs.companyName}}</td>\r\n\t\t\t\t\t\t<td>{{jobs.created_at | date:'mediumDate'}}</td>\r\n\t\t\t\t\t\t<td>${{jobs.bid_price}}</td>\r\n\t\t\t\t\t\t<td><p *ngIf=\"jobs.attachment_pic\">{{jobs.attachment_pic}}</p><p *ngIf=\"!jobs.attachment_pic\">N.A.</p></td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"rate\">\r\n\t\t\t\t\t\t\t\t<div class=\"star-ratings-sprite\"><span [style.width.%]=\"jobs.width\" class=\"star-ratings-sprite-rating\"></span></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a class=\"hire\" *ngIf =\"!jobs.bidStatus && jobs.bidStatus ==0\" (click)=\"openDialog(1,jobs.job_id,jobs.user_id,jobs.jobId)\" href=\"javascript:void(0)\">{{hire_decline}}</a>\r\n\t\t\t\t\t\t\t<a  class=\"hire\" *ngIf =\"!jobs.bidStatus && jobs.bidStatus ==0\" (click)=\"openDialog(2,jobs.job_id,jobs.user_id,jobs.jobId)\" href=\"javascript:void(0)\">{{decline_hire}}</a>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t\t<tbody *ngIf=\"!userslist || userslist.length == 0\" >\r\n\t\t\t\t\t<tr><td colspan=\"7\"><p class=\"text-center\">No Open Estimates</td></tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>                                \r\n\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n<div class=\"row mt-4\">\r\n<div class=\"col\"> \r\n\r\n<h3 class=\"mb-4\">History of Accepted Estimates</h3>\r\n\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t<table class=\"table table-striped text-center\">\r\n\t\t\t\t<thead class=\"thead-dark\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Job ID</th>\r\n\t\t\t\t\t\t<th>Request Date</th>\r\n\t\t\t\t\t\t<th>Company Name</th>\r\n\t\t\t\t\t\t<th>Response On</th>\r\n\t\t\t\t\t\t<th>$</th>\r\n\t\t\t\t\t\t<th>Attachments</th>\r\n\t\t\t\t\t\t<th>Rating</th>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody *ngIf=\"compuserslist && compuserslist.length > 0\">\r\n\t\t\t\t\t<tr *ngFor=\"let jobs of compuserslist\">\r\n\t\t\t\t\t\t<td><a class=\"job_id\" routerLink=\"/detail-job/{{jobs.jobId}}\">{{jobs.jobId}}</a></td>\r\n\t\t\t\t\t\t<td>{{jobs.job_created | date:'mediumDate'}}</td>\r\n\t\t\t\t\t\t<td>{{jobs.companyName}}</td>\r\n\t\t\t\t\t\t<td>{{jobs.created_at | date:'mediumDate'}}</td>\r\n\t\t\t\t\t\t<td>${{jobs.bid_price}}</td>\r\n\t\t\t\t\t\t<td><p *ngIf=\"jobs.attachment_pic\">{{jobs.attachment_pic}}</p><p *ngIf=\"!jobs.attachment_pic\">N.A.</p></td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"rate\">\r\n\t\t\t\t\t\t\t\t<div class=\"star-ratings-sprite\"><span [style.width.%]=\"jobs.width\" class=\"star-ratings-sprite-rating\"></span></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t\t<tbody *ngIf=\"!compuserslist || compuserslist.length == 0\" >\r\n\t\t\t\t\t<tr><td colspan=\"7\"><p class=\"text-center\">No Completed Estimates</td></tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>                                \r\n\t\t</div>\r\n\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n</div> \r\n \r\n "

/***/ }),

/***/ "./src/app/frontend/views/users/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/frontend/views/users/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent, HireDeclineDialogDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireDeclineDialogDashboard", function() { return HireDeclineDialogDashboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_flashMessagesService, userservice, jobservice, fb, dialog, titleService, route, router) {
        var _this = this;
        this._flashMessagesService = _flashMessagesService;
        this.userservice = userservice;
        this.jobservice = jobservice;
        this.fb = fb;
        this.dialog = dialog;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
        this.first_show = false;
        this.val = '';
        this.userslist = '';
        this.compuserslist = '';
        this.bidsData = '';
        this.allJobs = "";
        this.allCompletedJobs = "";
        this.jobservices = "";
        this.allservice = "";
        this.isValid = false;
        this.name = '';
        this.animal = '';
        this.jobidisset = '';
        this.message = '';
        this.show_dialog = false;
        this.button_text = '';
        this.image_url = '';
        this.hire_decline = '';
        this.decline_hire = '';
        this.getAllJobs();
        setTimeout(function () {
            _this.getAllCompletedJobs();
        }, 5200);
        this.titleService.setTitle('Dashboard | MoveLaunch');
    }
    DashboardComponent.prototype.openDialog = function (type, jobID, userid, Int_job_id) {
        var _this = this;
        var dialogRef = this.dialog.open(HireDeclineDialogDashboard, {
            width: '450px',
            data: { jobID: jobID, type: type, userid: userid, Int_job_id: Int_job_id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == 'Hired') {
                _this._flashMessagesService.show('Estimates has been hired.', { cssClass: 'alert-success', timeout: 2000 });
                _this.hire_decline = _this.hire_decline ? 'Hired' : 'Hire';
                _this.decline_hire = _this.decline_hire ? 'Decline' : 'Declined';
                setTimeout(function () {
                    _this.router.navigate(['/user-in-progress-jobs']);
                }, 2200);
            }
            if (result == 'Declined') {
                _this._flashMessagesService.show('Estimates has been Declined.', { cssClass: 'alert-success', timeout: 2000 });
                _this.decline_hire = _this.decline_hire ? 'Declined' : 'Decline';
                _this.hire_decline = _this.decline_hire ? 'Hire' : 'Hired';
            }
        });
    };
    DashboardComponent.prototype.getAllJobs = function () {
        var _this = this;
        this.jobservice.getAllJobsWithBids().subscribe(function (result) {
            _this.isValid = true;
            if (result.success) {
                _this.isValid = true;
                var d = new Date();
                var month = '' + (d.getMonth() + 1);
                var day = '' + d.getDate();
                var year = d.getFullYear();
                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;
                var mindateset = [year, month, day].join('-');
                _this.allJobs = result.job;
                console.log(_this.allJobs);
                var userslist1_1 = [];
                _this.allJobs.forEach(function (x, key) {
                    x.bidsData.forEach(function (value, index) {
                        userslist1_1.push({ 'job_id': x._id, 'user_id': value.userId._id, 'bid_price': value.bid_price, 'attachment_pic': value.attachment_pic, 'created_at': value.created_at, 'bidStatus': value.bidStatus, 'companyName': value.userId.companyName, 'jobId': x.jobId, 'job_created': x.created_at, 'width': value.rating * 20 });
                    });
                });
                userslist1_1.sort(function (a, b) { return b.created_at.localeCompare(a.created_at); });
                _this.userslist = userslist1_1;
                console.log(_this.userslist);
            }
            else {
                _this.isValid = true;
                _this._flashMessagesService.show("No Estimates Found.", { cssClass: 'alert-danger', timeout: 6000 });
            }
        });
    };
    DashboardComponent.prototype.getAllCompletedJobs = function () {
        var _this = this;
        this.jobservice.getFilteredJobsForUserDashboard(2).subscribe(function (result) {
            if (result.success) {
                _this.isValid = true;
                var d = new Date();
                var month = '' + (d.getMonth() + 1);
                var day = '' + d.getDate();
                var year = d.getFullYear();
                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;
                var mindateset = [year, month, day].join('-');
                //console.log(result.jobs);
                _this.allCompletedJobs = result.jobs;
                var userslist2_1 = [];
                _this.allCompletedJobs.forEach(function (x, key) {
                    x.bidsData.forEach(function (value, index) {
                        userslist2_1.push({ 'job_id': x._id, 'user_id': value.userId._id, 'bid_price': value.bid_price, 'attachment_pic': x.attachment_pic, 'created_at': value.created_at, 'bidStatus': value.bidStatus, 'companyName': value.userId.companyName, 'jobId': x.jobId, 'job_created': x.created_at, 'width': value.rating * 20 });
                    });
                });
                userslist2_1.sort(function (a, b) { return b.created_at.localeCompare(a.created_at); });
                _this.compuserslist = userslist2_1;
                console.log(_this.compuserslist);
            }
            else {
                _this.isValid = true;
                //this._flashMessagesService.show("No job founds", { cssClass: 'alert-danger',timeout:6000});
            }
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.first_show = true;
        this.isValid = false;
        this.hire_decline = 'Hire';
        this.decline_hire = 'Decline';
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/frontend/views/users/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/frontend/views/users/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

var HireDeclineDialogDashboard = /** @class */ (function () {
    function HireDeclineDialogDashboard(dialogRef, data, userservice, jobservice, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userservice = userservice;
        this.jobservice = jobservice;
        this.fb = fb;
        this.jobID = '';
        this.type = '';
        this.userid = '';
        this.Int_job_id = '';
        console.log(data);
        this.jobID = data.jobID;
        this.type = data.type;
        this.userid = data.userid;
        this.Int_job_id = data.Int_job_id;
    }
    HireDeclineDialogDashboard.prototype.onNoClick = function () {
        this.dialogRef.close('ignore');
    };
    HireDeclineDialogDashboard.prototype.onYesClick = function (type_sent) {
        var _this = this;
        console.log(this.jobID);
        console.log(this.userid);
        console.log(this.Int_job_id);
        this.jobservice.hireDecline(type_sent, this.jobID, this.userid).subscribe(function (result) {
            if (result.success && type_sent == 1) {
                console.log('myclass_' + _this.Int_job_id);
                var myElement = document.getElementsByClassName('myclass_' + _this.Int_job_id);
                for (var i = 0; i < myElement.length; i++) {
                    myElement[i].style.display = "none";
                }
                _this.dialogRef.close('Hired');
            }
            if (result.success && type_sent == 2) {
                var myElement = document.getElementsByClassName('myclass_' + _this.Int_job_id);
                for (var i = 0; i < myElement.length; i++) {
                    myElement[i].style.display = "none";
                }
                _this.dialogRef.close('Declined');
            }
        });
    };
    HireDeclineDialogDashboard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-hire-decline',
            template: __webpack_require__(/*! ./dialog-hire-decline.html */ "./src/app/frontend/views/users/dashboard/dialog-hire-decline.html"),
            styles: [__webpack_require__(/*! ./dialog-hire-decline.css */ "./src/app/frontend/views/users/dashboard/dialog-hire-decline.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object, _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], HireDeclineDialogDashboard);
    return HireDeclineDialogDashboard;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/dashboard/dialog-hire-decline.css":
/*!************************************************************************!*\
  !*** ./src/app/frontend/views/users/dashboard/dialog-hire-decline.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container{\r\n\tpadding:35px !important;\r\n}\r\n.mat-raised-button.mat-primary{\r\n\tbackground-color:#1695C2;\r\n}\r\n.mat-dialog-content{    margin: 0;\r\n    padding: 0;}\r\n.mat-dialog-actions{padding:13px !important;position:relative}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvZGFzaGJvYXJkL2RpYWxvZy1oaXJlLWRlY2xpbmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7QUFFQSx3QkFBd0IsU0FBUztJQUM3QixVQUFVLENBQUM7QUFDZixvQkFBb0IsdUJBQXVCLENBQUMsaUJBQWlCIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvZGFzaGJvYXJkL2RpYWxvZy1oaXJlLWRlY2xpbmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG5cdHBhZGRpbmc6MzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMxNjk1QzI7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnR7ICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7fVxyXG4ubWF0LWRpYWxvZy1hY3Rpb25ze3BhZGRpbmc6MTNweCAhaW1wb3J0YW50O3Bvc2l0aW9uOnJlbGF0aXZlfSJdfQ== */"

/***/ }),

/***/ "./src/app/frontend/views/users/dashboard/dialog-hire-decline.html":
/*!*************************************************************************!*\
  !*** ./src/app/frontend/views/users/dashboard/dialog-hire-decline.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"type==1\" class=\"col-md-12\">\r\n\t<div mat-dialog-content class=\"row\"  >\r\n\t  <p>Do you want to accept this person's estimate propsal?</p>\r\n\t</div>\r\n\t<br />\r\n\t<div mat-dialog-actions class=\"row\" >\r\n\t\t<button mat-raised-button color=\"primary\" (click)=\"onYesClick('1')\" cdkFocusInitial>Yes</button>\r\n\t\t<button mat-raised-button color=\"warn\" (click)=\"onNoClick()\">No</button>\r\n\t</div>\r\n</div>\r\n<div *ngIf=\"type==2\" class=\"col-md-12\" >\r\n\t<div mat-dialog-content class=\"row\" >\r\n\t  <p>Do you want to decline this person's estimate propsal?</p>\r\n\t</div>\r\n\t<br />\r\n\t<div mat-dialog-actions class=\"row\" >\r\n\t\t<button mat-raised-button color=\"primary\" (click)=\"onYesClick('2')\" cdkFocusInitial>Yes</button>\r\n\t\t<button mat-raised-button color=\"warn\" (click)=\"onNoClick()\">No</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/frontend/views/users/editprofile/editprofile.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/frontend/views/users/editprofile/editprofile.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#1691be !important}\r\n.mat-checkbox{display:block}\r\ninput[type=checkbox], input[type=radio]{margin-right:8px}\r\n.payment_banner{\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tcolor: red;\r\n\tbackground: #fffccc;\r\n\tpadding: 10px;\r\n}\r\n.checkbox label{display:block;width:100%}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RkFBOEYsbUNBQW1DO0FBQ2pJLGNBQWMsYUFBYTtBQUUzQix3Q0FBd0MsZ0JBQWdCO0FBRXhEO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2Q7QUFFQSxnQkFBZ0IsYUFBYSxDQUFDLFVBQVUiLCJmaWxlIjoic3JjL2FwcC9mcm9udGVuZC92aWV3cy91c2Vycy9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzE2OTFiZSAhaW1wb3J0YW50fVxyXG4ubWF0LWNoZWNrYm94e2Rpc3BsYXk6YmxvY2t9XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb117bWFyZ2luLXJpZ2h0OjhweH1cclxuXHJcbi5wYXltZW50X2Jhbm5lcntcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6IHJlZDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmY2NjO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGVja2JveCBsYWJlbHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9Il19 */"

/***/ }),

/***/ "./src/app/frontend/views/users/editprofile/editprofile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/frontend/views/users/editprofile/editprofile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container job_dashboard\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col\"> \r\n\t\t\t\r\n\t\t\t<div *ngIf=\"showthis && setusertype=='partner' && !user.customer_id\" class=\"payment_banner\">\r\n\t\t\t\tYour account is on hold due to non payment. Please make the payment for job listing and making bids on the jobs. <a routerLink=\"/purchase-plans/\">Get a Plan</a>\r\n\t\t\t</div>\r\n\t\t\t<h3 class=\"mb-4\">Profile</h3>\r\n\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t<flash-messages></flash-messages>\r\n\t\t\t</div>\r\n\t\t\t<form [formGroup]=\"angForm\"  class=\"esitame-form\" *ngIf=\"setusertype=='user'\" >\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t<!--------------------   Customer ----------------------- -->\t\t\t\t \r\n\t\t\t\t<div class=\"tab-content second_form active\" id=\"pills-tabContent\" style=\"border:none\"  >\r\n\t\t\t\t  <div class=\"tab-pane fade show active\" id=\"pill-customer\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\r\n\t\t\t\t\t <div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label>Firstname</label>\r\n\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name*\" formControlName=\"firstName\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors}\" [(ngModel)]=\"user.firstname\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label>Lastname</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last name*\" formControlName=\"lastName\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" [(ngModel)]=\"user.lastname\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t </div> \r\n\t\t\t\t\t <div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t<label>State</label>\r\n\t\t\t\t\t\t\t<select  id=\"inputState\"  class=\"form-control getstate\" formControlName=\"state\" (change)= \"getCounties($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\"  [(ngModel)]=\"user.state\">\r\n\t\t\t\t\t\t\t\t<option value=\"\">Select State</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let state of states\" title=\"{{ state.abbv }}\" value=\"{{ state.abbv }}\">\r\n\t\t\t\t\t\t\t\t\t{{ state.name }}\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.state.errors.required\">State is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label>County</label>\r\n\t\t\t\t\t\t\t<select  id=\"inputCounty\"  class=\"form-control getstate\" formControlName=\"county\" (change)= \"getCities($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.county.errors }\" [(ngModel)]=\"user.county\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select County</option>\r\n\t\t\t\t\t\t\t\t  <option *ngFor=\"let county of counties\" title=\"{{ county }}\" value=\"{{ county }}\">\r\n\t\t\t\t\t\t\t\t\t  {{ county | titlecase }}\r\n\t\t\t\t\t\t\t\t  </option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.county.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.county.errors.required\">County is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t </div>  \r\n\t\t\t\t\t \r\n\t\t\t\t\t <div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t<label>City</label>\r\n\t\t\t\t\t\t<select  id=\"inputCity\"  class=\"form-control getstate\" formControlName=\"city\" [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" [(ngModel)]=\"user.city\">\r\n\t\t\t\t\t\t\t<option value=\"\">Select City</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let city of cities\" title=\"{{ city }}\" value=\"{{ city }}\">\r\n\t\t\t\t\t\t\t\t{{ city | titlecase }}\r\n\t\t\t\t\t\t\t  </option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.city.errors.required\">City is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t </div> \r\n\t\t\t\t\t <div class=\"form-row\"> \r\n\t\t\t\t\t\t <div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<label>Street Address</label>\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"address\" placeholder=\"Street Address\"  formControlName=\"address\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" [(ngModel)]=\"user.address\"></textarea>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.address.errors.required\">Street Address is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div> \r\n\t\t\t\t\t </div> \r\n\t\t\t\t\t <div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label>Zipcode</label>\r\n\t\t\t\t\t\t  <input type=\"number\" class=\"form-control\" maxlength=\"5\" oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" id=\"zipcode\" placeholder=\"Zip*\"  formControlName=\"zip\" [ngClass]=\"{ 'is-invalid': submitted && f.zip.errors }\" [(ngModel)]=\"user.zipcode\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.zip.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.zip.errors.required\">Zipcode is required</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.zip.errors.maxLength\">5 Digits are allowed in zipcode</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t<label>Phone</label>\r\n\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Phone*\"  formControlName=\"phone\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" [(ngModel)]=\"user.phone\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.phone.errors.required\">Phone is required</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.phone.errors.pattern\">Invlid Format EX:(123)465-7890</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t </div> \r\n\t\t\t\t\t\r\n\t\t\t\t\t \r\n\t\t\t\t\t <!--  <div class=\"form-row \">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t\t<label>Profile Pic</label>\r\n\t\t\t\t\t\t\t</div>\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"form-group col\">\r\n\t\t\t\t\t\t\t\t<input #imageInput type=\"file\" formControlName=\"imageInput\" (change)=\"processFile(imageInput)\" accept=\"image/*\">\r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"img-preview-container\" *ngIf=\"!selectedFile\">\r\n\t\t\t\t\t\t\t\t<div class=\"img-view\">\r\n\t\t\t\t\t\t\t\t\t<img height=\"116px\" width=\"116px\" src=\"../../../assets/images/no_user_images.jpg\">\r\n\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t<div *ngIf=\"selectedFile\" class=\"img-preview-container\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"img-preview{{selectedFile.status === 'fail' ? '-error' : ''}}\"\r\n\t\t\t\t\t\t\t\t   [ngStyle]=\"{'background-image': 'url('+ selectedFile.src + ')'}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"selectedFile.pending\" class=\"img-loading-overlay\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"img-spinning-circle\"></div>\r\n\t\t\t\t\t\t\t\t</div> \r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"selectedFile.status === 'ok'\" class=\"alert alert-success\"> Image Uploaded Succesfuly!</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"selectedFile.status === 'fail'\" class=\"alert alert-danger\"> Image Upload Failed!</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t </div> \r\n\t\t\t\t\t  -->\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t <div class=\"form-row\"> \r\n\t\t\t\t\t\t <div class=\"form-group col text-center\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-primary\" type=\"submit\" (click)=\"onSubmit()\"  (ngSubmit)=\"onSubmit()\">Submit</button> \r\n\t\t\t\t\t\t  </div> \r\n\t\t\t\t\t </div> \t  \r\n\t\t\t\t   \r\n\t\t\t\t  </div>\r\n\t\t\t\t  \r\n\t\t\t </div>\r\n\t\t</form>\r\n\t\t<form [formGroup]=\"angPartnerForm\"  class=\"esitame-form\" *ngIf = \"setusertype=='partner'\" >\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t<!--------------------   Partner ----------------------- -->\t\t\t\t \r\n\t\t\t\t<div class=\"tab-content second_form active\" id=\"pills-tabContent\" style=\"border:none\"  >\r\n\t\t\t\t  <div class=\"tab-pane fade show active\" id=\"pill-customer\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\r\n\t\t\t\t\t <div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label>Firstname</label>\r\n\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name for partner*\" formControlName=\"firstName\" [ngClass]=\"{ 'is-invalid': submittedpartner && fpartner.firstName.errors}\" [(ngModel)]=\"user.firstname\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submittedpartner && fpartner.firstName.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fpartner.firstName.errors.required\">First Name is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t<label>Lastname</label>\r\n\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last name*\" formControlName=\"lastName\" [ngClass]=\"{ 'is-invalid': submittedpartner && fpartner.lastName.errors }\" [(ngModel)]=\"user.lastname\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submittedpartner && fpartner.lastName.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fpartner.lastName.errors.required\">Last Name is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t </div> \r\n\t\t\t\t\t <div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<label>Company Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputEmail41\" placeholder=\"Company Name*\" formControlName=\"companyName\" [ngClass]=\"{ 'is-invalid': submittedpartner && fpartner.companyName.errors }\" [(ngModel)]=\"user.companyName\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submittedpartner && fpartner.companyName.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"fpartner.companyName.errors.required\">Company Name is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t <div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t  <label>State</label>\r\n\t\t\t\t\t\t\t<select  id=\"inputState\"  class=\"form-control getstate\" formControlName=\"state\" (change)= \"getCounties($event)\" [ngClass]=\"{ 'is-invalid': submittedpartner && fpartner.state.errors }\"  [(ngModel)]=\"user.state\">\r\n\t\t\t\t\t\t\t\t<option value=\"\">Select State</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let state of states\" title=\"{{ state.abbv }}\" value=\"{{ state.abbv }}\">\r\n\t\t\t\t\t\t\t\t\t{{ state.name }}\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submittedpartner && fpartner.state.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fpartner.state.errors.required\">State is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t<label>County</label>\r\n\t\t\t\t\t\t\t<select multiple id=\"inputCounty\"  class=\"form-control getstate\" formControlName=\"county\" [ngClass]=\"{ 'is-invalid': submittedpartner && fpartner.county.errors }\" [(ngModel)]=\"user.county\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select County</option>\r\n\t\t\t\t\t\t\t\t  <option *ngFor=\"let county of counties\" title=\"{{ county }}\" value=\"{{ county }}\">\r\n\t\t\t\t\t\t\t\t\t  {{ county | titlecase }}\r\n\t\t\t\t\t\t\t\t  </option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submittedpartner && fpartner.county.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fpartner.county.errors.required\">County is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t </div>  \r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\tWhat services do you provide ?\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6 text-left\">\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\"  formArrayName=\"services\" *ngFor=\"let service of angPartnerForm.controls.services.controls; let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<label><input type=\"checkbox\" [(ngModel)]=\"userselectedservices[i]\" [formControlName]=\"i\" value=\"{{services[i]._id}}\">{{services[i].name}}</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!-- <mat-checkbox [ngModel]=\"true\" *ngFor=\"let services of jobservices; let i=index\" type=\"checkbox\" id=\"services_checkbox_{{i}}\" formControlName=\"services\"  (change)=\"onCheckboxChagen($event, services._id)\" [ngClass]=\"{ 'is-invalid': submitted4 && f1.services.errors }\"> {{services.name}}</mat-checkbox> -->\r\n\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t <div class=\"form-row\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t<label>Zipcode</label>\r\n\t\t\t\t\t\t  <input type=\"number\" class=\"form-control\" id=\"zipcode\" placeholder=\"Zip*\"  formControlName=\"zip\" [ngClass]=\"{ 'is-invalid': submittedpartner && fpartner.zip.errors }\" maxlength=\"5\" oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" [(ngModel)]=\"user.zipcode\">\r\n\t\t\t\t\t\t  <div *ngIf=\"submittedpartner && fpartner.zip.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fpartner.zip.errors.required\">Zipcode is required</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fpartner.zip.errors.maxLength\">5 Digits are allowed in zipcode</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t<label>Phone</label>\r\n\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Phone*\"  formControlName=\"phone\" [ngClass]=\"{ 'is-invalid': submittedpartner && fpartner.phone.errors }\" [(ngModel)]=\"user.phone\">\r\n\t\t\t\t\t\t  <div *ngIf=\"submittedpartner && fpartner.phone.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fpartner.phone.errors.required\">Phone is required</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fpartner.phone.errors.pattern\">Invlid Format EX:(123)465-7890</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t </div> \r\n\t\t\t\t\t <div class=\"form-row\"> \r\n\t\t\t\t\t\t <div class=\"form-group col\">\r\n\t\t\t\t\t\t <label>Street Address</label>\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"address\" placeholder=\"Address\"  formControlName=\"address\" [ngClass]=\"{ 'is-invalid': submittedpartner && fpartner.address.errors }\" [(ngModel)]=\"user.address\"></textarea>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submittedpartner && fpartner.address.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"fpartner.address.errors.required\">Street Address is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  </div> \r\n\t\t\t\t\t </div> \r\n\t\t\t\t\t \r\n\t\t\t\t\t    <div class=\"form-row\" *ngIf=\"user.totalbid\"> \r\n\t\t\t\t\t\t <div class=\"form-group col\">\r\n\t\t\t\t\t\t\t<label>Bid Count for your Account ({{user.totalbid}} bids left)</label>\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t </div> \r\n\t\t\t\t\t \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t <div class=\"form-row\"> \r\n\t\t\t\t\t\t <div class=\"form-group col text-center\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-primary\" type=\"submit\" (click)=\"onSubmitPartner()\"  (ngSubmit)=\"onSubmitPartner()\">Submit</button> \r\n\t\t\t\t\t\t  </div> \r\n\t\t\t\t\t </div> \t  \r\n\t\t\t\t   \r\n\t\t\t\t  </div>\r\n\r\n\t\t\t </div>\r\n\t\t</form>\r\n\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/frontend/views/users/editprofile/editprofile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/frontend/views/users/editprofile/editprofile.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");









var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(_flashMessagesService, route, jobservice, router, userservice, fb, titleService, changeDetectionRef) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.jobservice = jobservice;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.titleService = titleService;
        this.changeDetectionRef = changeDetectionRef;
        this.title = 'Login User';
        //error :any="";
        this.result = "";
        this.user = "";
        this.states = '';
        this.counties = '';
        this.jobservices = '';
        this.setusertype = '';
        this.cities = '';
        this.submitted = false;
        this.submittedpartner = false;
        this.showthis = false;
        this.services = '';
        this.stateName = '';
        this.statename = '';
        this.countyName = '';
        this.currentState = '';
        this.currentCounty = '';
        this.userid = '';
        this.selectedFile = '';
        this.interests = [];
        this.userImage = [];
        this.image_url = '';
        this.partner_image_url = '';
        this.isChecked = '';
        this.userselectedservices = "";
        this.LoginForm();
        this.addCheckboxes();
        this.titleService.setTitle('Edit Profile | MoveLaunch');
    }
    EditProfileComponent.prototype.LoginForm = function () {
        this.angForm = this.fb.group({
            // name: ['',  Validators.required ],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            county: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            imageInput: ['']
        });
        this.angPartnerForm = this.fb.group({
            // name: ['',  Validators.required ],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            county: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            // services: ['', Validators.required ],
            services: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([]),
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            imageInput: ['']
        });
    };
    EditProfileComponent.prototype.onSuccess = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
    };
    EditProfileComponent.prototype.onError = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    };
    EditProfileComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            _this.selectedFile.pending = true;
        });
        reader.readAsDataURL(file);
    };
    EditProfileComponent.prototype.getCounties = function (event) {
        var _this = this;
        this.stateName = event.target.value;
        this.userservice.getCounties(this.stateName).subscribe(function (result) {
            _this.counties = result;
        });
    };
    EditProfileComponent.prototype.getCities = function (event) {
        var _this = this;
        this.countyName = event.target.value;
        this.statename = this.angForm.value.state;
        this.userservice.getCities(this.countyName, this.statename).subscribe(function (result) {
            _this.cities = result;
        });
    };
    EditProfileComponent.prototype.getServices = function () {
        var _this = this;
        this.jobservice.getServices().subscribe(function (result) {
            _this.jobservices = result.data;
        });
    };
    Object.defineProperty(EditProfileComponent.prototype, "f", {
        get: function () { return this.angForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProfileComponent.prototype, "fpartner", {
        get: function () { return this.angPartnerForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.angForm.invalid) {
            return;
        }
        else {
            var user = this.angForm.value;
            var _userid = localStorage.getItem('userid');
            if (this.selectedFile == undefined) {
                this.userservice.updateUserWithoutFIle(user, _userid).subscribe(function (result) {
                    if (result.success) {
                        localStorage.setItem('firstname', user.firstName);
                        localStorage.setItem('lastname', user.lastName);
                        _this._flashMessagesService.show('Your Profile has been updated.', { cssClass: 'alert-success', timeout: 2000 });
                        setTimeout(function () {
                            _this.router.navigate(['/profile']);
                        }, 2200);
                    }
                    else {
                        _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 5000 });
                    }
                });
            }
            else {
                this.userservice.updateUser(user, _userid, this.selectedFile.file).subscribe(function (result) {
                    if (result.success) {
                        localStorage.setItem('firstname', user.firstName);
                        localStorage.setItem('lastname', user.lastName);
                        _this._flashMessagesService.show('Your Profile has been updated.', { cssClass: 'alert-success', timeout: 2000 });
                        setTimeout(function () {
                            _this.router.navigate(['/profile']);
                        }, 2200);
                    }
                    else {
                        _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 5000 });
                    }
                });
            }
        }
    };
    EditProfileComponent.prototype.onSubmitPartner = function () {
        var _this = this;
        this.submittedpartner = true;
        // stop here if form is invalid
        if (this.angPartnerForm.invalid) {
            return;
        }
        else {
            var selectedOrderIds = this.angPartnerForm.value.services
                .map(function (v, i) { return v ? _this.services[i]._id : null; })
                .filter(function (v) { return v !== null; });
            this.angPartnerForm.value.services = selectedOrderIds;
            var user = this.angPartnerForm.value;
            var _userid = localStorage.getItem('userid');
            if (this.selectedFile == undefined) {
                this.userservice.updatePartnerWithoutFIle(user, _userid).subscribe(function (result) {
                    if (result.success) {
                        localStorage.setItem('firstname', user.firstName);
                        localStorage.setItem('lastname', user.lastName);
                        //this._flashMessagesService.show('Your Profile has been updated.', { cssClass: 'alert-success',timeout:5000}); 
                        setTimeout(function () {
                            _this.router.navigate(['/profile']);
                        }, 2200);
                    }
                    else {
                        _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 2000 });
                    }
                });
            }
            else {
                this.userservice.updatePartner(user, _userid, this.selectedFile.file).subscribe(function (result) {
                    if (result.success) {
                        localStorage.setItem('firstname', user.firstName);
                        localStorage.setItem('lastname', user.lastName);
                        _this._flashMessagesService.show('Your Profile has been updated.', { cssClass: 'alert-success', timeout: 2000 });
                        setTimeout(function () {
                            _this.router.navigate(['/profile']);
                        }, 2200);
                    }
                    else {
                        _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 5000 });
                    }
                });
            }
        }
    };
    EditProfileComponent.prototype.addCheckboxes = function () {
        var _this = this;
        this.jobservice.getServices().subscribe(function (result) {
            _this.services = result.data;
            _this.services.map(function (o, i) {
                var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](i === 0); // if first item set to true, else false
                _this.angPartnerForm.controls.services.push(control);
            });
        });
    };
    EditProfileComponent.prototype.onCheckboxChagen = function (event, value) {
        if (event.checked) {
            this.interests.push(value);
        }
        if (!event.checked) {
            var index = this.interests.indexOf(value);
            if (index > -1) {
                this.interests.splice(index, 1);
            }
        }
    };
    EditProfileComponent.prototype.ngOnDestroy = function () {
        this.changeDetectionRef.detach();
    };
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setusertype = localStorage.getItem('user_role');
        this.isChecked = true;
        if (this.setusertype == 'user') {
            this.userservice.getUsers().subscribe(function (result) {
                console.log('i got it ', result);
                _this.user = result[0];
                var currentState = _this.user.state;
                var currentCounty = _this.user.county;
                var user_pic = _this.user.profile_pic;
                var user_id = _this.user._id;
                _this.userservice.getStates().subscribe(function (result) {
                    _this.states = result;
                });
                if (currentState != undefined || currentState != 'undefined') {
                    _this.userservice.getCounties(currentState).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                else {
                    _this.userservice.getCounties(_this.states).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                if (currentCounty != undefined || currentCounty != 'undefined') {
                    _this.userservice.getCities(currentCounty, currentState).subscribe(function (result) {
                        _this.cities = result;
                    });
                }
                else {
                    _this.userservice.getCities(_this.counties, _this.states).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                _this.userImage['src'] = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].image_url + user_id + '/' + user_pic;
                _this.selectedFile = _this.userImage;
                return _this.user;
            });
        }
        if (this.setusertype == 'partner') {
            var _user_id = localStorage.getItem('userid');
            this.userservice.getPartner(_user_id).subscribe(function (result) {
                _this.user = result.user;
                var setApp = [];
                for (var i = 0; i < _this.services.length; i++) {
                    var servic = _this.user.services;
                    var _id = _this.services[i]._id;
                    $.each(servic, function (index, value) {
                        if (value == _id) {
                            var item = value;
                            setApp[i] = item;
                        }
                    });
                }
                if (_this.user.customer_id) {
                    _this.showthis = false;
                }
                else {
                    _this.showthis = true;
                }
                var currentState = _this.user.state;
                var currentCounty = _this.user.county;
                var user_pic = _this.user.profile_pic;
                var user_id = _this.user._id;
                _this.userservice.getStates().subscribe(function (result) {
                    _this.states = result;
                });
                if (currentState != undefined || currentState != 'undefined') {
                    _this.userservice.getCounties(currentState).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                else {
                    _this.userservice.getCounties(_this.states).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                if (currentCounty != undefined || currentCounty != 'undefined') {
                    _this.userservice.getCities(currentCounty, currentState).subscribe(function (result) {
                        _this.cities = result;
                    });
                }
                else {
                    _this.userservice.getCities(_this.counties, _this.states).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                _this.userselectedservices = setApp;
                if (user_pic) {
                    _this.userImage['src'] = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].partner_image_url + user_id + '/' + user_pic;
                    _this.selectedFile = _this.userImage;
                }
                return _this.user;
            });
        }
        if (!this.changeDetectionRef['destroyed']) {
            this.changeDetectionRef.detectChanges();
        }
        this.getServices();
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./editprofile.component.html */ "./src/app/frontend/views/users/editprofile/editprofile.component.html"),
            styles: [__webpack_require__(/*! ./editprofile.component.css */ "./src/app/frontend/views/users/editprofile/editprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/forgotpassword/forgotpassword.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/frontend/views/users/forgotpassword/forgotpassword.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrapper signin-form\">\r\n<div class=\"form-inner\">\r\n<div class=\"form-header\">Forgot Password</div> \r\n           <form class=\"form-main\" [formGroup]=\"angForm\" novalidate>\r\n\t\t    <div class=\"first_form\">\r\n\t\t    <img class=\"logo-icon\" src=\"../../../../assets/images/logo-icon.png\">\r\n\t\t\t <h1>Forgot <span>Password</span></h1>\r\n\t\t\t <flash-messages></flash-messages>   \r\n\t\t\t  <div class=\"form-group  col-md-12\">\r\n\t\t\t\t<label class=\"sr-only\">User email</label>\r\n\t\t\t\t\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter your registered Email address\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"  formControlName=\"email\" #email  />\r\n\t\t\t\t<div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t<div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].errors.required\">\r\n\t\t\t\t\t  Email is required.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].errors.pattern\">\r\n\t\t\t\t\t\tPlease enter Valid Email .\r\n\t\t\t\t\t  </div>\t \r\n\t\t\t\t  </div>\r\n\t\t\t\t  \r\n\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t\r\n\t\t\t\t<div class=\"form-group  col-md-12\">\r\n\t\t\t\t  <button (click)=\"onSubmit()\"  (ngSubmit)=\"onSubmit()\" class=\"btn btn-lg btn-primary\">Submit</button><br />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t\t</form>\r\n     </div>\r\n </div>\r\n \r\n \r\n"

/***/ }),

/***/ "./src/app/frontend/views/users/forgotpassword/forgotpassword.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/frontend/views/users/forgotpassword/forgotpassword.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(_flashMessagesService, route, router, userservice, fb, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.titleService = titleService;
        this.title = 'Login User';
        //error :any="";
        this.result = "";
        this.submitted = false;
        this.LoginForm();
        this.titleService.setTitle('Forgot Password  | MoveLaunch');
    }
    ForgotpasswordComponent.prototype.LoginForm = function () {
        this.angForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
        });
    };
    Object.defineProperty(ForgotpasswordComponent.prototype, "f", {
        get: function () { return this.angForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotpasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.angForm.invalid) {
            return;
        }
        else {
            var user = this.angForm.value;
            console.log(user);
            this.userservice.forgot_password(user.email).subscribe(function (result) {
                if (result.success) {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 5000 });
                }
                else {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 10000 });
                }
            });
        }
    };
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/frontend/views/users/forgotpassword/forgotpassword.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/login/login.component.css":
/*!****************************************************************!*\
  !*** ./src/app/frontend/views/users/login/login.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody{ background-color: #eef8fc !important}\r\n.app{background:red}\r\n.content_wrapper{height: calc(100vh - 180px);}\r\n.forgot {\r\n    color: #1691BE;\r\n    font-size: 14px;\r\n}\r\n.signin-form .invalid-feedback {\r\n    position: absolute;\r\n    bottom: -19px;\r\n    font-size: 12px;\r\n    margin: 0;\r\n}\r\n.signin-form .form-group {\r\n    position: relative;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTSxvQ0FBb0M7QUFDMUMsS0FBSyxjQUFjO0FBQ25CLGlCQUFpQiwyQkFBMkIsQ0FBQztBQUM3QztJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9mcm9udGVuZC92aWV3cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHl7IGJhY2tncm91bmQtY29sb3I6ICNlZWY4ZmMgIWltcG9ydGFudH1cclxuLmFwcHtiYWNrZ3JvdW5kOnJlZH1cclxuLmNvbnRlbnRfd3JhcHBlcntoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7fVxyXG4uZm9yZ290IHtcclxuICAgIGNvbG9yOiAjMTY5MUJFO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5zaWduaW4tZm9ybSAuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xOXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5zaWduaW4tZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/frontend/views/users/login/login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/frontend/views/users/login/login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrapper signin-form\">\r\n\t<div class=\"form-inner\">\r\n\t\t<div class=\"form-header\">Login</div> \r\n           <form class=\"form-main\" [formGroup]=\"angForm\" novalidate>\r\n\t\t    <div class=\"first_form\">\r\n\t\t    <img class=\"logo-icon\" src=\"../../../../assets/images/logo-icon.png\">\r\n\t\t\t <h1>Login <span>here</span></h1>\r\n\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<flash-messages></flash-messages>\r\n\t\t\t\t</div>\r\n\t\t\t  <div class=\"form-group col-md-12\">\r\n\t\t\t\t<label class=\"sr-only\">User email</label>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email address\"  formControlName=\"email\" #email [ngClass]=\"{ 'is-invalid': submitted && f.email.errors}\"  />\r\n\t\t\t\t\r\n\t\t\t\t<div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t<div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].errors.required\">\r\n\t\t\t\t\t\t  Email is required.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].errors.pattern\">\r\n\t\t\t\t\t\t\t\tPlease enter Valid Email .\r\n\t\t\t\t\t\t  </div>\t \r\n\t\t\t\t\t  </div>\r\n\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t  <div class=\"form-group col-md-12\">\r\n\t\t\t\t<label class=\"sr-only\">Password :</label>\r\n\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" #password  [ngClass]=\"{ 'is-invalid': submitted && f.password.errors}\" />\r\n\t\t\t\t<div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t<div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t<div *ngIf=\"angForm.controls['password'].errors.required\">\r\n\t\t\t\t\t  Password is required.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t  </div>\r\n\t\t\t  \r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t  <button (ngSubmit)=\"LoginUser(email.value, password.value)\" (click)=\"LoginUser(email.value, password.value)\" class=\"btn btn-lg btn-primary mb-3\">LOGIN</button><br />\r\n\t\t\t\t  <a class=\"forgot\" routerLink=\"/forgotpassword\">Forgot Password ?</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t\t</form>\r\n     </div>\r\n </div>\r\n \r\n \r\n"

/***/ }),

/***/ "./src/app/frontend/views/users/login/login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/frontend/views/users/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(_flashMessagesService, route, router, userservice, fb, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.titleService = titleService;
        this.title = 'Login User';
        //error :any="";
        this.result = "";
        this.userdetail = "";
        this.submitted = false;
        this.LoginForm();
        this.titleService.setTitle('Login | MoveLaunch');
    }
    LoginComponent.prototype.LoginForm = function () {
        this.angForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.angForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.LoginUser = function (email, password) {
        var _this = this;
        this.submitted = true;
        if (this.angForm.invalid) {
            return;
        }
        else {
            this.userservice.login_user(email, password).subscribe(function (result) {
                if (result.success) {
                    // this._flashMessagesService.show(result.message, { cssClass: 'alert-success',timeout:2000});
                    //setTimeout(() => { 
                    localStorage.setItem('login_token', result.token);
                    localStorage.setItem('userid', result.userid);
                    localStorage.setItem('firstname', result.firstname);
                    localStorage.setItem('lastname', result.lastname);
                    if (result.role_name == 'user') {
                        localStorage.setItem('user_role', result.role_name);
                        _this.router.navigate(['/dashboard']);
                    }
                    else if (result.role_name == 'partner') {
                        localStorage.setItem('user_role', result.role_name);
                        localStorage.setItem('customer_id', result.lastname);
                        localStorage.setItem('total_bid', result.totalbid);
                        _this.router.navigate(['/alljobs']);
                    }
                    /* this.userservice.getUsers().subscribe(result1 => {
                        this.userdetail = result1[0];
                        localStorage.setItem('current_user',this.userdetail);
                        console.log(this.userdetail);
                    }) */
                    //	},1000);
                }
                else {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 3000 });
                }
                if (result.success) {
                }
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/frontend/views/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/frontend/views/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/payment/dialog-overview-example-dialog.html":
/*!**********************************************************************************!*\
  !*** ./src/app/frontend/views/users/payment/dialog-overview-example-dialog.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cell example example1\" id=\"example-1\">\r\n<h1 class=\"\">Please fill your card details</h1>\r\n\r\n<flash-messages></flash-messages>\r\n<form novalidate (ngSubmit)=\"buy()\" [formGroup]=\"stripeTest\">\r\n \t<fieldset>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div id=\"card-element\"></div>\r\n\t\t</div>\r\n\t</fieldset>\r\n\t<div *ngIf=\"isSubmit==false\">\r\n\t\t<button class=\"btn btn-primary\" type=\"submit\" data-tid=\"elements_examples.form.pay_button\"> Make Payment</button>\r\n\t</div>\r\n\t<div *ngIf=\"isSubmit==true\" class=\"text-center\">\r\n\t\t<img src=\"../../../assets/images/spinner.gif\" />\r\n\t</div>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/frontend/views/users/payment/payment.component.css":
/*!********************************************************************!*\
  !*** ./src/app/frontend/views/users/payment/payment.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-wrapper{padding:0px}\r\n.alert-error{color:red !important}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxXQUFXO0FBQ3pCLGFBQWEsb0JBQW9CIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS13cmFwcGVye3BhZGRpbmc6MHB4fVxyXG4uYWxlcnQtZXJyb3J7Y29sb3I6cmVkICFpbXBvcnRhbnR9Il19 */"

/***/ }),

/***/ "./src/app/frontend/views/users/payment/payment.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/frontend/views/users/payment/payment.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n<div class=\"col-12\">\r\n\t<div class=\"col-12\">\r\n\t\t<flash-messages></flash-messages>\r\n\t</div>\r\n</div>\r\n<div class=\"form-wrapper\">\r\n\t\t<div class=\"block level-service\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"heading\">\r\n\t\t\t\t\t\t\t<h2>Find the level of service that works for you</h2>\r\n\t\t\t\t\t\t\t<span>onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. </span>\r\n\t\t\t\t\t\t</div><!-- Heading -->\r\n\t\t\t\t\t\t<div *ngIf=\"isLoading == true\" class=\"text-center\">\r\n\t\t\t\t\t\t\t<img src=\"../../../assets/images/spinner.gif\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"isLoading == false\" class=\"plans-sec\">\r\n\t\t\t\t\t\t\t<div class=\"row justify-content-center\" >\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\" *ngFor=\"let plans of allplans\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"pricetable style2\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"pricetable-head\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>{{plans.name}}</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>{{plans.plan_bid}} Bids</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>${{plans.price/100}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div><!-- Price Table -->\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit, sed</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>Contrary to popular belief</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>Lorem Ipsum is not simply random text</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>Consectetur adipiscing elit, sed</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>dolore eu fugiat nulla pariatur.</li> \r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" *ngIf =\"isLoggedIn() && plans._id == user.planId\" [ngStyle]=\"{'background': '#37D61A'}\" class=\"partner-btn btn\">Current Plan</button>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" *ngIf =\"isLoggedIn() && user.planId && plans._id != user.planId\" (click)=\"openDialogUpdate(plans._id)\" class=\"partner-btn btn\">Update Plan</button>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" *ngIf =\"isLoggedIn() && !user.planId\" (click)=\"openDialog(plans._id)\" class=\"partner-btn btn\">Purchase Plan</button>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- <div class=\"col-lg-12 text-center\">\r\n\t\t\t\t\t\t<a *ngIf =\"!isLoggedIn()\" class=\"partner-btn btn\" routerLink=\"/register\" (click) = \"setuserpartner('partner')\">Become a partner</a>\r\n\t\t\t\t\t\t<a *ngIf =\"isLoggedIn()\" class=\"partner-btn btn\" routerLink=\"/create-job\">Create a Job</a>\r\n\t\t\t\t\t</div>\t -->\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t</section> "

/***/ }),

/***/ "./src/app/frontend/views/users/payment/payment.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/frontend/views/users/payment/payment.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentComponent, StripePaymentDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentDialog", function() { return StripePaymentDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var stripe_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stripe-angular */ "./node_modules/stripe-angular/index.js");
/* harmony import */ var stripe_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(stripe_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm5/ngx-stripe.js");











var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(_flashMessagesService, route, router, userservice, jobservice, fb, StripeScriptTag, dialog, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.userservice = userservice;
        this.jobservice = jobservice;
        this.fb = fb;
        this.StripeScriptTag = StripeScriptTag;
        this.dialog = dialog;
        this.titleService = titleService;
        this.allplans = "";
        this.user = "";
        this.publishableKey = "pk_test_oUX3CoG5KpQL5KxzgxwE6rQd";
        this.isLoading = true;
        this.StripeScriptTag.setPublishableKey(this.publishableKey);
        this.getAllplans();
        this.titleService.setTitle('Payment | MoveLaunch');
    }
    PaymentComponent.prototype.openDialog = function (planId) {
        var dialogRef = this.dialog.open(StripePaymentDialog, {
            width: '450px',
            data: { planId: planId, type: 'purchase' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'Success') {
                /* setTimeout(() => {           // or do some API calls/ Async events
                    this.router.navigate(['/alljobs']);
                 }, 8500); */
                // this.ngOnInit();
                /* this.router.routeReuseStrategy.shouldReuseRoute = function(){
                    return false;
                } */
            }
        });
    };
    PaymentComponent.prototype.openDialogUpdate = function (planId) {
        var _this = this;
        var dialogRef = this.dialog.open(StripePaymentDialog, {
            width: '450px',
            data: { planId: planId, type: 'update' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'Success') {
                _this.router.navigateByUrl('/profile', { skipLocationChange: true }).then(function () { return _this.router.navigate(["/purchase-plans"]); });
                /* this.router.routeReuseStrategy.shouldReuseRoute = function(){
                    return false;
                } */
                // this.ngOnInit();
            }
        });
    };
    PaymentComponent.prototype.getAllplans = function () {
        var _this = this;
        this.jobservice.getAllPlans().subscribe(function (result) {
            _this.isLoading = true;
            if (result.success) {
                _this.isLoading = false;
                _this.allplans = result.data;
                console.log(_this.allplans);
            }
        });
    };
    PaymentComponent.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('login_token');
        if (token) {
            return true;
        }
        else {
            return false;
        }
    };
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.navigate(['/purchase-plans']);
        var _user_id = localStorage.getItem('userid');
        this.userservice.getPartner(_user_id).subscribe(function (result) {
            _this.user = result.user;
        });
    };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/frontend/views/users/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/frontend/views/users/payment/payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], stripe_angular__WEBPACK_IMPORTED_MODULE_7__["StripeScriptTag"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]])
    ], PaymentComponent);
    return PaymentComponent;
}());

var StripePaymentDialog = /** @class */ (function () {
    function StripePaymentDialog(dialogRef, data, userservice, jobservice, fb, stripeService, _flashMessagesService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userservice = userservice;
        this.jobservice = jobservice;
        this.fb = fb;
        this.stripeService = stripeService;
        this._flashMessagesService = _flashMessagesService;
        this.planId = '';
        this.type = '';
        this.isSubmit = false;
        this.elementsOptions = {
            locale: 'en',
        };
        this.planId = data.planId;
        this.type = data.type;
        console.log(this.type);
    }
    StripePaymentDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.stripeTest = this.fb.group({
            plan_type: ['']
        });
        this.stripeService.elements(this.elementsOptions)
            .subscribe(function (elements) {
            _this.elements = elements;
            // Only mount the element the first time
            if (!_this.card) {
                _this.card = _this.elements.create('card', {
                    hidePostalCode: true,
                    style: {
                        base: {
                            iconColor: '#203767',
                            color: '#616161',
                            lineHeight: '40px',
                            fontWeight: 500,
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            fontSize: '18px',
                            ':-webkit-autofill': {
                                color: '#fce883',
                            },
                            '::placeholder': {
                                color: '#87BBFD',
                            },
                        }
                    },
                });
                _this.card.mount('#card-element');
            }
        });
    };
    StripePaymentDialog.prototype.buy = function () {
        var _this = this;
        this.isSubmit = true;
        this.stripeService
            .createToken(this.card, {})
            .subscribe(function (result) {
            console.log(result.token);
            if (result.token) {
                var _user_id = localStorage.getItem('userid');
                if (_this.type == 'purchase') {
                    _this.jobservice.makePayment(result.token.id, _this.planId, _user_id).subscribe(function (result) {
                        if (result.success) {
                            _this.isSubmit = false;
                            localStorage.setItem('total_bid', result.totalbids);
                            _this._flashMessagesService.show("Plan purchased successfully", { cssClass: 'alert-success', timeout: 6000 });
                            setTimeout(function () {
                                _this.dialogRef.close('Success');
                            }, 3000);
                        }
                        else {
                            _this._flashMessagesService.show(result.message.message, { cssClass: 'alert-error', timeout: 6000 });
                        }
                    });
                }
                if (_this.type == 'update') {
                    _this.jobservice.updatePayment(result.token.id, _this.planId, _user_id).subscribe(function (result) {
                        if (result.success) {
                            _this.isSubmit = false;
                            localStorage.setItem('total_bid', result.totalbids);
                            _this._flashMessagesService.show("Plan updated successfully", { cssClass: 'alert-success', timeout: 6000 });
                            setTimeout(function () {
                                _this.dialogRef.close('Success');
                            }, 3000);
                        }
                        else {
                            _this._flashMessagesService.show(result.message.message, { cssClass: 'alert-error', timeout: 6000 });
                        }
                    });
                }
            }
            else if (result.error) {
                _this.isSubmit = false;
                console.log(result.error.message);
            }
        });
    };
    StripePaymentDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/frontend/views/users/payment/dialog-overview-example-dialog.html"),
            styles: [__webpack_require__(/*! ./stripe-dialog.css */ "./src/app/frontend/views/users/payment/stripe-dialog.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object, _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_stripe__WEBPACK_IMPORTED_MODULE_10__["StripeService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"]])
    ], StripePaymentDialog);
    return StripePaymentDialog;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/payment/stripe-dialog.css":
/*!****************************************************************!*\
  !*** ./src/app/frontend/views/users/payment/stripe-dialog.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".InputElement  {\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 0;\r\n   padding: 11px 15px 11px 0;\r\n  bottom: 0;\r\n  padding-bottom: 7px;\r\n  color: #32325d;\r\n  background-color: transparent;\r\n}\r\n\r\n.example.example1 * {\r\n  font-family: Roboto, Open Sans, Segoe UI, sans-serif;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n}\r\n\r\n.example.example1 h1{\r\n\tpadding:10px\r\n}\r\n\r\n.example.example1 fieldset {\r\n  margin: 0 15px 20px;\r\n  padding: 0;\r\n  border-style: none;\r\n\r\n  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),\r\n    inset 0 1px 0 #829fff;\r\n  border-radius: 4px;\r\n}\r\n\r\n.example.example1 .row {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 15px;\r\n}\r\n\r\n.example.example1 .row + .row {\r\n  border-top: 1px solid #819efc;\r\n}\r\n\r\n.example.example1 label {\r\n  width: 15%;\r\n  min-width: 70px;\r\n  padding: 11px 0;\r\n  color: #c4f0ff;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.example.example1 input, .example.example1 button {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  outline: none;\r\n  border-style: none;\r\n}\r\n\r\n.example.example1 input:-webkit-autofill {\r\n  -webkit-text-fill-color: #fce883;\r\n  transition: background-color 100000000s;\r\n  -webkit-animation: 1ms void-animation-out;\r\n}\r\n\r\n.example.example1 .StripeElement--webkit-autofill {\r\n  background: transparent !important;\r\n}\r\n\r\n.example.example1 .StripeElement {\r\n  width: 100%;\r\n  padding: 11px 15px 11px 0;\r\n}\r\n\r\n.example.example1 input {\r\n  width: 100%;\r\n  padding: 11px 15px 11px 0;\r\n  color: #fff;\r\n  background-color: transparent;\r\n  -webkit-animation: 1ms void-animation-out;\r\n}\r\n\r\n.example.example1 input::-webkit-input-placeholder {\r\n  color: #87bbfd;\r\n}\r\n\r\n.example.example1 input::-moz-placeholder {\r\n  color: #87bbfd;\r\n}\r\n\r\n.example.example1 input:-ms-input-placeholder {\r\n  color: #87bbfd;\r\n}\r\n\r\n.example.example1 button {\r\n  display: block;\r\n  width: calc(100% - 30px);\r\n  height: 40px;\r\n  margin: 40px 15px 0;\r\n  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),\r\n    inset 0 1px 0 #ffb9f6;\r\n  border-radius: 4px;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.example.example1 button:active {\r\n  background-color: #d782d9;\r\n  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),\r\n    inset 0 1px 0 #e298d8;\r\n}\r\n\r\n.example.example1 .error svg .base {\r\n  fill: #fff;\r\n}\r\n\r\n.example.example1 .error svg .glyph {\r\n  fill: #6772e5;\r\n}\r\n\r\n.example.example1 .error .message {\r\n  color: #fff;\r\n}\r\n\r\n.example.example1 .success .icon .border {\r\n  stroke: #87bbfd;\r\n}\r\n\r\n.example.example1 .success .icon .checkmark {\r\n  stroke: #fff;\r\n}\r\n\r\n.example.example1 .success .title {\r\n  color: #fff;\r\n}\r\n\r\n.example.example1 .success .message {\r\n  color: #9cdbff;\r\n}\r\n\r\n.example.example1 .success .reset path {\r\n  fill: #fff;\r\n}\r\n\r\n.alert-error{color:red !important}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvcGF5bWVudC9zdHJpcGUtZGlhbG9nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztHQUNOLHlCQUF5QjtFQUMxQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtDQUNDO0FBQ0Q7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjs7RUFFbEI7eUJBQ3VCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUVFLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyx1Q0FBdUM7RUFDdkMseUNBQXlDO0FBQzNDOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkI7eUJBQ3VCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekI7eUJBQ3VCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsYUFBYSxvQkFBb0IiLCJmaWxlIjoic3JjL2FwcC9mcm9udGVuZC92aWV3cy91c2Vycy9wYXltZW50L3N0cmlwZS1kaWFsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLklucHV0RWxlbWVudCAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gICBwYWRkaW5nOiAxMXB4IDE1cHggMTFweCAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gIGNvbG9yOiAjMzIzMjVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZXhhbXBsZS5leGFtcGxlMSAqIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBPcGVuIFNhbnMsIFNlZ29lIFVJLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5leGFtcGxlLmV4YW1wbGUxIGgxe1xyXG5cdHBhZGRpbmc6MTBweFxyXG59XHJcbi5leGFtcGxlLmV4YW1wbGUxIGZpZWxkc2V0IHtcclxuICBtYXJnaW46IDAgMTVweCAyMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG5cclxuICBib3gtc2hhZG93OiAwIDZweCA5cHggcmdiYSg1MCwgNTAsIDkzLCAwLjA2KSwgMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXHJcbiAgICBpbnNldCAwIDFweCAwICM4MjlmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5leGFtcGxlLmV4YW1wbGUxIC5yb3cge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS5leGFtcGxlMSAucm93ICsgLnJvdyB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MTllZmM7XHJcbn1cclxuXHJcbi5leGFtcGxlLmV4YW1wbGUxIGxhYmVsIHtcclxuICB3aWR0aDogMTUlO1xyXG4gIG1pbi13aWR0aDogNzBweDtcclxuICBwYWRkaW5nOiAxMXB4IDA7XHJcbiAgY29sb3I6ICNjNGYwZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uZXhhbXBsZS5leGFtcGxlMSBpbnB1dCwgLmV4YW1wbGUuZXhhbXBsZTEgYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLmV4YW1wbGUxIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZmNlODgzO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwMDAwMDAwcztcclxuICAtd2Via2l0LWFuaW1hdGlvbjogMW1zIHZvaWQtYW5pbWF0aW9uLW91dDtcclxufVxyXG4uZXhhbXBsZS5leGFtcGxlMSAuU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXhhbXBsZS5leGFtcGxlMSAuU3RyaXBlRWxlbWVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTFweCAxNXB4IDExcHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUuZXhhbXBsZTEgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDExcHggMTVweCAxMXB4IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IDFtcyB2b2lkLWFuaW1hdGlvbi1vdXQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLmV4YW1wbGUxIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzg3YmJmZDtcclxufVxyXG5cclxuLmV4YW1wbGUuZXhhbXBsZTEgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjODdiYmZkO1xyXG59XHJcblxyXG4uZXhhbXBsZS5leGFtcGxlMSBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjODdiYmZkO1xyXG59XHJcblxyXG4uZXhhbXBsZS5leGFtcGxlMSBidXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiA0MHB4IDE1cHggMDtcclxuICBib3gtc2hhZG93OiAwIDZweCA5cHggcmdiYSg1MCwgNTAsIDkzLCAwLjA2KSwgMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXHJcbiAgICBpbnNldCAwIDFweCAwICNmZmI5ZjY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS5leGFtcGxlMSBidXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDc4MmQ5O1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDlweCByZ2JhKDUwLCA1MCwgOTMsIDAuMDYpLCAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4KSxcclxuICAgIGluc2V0IDAgMXB4IDAgI2UyOThkODtcclxufVxyXG5cclxuLmV4YW1wbGUuZXhhbXBsZTEgLmVycm9yIHN2ZyAuYmFzZSB7XHJcbiAgZmlsbDogI2ZmZjtcclxufVxyXG5cclxuLmV4YW1wbGUuZXhhbXBsZTEgLmVycm9yIHN2ZyAuZ2x5cGgge1xyXG4gIGZpbGw6ICM2NzcyZTU7XHJcbn1cclxuXHJcbi5leGFtcGxlLmV4YW1wbGUxIC5lcnJvciAubWVzc2FnZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5leGFtcGxlLmV4YW1wbGUxIC5zdWNjZXNzIC5pY29uIC5ib3JkZXIge1xyXG4gIHN0cm9rZTogIzg3YmJmZDtcclxufVxyXG5cclxuLmV4YW1wbGUuZXhhbXBsZTEgLnN1Y2Nlc3MgLmljb24gLmNoZWNrbWFyayB7XHJcbiAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG4uZXhhbXBsZS5leGFtcGxlMSAuc3VjY2VzcyAudGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZXhhbXBsZS5leGFtcGxlMSAuc3VjY2VzcyAubWVzc2FnZSB7XHJcbiAgY29sb3I6ICM5Y2RiZmY7XHJcbn1cclxuXHJcbi5leGFtcGxlLmV4YW1wbGUxIC5zdWNjZXNzIC5yZXNldCBwYXRoIHtcclxuICBmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4uYWxlcnQtZXJyb3J7Y29sb3I6cmVkICFpbXBvcnRhbnR9Il19 */"

/***/ }),

/***/ "./src/app/frontend/views/users/profile/profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/frontend/views/users/profile/profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#1691be !important}\r\n.mat-checkbox{display:block}\r\ninput[type=checkbox], input[type=radio]{margin-right:8px}\r\n.payment_banner{\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tcolor: red;\r\n\tbackground: #fffccc;\r\n\tpadding: 10px;\r\n}\r\n.checkbox label{display:block;width:100%}\r\n/*************************************************************************************/\r\n.pro-btn-cls {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 10px;\r\n        padding-bottom: 0px;\r\n    border-bottom: 1px solid #ccc;\r\n    padding-bottom: 20px;\r\n}\r\n.mypro h2 {\r\n    padding-bottom: 0;\r\n    font-weight: 600;\r\n    padding-left: 10px;\r\n    margin: 0px;\r\n}\r\n.probtn:hover {\r\n    color: #fff;\r\n    background: #1F4372;\r\n    border-color: #1F4372;\r\n}\r\n.probtn {\r\n    background: #0092C1;\r\n    border-color: #0092C1;\r\n    color: #fff;\r\n    padding: 0px 15px;\r\n    line-height: 36px;\r\n    font-size: 14px;\r\n    border-radius: 2px;\r\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n}\r\n.mypro {\r\n   /* border: 1px solid #ccc;*/\r\n    padding: 20px 20px;\r\n    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);\r\n    margin-top: 20px;\r\n}\r\n.basic-info {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n\tpadding-left: 10px;\r\n\tpadding-bottom: 10px;\r\n}\r\n.basic-info ul {\r\n    padding: 0;\r\n    margin: 0px;\r\n    width: 100%;\r\n}\r\n.basic-info ul {\r\n    list-style: none;\r\n}\r\n.basic-info ul li .urw {\r\n    width: 100%;\r\n    display: flex;\r\n    font-size: 18px;\r\n    line-height: 40px;\r\n}\r\n.basic-title {\r\n    width: 20%;\r\n    color: #0092c1;\r\n    display: inline-block;\r\n\tfont-weight: 600;\r\n}\r\n.basic-txtinfo {\r\n    width: 100%;\r\n    font-size: 16px;\r\n    color: #4f4f4f;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEZBQThGLG1DQUFtQztBQUNqSSxjQUFjLGFBQWE7QUFFM0Isd0NBQXdDLGdCQUFnQjtBQUV4RDtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkO0FBRUEsZ0JBQWdCLGFBQWEsQ0FBQyxVQUFVO0FBR3hDLHNGQUFzRjtBQUV0RjtJQUdJLGFBQWE7SUFHTCw4QkFBOEI7SUFDdEMsZUFBZTtRQUNYLG1CQUFtQjtJQUN2Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFJbEIsOEhBQThIO0FBRWxJO0FBRUE7R0FDRywyQkFBMkI7SUFDMUIsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxnQkFBZ0I7QUFDcEI7QUFFQTtJQUdJLGFBQWE7SUFHYiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGlCQUFpQjtDQUNwQixrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBR1gsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QscUJBQXFCO0NBQ3hCLGdCQUFnQjtBQUNqQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMTY5MWJlICFpbXBvcnRhbnR9XHJcbi5tYXQtY2hlY2tib3h7ZGlzcGxheTpibG9ja31cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXXttYXJnaW4tcmlnaHQ6OHB4fVxyXG5cclxuLnBheW1lbnRfYmFubmVye1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogcmVkO1xyXG5cdGJhY2tncm91bmQ6ICNmZmZjY2M7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNoZWNrYm94IGxhYmVse2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5wcm8tYnRuLWNscyB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubXlwcm8gaDIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5wcm9idG46aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMUY0MzcyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMUY0MzcyO1xyXG59XHJcbi5wcm9idG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzAwOTJDMTtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOTJDMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsLXdlYmtpdC1ib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm15cHJvIHtcclxuICAgLyogYm9yZGVyOiAxcHggc29saWQgI2NjYzsqL1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5iYXNpYy1pbmZvIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uYmFzaWMtaW5mbyB1bCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmFzaWMtaW5mbyB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5iYXNpYy1pbmZvIHVsIGxpIC51cncge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5iYXNpYy10aXRsZSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgY29sb3I6ICMwMDkyYzE7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmJhc2ljLXR4dGluZm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzRmNGY0ZjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/frontend/views/users/profile/profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/frontend/views/users/profile/profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container job_change_step_page\">\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"col mypro\">\r\n\t\t\t<div *ngIf=\"showthis && setusertype=='partner' && !user.customer_id\" class=\"payment_banner\">\r\n\t\t\t\tYour account is on hold due to non payment. Please make the payment for job listing and making bids on the jobs. <a routerLink=\"/purchase-plans/\">Get a Plan</a>\r\n\t\t\t</div>\r\n\t\t \r\n\t\t\t<div class=\"pro-btn-cls\">\r\n\t\t\t\t<h2> {{user.firstname}} {{user.lastname}} </h2>\r\n\t\t\t\t<a routerLink=\"/edit-profile\" class=\"probtn\" type=\"button\">  Edit Profile </a>\r\n\t\t\t</div> \r\n\t\t\t<div class=\"basic-info\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><div class=\"urw\"> <span class=\"basic-title\"> State </span> <span class=\"basic-txtinfo\"> {{selectedState}} </span> </div></li>\r\n\t\t\t\t\t<li><div href=\"#\" class=\"urw\"> <span class=\"basic-title\"> County </span> <span class=\"basic-txtinfo\"> {{user.county}} </span> </div></li>\r\n\t\t\t\t\t<li><div href=\"#\" class=\"urw\"> <span class=\"basic-title\"> City </span> <span class=\"basic-txtinfo\"> {{user.city}} </span> </div></li>\r\n\t\t\t\t\t<li><a href=\"#\" class=\"urw\"> <span class=\"basic-title\"> Street Address </span> <span class=\"basic-txtinfo\"> {{user.address}}</span> </a></li>\r\n\t\t\t\t\t<li><div href=\"#\" class=\"urw\"> <span class=\"basic-title\"> Zipcode </span> <span class=\"basic-txtinfo\"> {{user.zipcode}} </span> </div></li>\r\n\t\t\t\t\t<li><div href=\"#\" class=\"urw\"> <span class=\"basic-title\"> Phone </span> <span class=\"basic-txtinfo\"> {{user.phone}} </span> </div></li>\r\n\t\t\t\t\t<li *ngIf=\"user.totalbid\"><div href=\"#\" class=\"urw\"> <span class=\"basic-title\"> Bid Left </span> <span class=\"basic-txtinfo\">({{user.totalbid}} bids left) </span> </div></li>\r\n\t\t\t\t\t<li *ngIf = \"setusertype=='partner'\" >\r\n\t\t\t\t\t\t<div href=\"#\" class=\"urw\"> <span class=\"basic-title\"> Services </span> <span class=\"basic-txtinfo\"> {{userselectedservices}} </span> </div> \r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\t  \r\n\t\t</div>\r\n\r\n\t</div>\r\n</div> \r\n\r\n"

/***/ }),

/***/ "./src/app/frontend/views/users/profile/profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/frontend/views/users/profile/profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");









var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_flashMessagesService, route, jobservice, router, userservice, fb, titleService, changeDetectionRef) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.jobservice = jobservice;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.titleService = titleService;
        this.changeDetectionRef = changeDetectionRef;
        this.title = 'Login User';
        //error :any="";
        this.result = "";
        this.user = "";
        this.states = '';
        this.counties = '';
        this.jobservices = '';
        this.setusertype = '';
        this.cities = '';
        this.submitted = false;
        this.submittedpartner = false;
        this.showthis = false;
        this.services = '';
        this.stateName = '';
        this.statename = '';
        this.countyName = '';
        this.currentState = '';
        this.currentCounty = '';
        this.userid = '';
        this.selectedFile = '';
        this.interests = [];
        this.userImage = [];
        this.image_url = '';
        this.partner_image_url = '';
        this.isChecked = '';
        this.userselectedservices = "";
        this.selectedState = "";
        //this.addCheckboxes();
        this.titleService.setTitle('Profile | MoveLaunch');
    }
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.changeDetectionRef.detach();
    };
    ProfileComponent.prototype.getCounties = function (event) {
        var _this = this;
        this.stateName = event.target.value;
        this.userservice.getCounties(this.stateName).subscribe(function (result) {
            _this.counties = result;
        });
    };
    ProfileComponent.prototype.getCities = function (event) {
        var _this = this;
        this.countyName = event.target.value;
        this.statename = this.angForm.value.state;
        this.userservice.getCities(this.countyName, this.statename).subscribe(function (result) {
            _this.cities = result;
        });
    };
    ProfileComponent.prototype.getServices = function () {
        var _this = this;
        this.jobservice.getServices().subscribe(function (result) {
            _this.jobservices = result.data;
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.changeDetectionRef['destroyed']) {
            this.changeDetectionRef.detectChanges();
        }
        this.setusertype = localStorage.getItem('user_role');
        this.isChecked = true;
        if (this.setusertype == 'user') {
            this.userservice.getUsers().subscribe(function (result) {
                console.log('i got it ', result);
                _this.user = result[0];
                var currentState = _this.user.state;
                var currentCounty = _this.user.county;
                var user_pic = _this.user.profile_pic;
                var user_id = _this.user._id;
                _this.userservice.getStates().subscribe(function (result) {
                    _this.states = result;
                    //console.log(this.states);
                    _this.states.forEach(function (x, key) {
                        if (currentState == x.abbv) {
                            console.log(x);
                            _this.selectedState = x.name;
                        }
                    });
                });
                if (currentState != undefined || currentState != 'undefined') {
                    _this.userservice.getCounties(currentState).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                else {
                    _this.userservice.getCounties(_this.states).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                if (currentCounty != undefined || currentCounty != 'undefined') {
                    _this.userservice.getCities(currentCounty, currentState).subscribe(function (result) {
                        _this.cities = result;
                    });
                }
                else {
                    _this.userservice.getCities(_this.counties, _this.states).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                _this.userImage['src'] = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].image_url + user_id + '/' + user_pic;
                _this.selectedFile = _this.userImage;
                return _this.user;
            });
        }
        if (this.setusertype == 'partner') {
            var _user_id = localStorage.getItem('userid');
            this.userservice.getPartner(_user_id).subscribe(function (result) {
                _this.user = result.user;
                console.log(_this.jobservices);
                var setApp = [];
                for (var i = 0; i < _this.jobservices.length; i++) {
                    var servic = _this.user.services;
                    var _id = _this.jobservices[i]._id;
                    var _name = _this.jobservices[i].name;
                    $.each(servic, function (index, value) {
                        if (value == _id) {
                            var item = _name;
                            setApp[i] = item;
                        }
                    });
                }
                if (_this.user.customer_id) {
                    _this.showthis = false;
                }
                else {
                    _this.showthis = true;
                }
                var currentState = _this.user.state;
                var currentCounty = _this.user.county;
                var user_pic = _this.user.profile_pic;
                var user_id = _this.user._id;
                _this.userservice.getStates().subscribe(function (result) {
                    _this.states = result;
                    _this.states.forEach(function (x, key) {
                        if (currentState == x.abbv) {
                            console.log(x);
                            _this.selectedState = x.name;
                        }
                    });
                });
                if (currentState != undefined || currentState != 'undefined') {
                    _this.userservice.getCounties(currentState).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                else {
                    _this.userservice.getCounties(_this.states).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                if (currentCounty != undefined || currentCounty != 'undefined') {
                    _this.userservice.getCities(currentCounty, currentState).subscribe(function (result) {
                        _this.cities = result;
                    });
                }
                else {
                    _this.userservice.getCities(_this.counties, _this.states).subscribe(function (result) {
                        _this.counties = result;
                    });
                }
                _this.userselectedservices = setApp;
                console.log(_this.userselectedservices);
                if (user_pic) {
                    _this.userImage['src'] = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].partner_image_url + user_id + '/' + user_pic;
                    _this.selectedFile = _this.userImage;
                }
                return _this.user;
            });
        }
        this.getServices();
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/frontend/views/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/frontend/views/users/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/register/register.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/frontend/views/users/register/register.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .mat-c%heckbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:#1691be !important}\r\n:host /deep/ .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#1691be !important}\r\n.mat-checkbox{display:block}\r\nbody{ background-color: #eef8fc !important}\r\n:root {\r\n    background-color: #eef8fc !important\r\n}\r\n.content_wrapper{height: calc(100vh - 180px);}\r\n:host /deep/ .mat-checkbox-layout{display:block !important;width: 100%;}\r\n.signup-form .invalid-feedback {\r\n    position: absolute;\r\n    bottom: -19px;\r\n    font-size: 12px;\r\n    margin: 0;\r\n}\r\n.signup-form .form-group {\r\n    position: relative;\r\n    margin-bottom: 30px;\r\n}\r\n.second_form{width:95%}\r\nlabel{float:left}\r\n.signup-form .form-main .form-control, .signin-form .form-main .form-control{margin-bottom:0}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0R0FBNEcsbUNBQW1DO0FBQy9JLHdJQUF3SSxtQ0FBbUM7QUFDM0ssY0FBYyxhQUFhO0FBQzNCLE1BQU0sb0NBQW9DO0FBQzFDO0lBQ0k7QUFDSjtBQUNBLGlCQUFpQiwyQkFBMkIsQ0FBQztBQUk3QyxrQ0FBa0Msd0JBQXdCLENBQUMsV0FBVyxDQUFDO0FBRXZFO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLE1BQU0sVUFBVTtBQUNoQiw2RUFBNkUsZUFBZSIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL3ZpZXdzL3VzZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8gLm1hdC1jJWhlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMxNjkxYmUgIWltcG9ydGFudH1cclxuOmhvc3QgL2RlZXAvIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6IzE2OTFiZSAhaW1wb3J0YW50fVxyXG4ubWF0LWNoZWNrYm94e2Rpc3BsYXk6YmxvY2t9XHJcbmJvZHl7IGJhY2tncm91bmQtY29sb3I6ICNlZWY4ZmMgIWltcG9ydGFudH1cclxuOnJvb3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjhmYyAhaW1wb3J0YW50XHJcbn1cclxuLmNvbnRlbnRfd3JhcHBlcntoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7fVxyXG5cclxuXHJcblxyXG46aG9zdCAvZGVlcC8gLm1hdC1jaGVja2JveC1sYXlvdXR7ZGlzcGxheTpibG9jayAhaW1wb3J0YW50O3dpZHRoOiAxMDAlO31cclxuXHJcbi5zaWdudXAtZm9ybSAuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xOXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5zZWNvbmRfZm9ybXt3aWR0aDo5NSV9XHJcbmxhYmVse2Zsb2F0OmxlZnR9XHJcbi5zaWdudXAtZm9ybSAuZm9ybS1tYWluIC5mb3JtLWNvbnRyb2wsIC5zaWduaW4tZm9ybSAuZm9ybS1tYWluIC5mb3JtLWNvbnRyb2x7bWFyZ2luLWJvdHRvbTowfSJdfQ== */"

/***/ }),

/***/ "./src/app/frontend/views/users/register/register.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/frontend/views/users/register/register.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrapper signup-form \">\r\n\t<div class=\"form-inner\">\r\n\t\t<div class=\"form-header\">Sign up</div> \r\n               \r\n\t\t<div class=\"signup-partner\">\r\n\t\t\t<img class=\"logo-icon\" src=\"../../../assets/images/logo-icon.png\">\r\n\t\t\t<h1>Sign up <span>here</span></h1>\r\n\t\t\t<ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\" >\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" (click)= \"set_user_role('user')\" [ngClass]=\"(setusertype=='user')?'active':''\" id=\"customer\" data-toggle=\"pill\" href=\"#pill-customer\" role=\"tab\" aria-controls=\"pills-home\" aria-selected=\"true\">As a Customer</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\" (click)= \"set_user_role('partner')\" [ngClass]=\"(setusertype=='partner')?'active':''\" id=\"partner\" data-toggle=\"pill\" href=\"#pill-partner\" role=\"tab\" aria-controls=\"pills-profile\" aria-selected=\"false\">As a Partner</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<flash-messages></flash-messages>\r\n\t\t</div>\r\n\t\t<div class=\"tab-content second_form\" id=\"pills-tabContent\" style=\"border:none\" >\r\n\t\t\t\r\n\t\t  <div class=\"tab-pane fade show\" [ngClass]=\"(setusertype=='user')?'active':''\" id=\"pill-customer\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\r\n\t\t\t\t\r\n\t\t\t\t<form [formGroup]=\"angForm\" class=\"form-main\" >\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div id=\"step1\" class=\"col-sm-12 first_form\" *ngIf=\"first_show\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t <div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"email\" #email placeholder=\"Email address\" (keyup)=\"emailAlready(email.value)\" [ngClass]=\"{ 'is-invalid': first_submitted && f.email.errors }\" />\r\n\t\t\t\t\t\t\t<div *ngIf=\"first_submitted && f.email.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].errors.required\">\r\n\t\t\t\t\t\t\t\t\tEmail is required.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].errors.pattern\">\r\n\t\t\t\t\t\t\t\t\tPlease enter Valid Email .\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t <div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\"  [ngClass]=\"{ 'is-invalid': first_submitted && f.password.errors }\"  placeholder=\"Password\" #password />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"first_submitted && f.password.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['password'].errors.required\">\r\n\t\t\t\t\t\t\t\t\tPassword is required.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['password'].errors.minlength\">\r\n\t\t\t\t\t\t\t\t\tName must be at least 5 characters long.\r\n\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t<div *ngIf=\"angForm.controls['password'].errors.maxlength\">\r\n\t\t\t\t\t\t\t\t\tName can be max 10 characters long.\r\n\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<button (click)=\"check()\" class=\"btn btn-lg btn-primary\" type=\"submit\">Next</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"step2\" class=\"col-sm-12 second_form\" *ngIf=\"show\">\r\n\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>First Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"First Name*\" formControlName=\"firstName\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.firstName.errors.required\">Firstname is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>Last Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Last name*\" formControlName=\"lastName\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.lastName.errors.required\">Lastname is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>State</label>\r\n\t\t\t\t\t\t\t\t<select  id=\"inputState\"  class=\"form-control getstate\" formControlName=\"state\" (change)= \"getCounties($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\" >\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select State</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let state of states\" title=\"{{ state.abbv }}\" value=\"{{ state.abbv }}\">\r\n\t\t\t\t\t\t\t\t\t\t{{ state.name }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.state.errors.required\">State is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>County</label>\r\n\t\t\t\t\t\t\t\t<select  id=\"inputCounty\"  class=\"form-control getstate\" formControlName=\"county\" (change)= \"getCities($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.county.errors }\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select County</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let county of counties\" title=\"{{ county }}\" value=\"{{ county }}\">\r\n\t\t\t\t\t\t\t\t\t  {{ county | titlecase }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.county.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.county.errors.required\">County is required</div>\r\n\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>  \r\n\t\t\t \r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t\t<label>City</label>\r\n\t\t\t\t\t\t\t\t<select  id=\"inputCity\"  class=\"form-control getstate\" formControlName=\"city\" [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select City</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let city of cities\" title=\"{{ city }}\" value=\"{{ city }}\">\r\n\t\t\t\t\t\t\t\t\t\t{{ city | titlecase }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.city.errors.required\">City is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t<div class=\"form-row\"> \r\n\t\t\t\t\t\t\t<div class=\"form-group col\">\r\n\t\t\t\t\t\t\t\t<label>Street Address</label>\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Street Address\"  formControlName=\"address\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\"></textarea>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.address.errors.required\">Street Address is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>Zipcode</label>\r\n\t\t\t\t\t\t\t\t<input type=\"number\" maxlength=\"5\" oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" class=\"form-control\" id=\"inputEmail5\" placeholder=\"Zip*\"  formControlName=\"zip\" [ngClass]=\"{ 'is-invalid': submitted && f.zip.errors }\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.zip.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.zip.errors.required\">Zipcode is required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.zip.errors.maxLength\">5 Digits are allowed in zipcode</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>Phone</label>\t\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Phone*\"  formControlName=\"phone\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.phone.errors.required\">Phone is required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.phone.errors.pattern\">Invlid Format EX:(123)465-7890</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-row\"> \r\n\t\t\t\t\t\t\t<div class=\"form-group col text-center\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-primary\" type=\"submit\" (click)=\"onSubmit()\"  (ngSubmit)=\"onSubmit()\">Submit</button> \r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>  \r\n\t\t\t \r\n\t\t\t</div>\r\n\t\t  \r\n\t\t\t<div class=\"tab-pane fade \"  [ngClass]=\"(setusertype=='partner')?'active show':''\" id=\"pill-partner\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\r\n\t\t\t\t<form [formGroup]=\"angPartnerForm\" class=\"form-main\" >\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div id=\"step1\" class=\"col-sm-12 first_form\" *ngIf=\"first_show_partner\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"email\" #email placeholder=\"Email address\" (keyup)=\"emailAlready(email.value)\" [ngClass]=\"{ 'is-invalid': third_submitted && f1.email.errors }\" />\r\n\t\t\t\t\t\t\t<div *ngIf=\"third_submitted && f1.email.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f1.email.errors.required\">Email is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"angPartnerForm.controls['email'].invalid && (angPartnerForm.controls['email'].dirty || angPartnerForm.controls['email'].touched)\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"angPartnerForm.controls['email'].errors.required\">\r\n\t\t\t\t\t\t\t\t\tEmail is required.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"angPartnerForm.controls['email'].errors.pattern\">\r\n\t\t\t\t\t\t\t\t\tPlease enter Valid Email .\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t <div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\"  [ngClass]=\"{ 'is-invalid': third_submitted && f.password.errors }\"  placeholder=\"Password\" #password />\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"third_submitted && f1.password.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f1.password.errors.required\">Password is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"angPartnerForm.controls['password'].invalid && (angPartnerForm.controls['password'].dirty || angPartnerForm.controls['password'].touched)\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"angPartnerForm.controls['password'].errors.required\">\r\n\t\t\t\t\t\t\t\t\tPassword is required.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"angPartnerForm.controls['password'].errors.minlength\">\r\n\t\t\t\t\t\t\t\t\tName must be at least 5 characters long.\r\n\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t<div *ngIf=\"angPartnerForm.controls['password'].errors.maxlength\">\r\n\t\t\t\t\t\t\t\t\tName can be max 10 characters long.\r\n\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<button (click)=\"checkpartner()\" class=\"btn btn-lg btn-primary\" type=\"submit\">Next</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"step2\" class=\"col-sm-12 second_form\" *ngIf=\"showpartner\" >\r\n\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>First Name</label>\t\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"First Name*\" formControlName=\"firstName\" [ngClass]=\"{ 'is-invalid': submitted4 && f1.firstName.errors }\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted4 && f1.firstName.errors\" class=\"invalid-feedback  text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f1.firstName.errors.required\">First Name is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>Last Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Last name*\" formControlName=\"lastName\" [ngClass]=\"{ 'is-invalid': submitted4 && f1.lastName.errors }\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted4 && f1.lastName.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f1.lastName.errors.required\">Last Name is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t\t<label>Company Name</label>\t\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputEmail41\" placeholder=\"Company Name*\" formControlName=\"companyName\" [ngClass]=\"{ 'is-invalid': submitted4 && f1.companyName.errors }\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted4 && f1.companyName.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f1.companyName.errors.required\">Company Name is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>State</label>\t\r\n\t\t\t\t\t\t\t\t<select  id=\"inputState\"  class=\"form-control getstate\" formControlName=\"state\" (change)= \"getCounties($event)\" [ngClass]=\"{ 'is-invalid': submitted4 && f1.state.errors }\" >\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select State</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let state of states\" title=\"{{ state.abbv }}\" value=\"{{ state.abbv }}\">\r\n\t\t\t\t\t\t\t\t\t\t{{ state.name }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted4 && f1.state.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f1.state.errors.required\">State is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label>Counties</label>\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\t\t\t<select  id=\"inputCounty\" multiple class=\"form-control getstate\" formControlName=\"county\" [ngClass]=\"{ 'is-invalid': submitted4 && f1.county.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select Counties</option>\r\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let county of counties\" title=\"{{ county }}\" value=\"{{ county }}\">\r\n\t\t\t\t\t\t\t\t\t\t  {{ county | titlecase }}\r\n\t\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted4 && f1.county.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"f1.county.errors.required\">Counties are required</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>  \r\n\t\t\t \r\n\t\t\t\t\t\t<!-- <div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12\">\r\n\t\t\t\t\t\t\t\t<select  id=\"inputCity\"  class=\"form-control getstate\" formControlName=\"city\" [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select City</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let city of cities\" title=\"{{ city }}\" value=\"{{ city }}\">\r\n\t\t\t\t\t\t\t\t\t\t{{ city | titlecase }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>  -->\r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6 text-left\">\r\n\t\t\t\t\t\t\t\t<label>What services do you provide ?</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6 text-left service_label\">\r\n\t\t\t\t\t\t\t\t<mat-checkbox *ngFor=\"let services of jobservices; let i=index\" type=\"checkbox\" id=\"services_checkbox_{{i}}\"  formControlName=\"services\"  (change)=\"onCheckboxChagen($event, services._id)\" [ngClass]=\"{ 'is-invalid': submitted4 && f1.services.errors }\"> {{services.name}}</mat-checkbox>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted4 && f1.services.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f1.services.errors.required\">Services are required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t<div class=\"form-row\"> \r\n\t\t\t\t\t\t\t<div class=\"form-group col\">\r\n\t\t\t\t\t\t\t\t<label>Street Address</label>\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Street Address\"  formControlName=\"address\" [ngClass]=\"{ 'is-invalid': submitted4 && f1.address.errors }\"></textarea>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted4 && f1.address.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f1.address.errors.required\">Address is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>Zipcode</label>\r\n\t\t\t\t\t\t\t\t<input type=\"number\" maxlength=\"5\" oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\" class=\"form-control\" id=\"inputEmail5\" placeholder=\"Zip*\"  formControlName=\"zip\" [ngClass]=\"{ 'is-invalid': submitted4 && f1.zip.errors }\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted4 && f.zip.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f1.zip.errors.required\">Zipcode is required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f1.zip.errors.maxLength\">5 Digits are allowed in zipcode</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\r\n\t\t\t\t\t\t\t\t<label>Phone</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Phone*\"  formControlName=\"phone\" [ngClass]=\"{ 'is-invalid': submitted4 && f1.phone.errors }\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted4 && f1.phone.errors\" class=\"invalid-feedback text-left\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f1.phone.errors.required\">Phone is required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.phone.errors.pattern\">Invlid Format EX:(123)465-7890</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\r\n\t\t\t\r\n\t\t\t\t\t\t<div class=\"form-row\"> \r\n\t\t\t\t\t\t\t<div class=\"form-group col text-center\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-primary\" type=\"submit\" (click)=\"onSubmitPartner()\"  (ngSubmit)=\"onSubmitPartner()\">Submit</button> \r\n\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t  \r\n\t\t</div> \r\n\t</div>\r\n </div>"

/***/ }),

/***/ "./src/app/frontend/views/users/register/register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/frontend/views/users/register/register.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






//import { PasswordValidator } from '../../../validator/password.validator';


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_flashMessagesService, route, router, userservice, jobservice, fb, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.userservice = userservice;
        this.jobservice = jobservice;
        this.fb = fb;
        this.titleService = titleService;
        this.title = 'SignUp';
        this.result = '';
        this.response = "";
        this.jobservices = "";
        this.states = '';
        this.counties = '';
        this.roles = '';
        this.cities = '';
        this.first_show = false;
        this.first_show_partner = false;
        this.show = false;
        this.showpartner = false;
        this.stateName = '';
        this.statename = '';
        this.countyName = '';
        this.setusertype = '';
        this.submitted = false;
        this.submitted4 = false;
        this.first_submitted = false;
        this.third_submitted = false;
        this.interests = [];
        this.createForm();
        this.titleService.setTitle('Create Account | MoveLaunch');
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    /* Signup Form validation */
    RegisterComponent.prototype.createForm = function () {
        this.setusertype = localStorage.getItem('usertype');
        this.getSate();
        if (this.setusertype == 'user') {
            this.getRoles('user');
        }
        if (this.setusertype == 'partner') {
            this.getRoles('partner');
        }
        /* this.passwordFormGroup = this.fb.group({
            password:['',  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
         }); */
        /* Signup Form field for user validation */
        this.angForm = this.fb.group({
            // name: ['',  Validators.required ],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            county: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)])]
        });
        /* Signup Form field for partner validation */
        this.angPartnerForm = this.fb.group({
            // name: ['',  Validators.required ],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            county: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            services: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)])]
        });
    };
    //  check if user has entered username and email in first step
    RegisterComponent.prototype.check = function () {
        this.first_submitted = true;
        if (this.angForm.controls['email'].invalid || this.angForm.controls['password'].invalid) {
            this.show = false;
            this.first_show = true;
            return this.angForm.controls;
        }
        else {
            this.show = true;
            this.first_show = false;
            return this.angForm.controls;
        }
    };
    RegisterComponent.prototype.getServices = function () {
        var _this = this;
        this.jobservice.getServices().subscribe(function (result) {
            _this.jobservices = result.data;
        });
    };
    //  check if partner has entered username and email in first step
    RegisterComponent.prototype.checkpartner = function () {
        this.third_submitted = true;
        if (this.angPartnerForm.controls['email'].invalid || this.angPartnerForm.controls['password'].invalid) {
            this.showpartner = false;
            this.first_show_partner = true;
            return this.angPartnerForm.controls;
        }
        else {
            this.showpartner = true;
            this.first_show_partner = false;
            return this.angPartnerForm.controls;
        }
    };
    //  get all the state from database
    RegisterComponent.prototype.getSate = function () {
        var _this = this;
        this.userservice.getStates().subscribe(function (result) {
            _this.states = result;
        });
    };
    //  get user roles from database
    RegisterComponent.prototype.getRoles = function (usertype) {
        var _this = this;
        this.userservice.getUserRoles(usertype).subscribe(function (result) {
            _this.roles = result;
            console.log(_this.roles);
        });
    };
    //  get counties on change of states
    RegisterComponent.prototype.getCounties = function (event) {
        var _this = this;
        this.stateName = event.target.value;
        this.userservice.getCounties(this.stateName).subscribe(function (result) {
            _this.counties = result;
        });
    };
    //  get counties on change of county
    RegisterComponent.prototype.getCities = function (event) {
        var _this = this;
        this.countyName = event.target.value;
        this.statename = this.angForm.value.state;
        this.userservice.getCities(this.countyName, this.statename).subscribe(function (result) {
            _this.cities = result;
        });
    };
    /* *** add user ** */
    RegisterComponent.prototype.emailAlready = function (email) {
        var _this = this;
        this.userservice.emailAlready(email).subscribe(function (result) {
            _this.response = result;
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () { return this.angForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "f1", {
        get: function () { return this.angPartnerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.angForm.invalid) {
            return;
        }
        else {
            var user = this.angForm.value;
            var userRole = this.roles[0]._id;
            this.userservice.addUser(user, userRole).subscribe(function (result) {
                _this.submitted = false;
                _this.show = false;
                _this.first_show = true;
                _this.first_submitted = false;
                if (result.success) {
                    _this._flashMessagesService.show('Thank you for the registration. Please check your email to confirm your account.', { cssClass: 'alert-success', timeout: 10000 });
                    //this.angForm.reset();
                }
                else {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 5000 });
                }
            });
        }
    };
    RegisterComponent.prototype.onSubmitPartner = function () {
        var _this = this;
        this.submitted4 = true;
        // stop here if form is invalid
        if (this.angPartnerForm.invalid) {
            return;
        }
        else {
            var user = this.angPartnerForm.value;
            this.angPartnerForm.value.services = this.interests;
            var userRole = this.roles[0]._id;
            this.userservice.addPartner(user, userRole).subscribe(function (result) {
                _this.submitted4 = false;
                _this.showpartner = false;
                _this.first_show_partner = true;
                _this.third_submitted = false;
                if (result.success) {
                    _this._flashMessagesService.show('Thanks for registration Please check your email to confirm your account.', { cssClass: 'alert-success', timeout: 10000 });
                    //this.angForm.reset();
                }
                else {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 5000 });
                }
            });
        }
    };
    RegisterComponent.prototype.onCheckboxChagen = function (event, value) {
        if (event.checked) {
            this.interests.push(value);
        }
        if (!event.checked) {
            var index = this.interests.indexOf(value);
            if (index > -1) {
                this.interests.splice(index, 1);
            }
        }
    };
    /* *** Add User ** */
    RegisterComponent.prototype.set_user_role = function (type) {
        this.getRoles(type);
        localStorage.setItem('usertype', type);
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.first_show = true;
        this.first_show_partner = true;
        this.getServices();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/frontend/views/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/frontend/views/users/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/register/verify.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/frontend/views/users/register/verify.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container joblisting-panel-wrap\">\r\n<div class=\"joblisting-panel text-center verify\">\r\n\t<div class=\"col-12\">\r\n\t<i class=\"fas fa-check\"></i>\r\n\t<h3 class=\"title\">Thank you for verified your account</h3>\r\n\t<br> \r\n\t<h2 class=\"desc\">Please click here to <a routerLink=\"/login\">login</a> to your account and create jobs.</h2>\r\n\t</div>\r\n </div>\t\r\n</div>\t\t"

/***/ }),

/***/ "./src/app/frontend/views/users/register/verify.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/frontend/views/users/register/verify.component.ts ***!
  \*******************************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





//import { PasswordValidator } from '../../../validator/password.validator';


var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(_flashMessagesService, userservice, router, fb, route, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.userservice = userservice;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.titleService = titleService;
        this.verifycode = '';
        this.titleService.setTitle('Verify | MoveLaunch');
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verifycode = this.route.snapshot.paramMap.get('verifycode');
        this.userservice.getUserVerified(this.verifycode).subscribe(function (result) {
            console.log(result);
            if (result.success) {
                _this._flashMessagesService.show('Account Has been Verified successfully. Thanks!', { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this._flashMessagesService.show('Wrong Code or invalid account.', { cssClass: 'alert-danger', timeout: 2000 });
            }
        });
    };
    VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/frontend/views/users/register/verify.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/resetpassword/resetpassword.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/frontend/views/users/resetpassword/resetpassword.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrapper signin-form\">\r\n<div class=\"form-inner\">\r\n<div class=\"form-header\">Reset Password</div> \r\n           <form class=\"form-main\" [formGroup]=\"angForm\" novalidate>\r\n\t\t    <div class=\"first_form\">\r\n\t\t    <img class=\"logo-icon\" src=\"../../../../assets/images/logo-icon.png\">\r\n\t\t\t <h1>Reset <span>Password</span></h1>\r\n\t\t\t <flash-messages></flash-messages>   \r\n\t\t\t  <div class=\"input-group mb-3\">\r\n\t\t\t\t   <input type=\"password\" class=\"form-control\" formControlName=\"password\"  [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"  placeholder=\"Password\" #password />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"alert alert-danger\">\r\n\t\t\t\t  <div *ngIf=\"angForm.controls['password'].errors.required\">\r\n\t\t\t\t\tPassword is required.\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div *ngIf=\"angForm.controls['password'].errors.minlength\">\r\n\t\t\t\t\t\tName must be at least 5 characters long.\r\n\t\t\t\t  </div> \r\n\t\t\t\t   <div *ngIf=\"angForm.controls['password'].errors.maxlength\">\r\n\t\t\t\t\t\tName can be max 10 characters long.\r\n\t\t\t\t   </div> \r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t  <button (click)=\"onSubmit()\"  (ngSubmit)=\"onSubmit()\" class=\"btn btn-lg btn-primary\">Submit</button><br />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t\t</form>\r\n     </div>\r\n </div>\r\n \r\n \r\n"

/***/ }),

/***/ "./src/app/frontend/views/users/resetpassword/resetpassword.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/frontend/views/users/resetpassword/resetpassword.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(_flashMessagesService, route, router, userservice, fb, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.titleService = titleService;
        this.title = 'Login User';
        //error :any="";
        this.result = "";
        this.submitted = false;
        this.verifycode = '';
        this.LoginForm();
        this.titleService.setTitle('Reset Password | MoveLaunch');
    }
    ResetpasswordComponent.prototype.LoginForm = function () {
        this.angForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)])],
        });
    };
    Object.defineProperty(ResetpasswordComponent.prototype, "f", {
        get: function () { return this.angForm.controls; },
        enumerable: true,
        configurable: true
    });
    ResetpasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.angForm.invalid) {
            return;
        }
        else {
            var user = this.angForm.value;
            this.verifycode = this.route.snapshot.paramMap.get('verifycode');
            console.log(user.password);
            this.userservice.resetPassword(user.password, this.verifycode).subscribe(function (result) {
                if (result.success) {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 5000 });
                    _this.router.navigate(['/login']);
                }
                else {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 10000 });
                }
            });
        }
    };
    ResetpasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verifycode = this.route.snapshot.paramMap.get('verifycode');
        this.userservice.password_code(this.verifycode).subscribe(function (result) {
            if (!result.success) {
                _this._flashMessagesService.show("This code has been expired.", { cssClass: 'alert-danger', timeout: 2000 });
            }
        });
    };
    ResetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./resetpassword.component.html */ "./src/app/frontend/views/users/resetpassword/resetpassword.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/users-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/frontend/views/users/users-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _home_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/index.component */ "./src/app/frontend/views/home/index.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/frontend/views/users/login/login.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/frontend/views/users/payment/payment.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/frontend/views/users/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/frontend/views/users/profile/profile.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/frontend/views/users/editprofile/editprofile.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/frontend/views/users/dashboard/dashboard.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/frontend/views/users/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "./src/app/frontend/views/users/resetpassword/resetpassword.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/frontend/views/users/changepassword/changepassword.component.ts");
/* harmony import */ var _register_verify_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/verify.component */ "./src/app/frontend/views/users/register/verify.component.ts");
/* harmony import */ var _viewpartnerprofile_viewpartnerprofile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewpartnerprofile/viewpartnerprofile.component */ "./src/app/frontend/views/users/viewpartnerprofile/viewpartnerprofile.component.ts");
/* harmony import */ var _viewuserprofile_viewuserprofile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewuserprofile/viewuserprofile.component */ "./src/app/frontend/views/users/viewuserprofile/viewuserprofile.component.ts");
/* harmony import */ var _viewallnotifications_viewallnotifications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./viewallnotifications/viewallnotifications.component */ "./src/app/frontend/views/users/viewallnotifications/viewallnotifications.component.ts");


















var routes = [
    {
        path: '',
        data: {
            title: 'Users'
        },
        children: [
            { path: '', component: _home_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
            { path: 'purchase-plans', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'edit-profile', component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_9__["EditProfileComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'partner-profile/:id', component: _viewpartnerprofile_viewpartnerprofile_component__WEBPACK_IMPORTED_MODULE_15__["PartnerProfileComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'user-info/:id/:jobId', component: _viewuserprofile_viewuserprofile_component__WEBPACK_IMPORTED_MODULE_16__["UserProfileComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'verify/:verifycode', component: _register_verify_component__WEBPACK_IMPORTED_MODULE_14__["VerifyComponent"] },
            { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_11__["ForgotpasswordComponent"] },
            { path: 'change-password', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_13__["ChangepasswordComponent"] },
            { path: 'resetpassword/:verifycode', component: _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_12__["ResetpasswordComponent"] },
            { path: 'view-all-notifications', component: _viewallnotifications_viewallnotifications_component__WEBPACK_IMPORTED_MODULE_17__["ViewAllNotificationsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
        ]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/users.module.ts":
/*!******************************************************!*\
  !*** ./src/app/frontend/views/users/users.module.ts ***!
  \******************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/index.component */ "./src/app/frontend/views/home/index.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/frontend/views/users/login/login.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/frontend/views/users/payment/payment.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/frontend/views/users/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/frontend/views/users/profile/profile.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/frontend/views/users/editprofile/editprofile.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/frontend/views/users/dashboard/dashboard.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/frontend/views/users/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "./src/app/frontend/views/users/resetpassword/resetpassword.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/frontend/views/users/changepassword/changepassword.component.ts");
/* harmony import */ var _register_verify_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/verify.component */ "./src/app/frontend/views/users/register/verify.component.ts");
/* harmony import */ var _viewpartnerprofile_viewpartnerprofile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./viewpartnerprofile/viewpartnerprofile.component */ "./src/app/frontend/views/users/viewpartnerprofile/viewpartnerprofile.component.ts");
/* harmony import */ var _viewuserprofile_viewuserprofile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./viewuserprofile/viewuserprofile.component */ "./src/app/frontend/views/users/viewuserprofile/viewuserprofile.component.ts");
/* harmony import */ var _viewallnotifications_viewallnotifications_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./viewallnotifications/viewallnotifications.component */ "./src/app/frontend/views/users/viewallnotifications/viewallnotifications.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/frontend/views/users/users-routing.module.ts");

// Angular






















// Dropdowns Component

// Components Routing

var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_22__["UsersRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_21__["BsDropdownModule"].forRoot(),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_11__["EditProfileComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_13__["ForgotpasswordComponent"],
                _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_14__["ResetpasswordComponent"],
                _home_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__["ChangepasswordComponent"],
                _register_verify_component__WEBPACK_IMPORTED_MODULE_16__["VerifyComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["StripePaymentDialog"],
                _viewuserprofile_viewuserprofile_component__WEBPACK_IMPORTED_MODULE_18__["UserProfileComponent"],
                _viewpartnerprofile_viewpartnerprofile_component__WEBPACK_IMPORTED_MODULE_17__["PartnerProfileComponent"],
                _viewallnotifications_viewallnotifications_component__WEBPACK_IMPORTED_MODULE_19__["ViewAllNotificationsComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["HireDeclineDialogDashboard"]
            ],
            entryComponents: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["HireDeclineDialogDashboard"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["StripePaymentDialog"]],
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/viewallnotifications/viewallnotifications.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/frontend/views/users/viewallnotifications/viewallnotifications.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-view img{\r\nwidth: 136px;\r\nheight: 136px;\r\n-o-object-fit: cover;\r\n   object-fit: cover;\r\nborder-radius: 50%;\r\n}\r\n.reviews_desc a{color:#203464}\r\n/* .desc .loc_lable{display:block} */\r\n.desc .loc_lable{width:115px;float: left;font-weight:bold}\r\n.rating {\r\n    float:left;\r\n}\r\n.job-info .title{margin-bottom:15px}\r\n.rating:not(:checked) > input {\r\n    position:absolute;\r\n    top:-9999px;\r\n    clip:rect(0,0,0,0);\r\n}\r\n.rating:not(:checked) > label {\r\n    float:right;\r\n    width:1em;\r\n    padding:0.1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:100%;\r\n    line-height:1.2;\r\n    color:#ddd;\r\n}\r\n.fa-quote-left,.fa-quote-right{   \r\n\t\tpadding: 0 4px;\r\n\t\tfont-size: 12px;\r\n\t\tvertical-align: super;\r\n\t}\r\n.rating:not(:checked) > label:before {\r\n    content: '★ ';\r\n}\r\n.rating > input:checked ~ label {\r\n    color: #51b608;\r\n}\r\n.rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n    color: #1691be;\r\n}\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n    color: #51b608;\r\n}\r\n.star-ratings-sprite {\r\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png\") repeat-x;\r\n  font-size: 0;\r\n  height: 21px;\r\n  line-height: 0;\r\n  overflow: hidden;\r\n  text-indent: -999em;\r\n  width: 110px;\r\n  float: left;\r\n  margin: 0 auto;\r\n}\r\n.job-info {\r\n    background: #ecf7fb;\r\n    padding: 2px 20px;\r\n    margin-bottom: 30px;\r\n}\r\n.star-ratings-sprite-rating{\r\n    background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png\") repeat-x;\r\n    background-position: 0 100%;\r\n    float: left;\r\n    height: 21px;\r\n    display:block;\r\n  }\r\n.compleated{    font-size: 11px;\r\n    display: block;\r\n    float: left;\r\n    width: 100%;\r\n    margin: 10px 0;\r\n\t}\r\n.reviews_desc{font-size:16px;font-style:italic}\r\n.name{font-size:18px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvdmlld2FsbG5vdGlmaWNhdGlvbnMvdmlld2FsbG5vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFlBQVk7QUFDWixhQUFhO0FBQ2Isb0JBQWlCO0dBQWpCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QixvQ0FBb0M7QUFFcEMsaUJBQWlCLFdBQVcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCO0FBQ3pEO0lBQ0ksVUFBVTtBQUNkO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7Q0FDdEI7QUFFRDtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCO0FBR0E7OztJQUdJLGNBQWM7QUFDbEI7QUFHQTtFQUNFLG9HQUFvRztFQUNwRyxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9HQUFvRztJQUNwRywyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFDQSxnQkFBZ0IsZUFBZTtJQUM3QixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0NBQ2pCO0FBQ0MsY0FBYyxjQUFjLENBQUMsaUJBQWlCO0FBQzlDLE1BQU0sY0FBYyIsImZpbGUiOiJzcmMvYXBwL2Zyb250ZW5kL3ZpZXdzL3VzZXJzL3ZpZXdhbGxub3RpZmljYXRpb25zL3ZpZXdhbGxub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXZpZXcgaW1ne1xyXG53aWR0aDogMTM2cHg7XHJcbmhlaWdodDogMTM2cHg7XHJcbm9iamVjdC1maXQ6IGNvdmVyO1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnJldmlld3NfZGVzYyBhe2NvbG9yOiMyMDM0NjR9XHJcbi8qIC5kZXNjIC5sb2NfbGFibGV7ZGlzcGxheTpibG9ja30gKi9cclxuXHJcbi5kZXNjIC5sb2NfbGFibGV7d2lkdGg6MTE1cHg7ZmxvYXQ6IGxlZnQ7Zm9udC13ZWlnaHQ6Ym9sZH1cclxuLnJhdGluZyB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59XHJcbi5qb2ItaW5mbyAudGl0bGV7bWFyZ2luLWJvdHRvbToxNXB4fVxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDotOTk5OXB4O1xyXG4gICAgY2xpcDpyZWN0KDAsMCwwLDApO1xyXG59XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbCB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHdpZHRoOjFlbTtcclxuICAgIHBhZGRpbmc6MC4xZW07XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZToxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6MS4yO1xyXG4gICAgY29sb3I6I2RkZDtcclxufVxyXG4uZmEtcXVvdGUtbGVmdCwuZmEtcXVvdGUtcmlnaHR7ICAgXHJcblx0XHRwYWRkaW5nOiAwIDRweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuXHR9XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ+KYhSAnO1xyXG59XHJcblxyXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjNTFiNjA4O1xyXG59XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlcixcclxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzE2OTFiZTtcclxufVxyXG5cclxuXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIsXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCxcclxuLnJhdGluZyA+IGxhYmVsOmhvdmVyIH4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjNTFiNjA4O1xyXG59XHJcblxyXG5cclxuLnN0YXItcmF0aW5ncy1zcHJpdGUge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzI2MDUvc3Rhci1yYXRpbmctc3ByaXRlLnBuZ1wiKSByZXBlYXQteDtcclxuICBmb250LXNpemU6IDA7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTllbTtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5qb2ItaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmN2ZiO1xyXG4gICAgcGFkZGluZzogMnB4IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5zdGFyLXJhdGluZ3Mtc3ByaXRlLXJhdGluZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzI2MDUvc3Rhci1yYXRpbmctc3ByaXRlLnBuZ1wiKSByZXBlYXQteDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICB9XHJcbiAgLmNvbXBsZWF0ZWR7ICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG5cdH1cclxuICAucmV2aWV3c19kZXNje2ZvbnQtc2l6ZToxNnB4O2ZvbnQtc3R5bGU6aXRhbGljfVxyXG4gIC5uYW1le2ZvbnQtc2l6ZToxOHB4fSJdfQ== */"

/***/ }),

/***/ "./src/app/frontend/views/users/viewallnotifications/viewallnotifications.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/frontend/views/users/viewallnotifications/viewallnotifications.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container job_dashboard\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col\"> \r\n\r\n\t\t\t<h3 class=\"mb-4\">Notifications</h3>\r\n\r\n\t\t\t<div class=\"container joblisting-panel-wrap\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-12\"  *ngIf=\"notifications && notifications.length > 0\" > \r\n\t\t\t\t\t\t<div *ngFor=\"let notification of notifications\" class=\"joblisting-panel\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\" > \r\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"reviews_desc\">{{notification.notificationId.notification_message}} <b><i><a  routerLink=\"/detail-job/{{notification.jobId._id}}\">{{notification.service_name}} on {{notification.jobId.created_at | date:mediumDate}}</a></i></b> By <b><i>{{notification.senderId.firstname}} {{notification.senderId.lastname}}</i></b> On {{notification.created_at | date:mediumDate}}</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div> \r\n"

/***/ }),

/***/ "./src/app/frontend/views/users/viewallnotifications/viewallnotifications.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/frontend/views/users/viewallnotifications/viewallnotifications.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ViewAllNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllNotificationsComponent", function() { return ViewAllNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var ViewAllNotificationsComponent = /** @class */ (function () {
    function ViewAllNotificationsComponent(_flashMessagesService, route, jobservice, router, userservice, fb, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.jobservice = jobservice;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.titleService = titleService;
        this.notificationCount = '';
        this.notifications = '';
        this.jobservices = '';
        this.userselectedservices = '';
        this.titleService.setTitle('Notifications | MoveLaunch');
    }
    ViewAllNotificationsComponent.prototype.getNotificationCount = function () {
        var _this = this;
        this.userservice.getNotificationCountForUser().subscribe(function (result) {
            _this.notificationCount = result.count;
        });
    };
    ViewAllNotificationsComponent.prototype.getServices = function () {
        var _this = this;
        this.jobservice.getServices().subscribe(function (result) {
            _this.jobservices = result.data;
        });
    };
    ViewAllNotificationsComponent.prototype.getAllNotifications = function () {
        var _this = this;
        this.userservice.getAllNotifications(0).subscribe(function (result) {
            _this.notifications = result.notfication;
            console.log(_this.notifications);
            _this.notifications.forEach(function (x, key) {
                var setApp = [];
                for (var i = 0; i < _this.jobservices.length; i++) {
                    var servic = x.jobId.serviceId;
                    var _id = _this.jobservices[i]._id;
                    var _name = _this.jobservices[i].name;
                    $.each(servic, function (index, value) {
                        if (value != "" && value == _id) {
                            var item = _name;
                            setApp[i] = item;
                        }
                    });
                }
                var filtered = setApp.filter(function (el) {
                    return el != null;
                });
                _this.notifications[key].service_name = filtered.join(',');
            });
        });
    };
    ViewAllNotificationsComponent.prototype.ngOnInit = function () {
        this.getServices();
        this.getNotificationCount();
        this.getAllNotifications();
    };
    ViewAllNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./viewallnotifications.component.html */ "./src/app/frontend/views/users/viewallnotifications/viewallnotifications.component.html"),
            styles: [__webpack_require__(/*! ./viewallnotifications.component.css */ "./src/app/frontend/views/users/viewallnotifications/viewallnotifications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]])
    ], ViewAllNotificationsComponent);
    return ViewAllNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/viewpartnerprofile/viewpartnerprofile.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/frontend/views/users/viewpartnerprofile/viewpartnerprofile.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-view img{\r\nwidth: 136px;\r\nheight: 136px;\r\n-o-object-fit: cover;\r\n   object-fit: cover;\r\nborder-radius: 50%;\r\n}\r\n/* .desc .loc_lable{display:block} */\r\n.desc .loc_lable{width:195px;float: left;font-weight:bold}\r\n.desc .loc_val{width:300px;}\r\n.title{\r\n\tfont-size: 18px;\r\n    font-weight: 700;\r\n    margin: 10px 0;\r\n}\r\n.rating {\r\n    float:left;\r\n}\r\n.job-info .title{margin-bottom:15px}\r\n.rating:not(:checked) > input {\r\n    position:absolute;\r\n    top:-9999px;\r\n    clip:rect(0,0,0,0);\r\n}\r\n.rating:not(:checked) > label {\r\n    float:right;\r\n    width:1em;\r\n    padding:0.1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:100%;\r\n    line-height:1.2;\r\n    color:#ddd;\r\n}\r\n.fa-quote-left,.fa-quote-right{   \r\n\t\tpadding: 0 4px;\r\n\t\tfont-size: 12px;\r\n\t\tvertical-align: super;\r\n\t}\r\n.rating:not(:checked) > label:before {\r\n    content: '★ ';\r\n}\r\n.rating > input:checked ~ label {\r\n    color: #51b608;\r\n}\r\n.rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n    color: #1691be;\r\n}\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n    color: #51b608;\r\n}\r\n.star-ratings-sprite {\r\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png\") repeat-x;\r\n  font-size: 0;\r\n  height: 21px;\r\n  line-height: 0;\r\n  overflow: hidden;\r\n  text-indent: -999em;\r\n  width: 110px;\r\n  float: left;\r\n  margin: 0 auto;\r\n}\r\n.job-info {\r\n    background: #ecf7fb;\r\n    padding: 2px 20px;\r\n    margin-bottom: 30px;\r\n}\r\n.star-ratings-sprite-rating{\r\n    background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png\") repeat-x;\r\n    background-position: 0 100%;\r\n    float: left;\r\n    height: 21px;\r\n    display:block;\r\n  }\r\n.compleated{    font-size: 11px;\r\n    display: block;\r\n    float: left;\r\n    width: 100%;\r\n    margin: 10px 0;\r\n\t}\r\n.reviews_desc{font-size:16px;font-style:italic}\r\n.name{font-size:18px}\r\n.detail_class p{display:flex;margin-top:12px}\r\n@media (max-width: 575.98px){\r\n\t.desc .loc_val{width:125px;float: left;font-weight:normal}\r\n\t.desc .loc_val b{font-weight:normal}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvdmlld3BhcnRuZXJwcm9maWxlL3ZpZXdwYXJ0bmVycHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsWUFBWTtBQUNaLGFBQWE7QUFDYixvQkFBaUI7R0FBakIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQjtBQUNBLG9DQUFvQztBQUVwQyxpQkFBaUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0I7QUFDekQsZUFBZSxXQUFXLENBQUM7QUFDM0I7Q0FDQyxlQUFlO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0NBQ3RCO0FBRUQ7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7O0lBRUksY0FBYztBQUNsQjtBQUdBOzs7SUFHSSxjQUFjO0FBQ2xCO0FBR0E7RUFDRSxvR0FBb0c7RUFDcEcsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvR0FBb0c7SUFDcEcsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0EsZ0JBQWdCLGVBQWU7SUFDN0IsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztDQUNqQjtBQUNDLGNBQWMsY0FBYyxDQUFDLGlCQUFpQjtBQUM5QyxNQUFNLGNBQWM7QUFDckIsZ0JBQWdCLFlBQVksQ0FBQyxlQUFlO0FBQzNDO0NBQ0QsZUFBZSxXQUFXLENBQUMsV0FBVyxDQUFDLGtCQUFrQjtDQUN6RCxpQkFBaUIsa0JBQWtCO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvdmlld3BhcnRuZXJwcm9maWxlL3ZpZXdwYXJ0bmVycHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy12aWV3IGltZ3tcclxud2lkdGg6IDEzNnB4O1xyXG5oZWlnaHQ6IDEzNnB4O1xyXG5vYmplY3QtZml0OiBjb3ZlcjtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi8qIC5kZXNjIC5sb2NfbGFibGV7ZGlzcGxheTpibG9ja30gKi9cclxuXHJcbi5kZXNjIC5sb2NfbGFibGV7d2lkdGg6MTk1cHg7ZmxvYXQ6IGxlZnQ7Zm9udC13ZWlnaHQ6Ym9sZH1cclxuLmRlc2MgLmxvY192YWx7d2lkdGg6MzAwcHg7fVxyXG4udGl0bGV7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4ucmF0aW5nIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuLmpvYi1pbmZvIC50aXRsZXttYXJnaW4tYm90dG9tOjE1cHh9XHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGlucHV0IHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOi05OTk5cHg7XHJcbiAgICBjbGlwOnJlY3QoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgd2lkdGg6MWVtO1xyXG4gICAgcGFkZGluZzowLjFlbTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOjEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDoxLjI7XHJcbiAgICBjb2xvcjojZGRkO1xyXG59XHJcbi5mYS1xdW90ZS1sZWZ0LC5mYS1xdW90ZS1yaWdodHsgICBcclxuXHRcdHBhZGRpbmc6IDAgNHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0dmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG5cdH1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAn4piFICc7XHJcbn1cclxuXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgY29sb3I6ICM1MWI2MDg7XHJcbn1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyLFxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjMTY5MWJlO1xyXG59XHJcblxyXG5cclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlcixcclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsLFxyXG4ucmF0aW5nID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgY29sb3I6ICM1MWI2MDg7XHJcbn1cclxuXHJcblxyXG4uc3Rhci1yYXRpbmdzLXNwcml0ZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMjYwNS9zdGFyLXJhdGluZy1zcHJpdGUucG5nXCIpIHJlcGVhdC14O1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICBoZWlnaHQ6IDIxcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWluZGVudDogLTk5OWVtO1xyXG4gIHdpZHRoOiAxMTBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmpvYi1pbmZvIHtcclxuICAgIGJhY2tncm91bmQ6ICNlY2Y3ZmI7XHJcbiAgICBwYWRkaW5nOiAycHggMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLnN0YXItcmF0aW5ncy1zcHJpdGUtcmF0aW5ne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMjYwNS9zdGFyLXJhdGluZy1zcHJpdGUucG5nXCIpIHJlcGVhdC14O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gIH1cclxuICAuY29tcGxlYXRlZHsgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcblx0fVxyXG4gIC5yZXZpZXdzX2Rlc2N7Zm9udC1zaXplOjE2cHg7Zm9udC1zdHlsZTppdGFsaWN9XHJcbiAgLm5hbWV7Zm9udC1zaXplOjE4cHh9XHJcbiAuZGV0YWlsX2NsYXNzIHB7ZGlzcGxheTpmbGV4O21hcmdpbi10b3A6MTJweH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpe1xyXG5cdC5kZXNjIC5sb2NfdmFse3dpZHRoOjEyNXB4O2Zsb2F0OiBsZWZ0O2ZvbnQtd2VpZ2h0Om5vcm1hbH1cclxuXHQuZGVzYyAubG9jX3ZhbCBie2ZvbnQtd2VpZ2h0Om5vcm1hbH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/frontend/views/users/viewpartnerprofile/viewpartnerprofile.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/frontend/views/users/viewpartnerprofile/viewpartnerprofile.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container job_dashboard\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col\"> \r\n\r\n\t\t\t<h3 class=\"mb-4\">User Details</h3>\r\n\r\n\t\t\t<div class=\"container title-icon-bar\">\r\n\t\t\t\t<div class=\"tc-wrap\">{{user.firstname}} {{user.lastname}} </div>\r\n\t\t\t</div>\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t<div class=\"container title-icon-bar\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"job-info\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\" >\r\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\t\tLocation\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"desc detail_class\">\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">State </span><span class=\"loc_val\">{{ user.state }} </span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Counties </span><span class=\"loc_val\"><b *ngFor=\"let county of user.county\">{{county | titlecase }}, </b></span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Address </span><span class=\"loc_val\">{{user.address}}</span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Zipcode </span><span class=\"loc_val\">{{user.zipcode}}</span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Phone </span><span class=\"loc_val\">{{user.phone}}</span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Services</span><span class=\"loc_val\"><span *ngFor=\"let service of jobservices\"><b *ngFor=\"let userservice of user.services\"> <i *ngIf=\"userservice == service._id\">{{service.name}},</i></b></span></span> </p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\" >\r\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\t\tEstimates Profile\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Total Estimates </span><span class=\"loc_val\">{{partnerprofiledata.totalJobs}}</span></p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Estimate Completed </span><span class=\"loc_val\">{{partnerprofiledata.Totalcompleted}}</span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Estimate In Progress </span><span class=\"loc_val\">{{partnerprofiledata.Totalprocessing}}</span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"rate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"loc_lable\">Ratings </span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-sprite\"><span [style.width.%]=\"partnerprofiledata.width\" class=\"star-ratings-sprite-rating\"></span></div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"container title-icon-bar\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12\"  *ngIf=\"reviewData && reviewData.length > 0\" > \r\n\t\t\t\t\t\t<div *ngFor=\"let review of reviewData\" class=\"job-info\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-9\" > \r\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\t\t{{review.serviceName}} On {{review.created_at | date:mediumDate}}\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\" > \r\n\t\t\t\t\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"rate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"star-ratings-sprite\"><span [style.width.%]=\"(review.rating)*20\" class=\"star-ratings-sprite-rating\"></span></div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"compleated\">Completed On {{review.completedAt | date:mediumDate}}</span>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"reviews_desc\"><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>{{review.feedback}}<i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i></p>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"reviews_desc\">~By <i>{{review.firstname}} {{review.lastname}}</i> on <i>{{review.completedAt | date:mediumDate}}</i></p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div> "

/***/ }),

/***/ "./src/app/frontend/views/users/viewpartnerprofile/viewpartnerprofile.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/frontend/views/users/viewpartnerprofile/viewpartnerprofile.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PartnerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerProfileComponent", function() { return PartnerProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");









var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var PartnerProfileComponent = /** @class */ (function () {
    function PartnerProfileComponent(_flashMessagesService, route, jobservice, router, userservice, fb, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.jobservice = jobservice;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.titleService = titleService;
        this.title = 'Login User';
        //error :any="";
        this.result = "";
        this.user = "";
        this.partnerprofiledata = "";
        this.reviewData = "";
        this.states = '';
        this.counties = '';
        this.jobservices = '';
        this.setusertype = '';
        this.cities = '';
        this.submitted = false;
        this.submittedpartner = false;
        this.showthis = false;
        this.services = '';
        this.stateName = '';
        this.statename = '';
        this.countyName = '';
        this.currentState = '';
        this.currentCounty = '';
        this.userid = '';
        this.selectedFile = '';
        this.interests = [];
        this.userImage = [];
        this.image_url = '';
        this.partner_image_url = '';
        this.isChecked = '';
        this.userselectedservices = "";
        this.getServices();
        this.titleService.setTitle('Profile | MoveLaunch');
    }
    PartnerProfileComponent.prototype.getServices = function () {
        var _this = this;
        this.jobservice.getServices().subscribe(function (result) {
            _this.jobservices = result.data;
        });
    };
    PartnerProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _user_id = this.route.snapshot.paramMap.get('id');
        this.userservice.getPartner(_user_id).subscribe(function (result) {
            _this.user = result.user;
            var setApp = [];
            for (var i = 0; i < _this.services.length; i++) {
                var servic = _this.user.services;
                var _id = _this.services[i]._id;
                $.each(servic, function (index, value) {
                    if (value == _id) {
                        var item = value;
                        setApp[i] = item;
                    }
                });
            }
            if (_this.user.customer_id) {
                _this.showthis = false;
            }
            else {
                _this.showthis = true;
            }
            var currentState = _this.user.state;
            var currentCounty = _this.user.county;
            var user_pic = _this.user.profile_pic;
            var user_id = _this.user._id;
            _this.userservice.getStates().subscribe(function (result) {
                _this.states = result;
            });
            _this.userservice.getCounties(currentState).subscribe(function (result) {
                _this.counties = result;
            });
            _this.userservice.getCities(currentCounty, currentState).subscribe(function (result) {
                _this.cities = result;
            });
            _this.userselectedservices = setApp;
            if (user_pic) {
                _this.userImage['src'] = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].partner_image_url + user_id + '/' + user_pic;
                _this.selectedFile = _this.userImage;
            }
            return _this.user;
        });
        this.userservice.getPartnerJobProfile(_user_id).subscribe(function (result) {
            _this.partnerprofiledata = result.data;
            _this.partnerprofiledata.totalJobs = result.data.Totalcompleted + result.data.Totalprocessing;
            _this.partnerprofiledata.width = result.data.Totalrating * 20;
        });
        this.userservice.getPartnerCompletedJobsAndReviews(_user_id).subscribe(function (result) {
            console.log(result);
            _this.reviewData = result.data;
        });
    };
    PartnerProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./viewpartnerprofile.component.html */ "./src/app/frontend/views/users/viewpartnerprofile/viewpartnerprofile.component.html"),
            styles: [__webpack_require__(/*! ./viewpartnerprofile.component.css */ "./src/app/frontend/views/users/viewpartnerprofile/viewpartnerprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]])
    ], PartnerProfileComponent);
    return PartnerProfileComponent;
}());



/***/ }),

/***/ "./src/app/frontend/views/users/viewuserprofile/viewuserprofile.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/frontend/views/users/viewuserprofile/viewuserprofile.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-view img{\r\nwidth: 136px;\r\nheight: 136px;\r\n-o-object-fit: cover;\r\n   object-fit: cover;\r\nborder-radius: 50%;\r\n}\r\n/* .desc .loc_lable{display:block} */\r\n.desc .loc_lable{width:165px;float: left;font-weight:bold}\r\n.rating {\r\n    float:left;\r\n}\r\n.job-info .title{margin-bottom:15px}\r\n.rating:not(:checked) > input {\r\n    position:absolute;\r\n    top:-9999px;\r\n    clip:rect(0,0,0,0);\r\n}\r\n.rating:not(:checked) > label {\r\n    float:right;\r\n    width:1em;\r\n    padding:0.1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:100%;\r\n    line-height:1.2;\r\n    color:#ddd;\r\n}\r\n.fa-quote-left,.fa-quote-right{   \r\n\t\tpadding: 0 4px;\r\n\t\tfont-size: 12px;\r\n\t\tvertical-align: super;\r\n\t}\r\n.rating:not(:checked) > label:before {\r\n    content: '★ ';\r\n}\r\n.rating > input:checked ~ label {\r\n    color: #51b608;\r\n}\r\n.rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n    color: #1691be;\r\n}\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n    color: #51b608;\r\n}\r\n.star-ratings-sprite {\r\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png\") repeat-x;\r\n  font-size: 0;\r\n  height: 21px;\r\n  line-height: 0;\r\n  overflow: hidden;\r\n  text-indent: -999em;\r\n  width: 110px;\r\n  float: left;\r\n  margin: 0 auto;\r\n}\r\n.job-info {\r\n    background: #ecf7fb;\r\n    padding: 2px 20px;\r\n    margin-bottom: 30px;\r\n}\r\n.star-ratings-sprite-rating{\r\n    background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png\") repeat-x;\r\n    background-position: 0 100%;\r\n    float: left;\r\n    height: 21px;\r\n    display:block;\r\n  }\r\n.compleated{    font-size: 11px;\r\n    display: block;\r\n    float: left;\r\n    width: 100%;\r\n    margin: 10px 0;\r\n\t}\r\n.reviews_desc{font-size:16px;font-style:italic}\r\n.name{font-size:18px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvdmlld3VzZXJwcm9maWxlL3ZpZXd1c2VycHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsWUFBWTtBQUNaLGFBQWE7QUFDYixvQkFBaUI7R0FBakIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQjtBQUNBLG9DQUFvQztBQUVwQyxpQkFBaUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0I7QUFDekQ7SUFDSSxVQUFVO0FBQ2Q7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtDQUN0QjtBQUVEO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBOztJQUVJLGNBQWM7QUFDbEI7QUFHQTs7O0lBR0ksY0FBYztBQUNsQjtBQUdBO0VBQ0Usb0dBQW9HO0VBQ3BHLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0dBQW9HO0lBQ3BHLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNBLGdCQUFnQixlQUFlO0lBQzdCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7Q0FDakI7QUFDQyxjQUFjLGNBQWMsQ0FBQyxpQkFBaUI7QUFDOUMsTUFBTSxjQUFjIiwiZmlsZSI6InNyYy9hcHAvZnJvbnRlbmQvdmlld3MvdXNlcnMvdmlld3VzZXJwcm9maWxlL3ZpZXd1c2VycHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy12aWV3IGltZ3tcclxud2lkdGg6IDEzNnB4O1xyXG5oZWlnaHQ6IDEzNnB4O1xyXG5vYmplY3QtZml0OiBjb3ZlcjtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi8qIC5kZXNjIC5sb2NfbGFibGV7ZGlzcGxheTpibG9ja30gKi9cclxuXHJcbi5kZXNjIC5sb2NfbGFibGV7d2lkdGg6MTY1cHg7ZmxvYXQ6IGxlZnQ7Zm9udC13ZWlnaHQ6Ym9sZH1cclxuLnJhdGluZyB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59XHJcbi5qb2ItaW5mbyAudGl0bGV7bWFyZ2luLWJvdHRvbToxNXB4fVxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDotOTk5OXB4O1xyXG4gICAgY2xpcDpyZWN0KDAsMCwwLDApO1xyXG59XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbCB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHdpZHRoOjFlbTtcclxuICAgIHBhZGRpbmc6MC4xZW07XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZToxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6MS4yO1xyXG4gICAgY29sb3I6I2RkZDtcclxufVxyXG4uZmEtcXVvdGUtbGVmdCwuZmEtcXVvdGUtcmlnaHR7ICAgXHJcblx0XHRwYWRkaW5nOiAwIDRweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuXHR9XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ+KYhSAnO1xyXG59XHJcblxyXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjNTFiNjA4O1xyXG59XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlcixcclxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzE2OTFiZTtcclxufVxyXG5cclxuXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIsXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCxcclxuLnJhdGluZyA+IGxhYmVsOmhvdmVyIH4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjNTFiNjA4O1xyXG59XHJcblxyXG5cclxuLnN0YXItcmF0aW5ncy1zcHJpdGUge1xyXG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzI2MDUvc3Rhci1yYXRpbmctc3ByaXRlLnBuZ1wiKSByZXBlYXQteDtcclxuICBmb250LXNpemU6IDA7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTllbTtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5qb2ItaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmN2ZiO1xyXG4gICAgcGFkZGluZzogMnB4IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5zdGFyLXJhdGluZ3Mtc3ByaXRlLXJhdGluZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzI2MDUvc3Rhci1yYXRpbmctc3ByaXRlLnBuZ1wiKSByZXBlYXQteDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICB9XHJcbiAgLmNvbXBsZWF0ZWR7ICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG5cdH1cclxuICAucmV2aWV3c19kZXNje2ZvbnQtc2l6ZToxNnB4O2ZvbnQtc3R5bGU6aXRhbGljfVxyXG4gIC5uYW1le2ZvbnQtc2l6ZToxOHB4fSJdfQ== */"

/***/ }),

/***/ "./src/app/frontend/views/users/viewuserprofile/viewuserprofile.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/frontend/views/users/viewuserprofile/viewuserprofile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container job_dashboard\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col\"> \r\n\r\n\t\t\t<h3 class=\"mb-4\">User Details</h3>\r\n\r\n\t\t\t<div class=\"container title-icon-bar\">\r\n\t\t\t\t<div class=\"tc-wrap\">{{user.firstname}} {{user.lastname}} </div>\r\n\t\t\t</div>\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t<div class=\"container title-icon-bar\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"job-info\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\" >\r\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\t\tLocation\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">State </span><span class=\"loc_val\">{{ user.state }} </span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">County </span><span class=\"loc_val\" *ngFor=\"let county of user.county\">{{county}}</span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Address </span><span class=\"loc_val\">{{user.address}}</span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Zipcode </span><span class=\"loc_val\">{{user.zipcode}}</span> </p>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\"  *ngIf=\"show_data\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\t\tPersonal Info\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Phone </span><span class=\"loc_val\">{{user.phone}}</span> </p>\r\n\t\t\t\t\t\t\t\t\t\t<p><span class=\"loc_lable\">Email</span><span class=\"loc_val\">{{user.email}}</span></p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div> "

/***/ }),

/***/ "./src/app/frontend/views/users/viewuserprofile/viewuserprofile.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/frontend/views/users/viewuserprofile/viewuserprofile.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");









var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(_flashMessagesService, route, jobservice, router, userservice, fb, titleService) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.jobservice = jobservice;
        this.router = router;
        this.userservice = userservice;
        this.fb = fb;
        this.titleService = titleService;
        this.title = 'Login User';
        //error :any="";
        this.result = "";
        this.user = "";
        this.partnerprofiledata = "";
        this.reviewData = "";
        this.states = '';
        this.counties = '';
        this.jobservices = '';
        this.setusertype = '';
        this.cities = '';
        this.submitted = false;
        this.submittedpartner = false;
        this.showthis = false;
        this.show_data = false;
        this.services = '';
        this.stateName = '';
        this.statename = '';
        this.countyName = '';
        this.currentState = '';
        this.currentCounty = '';
        this.userid = '';
        this.selectedFile = '';
        this.interests = [];
        this.userImage = [];
        this.image_url = '';
        this.partner_image_url = '';
        this.isChecked = '';
        this.userselectedservices = "";
        this.getServices();
        this.titleService.setTitle('Profile | MoveLaunch');
    }
    UserProfileComponent.prototype.getServices = function () {
        var _this = this;
        this.jobservice.getServices().subscribe(function (result) {
            _this.jobservices = result.data;
        });
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _user_id = this.route.snapshot.paramMap.get('id');
        var _jobId = this.route.snapshot.paramMap.get('jobId');
        this.userservice.getPartner(_user_id).subscribe(function (result) {
            _this.user = result.user;
            var setApp = [];
            for (var i = 0; i < _this.services.length; i++) {
                var servic = _this.user.services;
                var _id = _this.services[i]._id;
                $.each(servic, function (index, value) {
                    if (value == _id) {
                        var item = value;
                        setApp[i] = item;
                    }
                });
            }
            if (_this.user.customer_id) {
                _this.showthis = false;
            }
            else {
                _this.showthis = true;
            }
            var currentState = _this.user.state;
            var currentCounty = _this.user.county;
            var user_pic = _this.user.profile_pic;
            var user_id = _this.user._id;
            _this.userservice.getStates().subscribe(function (result) {
                _this.states = result;
            });
            _this.userservice.getCounties(currentState).subscribe(function (result) {
                _this.counties = result;
            });
            _this.userservice.getCities(currentCounty, currentState).subscribe(function (result) {
                _this.cities = result;
            });
            _this.userselectedservices = setApp;
            _this.userImage['src'] = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].image_url + user_id + '/' + user_pic;
            _this.selectedFile = _this.userImage;
            return _this.user;
        });
        this.jobservice.getBidsOnJob(_jobId).subscribe(function (result1) {
            if (result1.data.bidStatus == 0) {
                _this.show_data = false;
            }
            if (result1.data.bidStatus == 1) {
                _this.show_data = true;
            }
        });
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./viewuserprofile.component.html */ "./src/app/frontend/views/users/viewuserprofile/viewuserprofile.component.html"),
            styles: [__webpack_require__(/*! ./viewuserprofile.component.css */ "./src/app/frontend/views/users/viewuserprofile/viewuserprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=frontend-views-users-users-module.js.map