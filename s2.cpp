//creation 2D array
#include<stdio.h>
int main()
{
    int rows=0;
    int cols=0;
    int i,j;
    printf("Enter the no. of rows in Array:");
    scanf("%d",&rows);
    printf("Enter the no. of columns in an Array:");
    scanf("%d",&cols);
    int arr[rows][cols];
   
    for(i=0;i<rows;i++)
    {
        for(j=0;j<cols;j++)
        {
            printf("Enter the element in row: %d col %d\n",i+1,j+1);
            scanf("%d",&arr[i][j]);
        }
    }

    printf("The elements in an Array:\n");
    for(i=0;i<rows;i++)
    {
        for(j=0;j<cols;j++)
        {
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
    return 0;
}