import pyshark

cap = pyshark.FileCapture("dnstunnel_2(1).pcapng", display_filter="dns")
with open("dns_queries.txt", "w") as file:
    for pkt in cap:
        try:
            query = pkt.dns.qry_name
            file.write(query + "\n")
        except AttributeError:
            pass

print("DNS queries saved to dns_queries.txt")