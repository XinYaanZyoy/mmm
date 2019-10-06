mkdir bin
gcc -Wall -o bin/%1 src/oglcpp/%1/%1.cpp -lglut32cu -lglu32 -lopengl32
"bin/%1.exe"