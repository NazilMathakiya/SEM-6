//Write a C program to print the first 10 natural numbers using iterartion.

#include <stdio.h>
void main()
{
	int n;
	int i=0;
	printf("Enter N:- \n");
	scanf("%d",&n);
	for (i=1; i <= n; i++)
	{
		printf("%d\n",i);
	}
}
