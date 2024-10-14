#include <stdio.h>
#include <stdbool.h>

int power(int base, int exp) {
    int result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

bool isArmstrongNumber(int number) {
    int sum = 0, length = 0;
    int temp = number;

    while (temp != 0) {
        temp /= 10;
        length++;
    }

    temp = number;
    
    while (temp != 0) {
        int digit = temp % 10;
        sum += power(digit, length);
        temp /= 10;
    }

    return sum == number;
}

int main() {
    int number;
    
    printf("Enter a number: \n\n");
    scanf("%d", &number);
    
    if (isArmstrongNumber(number)) {
        printf("%d is an Armstrong number.\n\n", number);
    } else {
        printf("%d is not an Armstrong number.\n\n", number);
    }

    printf("Press any key to exit...\n");
    getchar(); 
    getchar(); 
    
    return 0;
}
