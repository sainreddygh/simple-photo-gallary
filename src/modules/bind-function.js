Function.prototype.bind2 = function(){
    let fun = this;
    let args = Array.prototype.slice.apply(arguments);
    let context = args.shift();
    return function(){
        let newArgs = args.concate(Array.prototype.slice.apply(arguments));
        return fun.apply(context, newArgs);
    }
}

Function.prototype.bind = function(){
    var fn = this, args = Array.prototype.slice.call(arguments), object = args.shift();
    return function(){
      return fn.apply(object,
        args.concat(Array.prototype.slice.call(arguments)));
    };
  };