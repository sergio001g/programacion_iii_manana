#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Módulo de ejemplo para demostración de Git
"""

def saludar():
    """
    Función que muestra un saludo
    """
    return "¡Hola desde app_example.py!"

def calcular_suma(a, b):
    """
    Función que suma dos números
    
    Args:
        a (int): Primer número
        b (int): Segundo número
        
    Returns:
        int: Resultado de la suma
    """
    return a + b

# Código de ejemplo
if __name__ == "__main__":
    print(saludar())
    print(f"La suma de 5 + 3 es: {calcular_suma(5, 3)}")