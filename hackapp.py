#!flask/bin/python
# import os
# from flask import Flask, request, session, g, redirect, abort, redirect, url_for, jsonify, render_template, flash
# from werkzeug.utils import secure_filename
# from CheckMethods import processLocal
# import sqlite3


from flask import render_template

@app.route('/')
def enter():
    return render_template('template.html')



#
# UPLOAD_FOLDER = '/Users/sep117/Documents/check-api/Uploads'
# ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'tiff'])
#
# app = Flask(__name__)
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
#
# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS
#
# @app.route('/', methods=['GET', 'POST'])
# def upload_file():
#     if request.method == 'POST':
#         # check if the post request has the file part
#         if 'file' not in request.files:
#             print('No file part')
#             return redirect(request.url)
#         file = request.files['file']
#         # if user does not select file, browser also
#         # submit a empty part without filename
#         if file.filename == '':
#             print('No selected file')
#             return redirect(request.url)
#         if file and allowed_file(file.filename):
#             filename = secure_filename(file.filename)
#             file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#             fn = filename.rsplit('.', 1)
#             return jsonify(processLocal(app.config['UPLOAD_FOLDER'],fn[0],fn[1]))
# #            return redirect(url_for('uploaded_file', filename=filename))
#     return '''
#     <!doctype html>
#     <title>Upload new File</title>
#     <h1>Upload new File</h1>
#     <form action="" method=post enctype=multipart/form-data>
#       <p><input type=file name=file>
#          <input type=submit value=Upload>
#     </form>
#     '''

#curl -i -X PUT -F name=Test -F filedata=@SomeFile.pdf "http://localhost:5000/"

# @app.route("/", methods=['POST','PUT'])
# def hello():
#     file = request.files['filedata']
#     if file:
#         filename=file.filename
# #        filename = filename.split('.')[0]
# #        folder = "/Users/sep117/Documents/CheckTestImages"
#         mydict = processImage(filename)
#         print(jsonify(mydict))
#
#     return  jsonify(mydict)

# @app.route('/todo/api/v1.0/tasks', methods=['GET'])
# def get_tasks():
#     return jsonify({'tasks': tasks})

if __name__ == '__main__':
    app.run(debug=True)
