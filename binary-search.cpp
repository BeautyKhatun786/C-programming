#include<stdio.h>
int main()
{
    int size=0;
    printf("enter the size of the array:");
    scanf("%d",&size);
    int arr[size];
    for(int i=0;i<size;i++)
    {
        printf("enter elements %d:",i);
        scanf("%d",&arr[i]);
    }
    int element=11;
    int start=0;
    int stop=sizeof(arr)/sizeof(int);
    int count =0;

    while(1)
    {
        int mid=start+(stop-start)/2;
        if(arr[mid]==element)
        {
            printf(" element found in index :%d",mid);
            break;
        }

        else if(arr[mid]>element)
        {
            stop=mid-1;
        }
        else if(arr[mid]<element)
        {
            start=mid+1;
        }
        count++;

         if(count>size)
    {
        printf("element not found ");
        break;
    }


    }
   
     
}