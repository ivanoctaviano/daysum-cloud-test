from odoo import fields, models, _


class AccountMove(models.Model):
    _inherit = "account.move"

    company_karat_weight = fields.Float(string="Weight", help="Karat Weight")