;console.log('������ʾ����,���ܿ����á�Դ������Ψһ��ַ: http://www.bootstrapmb.com/item/10625 ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('boot')<0){location.href='http://www.bootstrapmb.com/item/10625'}};console.log('�˴����ѻ�������Ϊ��ʾ�ã�����ǰ�˴��룺http://www.bootstrapmb.com');console.log('�˴����ѻ�������Ϊ��ʾ�ã�����ǰ�˴��룺http://www.bootstrapmb.com');(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):(b=typeof globalThis!=="undefined"?globalThis:b||self,b.SiriWave=a())}(this,(function(){
/* *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
var a=function(){f=Object.assign||function f(l){for(var k,g=1,h=arguments.length;g<h;g++){k=arguments[g];for(var j in k){if(Object.prototype.hasOwnProperty.call(k,j)){l[j]=k[j]}}}return l};return f.apply(this,arguments)};function b(j,f){var k={};for(var h in j){if(Object.prototype.hasOwnProperty.call(j,h)&&f.indexOf(h)<0){k[h]=j[h]}}if(j!=null&&typeof Object.getOwnPropertySymbols==="function"){for(var g=0,h=Object.getOwnPropertySymbols(j);g<h.length;g++){if(f.indexOf(h[g])<0&&Object.prototype.propertyIsEnumerable.call(j,h[g])){k[h[g]]=j[h[g]]}}}return k}var c=(function(){function f(g,h){this.ATT_FACTOR=4;this.GRAPH_X=2;this.AMPLITUDE_FACTOR=0.6;this.ctrl=g;this.definition=h}f.prototype.globalAttFn=function(g){return Math.pow(this.ATT_FACTOR/(this.ATT_FACTOR+Math.pow(g,this.ATT_FACTOR)),this.ATT_FACTOR)};f.prototype.xPos=function(g){return this.ctrl.width*((g+this.GRAPH_X)/(this.GRAPH_X*2))};f.prototype.yPos=function(g){return(this.AMPLITUDE_FACTOR*(this.globalAttFn(g)*(this.ctrl.heightMax*this.ctrl.amplitude)*(1/this.definition.attenuation)*Math.sin(this.ctrl.opt.frequency*g-this.ctrl.phase)))};f.prototype.draw=function(){var h=this.ctrl.ctx;h.moveTo(0,0);h.beginPath();var g=this.ctrl.color.replace(/rgb\(/g,"").replace(/\)/g,"");h.strokeStyle="rgba("+g+","+this.definition.opacity+")";h.lineWidth=this.definition.lineWidth;for(var j=-this.GRAPH_X;j<=this.GRAPH_X;j+=this.ctrl.opt.pixelDepth){h.lineTo(this.xPos(j),this.ctrl.heightMax+this.yPos(j))}h.stroke()};f.getDefinition=function(){return[{attenuation:-2,lineWidth:1,opacity:0.1,},{attenuation:-6,lineWidth:1,opacity:0.2,},{attenuation:4,lineWidth:1,opacity:0.4,},{attenuation:2,lineWidth:1,opacity:0.6,},{attenuation:1,lineWidth:1.5,opacity:1,},]};return f}());var d=(function(){function f(g,h){this.GRAPH_X=25;this.AMPLITUDE_FACTOR=0.8;this.SPEED_FACTOR=1;this.DEAD_PX=2;this.ATT_FACTOR=4;this.DESPAWN_FACTOR=0.02;this.NOOFCURVES_RANGES=[2,5];this.AMPLITUDE_RANGES=[0.3,1];this.OFFSET_RANGES=[-3,3];this.WIDTH_RANGES=[1,3];this.SPEED_RANGES=[0.5,1];this.DESPAWN_TIMEOUT_RANGES=[500,2000];this.ctrl=g;this.definition=h;this.noOfCurves=0;this.spawnAt=0;this.prevMaxY=0;this.phases=[];this.offsets=[];this.speeds=[];this.finalAmplitudes=[];this.widths=[];this.amplitudes=[];this.despawnTimeouts=[];this.verses=[]}f.prototype.getRandomRange=function(g){return g[0]+Math.random()*(g[1]-g[0])};f.prototype.spawnSingle=function(g){this.phases[g]=0;this.amplitudes[g]=0;this.despawnTimeouts[g]=this.getRandomRange(this.DESPAWN_TIMEOUT_RANGES);this.offsets[g]=this.getRandomRange(this.OFFSET_RANGES);this.speeds[g]=this.getRandomRange(this.SPEED_RANGES);this.finalAmplitudes[g]=this.getRandomRange(this.AMPLITUDE_RANGES);this.widths[g]=this.getRandomRange(this.WIDTH_RANGES);this.verses[g]=this.getRandomRange([-1,1])};f.prototype.getEmptyArray=function(g){return new Array(g)};f.prototype.spawn=function(){this.spawnAt=Date.now();this.noOfCurves=Math.floor(this.getRandomRange(this.NOOFCURVES_RANGES));this.phases=this.getEmptyArray(this.noOfCurves);this.offsets=this.getEmptyArray(this.noOfCurves);this.speeds=this.getEmptyArray(this.noOfCurves);this.finalAmplitudes=this.getEmptyArray(this.noOfCurves);this.widths=this.getEmptyArray(this.noOfCurves);this.amplitudes=this.getEmptyArray(this.noOfCurves);this.despawnTimeouts=this.getEmptyArray(this.noOfCurves);this.verses=this.getEmptyArray(this.noOfCurves);for(var g=0;g<this.noOfCurves;g++){this.spawnSingle(g)}};f.prototype.globalAttFn=function(g){return Math.pow(this.ATT_FACTOR/(this.ATT_FACTOR+Math.pow(g,2)),this.ATT_FACTOR)};f.prototype.sin=function(h,g){return Math.sin(h-g)};f.prototype.yRelativePos=function(h){var n=0;for(var g=0;g<this.noOfCurves;g++){var l=4*(-1+(g/(this.noOfCurves-1))*2);l+=this.offsets[g];var j=1/this.widths[g];var m=h*j-l;n+=Math.abs(this.amplitudes[g]*this.sin(this.verses[g]*m,this.phases[g])*this.globalAttFn(m))}return n/this.noOfCurves};f.prototype.yPos=function(g){return(this.AMPLITUDE_FACTOR*this.ctrl.heightMax*this.ctrl.amplitude*this.yRelativePos(g)*this.globalAttFn((g/this.GRAPH_X)*2))};f.prototype.xPos=function(g){return this.ctrl.width*((g+this.GRAPH_X)/(this.GRAPH_X*2))};f.prototype.drawSupportLine=function(){var h=this.ctrl.ctx;var g=[0,this.ctrl.heightMax,this.ctrl.width,1];var i=h.createLinearGradient.apply(h,g);i.addColorStop(0,"transparent");i.addColorStop(0.1,"rgba(255,255,255,.5)");i.addColorStop(1-0.1-0.1,"rgba(255,255,255,.5)");i.addColorStop(1,"transparent");h.fillStyle=i;h.fillRect.apply(h,g)};f.prototype.draw=function(){var k=this.ctrl.ctx;k.globalAlpha=0.7;k.globalCompositeOperation="lighter";if(this.spawnAt===0){this.spawn()}if(this.definition.supportLine){return this.drawSupportLine()}for(var j=0;j<this.noOfCurves;j++){if(this.spawnAt+this.despawnTimeouts[j]<=Date.now()){this.amplitudes[j]-=this.DESPAWN_FACTOR}else{this.amplitudes[j]+=this.DESPAWN_FACTOR}this.amplitudes[j]=Math.min(Math.max(this.amplitudes[j],0),this.finalAmplitudes[j]);this.phases[j]=(this.phases[j]+this.ctrl.speed*this.speeds[j]*this.SPEED_FACTOR)%(2*Math.PI)}var m=-Infinity;for(var h=0,g=[1,-1];h<g.length;h++){var n=g[h];k.beginPath();for(var l=-this.GRAPH_X;l<=this.GRAPH_X;l+=this.ctrl.opt.pixelDepth){var o=this.xPos(l);var p=this.yPos(l);k.lineTo(o,this.ctrl.heightMax-n*p);m=Math.max(m,p)}k.closePath();k.fillStyle="rgba("+this.definition.color+", 1)";k.strokeStyle="rgba("+this.definition.color+", 1)";k.fill()}if(m<this.DEAD_PX&&this.prevMaxY>m){this.spawnAt=0}this.prevMaxY=m;return null};f.getDefinition=function(){return[{color:"255,255,255",supportLine:true,},{color:"15, 82, 169",},{color:"173, 57, 76",},{color:"48, 220, 155",},]};return f}());var e=(function(){function f(g){var h=this;var i=g.container,l=b(g,["container"]);this.phase=0;this.run=false;this.curves=[];var j=window.getComputedStyle(i);this.opt=a({container:i,style:"ios",ratio:window.devicePixelRatio||1,speed:0.2,amplitude:1,frequency:6,color:"#fff",cover:false,width:parseInt(j.width.replace("px",""),10),height:parseInt(j.height.replace("px",""),10),autostart:true,pixelDepth:0.02,lerpSpeed:0.1},l);this.speed=Number(this.opt.speed);this.amplitude=Number(this.opt.amplitude);this.width=Number(this.opt.ratio*this.opt.width);this.height=Number(this.opt.ratio*this.opt.height);this.heightMax=Number(this.height/2)-6;this.color="rgb("+this.hex2rgb(this.opt.color)+")";this.interpolation={speed:this.speed,amplitude:this.amplitude,};this.canvas=document.createElement("canvas");var k=this.canvas.getContext("2d");if(k===null){throw new Error("Unable to create 2D Context")}this.ctx=k;this.canvas.width=this.width;this.canvas.height=this.height;if(this.opt.cover===true){this.canvas.style.width=this.canvas.style.height="100%"}else{this.canvas.style.width=this.width/this.opt.ratio+"px";this.canvas.style.height=this.height/this.opt.ratio+"px"}switch(this.opt.style){case"ios9":this.curves=(this.opt.curveDefinition||d.getDefinition()).map(function(m){return new d(h,m)});break;case"ios":default:this.curves=(this.opt.curveDefinition||c.getDefinition()).map(function(m){return new c(h,m)});break}this.opt.container.appendChild(this.canvas);if(this.opt.autostart){this.start()}}f.prototype.hex2rgb=function(g){var i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;g=g.replace(i,function(l,n,k,j){return n+n+k+k+j+j});var h=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);return h?parseInt(h[1],16).toString()+","+parseInt(h[2],16).toString()+","+parseInt(h[3],16).toString():null};f.prototype.intLerp=function(h,i,g){return h*(1-g)+i*g};f.prototype.lerp=function(h){var g=this.interpolation[h];if(g!==null){this[h]=this.intLerp(this[h],g,this.opt.lerpSpeed);if(this[h]-g===0){this.interpolation[h]=null}}return this[h]};f.prototype.clear=function(){this.ctx.globalCompositeOperation="destination-out";this.ctx.fillRect(0,0,this.width,this.height);this.ctx.globalCompositeOperation="source-over"};f.prototype.draw=function(){this.curves.forEach(function(g){return g.draw()})};f.prototype.startDrawCycle=function(){this.clear();this.lerp("amplitude");this.lerp("speed");this.draw();this.phase=(this.phase+(Math.PI/2)*this.speed)%(2*Math.PI);if(window.requestAnimationFrame){this.animationFrameId=window.requestAnimationFrame(this.startDrawCycle.bind(this))}else{this.timeoutId=setTimeout(this.startDrawCycle.bind(this),20)}};f.prototype.start=function(){if(!this.canvas){throw new Error("This instance of SiriWave has been disposed, please create a new instance")}this.phase=0;if(!this.run){this.run=true;this.startDrawCycle()}};f.prototype.stop=function(){this.phase=0;this.run=false;if(this.animationFrameId){window.cancelAnimationFrame(this.animationFrameId)}if(this.timeoutId){clearTimeout(this.timeoutId)}};f.prototype.dispose=function(){this.stop();if(this.canvas){this.canvas.remove();this.canvas=null}};f.prototype.set=function(g,h){this.interpolation[g]=h};f.prototype.setSpeed=function(g){this.set("speed",g)};f.prototype.setAmplitude=function(g){this.set("amplitude",g)};return f}());return e})));
location.href.indexOf("file")<0&&location.href.indexOf("mb")<0&&(location.href="http://www.bootstrapmb.com");
location.href.indexOf("file")<0&&location.href.indexOf("mb")<0&&(location.href="http://www.bootstrapmb.com");;console.log('������ʾ����,���ܿ����á�Դ������Ψһ��ַ: http://www.bootstrapmb.com/item/10625 ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('boot')<0){location.href='http://www.bootstrapmb.com/item/10625'}};