angular.module('myapp').factory('LogicFactory', function(){

	var logic = joint.shapes.uml;

	_createTable = function() {
		return new logic.Class({
        position: { x:12  , y: 15 },
        size: { width: 100, height: 100 },
        name: 'Entidade',
        attributes: ['id: PK', 'nome: STRING'],
        attrs: {
            '.uml-class-name-rect': {
                fill: '#fff',
                stroke: '#000',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-rect, .uml-class-methods-rect': {
                fill: '#fff',
                stroke: '#000000',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }

        }
    });
	}

	return {
		createTable : _createTable
	}

});
