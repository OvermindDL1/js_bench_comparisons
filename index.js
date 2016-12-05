var suite = new Benchmark.Suite;


function sshape_gen1(c) {
    return { ctor: c };
};

function sshape_gen2(c, d) {
    return { ctor: c, _0: d };
};

function sshape_gen2alt(c, d) {
    var s = sshape_gen1(c);
    s._0 = d;
    return s;
}


var SSS1a = sshape_gen1('test0');
var SSS1aa = sshape_gen1('test0');
var SSS1b = sshape_gen1('test1');
var SSS1c = sshape_gen1('test2');


function compare_sameshape1_test0(o) {
    if(o.ctor === 'test0') return 42|0;
    return 0|0;
}

function compare_sameshape2_test0(o) {
    if(o.ctor === 'test0') return 42|0;
    return 0|0;
}


var SSS2a = sshape_gen2('test0');
var SSS2aa = sshape_gen2('test0');
var SSS2b = sshape_gen2('test1');
var SSS2c = sshape_gen2('test2');

var SSS2a_dyn = sshape_gen2alt('test0');
var SSS2aa_dyn = sshape_gen2alt('test0');
var SSS2b_dyn = sshape_gen2alt('test1');
var SSS2c_dyn = sshape_gen2alt('test2');


function switch_sameshape2_test0(o) {
    switch(o.ctor) {
    case 'test0': return 42|0;
    default: return 0|0;
    }
}


function switch_sameshape2_test012(o) {
    switch(o.ctor) {
    case 'test0': return 654|0;
    case 'test1': return 543|0;
    case 'test2': return 432|0;
    default: return 0|0;
    }
}


function ishape_gen1(c) {
    return { ctor: c|0 };
};

function ishape_gen2(c, d) {
    return { ctor: c|0, _0: d };
};

function ishape_gen2alt(c, d) {
    var s = sshape_gen1(c|0);
    s._0 = d;
    return s;
}


var ISS1a = ishape_gen1(0);
var ISS1aa = ishape_gen1(0);
var ISS1b = ishape_gen1(1);
var ISS1c = ishape_gen1(2);


function compare_sameshape1_0(o) {
    if(o.ctor|0 === 0) return 42|0;
    return 0|0;
}

function compare_sameshape2_0(o) {
    if(o.ctor|0 === 0) return 42|0;
    return 0|0;
}


var ISS2a = ishape_gen2(0);
var ISS2aa = ishape_gen2(0);
var ISS2b = ishape_gen2(1);
var ISS2c = ishape_gen2(2);

var ISS2a_dyn = ishape_gen2alt(0);
var ISS2aa_dyn = ishape_gen2alt(0);
var ISS2b_dyn = ishape_gen2alt(1);
var ISS2c_dyn = ishape_gen2alt(2);


function switch_sameshape2_0(o) {
    switch(o.ctor|0) {
    case 0: return 42|0;
    default: return 0|0;
    }
}


function switch_sameshape2_012(o) {
    switch(o.ctor|0) {
    case 0: return 654|0;
    case 1: return 543|0;
    case 2: return 432|0;
    default: return 0|0;
    }
}


suite
    .add('String#Static#Sameshape1#if#true', function() {
        compare_sameshape1_test0(SSS1a);
        compare_sameshape1_test0(SSS1aa);
    })

    .add('String#Static#Sameshape1#if#false', function() {
        compare_sameshape1_test0(SSS1b);
        compare_sameshape1_test0(SSS1c);
    })

    .add('String#Static#Sameshape2#if#true', function() {
        compare_sameshape2_test0(SSS2a);
        compare_sameshape2_test0(SSS2aa);
    })

    .add('String#Static#Sameshape2#if#false', function() {
        compare_sameshape2_test0(SSS2b);
        compare_sameshape2_test0(SSS2c);
    })

    .add('String#Static#Altshape2#if#true', function() {
        compare_sameshape2_test0(SSS2a_dyn);
        compare_sameshape2_test0(SSS2aa_dyn);
    })

    .add('String#Static#Altshape2#if#false', function() {
        compare_sameshape2_test0(SSS2b_dyn);
        compare_sameshape2_test0(SSS2c_dyn);
    })

    .add('String#Static#Sameshape2#switch#match', function() {
        switch_sameshape2_test0(SSS2a);
        switch_sameshape2_test0(SSS2aa);
    })

    .add('String#Static#Sameshape2#switch#default', function() {
        switch_sameshape2_test0(SSS2b);
        switch_sameshape2_test0(SSS2c);
    })

    .add('String#Static#Sameshape2#switch#allmatch', function() {
        switch_sameshape2_test012(SSS2a);
        switch_sameshape2_test012(SSS2c);
    })


    .add('Int#Static#Sameshape1#if#true', function() {
        compare_sameshape1_0(ISS1a);
        compare_sameshape1_0(ISS1aa);
    })

    .add('Int#Static#Sameshape1#if#false', function() {
        compare_sameshape1_0(ISS1b);
        compare_sameshape1_0(ISS1c);
    })

    .add('Int#Static#Sameshape2#if#true', function() {
        compare_sameshape2_0(ISS2a);
        compare_sameshape2_0(ISS2aa);
    })

    .add('Int#Static#Sameshape2#if#false', function() {
        compare_sameshape2_0(ISS2b);
        compare_sameshape2_0(ISS2c);
    })

    .add('Int#Static#Altshape2#if#true', function() {
        compare_sameshape2_0(ISS2a_dyn);
        compare_sameshape2_0(ISS2aa_dyn);
    })

    .add('Int#Static#Altshape2#if#false', function() {
        compare_sameshape2_0(ISS2b_dyn);
        compare_sameshape2_0(ISS2c_dyn);
    })

    .add('Int#Static#Sameshape2#switch#match', function() {
        switch_sameshape2_0(ISS2a);
        switch_sameshape2_0(ISS2aa);
    })

    .add('Int#Static#Sameshape2#switch#default', function() {
        switch_sameshape2_0(ISS2b);
        switch_sameshape2_0(ISS2c);
    })

    .add('Int#Static#Sameshape2#switch#allmatch', function() {
        switch_sameshape2_012(ISS2a);
        switch_sameshape2_012(ISS2c);
    })



    .on('start', function(event) {
        console.log("start", event);
    })
    .on('cycle', function(event) {
        console.log("cycle", event.target, event);
    })
    .on('complete', function(event) {
        console.log("Complete", this, event);
        for(var i=0; i<this.length; i++) {
            var b = this[i];
            console.log(b.toString());
        }
        console.log('Fastest is' + this.filter('fastest').map('name'));
    })

    .run({ 'async': true });


