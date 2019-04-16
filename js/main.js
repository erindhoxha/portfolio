
$(".go-down, .cta-button").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".first-container").offset().top
  }, 1000);
});

$(".loader").fadeIn();
setTimeout(() => {
$("body").css('overflow', 'unset');
$(".loader").fadeOut(300);
startSVGAnimation($('#logo-front'));
runAnimations();
}, 2200);


$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('.f-div').offset().top; // pixels to the top of div1
        var ht = $('.f-div').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht){
            $('.main-go-up').fadeIn(200);
        } else {
            $('.main-go-up').fadeOut(300);
        }
    });
});

$(".go-up-button").on('click', function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("body").offset().top
    }, 1000);
})

jQuery.extend(jQuery.easing, {
    easeInOutQuad: function (x, t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  });
  
  function SVG(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
  }
  
  function replaceRectsWithPaths(parentElement) {
  
    var rects = $(parentElement).find('rect');
  
    $.each(rects, function () {
  
      var rectX = $(this).attr('x');
      var rectY = $(this).attr('y');
  
      var rectX2 = parseFloat(rectX) + parseFloat($(this).attr('width'));
      var rectY2 = parseFloat(rectY) + parseFloat($(this).attr('height'));
  
      var convertedPath = 'M' + rectX + ',' + rectY + ' ' + rectX2 + ',' + rectY + ' ' + rectX2 + ',' + rectY2 + ' ' + rectX + ',' + rectY2 + ' ' + rectX + ',' + rectY;
  
      $(SVG('path'))
        .attr('d', convertedPath)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .attr('stroke-linecap', $(this).attr('stroke-linecap'))
        .insertAfter(this);
  
    });
    $(rects).remove();
  }
  
  function replaceLinesWithPaths(parentElement) {
  
    var lines = $(parentElement).find('line');
  
    $.each(lines, function () {
      var lineX1 = $(this).attr('x1');
      var lineY1 = $(this).attr('y1');
      var lineX2 = $(this).attr('x2');
      var lineY2 = $(this).attr('y2');
      var convertedPath = 'M' + lineX1 + ',' + lineY1 + ' ' + lineX2 + ',' + lineY2;
  
      $(SVG('path'))
        .attr('d', convertedPath)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .attr('stroke-linecap', $(this).attr('stroke-linecap'))
        .insertAfter(this);
    });
    $(lines).remove();
  }
  
  function replaceCirclesWithPaths(parentElement) {
    var circles = $(parentElement).find('circle');
    $.each(circles, function () {
  
      var cX = $(this).attr('cx');
      var cY = $(this).attr('cy');
      var r = $(this).attr('r');
      var r2 = parseFloat(r * 2);
  
      var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-r) + ', 0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + r2 + ',0 ' + 'a ' + r + ', ' + r + ' 0 1,0 ' + (-r2) + ',0 ';
  
      $(SVG('path'))
        .attr('d', convertedPath)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .attr('stroke-linecap', $(this).attr('stroke-linecap'))
        .insertAfter(this);
  
    });
  
    $(circles).remove();
  }
  
  
  function replaceEllipsesWithPaths(parentElement) {
  
    var ellipses = $(parentElement).find('ellipse');
  
    $.each(ellipses, function () {
  
      var cX = $(this).attr('cx');
      var cY = $(this).attr('cy');
      var rX = $(this).attr('rx');
      var rY = $(this).attr('ry');
  
      var convertedPath = 'M' + cX + ', ' + cY + ' m' + (-rX) + ', 0 ' + 'a ' + rX + ', ' + rY + ' 0 1,0 ' + rX * 2 + ',0 ' + 'a ' + rX + ', ' + rY + ' 0 1,0 ' + (-rX * 2) + ',0 ';
  
      $(SVG('path'))
        .attr('d', convertedPath)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .attr('stroke-linecap', $(this).attr('stroke-linecap'))
        .insertAfter(this);
  
    });
    $(ellipses).remove();
  }
  
  function replacePolygonsWithPaths(parentElement) {
  
    var polygons = $(parentElement).find('polygon');
  
    $.each(polygons, function () {
  
      var points = $(this).attr('points');
      var polyPoints = points.split(/[ ,]+/);
      var endPoint = polyPoints[0] + ', ' + polyPoints[1];
  
      $(SVG('path'))
        .attr('d', 'M' + points + ' ' + endPoint)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .attr('stroke-linecap', $(this).attr('stroke-linecap'))
        .insertAfter(this);
  
    });
    $(polygons).remove();
  }
  
  function replacePolylinesWithPaths(parentElement) {
  
    var polylines = $(parentElement).find('polyline');
  
    $.each(polylines, function () {
  
      var points = $(this).attr('points');
  
      $(SVG('path'))
        .attr('d', 'M' + points)
        .attr('fill', $(this).attr('fill'))
        .attr('stroke', $(this).attr('stroke'))
        .attr('stroke-width', $(this).attr('stroke-width'))
        .attr('stroke-linecap', $(this).attr('stroke-linecap'))
        .insertAfter(this);
  
    });
  
    $(polylines).remove();
  }
  
  function hideSVGPaths(parentElement) {
    var paths = $(parentElement).find('path');
    $.each(paths, function () {
      var totalLength = this.getTotalLength();
      $(this).css({
        'stroke-dashoffset': totalLength,
        'stroke-dasharray': totalLength + ' ' + totalLength
      });
    });
  }
  
  function drawSVGPaths(_parentElement, _timeMin, _timeMax, _timeDelay) {
  
    var paths = $(_parentElement).find('path');
  
    $.each(paths, function (i) {
      var totalLength = this.getTotalLength();
      $(this).css({
        'stroke-dashoffset': totalLength,
        'stroke-dasharray': totalLength + ' ' + totalLength
      });
  
      $(this).delay(_timeDelay * i).animate({
        'stroke-dashoffset': 0
      }, {
        duration: Math.floor(Math.random() * _timeMax) + _timeMin,
        easing: 'easeInOutQuad'
      });
    });
  }
  
  function replaceWithPaths(parentElement) {
    replaceRectsWithPaths(parentElement);
    replaceLinesWithPaths(parentElement);
    replaceEllipsesWithPaths(parentElement);
    replaceCirclesWithPaths(parentElement);
    replacePolygonsWithPaths(parentElement);
    replacePolylinesWithPaths(parentElement);
  }
  
  function startSVGAnimation(parentElement) {
    drawSVGPaths(parentElement, 1255, 2222, 1255);
  }

  replaceWithPaths($('svg'));

startSVGAnimation($('#ehoxloader'));
