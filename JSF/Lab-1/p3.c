//Write a C program to find the factorial of a given number using iteration.

#include <stdio.h>
int main() {
    int n,i;
    printf("Enter N:- ");
    scanf("%d", &n);
    int fact=1;
    for(i=1;i<=n;i++)
    {
        fact=i*fact;
    }
    printf("%d",fact);
}