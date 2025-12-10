//Write a C program to print pattern.

#include <stdio.h>
int main() {
    int n,i,j;
    printf("Enter N:- ");
    scanf("%d", &n);
    for(i=0;i<n;i++)
    {
        for(j=0;j<=i;j++)
        {
            printf("*");
        }
        printf("\n");
    }
}