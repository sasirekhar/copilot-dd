def is_prime(n):
    """
    Check if a number is prime.

    Args:
        n (int): The number to check.

    Returns:
        bool: True if the number is prime, False otherwise.
    """
    if n == 2 or (n > 2 and n % 2 != 0):
        # Iterate from 3 to the square root of n, incrementing by 2
        # (since even numbers greater than 2 are not prime)
        for i in range(3, int(n ** 0.5) + 1, 2):
            if n % i == 0:  # If n is divisible by i, it is not prime
                return False
        return True  # If no divisors found, n is prime
    return False  # n is less than 2 or an even number greater than 2



# create a function to do 5 unit tests of the code above
def test_is_prime():
    assert is_prime(2) == True
    assert is_prime(3) == True
    assert is_prime(4) == False
    assert is_prime(5) == True
    assert is_prime(6) == False
    print("All tests pass")