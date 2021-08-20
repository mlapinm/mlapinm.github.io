from http.server import HTTPServer, CGIHTTPRequestHandler
server_address = ("", 8001)
httpd = HTTPServer(server_address, CGIHTTPRequestHandler)
print('address = ', server_address)
httpd.serve_forever()
