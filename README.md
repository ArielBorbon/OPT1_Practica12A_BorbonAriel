# Ariel Eduardo Borbon Izaguirre 252116

¿en qué se convirtió cada etiqueta del JSX?
el compilador convierte todas las JSX a la funcion de React.createElement pero en versiones mas nuevas se pasa a _jsx() importadas de react/jsx-runtime para no poner el import del react en todos lados


¿quién traduce el JSX?
El compilador (SWC / Babel), leen el JSX y se lo pasan de manera legible a los navegadores


¿qué hace createRoot y qué hace render? el createRoot ubica un nodo del DOM del navegador (como un div con una id) y desde aqui react manipulara este, y el render agarra esa raiz y la renderiza para el navegador, actualizandola


¿por qué el nombre de un componente empieza con mayúscula?
es para que el compilador de JSX distinguir entre HTML normal y los componentes de react


¿cuál es la diferencia entre escribir semestre="8" y semestre={8}?
el tipo de dato, tenemos declarado que tiene que ser un Number en la interfaz, asi que si pasamos un string el codigo chocaria ahi