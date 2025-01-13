# **Predicción de Consumo de Agua**

Este proyecto implementa un modelo de predicción para la demanda de agua en las próximas 24 horas, en dos etapas:  
1. **Volumen total diario**.  
2. **Distribución horaria del consumo**.  

## **Descripción del proyecto**  

El sistema utiliza una combinación de técnicas de aprendizaje automático y análisis de series temporales para predecir el consumo total diario y su distribución horaria, optimizando la gestión de recursos hídricos y la planificación operativa.

---

## **Arquitectura del sistema**

El modelo se divide en dos pasos principales:  

### **1. Predicción del volumen total diario**  
Se utiliza **XGBoost**, un algoritmo de Gradient Boosting, para estimar el consumo total de agua diario.  
#### **Entradas**  
- Variables climáticas: Temperatura, precipitaciones, humedad.  
- Datos históricos de consumo diario.  
- Variables temporales: Día de la semana, estación del año, feriados.  
- Variables de eventos externos: Restricciones o cambios en tarifas.  

#### **Proceso**  
1. Preprocesamiento:  
   - Normalización de datos.  
   - Creación de variables lag (últimos días de consumo).  
2. Entrenamiento:  
   - Modelo: XGBoost.  
   - Métrica de evaluación: RMSE.  

#### **Salida**  
El volumen total diario (en litros o m³).  

---

### **2. Predicción del patrón horario**  
Se utiliza una **red neuronal LSTM (Long Short-Term Memory)** para predecir la distribución horaria del consumo.  
#### **Entradas**  
- Distribuciones históricas horarias (como proporción del consumo diario).  
- Volumen total diario (salida del paso 1).  
- Variables temporales y de comportamiento (laborable o festivo).  

#### **Proceso**  
1. Preprocesamiento:  
   - Crear proporciones horarias a partir de los datos históricos.  
   - Normalizar las proporciones entre 0 y 1.  
2. Entrenamiento:  
   - Modelo: Red neuronal LSTM.  
   - Métrica de evaluación: MSE.  
3. Predicción:  
   - Distribuir el volumen total diario en las 24 horas del día.  

#### **Salida**  
Patrón horario del consumo (litros o m³ por hora).  

---

## **Flujo de implementación**  

1. **Preprocesamiento de datos**:  
   - Limpieza, transformación y escalado de variables.  
2. **Entrenamiento de modelos**:  
   - Entrenar el modelo de volumen total (XGBoost).  
   - Entrenar el modelo de distribución horaria (LSTM).  
3. **Predicción**:  
   - Predecir el volumen total diario.  
   - Usar este volumen para calcular la distribución horaria.  

---

## **Requisitos técnicos**  

### **Librerías necesarias**  
- Python 3.9+  
- `xgboost`  
- `tensorflow`  
- `numpy`  
- `pandas`  
- `sklearn`  
- `matplotlib`  

### **Instalación**  
1. Clona este repositorio:  
   ```bash
   git clone https://github.com/usuario/proyecto-prediccion-agua.git
   cd proyecto-prediccion-agua
   ```  
2. Instala las dependencias:  
   ```bash
   pip install -r requirements.txt
   ```  

---

## **Ejemplo de uso**  

### Paso 1: Predicción del volumen total diario  
```python
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import numpy as np

# Cargar datos
X = df[['temperatura', 'precipitacion', 'consumo_lag1', 'consumo_lag7']]
y = df['consumo_total']

# Dividir en entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Entrenar el modelo
model = xgb.XGBRegressor(n_estimators=100, learning_rate=0.1, max_depth=5)
model.fit(X_train, y_train)

# Predicción
y_pred = model.predict(X_test)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
print(f"RMSE: {rmse}")
```

### Paso 2: Predicción del patrón horario  
```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

# Cargar y preprocesar datos
X = series_temporal[:-24]
y = series_temporal[24:]

# Redimensionar datos para LSTM
X = X.reshape((X.shape[0], X.shape[1], 1))

# Construir el modelo
model = Sequential([
    LSTM(50, activation='relu', input_shape=(X.shape[1], 1)),
    LSTM(50, activation='relu'),
    Dense(24, activation='linear')
])
model.compile(optimizer='adam', loss='mse')

# Entrenar el modelo
model.fit(X, y, epochs=50, batch_size=32, validation_split=0.2)

# Predicción
y_pred = model.predict(X_new)
```

---

## **Métricas de evaluación**  

- **Volumen total diario**:  
  - RMSE: Raíz del error cuadrático medio.  
- **Patrón horario**:  
  - MAE: Error absoluto medio.  
  - Reconstrucción diaria: Asegurar que la suma de los valores horarios coincida con el volumen total diario.  

---

## **Estructura del proyecto**  

```
├── data/               # Conjunto de datos de ejemplo
├── models/             # Modelos entrenados
├── notebooks/          # Notebooks Jupyter para análisis
├── src/                # Código fuente
│   ├── preprocessing.py
│   ├── train_xgboost.py
│   ├── train_lstm.py
│   └── predict.py
├── README.md           # Documentación del proyecto
├── requirements.txt    # Dependencias del proyecto
```

---

## **Contribución**  

1. Haz un fork del repositorio.  
2. Crea una rama para tu funcionalidad:  
   ```bash
   git checkout -b nueva-funcionalidad
   ```  
3. Haz un commit de tus cambios:  
   ```bash
   git commit -m "Añadir nueva funcionalidad"
   ```  
4. Haz un push a tu rama:  
   ```bash
   git push origin nueva-funcionalidad
   ```  
5. Crea un Pull Request.

---

## **Licencia**  
Este proyecto está bajo la licencia MIT.  

---

