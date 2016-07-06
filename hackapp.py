#!flask/bin/python
from urllib2 import Request, urlopen, URLError
from flask import Flask, render_template, jsonify
import urllib, json

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def enter():
	
	request = Request('http://api.reimaginebanking.com/customers?key=fdcdbc9f4d339cd5970c2d87c8e8d16f')

	try:
		response = urllib.urlopen('http://api.reimaginebanking.com/customers?key=fdcdbc9f4d339cd5970c2d87c8e8d16f')
		customers = json.loads(response.read())
		customer_name = customers[0]['first_name']
		return render_template('index.html', customer=customer_name)
	except URLError, e:
		return "404 error"



if __name__ == '__main__':
    app.run()
