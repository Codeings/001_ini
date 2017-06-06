/**
 * DevolutivoController
 *
 * @description :: Server-side logic for managing Devolutivoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new:function(req,res){
		Tipodevolutivo.find(function foundTipodevolutivos(err, tipodevolutivos){
			if(err) return next(err);
			res.view({
				tipodevolutivos:tipodevolutivos
			});
		});
	},

	create:function(req,res){
		var DevolutivoObj = {
			id:req.param('id'),
			nombre:req.param('nombre'),
			descripcion:req.param('descripcion'),
			fechacompra:req.param('fechacompra'),
			tipodevolutivo:req.param('tipodevolutivo')
		}
		Devolutivo.create(DevolutivoObj,function (err,devolutivo))
	}
};
