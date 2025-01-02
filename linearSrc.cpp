#include<stdio.h>
int main()
{
    int size=0;
    printf("Enter the size of array:");
    scanf("%d",&size);
    int arr[size];
    
    for(int i=0;i<size;i++)
    {
        printf("Enter the element in an array %d:",i+1);
        scanf("%d",&arr[i]);
    }

    int element=8;
    int found=0;

    for(int i=0;i<size;i++)
    {
        if(element == arr[i])
        {
        printf("Element found in index no.:%d",i);

        found=1;
        break;
        }
    }

    if(found==0)
    {
        printf("element not found");
    }
}