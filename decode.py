import re

def hex_to_ascii(hex_string):
    hex_string = re.sub(r'[^0-9A-Fa-f]', '', hex_string)
    if len(hex_string) % 2 != 0:
        return "Invalid hexadecimal input"
    try:
        ascii_string = bytes.fromhex(hex_string).decode('utf-8', errors='ignore')
        return ascii_string
    except ValueError:
        return "Invalid hexadecimal input"

def process_hex_file(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as infile, open(output_file, 'w', encoding='utf-8') as outfile:
        for line in infile:
            line = line.strip()
            if line:
                ascii_output = hex_to_ascii(line)
                outfile.write(line + '\n')
                outfile.write(ascii_output + '\n')

if __name__ == "__main__":
    input_filename = "dns_queries.txt"
    output_filename = "decoded_output.txt"
    process_hex_file(input_filename, output_filename)
    print("Processing complete. Check the output file.")
