export default function fibonacci(step: number) {
    let fibonacciNumber = 0;
    let number_one = 0;
    let number_two = 1;

    for (let i = 0; i <= step; i++) {
        fibonacciNumber = number_one + number_two;

        number_one = number_two
        number_two = fibonacciNumber;

        // console.log(`Etape ${i} : ${fibonacciNumber}`);
    }

    return fibonacciNumber;
}