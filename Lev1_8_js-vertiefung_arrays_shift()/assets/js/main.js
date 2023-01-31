const deutscheGerichte = ['Speckkuchen', 'Thüringer Rostbratwurst', 'Quarkkeulchen', 'Sauerbraten']
deutscheGerichte.unshift('Fleisch', 'Mehr Fleisch', 'Anderes Fleisch', 'Kartoffeln', 'Kartoffeln mit Fleisch')

const nichtGut = [];
nichtGut.push(deutscheGerichte.shift())
nichtGut.push(deutscheGerichte.shift())
nichtGut.push(deutscheGerichte.shift())
console.log(nichtGut);
