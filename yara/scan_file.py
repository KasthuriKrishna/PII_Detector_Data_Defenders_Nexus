from flask import Flask, request, jsonify
from flask_cors import CORS
import yara
import io
from PyPDF2 import PdfReader

app = Flask(__name__)
CORS(app)
# Compile YARA rules when the app starts
rules = yara.compile(filepath='scan_rules.yara')

def extract_text_from_pdf(file_stream):
    reader = PdfReader(file_stream)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

def scan_text_with_yara(text):
    matches = rules.match(data=text)
    matched_rules = [match.rule for match in matches]
    return matched_rules

@app.route('/scan', methods=['POST'])
def scan():
    file = request.files.get('file')
    if file:
        file_stream = io.BytesIO(file.read())
        text = extract_text_from_pdf(file_stream)
        matched_rules = scan_text_with_yara(text)
        
        if matched_rules:
            return jsonify({
                'malicious': True, 
                'matched_rules': matched_rules
            })
        else:
            return jsonify({'malicious': False})
    
    return jsonify({'error': 'No file uploaded'}), 400

if __name__ == '__main__':
    app.run(debug=True)
