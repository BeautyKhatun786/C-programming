#include<stdio.h>
int main()
{
    int size=0;
    printf("Enter the size of array:");
    scanf("%d",&size);
    int arr[size];
    for(int i=0;i<size;i++)
    {
        printf("enter the element %d: ",i);
        scanf("%d",&arr[i]);
    }

    // int arr[]={2,4,5,6,7,8,9,11,23,45,12};
    
    // int size = sizeof(arr)/sizeof(int);
    int temp;
    for(int i=0;i<size;i++)
    {
        for(int j=0;j<size;j++)
        {
            if(arr[j]>arr[j+1])
            {
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    printf("Shorted elements:\n");
    for(int i=0;i<size;i++)
    {
        printf("%d ",arr[i]);
    }

    
}