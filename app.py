from flask import Flask, render_template, request, send_file
import requests
import re

app = Flask(__name__)

def descargar_video_tiktok(url):
    # Obtener el contenido de la página
    response = requests.get(url)
    
    if response.status_code == 200:
        # Buscar el enlace del video en el contenido de la página
        match = re.search(r'videoUrl":"(https://.*?)"', response.text)
        if match:
            video_url = match.group(1)
            # Descargar el video
            video_response = requests.get(video_url)
            if video_response.status_code == 200:
                with open('video_tiktok.mp4', 'wb') as f:
                    f.write(video_response.content)
                return True
            else:
                return False
        else:
            return False
    else:
        return False

@app.route('/')
def index():
    return render_template('test.html')

@app.route('/descargar', methods=['POST'])
def descargar():
    url = request.form['url']
    if descargar_video_tiktok(url):
        return send_file('video_tiktok.mp4', as_attachment=True)
    else:
        return "No se pudo descargar el video."

if __name__ == '__main__':
    app.run(debug=True, port=5000)
