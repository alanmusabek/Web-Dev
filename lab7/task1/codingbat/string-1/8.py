def combo_string(a, b):
    if len(a) < len(b):
        short, long = a, b
    else:
        short, long = b, a
    return short + long + short

# Test cases
print(combo_string('Hello', 'hi'))  # Output: 'hiHellohi'
print(combo_string('hi', 'Hello'))  # Output: 'hiHellohi'
print(combo_string('aaa', 'b'))     # Output: 'baaab'
