#fatracing.ru
from flask import Flask, render_template, Response, request, jsonify, redirect, send_file
import os.path
import mimetypes
mimetypes.init()
print (mimetypes.knownfiles)

mimetypes.add_type('image/svg+xml', '.svg')

def root_dir():  # pragma: no cover
    return os.path.abspath(os.path.dirname(__file__))

def get_file(filename):  # pragma: no cover
    try:
        src = os.path.join(root_dir(), filename)
        # Figure out how flask returns static files
        # Tried:
        # - render_template
        # - send_file
        # This should not be so non-obvious
        return open(src).read()
    except IOError as exc:
        return str(exc)
        
app = Flask(__name__)

@app.route('/<path:path>')
def get_resource(path):  # pragma: no cover
    #mimetypes = {
    #    ".css": "text/css",
    #    ".html": "text/html",
    #    ".js": "application/javascript",
    #    ".json": "text/json",
    #    
    #}
    complete_path = os.path.join(root_dir(), "out/"+path)
    ext = os.path.splitext(path)[1]
    mimetype = mimetypes.types_map[ext] #guess_type(, "text/html")
    content = get_file(complete_path)
    return Response(content, mimetype=mimetype)
    
@app.route('/', methods=['GET'])
def index():  # pragma: no cover
    content = get_file('out/index.html')
    return Response(content, mimetype="text/html")
    
app.run(host='0.0.0.0', port=8666, debug=False, use_reloader=False)
#app.run(host='127.0.0.1', port=8666, debug=False, use_reloader=False)