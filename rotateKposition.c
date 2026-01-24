#include <stdio.h>

// rotate array to right by 1 position
void rightRotate(int arr[], int n)
{
    int temp = arr[n - 1]; 
	int i;  // last element saved

    for (i = n - 1; i > 0; i--)
    {
        arr[i] = arr[i - 1];  // shift elements right
    }

    arr[0] = temp;  // put last element at first
}

// rotate array to right by k positions
void arrayRotate(int arr[], int n, int k)
{
	int i;
    for (i = 1; i <= k; i++)
    {
        rightRotate(arr, n);
    }
}

// print array
void printArray(int arr[], int n)
{
	int i;
    for (i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
}

int main()
{
    int arr[5] = {1, 2, 3, 4, 5};
    int k = 2;

    arrayRotate(arr, 5, k);
    printArray(arr, 5);

    return 0;
}

