#include <windows.h>
#include <gl/GL.h>
#include <gl/glu.h>
#include <gl/glut.h>
#include <math.h>
#include <time.h>

#define N 5000

GLfloat r=1.0f, g=0.0f, b=1.0f;

struct GLintPoint{
    GLint x, y;
};

int random1(int m){
    return rand()%m;
}
int random2(int m1, int m2){
    return rand()%m2 + m1;
}

void drawDot(GLint x, GLint y){
    glBegin(GL_POINTS);
    glVertex2i(x, y);
    glEnd();
}

void setup(void){
    glClearColor(0.0, 0.0, 0.0, 0.0);
    glColor3f(r, g, b);
    glPointSize(8.0);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0.0, 800.0, 0.0, 600.0);
}

void draw(){
    glClear(GL_COLOR_BUFFER_BIT);
    GLintPoint T[3] = {{10,10}, {600,10}, {300,600}}; //three vertices of triangle
    int index = random1(3); // choose one randomly
    GLintPoint point = T[index]; //ref point
    drawDot(point.x, point.y); // draw that point
    Sleep(3000);
    for(int i=0, t=1000; i<N; i++){ //for next N points
        glColor3f(r, g, b);
        index = random1(3); // choose any of those three vertices randomly
        point.x = (point.x + T[index].x)/2; // half of x,y of var and ref point
        point.y = (point.y + T[index].y)/2;
        drawDot(point.x, point.y); //draw the halfway point
        glFlush();
        Sleep(t);
        if(t>25) t-=100;
        if(r==1.0f){
            if(b>0.0f) b-=0.001f;
            else g+=0.001f;
            if(g>=1.0f) {r=0.0f; b=0.0f;};
        }
        if(g>=1.0f){
            if(b<1.0f) b+=0.001f;
            else r+=0.001f;
        }
    }
}

int main(int argc, char **argv){
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
    glutInitWindowSize(640,480);
    glutInitWindowPosition(100,150);
    glutCreateWindow("Prime_Squares");
    glutFullScreen();
    setup();
    glutDisplayFunc(draw);
    glutMainLoop();
    return 0;
}
