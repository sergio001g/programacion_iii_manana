try {
    console.log('variablenodeclarada')
} catch (error) {
    console.log('Ocurrió un error:', error.message)
}

try {
    console.log('intentando abrir archivo ..')
    throw new Error('No se pudo abrir el archivo')
} catch (error) {
    console.log('Ocurrió un error:', error.message)
} finally {
    console.log('Fin de la ejecución')
}