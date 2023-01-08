# 開発する上で、jsonを返してくれるサーバーを提供
# URLに応じて、jsonファイルの中身を返却する
import socketserver

PORT = 8000

def get_skeleton(file_name):
    skeleton = ''
    with open(file_name) as f:
        skeleton = f.read()  
    return skeleton

class MyTCPHandler(socketserver.BaseRequestHandler):
    """
    The request handler class for our server.

    It is instantiated once per connection to the server, and must
    override the handle() method to implement communication to the
    client.
    """

    def handle(self):
        # self.request is the TCP socket connected to the client
        self.data = self.request.recv(1024).strip()
        # print("{} wrote:".format(self.client_address[0]))
        # just send back the same data, but upper-cased
        bytes = self.data
        data_str = bytes.decode()
        pathes = data_str.split()[1].split('/')
        # とりあえず改装はなし
        file_name = 'skeletons/' + pathes[1] + '.json'
        skeleton = get_skeleton(file_name)
        self.request.sendall(skeleton.encode())


if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), MyTCPHandler) as httpd:
        print("serving at port", PORT)
        httpd.serve_forever()