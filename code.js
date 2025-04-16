function e(n) {
    fact = 1;
    sum = 1.0;
    for (i = 1; i < n; i++) {
        fact *= i;
        sum += 1.0 / fact;
    }
    return sum;
}