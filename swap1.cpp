//wap swap the value without using third variable 
#include<stdio.h>
int main(){
    int a,b;
    printf("enter first no.:\n");
    scanf("%d",&a);
    printf("enter second no.:\n");
    scanf("%d",&b);
    a=a+b;
    b=a-b;
    a=a-b;
    printf("a:%d\n",a);
    printf("b:%d",b);
    

}