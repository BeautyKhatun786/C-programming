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

    //delete part 
    int pos=0;
    printf("select the index number which one you want to delete:");
    scanf("%d",&pos);

    //going to delete 
    for(int i=pos;i<size;i++)
    {
        arr[i]=arr[i+1];
    }

    printf("Elements are: ");
    for(int i=0;i<size-1;i++)
    {
        printf("%d ",arr[i]);
    }
}