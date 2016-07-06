#!flask/bin/python
try:   #For python 2
    from urllib2 import Request, urlopen, URLError
except ImportError:		#For python 3
	from urllib import request
	from urllib.request import urlopen
	from urllib.error import URLError

from flask import Flask
app = Flask(__name__)

@app.route('/')
def enter():

	request = Request('http://api.reimaginebanking.com/customers?key=fdcdbc9f4d339cd5970c2d87c8e8d16f')

	try:
		response = urlopen(request)
		customers = response.read()
		return customers
	except URLError as e:
		return "404 errror"



if __name__ == '__main__':
    app.run()
