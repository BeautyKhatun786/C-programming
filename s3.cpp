#include<stdio.h>
int main()
{
    int rows=0;
    int cols=0;
    printf("enter the number in rows:");
    scanf("%d",&rows);
    printf("enter the number in column:");
    scanf("%d",&cols);
    int arr[rows][cols];
    for(int i=0;i<rows;i++)
    {
        for(int j=0;j<cols;j++)
        {
            printf("enter the element in row: %d col %d: ",i+1,j+1);
            scanf("%d",&arr[i][j]);
        }
    }

    printf("Element are:\n");
    for(int i=0;i<rows;i++)
    {
        for(int j=0;j<cols;j++)
        {
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
}