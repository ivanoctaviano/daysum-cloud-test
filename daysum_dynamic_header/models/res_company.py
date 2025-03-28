from odoo import fields, models, _


class ResCompany(models.Model):
    _inherit = "res.company"

    company_karat_type = fields.Char(string="Karat Type", help="Type of Karat")