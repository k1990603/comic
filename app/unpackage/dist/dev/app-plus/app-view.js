var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20180905_syb_scopedata*/window.__wcc_version__='v0.5vv_20180905_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'about'])
Z([3,'content'])
Z([3,'qrcode'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longtap']],[[4],[[5],[[4],[[5],[[5],[1,'save']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'https://img.cdn.aliyun.dcloud.net.cn/stream/qr/__UNI__FAD3FD9.png/256'])
Z([3,'tip'])
Z([3,'扫码体验看图App模板'])
Z([3,'desc'])
Z([3,'基于uni-app开发的看图App模版，项目已开源。'])
Z([3,'source'])
Z([3,'title'])
Z([3,'本示例源码获取方式：'])
Z([3,'source-list'])
Z([3,'source-cell'])
Z([3,'nbsp'])
Z([3,'1.'])
Z([3,'下载 HBuilderX，新建 uni-app 项目时选择 看图App 模板。'])
Z(z[14])
Z(z[15])
Z([3,'2.'])
Z(z[3])
Z([3,'link'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'openLink']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([a,[[7],[3,'sourceLink']]])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'share']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'分享'])
Z([3,'version'])
Z([a,[[2,'+'],[[2,'+'],[1,'当前版本：'],[[7],[3,'version']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z(z[0])
Z([3,'value'])
Z([[7],[3,'data']])
Z(z[0])
Z([3,'__e'])
Z([3,'capterWrap'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'preImg']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'data']],[1,'']],[[7],[3,'index']]],[1,'list_id']]]]]]]]]]]]]]])
Z(z[6])
Z([a,[[6],[[7],[3,'value']],[3,'chapter_name']]])
Z([3,'detail-btn-view'])
Z(z[5])
Z([3,'download'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'download']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'showBtn']])
Z(z[5])
Z([3,'setting'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'setting']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'设为壁纸'])
Z(z[5])
Z([3,'collect'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'collect']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z(z[0])
Z([3,'item'])
Z([[7],[3,'data']])
Z(z[0])
Z([3,'card'])
Z([3,'imgPicture'])
Z([[6],[[7],[3,'item']],[3,'url']])
Z([3,'detail-btn-view'])
Z([3,'__e'])
Z([3,'download'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'download']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'showBtn']])
Z(z[9])
Z([3,'setting'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'setting']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'设为壁纸'])
Z(z[9])
Z([3,'collect'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'collect']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'center'])
Z([3,'__e'])
Z([3,'logo'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'!'],[[7],[3,'login']]],[1,'logo-hover'],[1,'']])
Z([3,'logo-img'])
Z([[2,'?:'],[[7],[3,'login']],[[6],[[7],[3,'uerInfo']],[3,'avatarUrl']],[[7],[3,'avatarUrl']]])
Z([3,'logo-title'])
Z([3,'uer-name'])
Z([a,[[2,'+'],[1,'Hi，'],[[2,'?:'],[[7],[3,'login']],[[6],[[7],[3,'uerInfo']],[3,'name']],[1,'您未登录']]]])
Z([[2,'!'],[[7],[3,'login']]])
Z([3,'go-login navigat-arrow'])
Z([3,''])
Z([3,'center-list'])
Z([3,'center-list-item border-bottom'])
Z([3,'list-icon'])
Z([3,''])
Z([3,'list-text'])
Z([3,'收藏图片'])
Z([3,'navigat-arrow'])
Z(z[12])
Z([3,'center-list-item'])
Z(z[15])
Z([3,''])
Z(z[17])
Z([3,'收藏图集'])
Z(z[19])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z([3,''])
Z(z[17])
Z([3,'管理图片'])
Z(z[19])
Z(z[12])
Z(z[21])
Z(z[15])
Z([3,''])
Z(z[17])
Z([3,'上传图片'])
Z(z[19])
Z(z[12])
Z(z[13])
Z(z[1])
Z(z[14])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goAbout']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[15])
Z([3,''])
Z(z[17])
Z([3,'关于'])
Z(z[19])
Z(z[12])
Z(z[21])
Z(z[15])
Z([3,''])
Z(z[17])
Z([3,'账号管理'])
Z(z[19])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swpierChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'screenHeight']],[1,'px']]],[1,';']])
Z(z[0])
Z([3,'value'])
Z([[7],[3,'data']])
Z([3,'*this'])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'preImg']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'widthFix'])
Z([[7],[3,'value']])
Z([3,'detail-btn-view'])
Z(z[1])
Z([3,'download'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'download']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'showBtn']])
Z(z[1])
Z([3,'setting'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'setting']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'设为壁纸'])
Z(z[1])
Z([3,'collect'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'collect']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'grid'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'lists']])
Z([3,'guid'])
Z([3,'grid-c-06'])
Z([3,'__e'])
Z([3,'panel'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'lists']],[1,'guid']],[[6],[[7],[3,'item']],[3,'guid']]]]]]]]]]]]]]]])
Z([3,'card-img card-list2-img'])
Z([[6],[[7],[3,'item']],[3,'img_src']])
Z([3,'card-num-view card-list2-num-view'])
Z([a,[[2,'+'],[[6],[[7],[3,'item']],[3,'img_num']],[1,'P']]])
Z([3,'card-bottm row'])
Z([3,'car-title-view row'])
Z([3,'card-title card-list2-title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z(z[7])
Z([3,'card-share-view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'share']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'lists']],[1,'guid']],[[6],[[7],[3,'item']],[3,'guid']]]]]]]]]]]]]]]])
Z([3,'loadMore'])
Z([3,'加载中...'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'grid data-v-afe00502'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'dataList']])
Z([3,'guid'])
Z([3,'grid-c-06 data-v-afe00502'])
Z([3,'__e'])
Z([3,'panel data-v-afe00502'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'dataList']],[1,'guid']],[[6],[[7],[3,'item']],[3,'guid']]]]]]]]]]]]]]]])
Z([3,'card-img card-list2-img data-v-afe00502'])
Z([[6],[[7],[3,'item']],[3,'img_src']])
Z([3,'card-num-view card-list2-num-view data-v-afe00502'])
Z([a,[[2,'+'],[[6],[[7],[3,'item']],[3,'img_num']],[1,'P']]])
Z([3,'card-bottm row data-v-afe00502'])
Z([3,'car-title-view row data-v-afe00502'])
Z([3,'card-title card-list2-title data-v-afe00502'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z(z[6])
Z([3,'card-share-view data-v-afe00502'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'share']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'dataList']],[1,'guid']],[[6],[[7],[3,'item']],[3,'guid']]]]]]]]]]]]]]]])
Z([3,'grid-c-12 data-v-afe00502'])
Z([3,'loadMore data-v-afe00502'])
Z([a,[[7],[3,'loadMoreText']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'loginView'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'login']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'input-view'])
Z([3,'label-view'])
Z([3,'label'])
Z([3,'账号'])
Z([3,'input'])
Z([3,'nameValue'])
Z([3,'请输入用户名'])
Z([3,'text'])
Z(z[3])
Z(z[4])
Z(z[5])
Z([3,'密码'])
Z(z[7])
Z([3,'passwordValue'])
Z([3,'请输入密码'])
Z([3,'password'])
Z([3,'button-view'])
Z([3,'login'])
Z([3,'submit'])
Z([3,'hover'])
Z([3,'default'])
Z([3,'登录'])
Z(z[0])
Z([3,'register'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'register']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[22])
Z(z[23])
Z([3,'免费注册'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z(z[0])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__e'])
Z([3,'card'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'card-img'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'picture']])
Z([3,'card-num-view'])
Z([a,[[2,'+'],[[6],[[7],[3,'item']],[3,'type_str']],[1,'P']]])
Z([3,'card-bottm row'])
Z([3,'car-title-view row'])
Z([3,'card-title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z(z[5])
Z([3,'card-share-view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'share']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'loadMore'])
Z([3,'加载中...'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'tags'])
Z([3,'__i0__'])
Z([3,'value'])
Z([[7],[3,'data']])
Z([3,'key'])
Z([3,'__e'])
Z([3,'tag'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goList']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'data']],[1,'key']],[[6],[[7],[3,'value']],[3,'key']]]]]]]]]]]]]]]])
Z([3,'tag-img'])
Z([[6],[[7],[3,'value']],[3,'icon']])
Z([3,'tag-text'])
Z([a,[[6],[[7],[3,'value']],[3,'type']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./pages/about/about.wxml','./pages/capter/capter.wxml','./pages/capterDetail/capterDetail.wxml','./pages/center/center.wxml','./pages/detail/detail.wxml','./pages/hot/hot.wxml','./pages/list/list.wxml','./pages/login/login.wxml','./pages/new/new.wxml','./pages/tag/tag.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_mz(z,'image',['bindlongtap',3,'data-event-opts',1,'src',2],[],e,s,gg)
_(oD,fE)
var cF=_n('text')
_rz(z,cF,'class',6,e,s,gg)
var hG=_oz(z,7,e,s,gg)
_(cF,hG)
_(oD,cF)
_(xC,oD)
var oH=_n('view')
_rz(z,oH,'class',8,e,s,gg)
var cI=_oz(z,9,e,s,gg)
_(oH,cI)
_(xC,oH)
var oJ=_n('view')
_rz(z,oJ,'class',10,e,s,gg)
var lK=_n('view')
_rz(z,lK,'class',11,e,s,gg)
var aL=_oz(z,12,e,s,gg)
_(lK,aL)
_(oJ,lK)
var tM=_n('view')
_rz(z,tM,'class',13,e,s,gg)
var eN=_n('view')
_rz(z,eN,'class',14,e,s,gg)
var bO=_n('text')
_rz(z,bO,'space',15,e,s,gg)
var oP=_oz(z,16,e,s,gg)
_(bO,oP)
_(eN,bO)
var xQ=_n('text')
var oR=_oz(z,17,e,s,gg)
_(xQ,oR)
_(eN,xQ)
_(tM,eN)
var fS=_n('view')
_rz(z,fS,'class',18,e,s,gg)
var cT=_n('text')
_rz(z,cT,'space',19,e,s,gg)
var hU=_oz(z,20,e,s,gg)
_(cT,hU)
_(fS,cT)
var oV=_mz(z,'text',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var cW=_oz(z,24,e,s,gg)
_(oV,cW)
_(fS,oV)
_(tM,fS)
_(oJ,tM)
_(xC,oJ)
var oX=_mz(z,'button',['bindtap',25,'data-event-opts',1,'type',2],[],e,s,gg)
var lY=_oz(z,28,e,s,gg)
_(oX,lY)
_(xC,oX)
_(oB,xC)
var aZ=_n('view')
_rz(z,aZ,'class',29,e,s,gg)
var t1=_oz(z,30,e,s,gg)
_(aZ,t1)
_(oB,aZ)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var b3=_n('view')
_rz(z,b3,'class',0,e,s,gg)
var o4=_v()
_(b3,o4)
var x5=function(f7,o6,c8,gg){
var o0=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],f7,o6,gg)
var cAB=_n('view')
_rz(z,cAB,'class',8,f7,o6,gg)
var oBB=_oz(z,9,f7,o6,gg)
_(cAB,oBB)
_(o0,cAB)
_(c8,o0)
return c8
}
o4.wxXCkey=2
_2z(z,3,x5,e,s,gg,o4,'value','index','index')
var lCB=_n('view')
_rz(z,lCB,'class',10,e,s,gg)
var tEB=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
_(lCB,tEB)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,14,e,s,gg)){aDB.wxVkey=1
var eFB=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var bGB=_oz(z,18,e,s,gg)
_(eFB,bGB)
_(aDB,eFB)
}
var oHB=_mz(z,'view',['bindtap',19,'class',1,'data-event-opts',2],[],e,s,gg)
_(lCB,oHB)
aDB.wxXCkey=1
_(b3,lCB)
_(r,b3)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oJB=_n('view')
_rz(z,oJB,'class',0,e,s,gg)
var fKB=_v()
_(oJB,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_n('view')
_rz(z,lQB,'class',5,oNB,hMB,gg)
var aRB=_mz(z,'image',['class',6,'src',1],[],oNB,hMB,gg)
_(lQB,aRB)
_(cOB,lQB)
return cOB
}
fKB.wxXCkey=2
_2z(z,3,cLB,e,s,gg,fKB,'item','index','index')
var tSB=_n('view')
_rz(z,tSB,'class',8,e,s,gg)
var bUB=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
_(tSB,bUB)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,12,e,s,gg)){eTB.wxVkey=1
var oVB=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],e,s,gg)
var xWB=_oz(z,16,e,s,gg)
_(oVB,xWB)
_(eTB,oVB)
}
var oXB=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2],[],e,s,gg)
_(tSB,oXB)
eTB.wxXCkey=1
_(oJB,tSB)
_(r,oJB)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cZB=_n('view')
_rz(z,cZB,'class',0,e,s,gg)
var h1B=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'hoverClass',3],[],e,s,gg)
var o2B=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(h1B,o2B)
var c3B=_n('view')
_rz(z,c3B,'class',7,e,s,gg)
var l5B=_n('text')
_rz(z,l5B,'class',8,e,s,gg)
var a6B=_oz(z,9,e,s,gg)
_(l5B,a6B)
_(c3B,l5B)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,10,e,s,gg)){o4B.wxVkey=1
var t7B=_n('text')
_rz(z,t7B,'class',11,e,s,gg)
var e8B=_oz(z,12,e,s,gg)
_(t7B,e8B)
_(o4B,t7B)
}
o4B.wxXCkey=1
_(h1B,c3B)
_(cZB,h1B)
var b9B=_n('view')
_rz(z,b9B,'class',13,e,s,gg)
var o0B=_n('view')
_rz(z,o0B,'class',14,e,s,gg)
var xAC=_n('text')
_rz(z,xAC,'class',15,e,s,gg)
var oBC=_oz(z,16,e,s,gg)
_(xAC,oBC)
_(o0B,xAC)
var fCC=_n('text')
_rz(z,fCC,'class',17,e,s,gg)
var cDC=_oz(z,18,e,s,gg)
_(fCC,cDC)
_(o0B,fCC)
var hEC=_n('text')
_rz(z,hEC,'class',19,e,s,gg)
var oFC=_oz(z,20,e,s,gg)
_(hEC,oFC)
_(o0B,hEC)
_(b9B,o0B)
var cGC=_n('view')
_rz(z,cGC,'class',21,e,s,gg)
var oHC=_n('text')
_rz(z,oHC,'class',22,e,s,gg)
var lIC=_oz(z,23,e,s,gg)
_(oHC,lIC)
_(cGC,oHC)
var aJC=_n('text')
_rz(z,aJC,'class',24,e,s,gg)
var tKC=_oz(z,25,e,s,gg)
_(aJC,tKC)
_(cGC,aJC)
var eLC=_n('text')
_rz(z,eLC,'class',26,e,s,gg)
var bMC=_oz(z,27,e,s,gg)
_(eLC,bMC)
_(cGC,eLC)
_(b9B,cGC)
_(cZB,b9B)
var oNC=_n('view')
_rz(z,oNC,'class',28,e,s,gg)
var xOC=_n('view')
_rz(z,xOC,'class',29,e,s,gg)
var oPC=_n('text')
_rz(z,oPC,'class',30,e,s,gg)
var fQC=_oz(z,31,e,s,gg)
_(oPC,fQC)
_(xOC,oPC)
var cRC=_n('text')
_rz(z,cRC,'class',32,e,s,gg)
var hSC=_oz(z,33,e,s,gg)
_(cRC,hSC)
_(xOC,cRC)
var oTC=_n('text')
_rz(z,oTC,'class',34,e,s,gg)
var cUC=_oz(z,35,e,s,gg)
_(oTC,cUC)
_(xOC,oTC)
_(oNC,xOC)
var oVC=_n('view')
_rz(z,oVC,'class',36,e,s,gg)
var lWC=_n('text')
_rz(z,lWC,'class',37,e,s,gg)
var aXC=_oz(z,38,e,s,gg)
_(lWC,aXC)
_(oVC,lWC)
var tYC=_n('text')
_rz(z,tYC,'class',39,e,s,gg)
var eZC=_oz(z,40,e,s,gg)
_(tYC,eZC)
_(oVC,tYC)
var b1C=_n('text')
_rz(z,b1C,'class',41,e,s,gg)
var o2C=_oz(z,42,e,s,gg)
_(b1C,o2C)
_(oVC,b1C)
_(oNC,oVC)
_(cZB,oNC)
var x3C=_n('view')
_rz(z,x3C,'class',43,e,s,gg)
var o4C=_mz(z,'view',['bindtap',44,'class',1,'data-event-opts',2],[],e,s,gg)
var f5C=_n('text')
_rz(z,f5C,'class',47,e,s,gg)
var c6C=_oz(z,48,e,s,gg)
_(f5C,c6C)
_(o4C,f5C)
var h7C=_n('text')
_rz(z,h7C,'class',49,e,s,gg)
var o8C=_oz(z,50,e,s,gg)
_(h7C,o8C)
_(o4C,h7C)
var c9C=_n('text')
_rz(z,c9C,'class',51,e,s,gg)
var o0C=_oz(z,52,e,s,gg)
_(c9C,o0C)
_(o4C,c9C)
_(x3C,o4C)
var lAD=_n('view')
_rz(z,lAD,'class',53,e,s,gg)
var aBD=_n('text')
_rz(z,aBD,'class',54,e,s,gg)
var tCD=_oz(z,55,e,s,gg)
_(aBD,tCD)
_(lAD,aBD)
var eDD=_n('text')
_rz(z,eDD,'class',56,e,s,gg)
var bED=_oz(z,57,e,s,gg)
_(eDD,bED)
_(lAD,eDD)
var oFD=_n('text')
_rz(z,oFD,'class',58,e,s,gg)
var xGD=_oz(z,59,e,s,gg)
_(oFD,xGD)
_(lAD,oFD)
_(x3C,lAD)
_(cZB,x3C)
_(r,cZB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var fID=_n('view')
_rz(z,fID,'class',0,e,s,gg)
var cJD=_mz(z,'swiper',['bindchange',1,'data-event-opts',1,'style',2],[],e,s,gg)
var hKD=_v()
_(cJD,hKD)
var oLD=function(oND,cMD,lOD,gg){
var tQD=_mz(z,'swiper-item',['bindtap',8,'data-event-opts',1],[],oND,cMD,gg)
var eRD=_mz(z,'image',['mode',10,'src',1],[],oND,cMD,gg)
_(tQD,eRD)
_(lOD,tQD)
return lOD
}
hKD.wxXCkey=2
_2z(z,6,oLD,e,s,gg,hKD,'value','index','*this')
_(fID,cJD)
var bSD=_n('view')
_rz(z,bSD,'class',12,e,s,gg)
var xUD=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],e,s,gg)
_(bSD,xUD)
var oTD=_v()
_(bSD,oTD)
if(_oz(z,16,e,s,gg)){oTD.wxVkey=1
var oVD=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2],[],e,s,gg)
var fWD=_oz(z,20,e,s,gg)
_(oVD,fWD)
_(oTD,oVD)
}
var cXD=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
_(bSD,cXD)
oTD.wxXCkey=1
_(fID,bSD)
_(r,fID)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oZD=_n('view')
_rz(z,oZD,'class',0,e,s,gg)
var c1D=_n('view')
_rz(z,c1D,'class',1,e,s,gg)
var o2D=_v()
_(c1D,o2D)
var l3D=function(t5D,a4D,e6D,gg){
var o8D=_n('view')
_rz(z,o8D,'class',6,t5D,a4D,gg)
var x9D=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],t5D,a4D,gg)
var o0D=_mz(z,'image',['class',10,'src',1],[],t5D,a4D,gg)
_(x9D,o0D)
var fAE=_n('text')
_rz(z,fAE,'class',12,t5D,a4D,gg)
var cBE=_oz(z,13,t5D,a4D,gg)
_(fAE,cBE)
_(x9D,fAE)
var hCE=_n('view')
_rz(z,hCE,'class',14,t5D,a4D,gg)
var oDE=_n('view')
_rz(z,oDE,'class',15,t5D,a4D,gg)
var cEE=_n('text')
_rz(z,cEE,'class',16,t5D,a4D,gg)
var oFE=_oz(z,17,t5D,a4D,gg)
_(cEE,oFE)
_(oDE,cEE)
_(hCE,oDE)
var lGE=_mz(z,'view',['catchtap',18,'class',1,'data-event-opts',2],[],t5D,a4D,gg)
_(hCE,lGE)
_(x9D,hCE)
_(o8D,x9D)
_(e6D,o8D)
return e6D
}
o2D.wxXCkey=2
_2z(z,4,l3D,e,s,gg,o2D,'item','__i0__','guid')
_(oZD,c1D)
var aHE=_n('text')
_rz(z,aHE,'class',21,e,s,gg)
var tIE=_oz(z,22,e,s,gg)
_(aHE,tIE)
_(oZD,aHE)
_(r,oZD)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var bKE=_n('view')
_rz(z,bKE,'class',0,e,s,gg)
var oLE=_v()
_(bKE,oLE)
var xME=function(fOE,oNE,cPE,gg){
var oRE=_n('view')
_rz(z,oRE,'class',5,fOE,oNE,gg)
var cSE=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],fOE,oNE,gg)
var oTE=_mz(z,'image',['class',9,'src',1],[],fOE,oNE,gg)
_(cSE,oTE)
var lUE=_n('text')
_rz(z,lUE,'class',11,fOE,oNE,gg)
var aVE=_oz(z,12,fOE,oNE,gg)
_(lUE,aVE)
_(cSE,lUE)
var tWE=_n('view')
_rz(z,tWE,'class',13,fOE,oNE,gg)
var eXE=_n('view')
_rz(z,eXE,'class',14,fOE,oNE,gg)
var bYE=_n('text')
_rz(z,bYE,'class',15,fOE,oNE,gg)
var oZE=_oz(z,16,fOE,oNE,gg)
_(bYE,oZE)
_(eXE,bYE)
_(tWE,eXE)
var x1E=_mz(z,'view',['catchtap',17,'class',1,'data-event-opts',2],[],fOE,oNE,gg)
_(tWE,x1E)
_(cSE,tWE)
_(oRE,cSE)
_(cPE,oRE)
return cPE
}
oLE.wxXCkey=2
_2z(z,3,xME,e,s,gg,oLE,'item','__i0__','guid')
var o2E=_n('view')
_rz(z,o2E,'class',20,e,s,gg)
var f3E=_n('text')
_rz(z,f3E,'class',21,e,s,gg)
var c4E=_oz(z,22,e,s,gg)
_(f3E,c4E)
_(o2E,f3E)
_(bKE,o2E)
_(r,bKE)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var o6E=_mz(z,'form',['bindsubmit',0,'class',1,'data-event-opts',1],[],e,s,gg)
var c7E=_n('view')
_rz(z,c7E,'class',3,e,s,gg)
var o8E=_n('view')
_rz(z,o8E,'class',4,e,s,gg)
var l9E=_n('text')
_rz(z,l9E,'class',5,e,s,gg)
var a0E=_oz(z,6,e,s,gg)
_(l9E,a0E)
_(o8E,l9E)
_(c7E,o8E)
var tAF=_mz(z,'input',['class',7,'name',1,'placeholder',2,'type',3],[],e,s,gg)
_(c7E,tAF)
_(o6E,c7E)
var eBF=_n('view')
_rz(z,eBF,'class',11,e,s,gg)
var bCF=_n('view')
_rz(z,bCF,'class',12,e,s,gg)
var oDF=_n('text')
_rz(z,oDF,'class',13,e,s,gg)
var xEF=_oz(z,14,e,s,gg)
_(oDF,xEF)
_(bCF,oDF)
_(eBF,bCF)
var oFF=_mz(z,'input',['class',15,'name',1,'placeholder',2,'type',3],[],e,s,gg)
_(eBF,oFF)
_(o6E,eBF)
var fGF=_n('view')
_rz(z,fGF,'class',19,e,s,gg)
var cHF=_mz(z,'button',['class',20,'formType',1,'hoverClass',2,'type',3],[],e,s,gg)
var hIF=_oz(z,24,e,s,gg)
_(cHF,hIF)
_(fGF,cHF)
var oJF=_mz(z,'button',['bindtap',25,'class',1,'data-event-opts',2,'hoverClass',3,'type',4],[],e,s,gg)
var cKF=_oz(z,30,e,s,gg)
_(oJF,cKF)
_(fGF,oJF)
_(o6E,fGF)
_(r,o6E)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lMF=_n('view')
_rz(z,lMF,'class',0,e,s,gg)
var aNF=_v()
_(lMF,aNF)
var tOF=function(bQF,ePF,oRF,gg){
var oTF=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],bQF,ePF,gg)
var fUF=_mz(z,'image',['class',8,'mode',1,'src',2],[],bQF,ePF,gg)
_(oTF,fUF)
var cVF=_n('text')
_rz(z,cVF,'class',11,bQF,ePF,gg)
var hWF=_oz(z,12,bQF,ePF,gg)
_(cVF,hWF)
_(oTF,cVF)
var oXF=_n('view')
_rz(z,oXF,'class',13,bQF,ePF,gg)
var cYF=_n('view')
_rz(z,cYF,'class',14,bQF,ePF,gg)
var oZF=_n('text')
_rz(z,oZF,'class',15,bQF,ePF,gg)
var l1F=_oz(z,16,bQF,ePF,gg)
_(oZF,l1F)
_(cYF,oZF)
_(oXF,cYF)
var a2F=_mz(z,'view',['catchtap',17,'class',1,'data-event-opts',2],[],bQF,ePF,gg)
_(oXF,a2F)
_(oTF,oXF)
_(oRF,oTF)
return oRF
}
aNF.wxXCkey=2
_2z(z,3,tOF,e,s,gg,aNF,'item','index','index')
var t3F=_n('text')
_rz(z,t3F,'class',20,e,s,gg)
var e4F=_oz(z,21,e,s,gg)
_(t3F,e4F)
_(lMF,t3F)
_(r,lMF)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var o6F=_n('view')
_rz(z,o6F,'class',0,e,s,gg)
var x7F=_n('view')
_rz(z,x7F,'class',1,e,s,gg)
var o8F=_v()
_(x7F,o8F)
var f9F=function(hAG,c0F,oBG,gg){
var oDG=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],hAG,c0F,gg)
var lEG=_mz(z,'image',['class',9,'src',1],[],hAG,c0F,gg)
_(oDG,lEG)
var aFG=_n('text')
_rz(z,aFG,'class',11,hAG,c0F,gg)
var tGG=_oz(z,12,hAG,c0F,gg)
_(aFG,tGG)
_(oDG,aFG)
_(oBG,oDG)
return oBG
}
o8F.wxXCkey=2
_2z(z,4,f9F,e,s,gg,o8F,'value','__i0__','key')
_(o6F,x7F)
_(r,o6F)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
function checkDeviceWidth() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
function transformRPX(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: texticons; font-weight: normal; font-style: normal; src: url(\x27https://at.alicdn.com/t/font_702773_g9f89om4v3j.ttf\x27) format(\x27truetype\x27); }\n.",[1],"index { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; width: ",[0,750],"; min-height: 100vh; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"row { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; }\n.",[1],"column { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"card { position: relative; width: ",[0,710],"; margin: ",[0,20]," ",[0,20]," ",[0,20]," ",[0,20],"; border-radius: ",[0,10],"; overflow: hidden; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; background-color: #FFFFFF; }\n.",[1],"card-img { width: ",[0,710],"; height: ",[0,1065],"; }\n.",[1],"card-num { color: #FFFFFF; font-size: 13px; text-align: center; }\n.",[1],"card-num-view { background-color: #FF80AB; line-height: 1; display: inline-block; padding: 3px 6px; color: #FFFFFF; font-size: 12px; text-align: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; border-radius: 15px; position: absolute; top: ",[0,20],"; right: ",[0,20],"; }\n.",[1],"card-bottm { -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"card-share-view { -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: ",[0,14]," 0; color: #FF80AB; margin: ",[0,20]," ",[0,20]," ",[0,20],"; font-size: ",[0,30],"; font-family: texticons; }\n.",[1],"card-share-view:before { content: \x27\\E62D\x27; }\n.",[1],"car-title-view { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; padding: ",[0,14]," ",[0,0]," ",[0,14]," ",[0,20],"; }\n.",[1],"card-title { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; font-size: ",[0,30],"; text-align: left; color: #555555; text-overflow: ellipsis; lines: 2; display: -webkit-box; white-space: normal; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"card-list2 { width: ",[0,345],"; margin: ",[0,20]," 0 ",[0,20]," ",[0,20],"; }\n.",[1],"card-list2-img { width: ",[0,345],"; height: ",[0,517],"; }\n.",[1],"card-list2-num-view { -webkit-transform: scale(0.8); transform: scale(0.8); -webkit-transform-origin: right; transform-origin: right; }\n.",[1],"card-list2-num { font-size: ",[0,22],"; }\n.",[1],"card-list2-title { font-size: ",[0,26],"; }\n.",[1],"loadMore { font-size: ",[0,30],"; color: #555; margin-bottom: ",[0,20],"; }\n.",[1],"tags { background: #fff; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; width: ",[0,710],"; margin: ",[0,20],"; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; -webkit-align-content: flex-start; align-content: flex-start; }\nwx-view.",[1],"tag, .",[1],"tag { display: block; width: ",[0,177.5],"; height: ",[0,180],"; padding: ",[0,24],"; line-height: 1; box-sizing: border-box; text-align: center; }\n.",[1],"tag-img { border-radius: ",[0,60],"; width: ",[0,120],"; height: ",[0,120],"; }\n.",[1],"tag-text { font-size: ",[0,28],"; color: #555555; }\n.",[1],"center { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; min-height: 100vh; }\n.",[1],"logo { width: ",[0,750],"; height: ",[0,240],"; padding: ",[0,20],"; box-sizing: border-box; background-color: #FF80AB; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"logo-hover { opacity: 0.8; }\n.",[1],"logo-img { width: ",[0,150],"; height: ",[0,150],"; border-radius: ",[0,150],"; }\n.",[1],"logo-title { height: ",[0,150],"; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; margin-left: ",[0,20],"; }\n.",[1],"uer-name { height: ",[0,60],"; line-height: ",[0,60],"; font-size: ",[0,38],"; color: #FFFFFF; }\n.",[1],"go-login.",[1],"navigat-arrow { font-size: ",[0,38],"; color: #FFFFFF; }\n.",[1],"login-title { height: ",[0,150],"; -webkit-box-align: self-start; -webkit-align-items: self-start; align-items: self-start; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; margin-left: ",[0,20],"; }\n.",[1],"center-list { background-color: #FFFFFF; margin-top: ",[0,20],"; width: ",[0,750],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"center-list-item { height: ",[0,90],"; width: ",[0,750],"; box-sizing: border-box; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; padding: ",[0,0]," ",[0,20],"; }\n.",[1],"border-bottom { border-bottom-width: ",[0,1],"; border-color: #c8c7cc; border-bottom-style: solid; }\n.",[1],"list-icon { width: ",[0,40],"; height: ",[0,90],"; line-height: ",[0,90],"; font-size: ",[0,34],"; color: #FF80AB; text-align: center; font-family: texticons; margin-right: ",[0,20],"; }\n.",[1],"list-text { height: ",[0,90],"; line-height: ",[0,90],"; font-size: ",[0,34],"; color: #555; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; text-align: left; }\n.",[1],"navigat-arrow { height: ",[0,90],"; width: ",[0,40],"; line-height: ",[0,90],"; font-size: ",[0,34],"; color: #555; text-align: right; font-family: texticons; }\n.",[1],"loginView { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; width: ",[0,750],"; min-height: 100vh; padding-top: ",[0,30],"; }\n.",[1],"input-view { border-bottom-style: solid; border-bottom-width: ",[0,1],"; border-bottom-color: #ddd; background-color: #fff; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; width: ",[0,750],"; padding: ",[0,20]," ",[0,20],"; box-sizing: border-box; }\n.",[1],"label-view { width: ",[0,100],"; height: ",[0,60],"; -webkit-box-align: center; -webkit-align-items: center; align-items: center; margin-right: ",[0,30],"; }\n.",[1],"label { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; line-height: ",[0,60],"; font-size: ",[0,38],"; color: #555; text-align: left; }\n.",[1],"input { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; height: ",[0,60],"; font-size: ",[0,38],"; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"button-view { width: ",[0,750],"; margin-top: ",[0,50],"; padding: 0 ",[0,20],"; box-sizing: border-box; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\nwx-button { width: ",[0,710],"; height: ",[0,80],"; line-height: ",[0,80],"; text-align: center; font-size: ",[0,38],"; }\nwx-button.",[1],"login { background-color: #FF80AB; color: #fff; }\nwx-button.",[1],"register { margin-top: ",[0,30],"; color: #FF80AB; background-color: #fff; border-color: #FF80AB; border-width: ",[0,2],"; }\n.",[1],"register.",[1],"hover, .",[1],"login.",[1],"hover { opacity: 0.6; }\n.",[1],"detail-btn-view { width: ",[0,750],"; position: fixed; bottom: ",[0,75],"; font-size: ",[0,28],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"detail-btn-view wx-view { opacity: 0.75; height: ",[0,80],"; border-radius: ",[0,80],"; width: ",[0,80],"; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; line-height: ",[0,80],"; margin: 0 ",[0,30],"; font-family: texticons; background: #eee; color: #555; }\n.",[1],"detail-btn-view wx-view wx-text { margin-left: ",[0,10],"; }\n.",[1],"detail-btn-view .",[1],"download:before { content: \x27\\E617\x27; }\n.",[1],"detail-btn-view .",[1],"collect:before { content: \x27\\E68D\x27; }\n.",[1],"detail-btn-view .",[1],"setting { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n.",[1],"grid { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; flex-wrap: wrap; padding-left: 5px; padding-right: 5px; box-sizing: border-box; }\n.",[1],"grid-c-01, .",[1],"grid-c-02, .",[1],"grid-c-03, .",[1],"grid-c-04, .",[1],"grid-c-05, .",[1],"grid-c-06, .",[1],"grid-c-07, .",[1],"grid-c-08, .",[1],"grid-c-09, .",[1],"grid-c-10, .",[1],"grid-c-11, .",[1],"grid-c-12 { position: relative; width: 100%; padding-left: 5px; padding-right: 5px; box-sizing: border-box; }\n.",[1],"grid-c-auto { -webkit-box-flex: 0; -webkit-flex: 0 0 auto; flex: 0 0 auto; width: auto; max-width: none; }\n.",[1],"grid-c-fill { -webkit-flex-basis: 0; flex-basis: 0; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-flex-grow: 1; flex-grow: 1; max-width: 100%; }\n.",[1],"grid-c-none { -webkit-box-flex: 0; -webkit-flex: none; flex: none; }\n.",[1],"grid-c-01 { -webkit-box-flex: 0; -webkit-flex: 0 0 8.333333%; flex: 0 0 8.333333%; max-width: 8.333333%; }\n.",[1],"grid-c-02 { -webkit-box-flex: 0; -webkit-flex: 0 0 16.666667%; flex: 0 0 16.666667%; max-width: 16.666667%; }\n.",[1],"grid-c-03 { -webkit-box-flex: 0; -webkit-flex: 0 0 25%; flex: 0 0 25%; max-width: 25%; }\n.",[1],"grid-c-04 { -webkit-box-flex: 0; -webkit-flex: 0 0 33.333333%; flex: 0 0 33.333333%; max-width: 33.333333%; }\n.",[1],"grid-c-05 { -webkit-box-flex: 0; -webkit-flex: 0 0 41.666667%; flex: 0 0 41.666667%; max-width: 41.666667%; }\n.",[1],"grid-c-06 { -webkit-box-flex: 0; -webkit-flex: 0 0 50%; flex: 0 0 50%; max-width: 50%; }\n.",[1],"grid-c-07 { -webkit-box-flex: 0; -webkit-flex: 0 0 58.333333%; flex: 0 0 58.333333%; max-width: 58.333333%; }\n.",[1],"grid-c-08 { -webkit-box-flex: 0; -webkit-flex: 0 0 66.666667%; flex: 0 0 66.666667%; max-width: 66.666667%; }\n.",[1],"grid-c-09 { -webkit-box-flex: 0; -webkit-flex: 0 0 75%; flex: 0 0 75%; max-width: 75%; }\n.",[1],"grid-c-10 { -webkit-box-flex: 0; -webkit-flex: 0 0 83.333333%; flex: 0 0 83.333333%; max-width: 83.333333%; }\n.",[1],"grid-c-11 { -webkit-box-flex: 0; -webkit-flex: 0 0 91.666667%; flex: 0 0 91.666667%; max-width: 91.666667%; }\n.",[1],"grid-c-12 { -webkit-box-flex: 0; -webkit-flex: 0 0 100%; flex: 0 0 100%; max-width: 100%; }\n.",[1],"panel { position: relative; border-radius: ",[0,10],"; overflow: hidden; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; background-color: #FFFFFF; margin-bottom: 10px; }\nbody, wx-view { display: -webkit-box; display: -webkit-flex; display: flex; }\nbody { display: -webkit-box; display: -webkit-flex; display: flex; min-height: 100%; background-color: #EFEFEF; }\nwx-template { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/about/about.wxss']=setCssToHead(["body, wx-view { display: -webkit-box; display: -webkit-flex; display: flex; }\nbody { min-height: 100%; background-color: #FFFFFF; }\nwx-image { width: ",[0,360],"; height: ",[0,360],"; }\n.",[1],"about { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n.",[1],"content { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; padding: ",[0,30],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"qrcode { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"qrcode .",[1],"tip { margin-top: ",[0,20],"; }\n.",[1],"desc { margin-top: ",[0,30],"; display: block; }\n.",[1],"code { color: #e96900; background-color: #f8f8f8; }\nwx-button { width: 100%; margin-top: ",[0,40],"; }\n.",[1],"version { height: ",[0,80],"; line-height: ",[0,80],"; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; color: #ccc; }\n.",[1],"source { margin-top: ",[0,30],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"source-list { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"link { color: #007AFF; }\n",],undefined,{path:"./pages/about/about.wxss"});    
__wxAppCode__['pages/about/about.wxml']=$gwx('./pages/about/about.wxml');

__wxAppCode__['pages/capter/capter.wxss']=setCssToHead(["body { height: 100%; }\nwx-swiper { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; width: ",[0,750],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"capterWrap { text-align: left; float:left; }\n",],undefined,{path:"./pages/capter/capter.wxss"});    
__wxAppCode__['pages/capter/capter.wxml']=$gwx('./pages/capter/capter.wxml');

__wxAppCode__['pages/capterDetail/capterDetail.wxss']=setCssToHead(["body { width: 100%; }\nwx-swiper { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; width: ",[0,750],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"capterWrap { }\n.",[1],"imgPicture{ }\n",],undefined,{path:"./pages/capterDetail/capterDetail.wxss"});    
__wxAppCode__['pages/capterDetail/capterDetail.wxml']=$gwx('./pages/capterDetail/capterDetail.wxml');

__wxAppCode__['pages/center/center.wxss']=undefined;    
__wxAppCode__['pages/center/center.wxml']=$gwx('./pages/center/center.wxml');

__wxAppCode__['pages/detail/detail.wxss']=setCssToHead(["body { background-color: #000; height: 100%; }\nwx-swiper { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; width: ",[0,750],"; background-color: #000; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\nwx-swiper-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\nwx-image { width: ",[0,750],"; height: ",[0,1125],"; }\n",],undefined,{path:"./pages/detail/detail.wxss"});    
__wxAppCode__['pages/detail/detail.wxml']=$gwx('./pages/detail/detail.wxml');

__wxAppCode__['pages/hot/hot.wxss']=setCssToHead([".",[1],"grid{ padding-top: 10px; }\n",],undefined,{path:"./pages/hot/hot.wxss"});    
__wxAppCode__['pages/hot/hot.wxml']=$gwx('./pages/hot/hot.wxml');

__wxAppCode__['pages/list/list.wxss']=setCssToHead([".",[1],"grid.",[1],"data-v-afe00502 { padding-top: 10px; }\n.",[1],"grid-c-12.",[1],"data-v-afe00502 { -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n",],undefined,{path:"./pages/list/list.wxss"});    
__wxAppCode__['pages/list/list.wxml']=$gwx('./pages/list/list.wxml');

__wxAppCode__['pages/login/login.wxss']=undefined;    
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/new/new.wxss']=undefined;    
__wxAppCode__['pages/new/new.wxml']=$gwx('./pages/new/new.wxml');

__wxAppCode__['pages/tag/tag.wxss']=undefined;    
__wxAppCode__['pages/tag/tag.wxml']=$gwx('./pages/tag/tag.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
