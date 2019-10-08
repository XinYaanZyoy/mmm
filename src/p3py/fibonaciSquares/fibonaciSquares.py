UNIT = 20
c = 0.01
t = 0.01

def setup():
    fullScreen()
    background(200,100,155)

def X(x):
    return width/2 + x

def Y(x):
    return height/2 - x

def draw():
    background(0)
    global c,t
    
    noStroke()
    rectMode(CORNER)

    f = [1,1,2,3,5,8,13,21,34,55,89]
    e = [(1,-1),(-1,-1),(-1,1),(1,1)]

    # after i can have a for loop in here i can zoom out on runtime to have better visual!

    o=f[0]*UNIT
    fill(o/c)
    rect(X(0),Y(0),o*e[0][0],o*e[0][1])

    o=f[1]*UNIT
    fill(o/c)
    rect(X(UNIT),Y(UNIT),o*e[1][0],o*e[1][1])

    o=f[2]*UNIT
    fill(o/c)
    rect(X(0),Y(o),o*e[2][0],o*e[2][1])

    o=f[3]*UNIT
    fill(o/c)
    rect(X(-2*UNIT),Y(0),o*e[3][0],o*e[3][1])

    o=f[4]*UNIT
    fill(o/c)
    rect(X(UNIT),Y(-3*UNIT),o*e[0][0],o*e[0][1])

    o=f[5]*UNIT
    fill(o/c)
    rect(X(6*UNIT),Y(2*UNIT),o*e[1][0],o*e[1][1])

    o=f[6]*UNIT
    fill(o/c)
    rect(X(-2*UNIT),Y(10*UNIT),o*e[2][0],o*e[2][1])

    o=f[7]*UNIT
    fill(o/c)
    rect(X(-15*UNIT),Y(-3*UNIT),o*e[3][0],o*e[3][1])

    o=f[8]*UNIT
    fill(o/c)
    rect(X(6*UNIT),Y(-24*UNIT),o*e[0][0],o*e[0][1])

    o=f[9]*UNIT
    fill(o/c)
    rect(X(40*UNIT),Y(10*UNIT),o*e[1][0],o*e[1][1])

    o=f[10]*UNIT
    fill(o/c)
    rect(X(-15*UNIT),Y(65*UNIT),o*e[2][0],o*e[2][1])
    
    # endfor

    c=c+t
    t=t+0.00075
    
    # saveFrame("frames/####.png")