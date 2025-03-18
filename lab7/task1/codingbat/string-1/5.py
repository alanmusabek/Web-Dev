def extra_end(s):
    return s[-2:] * 3

# Test cases
print(extra_end('Hello'))  # Output: 'lololo'
print(extra_end('ab'))     # Output: 'ababab'
print(extra_end('Hi'))     # Output: 'HiHiHi'
