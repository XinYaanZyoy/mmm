const l = 250; //length of string of points
const ps = 10; //point size of a string

const pos = [200,100,-100,-200]; //vertical positions of 4 eles

//heat
var v_H = 1; //velocity of points in y dir

//wave
var v_W = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
a_W = (e)=>{return -e/50}; //acceleration

var done_H = false; //is heat eq at equilibrium

var psi_L = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //laplace init cond.

// poisson eq init cond. (sinx from -12 to +12)
var psi_P = [-46.60195429836132,
	-44.56036800307177,
	-42.073549240394826,
	-39.16634548137417,
	-35.86780454497614,
	-32.21088436188456,
	-28.232123669751775,
	-23.971276930210152,
	-19.470917115432528,
	-14.77601033306698,
	-9.933466539753061,
	-4.991670832341407,
	0.0,
	4.991670832341407,
	9.933466539753061,
	14.77601033306698,
	19.470917115432528,
	23.971276930210152,
	28.232123669751775,
	32.21088436188456,
	35.86780454497614,
	39.16634548137417,
	42.073549240394826,
	44.56036800307177];

// heat eq init cond. (sinx from -12 to +12)
var psi_H = [-46.60195429836132,
	-44.56036800307177,
	-42.073549240394826,
	-39.16634548137417,
	-35.86780454497614,
	-32.21088436188456,
	-28.232123669751775,
	-23.971276930210152,
	-19.470917115432528,
	-14.77601033306698,
	-9.933466539753061,
	-4.991670832341407,
	0.0,
	4.991670832341407,
	9.933466539753061,
	14.77601033306698,
	19.470917115432528,
	23.971276930210152,
	28.232123669751775,
	32.21088436188456,
	35.86780454497614,
	39.16634548137417,
	42.073549240394826,
	44.56036800307177];

// wave eq init cond. (sinx from -12 to +12)
var psi_W = [-46.60195429836132,
	-44.56036800307177,
	-42.073549240394826,
	-39.16634548137417,
	-35.86780454497614,
	-32.21088436188456,
	-28.232123669751775,
	-23.971276930210152,
	-19.470917115432528,
	-14.77601033306698,
	-9.933466539753061,
	-4.991670832341407,
	0.0,
	4.991670832341407,
	9.933466539753061,
	14.77601033306698,
	19.470917115432528,
	23.971276930210152,
	28.232123669751775,
	32.21088436188456,
	35.86780454497614,
	39.16634548137417,
	42.073549240394826,
	44.56036800307177];

// coordinates
x = (x)=>{
	return (width/2)+x;
}

y = (y)=>{
	return (height/2)-y;
}

// descriptions
function desc(){
	noFill();
	stroke(255);
	text("PDEs, Emotions of 2nd derivative, and importance of Laplacian!", 30, 30);
	text("- By XinYaanZyoy(心言自由)", width-180, height-30);
	stroke(37)
	text("NOTE: it's not rendering of equations, no wavefunctions were considered, only overall behaviour is modeled.", 10, height-10)
}

//captions
function caps(yp1,yp2,yp3,yp4){
	stroke(0);
	strokeWeight(1);
	const { x: cnvX, y: cnvY} = can.position();

	text("Static Equilibrium", x(150), y(yp1));
	text("Laplace Equation", x(-250), y(yp1));
	text("Δψ = 0", x(-250), y(yp1-20));

	// tex_L = createP();
	// tex_L.position(cnvX+x(-250), cnvY+y(yp1));
	// katex.render('\\nabla^{2}\\Psi=0', tex_L.elt);

	text("Dynamic Equilibrium", x(150), y(yp2));
	text("Poisson Equation", x(-250), y(yp2));
	text("Δψ = f(x)", x(-250), y(yp2-20));

	// tex_P = createP();
	// tex_P.position(cnvX+x(-250), cnvY+y(yp2));
	// katex.render('\\nabla^{2}\\Psi\\propto f(x)', tex_P.elt);

	text("Smoothing out \n to Equilibrium", x(150), y(yp3));
	text("Heat Equation", x(-250), y(yp3));
	text("Δψ = ψ'", x(-250), y(yp3-20));

	// tex_H = createP();
	// tex_H.position(cnvX+x(-250), cnvY+y(yp3));
	// katex.render('\\nabla^{2}\\Psi\\propto\\frac{\\partial \\Psi}{\\partial t}', tex_H.elt);

	text("Rushing Overshoot \n to Equilibrium", x(150), y(yp4));
	text("Wave Equation", x(-250), y(yp4));
	text("Δψ = ψ' '", x(-250), y(yp4-20));
	
	// tex_W = createP();
	// tex_W.position(cnvX+x(-250), cnvY+y(yp4));
	// katex.render('\\nabla^{2}\\Psi\\propto\\frac{\\partial^{2} \\Psi}{\\partial t^{2}}', tex_W.elt);
}

//laplace sketcher
function Laplace(yp, psi){
	stroke(137);
	strokeWeight(10);
	j = 0;
	for(i=-l/2; i<=l/2; i+=ps){
		point(x(i),y(yp+psi[j]));
		j++;
	}
}

//laplace updater
function update_L(){
	psi_L = psi_L;
}

// poisson sketcher
function Poisson(yp, psi){
	stroke(137);
	strokeWeight(10);
	j = 0;
	for(i=-l/2; i<=l/2; i+=ps){
		point(x(i),y(yp+psi[j]));
		j++;
	}
}

// poisson updater
function update_P(){
	psi_P = psi_P;
}

// heat sketcher
function Heat(yp, psi){
	stroke(137);
	strokeWeight(10);
	j = 0;
	for(i=-l/2; i<=l/2; i+=ps){
		point(x(i),y(yp+psi[j]));
		j++;
	}
}

//heat updater
function update_H(){
	temp = [];
	psi_H.forEach(e=>{
		if(e>0)
			temp.push(floor(e)-v_H);
		if(e<0)
			temp.push(floor(e)+v_H);
		if(e==0)
			temp.push(0);
	});
	psi_H = temp;
	if(psi_H.every(e => e === 0))
		done_H = true;
}

// wave sketcher 
function Wave(yp, psi){
	stroke(137);
	strokeWeight(10);
	j = 0;
	for(i=-l/2; i<=l/2; i+=ps){
		point(x(i),y(yp+psi[j]));
		j++;
	}
}

//wave updater
function update_W(){
	temp = [];
	for(i=0; i<25; i++){
		v_W[i] = v_W[i] + a_W(psi_W[i]);
		temp.push(psi_W[i] + v_W[i]);
	}
	psi_W = temp;
}

function setup() {
	can = createCanvas(600, 600);
	// can.position(windowWidth/2 - 300, windowHeight/2 - 300);
	d = 600/5;
	pos[1] = d/2;
	pos[2] = -d/2;
	pos[0] = pos[1]+d;
	pos[3] = pos[2]-d;

	createLoop({duration:7, framesPerSecond:15, gif:true});
}

function draw() {
	background(57);
	
	Laplace(pos[0], psi_L);

	Poisson(pos[1], psi_P);

	Heat(pos[2], psi_H);

	Wave(pos[3], psi_W);

	caps(pos[0],pos[1],pos[2],pos[3]);
	desc();

	if(!done_H){
		update_L();
		update_P();
		update_H();
	}

	update_W();

	// if(done_H)
	// 	noLoop();

	console.log(frameCount);
}