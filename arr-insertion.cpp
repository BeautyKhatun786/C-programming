#include<stdio.h>
int main()
{
    int size=0;
    printf("Enter the size:");
    scanf("%d",&size);
    int arr[size];

    for(int i=0;i<size;i++){
        printf("Enter element %d:",i+1);
        scanf("%d",&arr[i]);
    }

    printf("Elements are: ");
    for(int i=0;i<size;i++)
    {
        printf("%d ",arr[i]);
    }
}