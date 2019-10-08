p=[]

def isPrime(n):
    if n<2:
        return 0
    f=[]
    for i in range(1,n+1):
        if n%i==0:
            f.append(n%i)
    if len(f)==2:
        return 1
    elif len(f)>2:
        return 0
    else:
        exit()

def setup():
    size(1316, 760)
    print(width,height)
    i=1
    for x in range(1317):
        for y in range(761):
            if isPrime(i)==1:
                p.append((i,x,y))
            i=i+1
        print("i",i)
    print("len",len(p))
    background(0)

def draw():
    for j in range(len(p)):
        set(p[j][1],p[j][2],color(255))