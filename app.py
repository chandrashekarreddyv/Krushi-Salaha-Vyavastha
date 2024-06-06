from flask import Flask, render_template, request,Markup
import numpy as np
import pandas as pd
import joblib
from sklearn.preprocessing import StandardScaler
from fertilizer import fertilizer_dic

app = Flask(__name__)
model = joblib.load('logistic_regression_model.pkl')

# Load the dataset
df = pd.read_csv('Crop_recommendation.csv')

# Function to preprocess user input
def preprocess_input(input_data):
    input_data = [float(val) for val in input_data]
    return np.array(input_data).reshape(1, -1)

@app.route('/')
def home():
    return render_template('layout.html')
@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'GET':
        return render_template('crop.html')
    elif request.method == 'POST':
        input_data = request.form.to_dict(flat=False)['input_data[]']
        input_scaled = preprocess_input(input_data)
        # Predict crop label
        prediction = model.predict(input_scaled)[0]
        return render_template('crop_result.html', prediction=prediction)
    
@app.route('/recommend', methods=['GET', 'POST'])
def recommend():
    # Retrieving crop name, nitrogen, phosphorous, and potassium levels
    if request.method == 'GET':
        return render_template('fertilizer.html')
    elif request.method == 'POST':
         crop_name = str(request.form['crop'])
         N = int(request.form['input_data[]'])
         P = int(request.form['input_data[]'])
         K = int(request.form['input_data[]'])
         Ph = int(request.form['input_data[]'])
    
    df = pd.read_csv('fertilizer.csv')
    crop_data = df['Crop'] == crop_name
    if not crop_data.empty:
         nr = df['N'].iloc[0]
         pr = df['P'].iloc[0]
         kr = df['K'].iloc[0]

    n = nr - N
    p = pr - P
    k = kr - K
    temp = {abs(n): "N", abs(p): "P", abs(k): "K"}
    max_value = temp[max(temp.keys())]
    if max_value == "N":
        if n < 0:
            key = 'NHigh'
        else:
            key = "Nlow"
    elif max_value == "P":
        if p < 0:
            key = 'PHigh'
        else:
            key = "Plow"
    else:
        if k < 0:
            key = 'KHigh'
        else:
            key = "Klow"

    prediction = Markup(str(fertilizer_dic[key]))

    return render_template('fertilizer_resutl.html', prediction=prediction)



if __name__ == '__main__':
    app.run(debug=True)
