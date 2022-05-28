const { Pessoa } = require('../models')
class PessoaController {
    static async index(req, res) {
        const pessoas = await Pessoa.findAll({ raw: true })
        res.render('pessoa/index', {
            pessoas: pessoas
        })
    }

    static create(req, res) {
        res.render('pessoa/create')
    }

    static async store(req, res) {
        await Pessoa.create({
            nome: req.body.nome,
            email: req.body.email,
            data_nascimento: req.body.data_nascimento,
            salario: req.body.salario
        })

        res.redirect('/pessoa')
    }

    static async edit(req, res) {
        const pessoa = await Pessoa.findByPk(req.params.id, { raw: true })

        res.render('pessoa/edit', {
            pessoa: pessoa
        })
    }

    static async update(req, res) {
        const pessoa = await Pessoa.findByPk(req.params.id)
        await pessoa.update({
            nome: req.body.nome,
            email: req.body.email,
            data_nascimento: req.body.data_nascimento,
            salario: req.body.salario
        })

        res.redirect('/pessoa')
    }

    static async destroy(req, res) {
        const pessoa = await Pessoa.findByPk(req.params.id)
        await pessoa.destroy()

        res.redirect('/pessoa')
    }
}

module.exports = PessoaController