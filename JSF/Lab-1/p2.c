//Write a C program to calculate the sum of digits of a number using iteration.

#include <stdio.h>
int main() {
    int n, sum = 0, digit;
    printf("Enter N:- ");
    scanf("%d", &n);
    while (n != 0) {
        digit = n % 10;
        sum += digit;
        n /= 10;
    }
    printf("Sum of the digits: %d\n", sum);
}