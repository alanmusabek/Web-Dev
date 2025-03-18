def make_tags(tag, word):
    return f"<{tag}>{word}</{tag}>"

# Example test cases
print(make_tags('i', 'Yay'))      # Output: '<i>Yay</i>'
print(make_tags('i', 'Hello'))    # Output: '<i>Hello</i>'
print(make_tags('cite', 'Yay'))   # Output: '<cite>Yay</cite>'
