odoo.define("daysum_dynamic_header.DynamicColumnName", function (require) {
    "use strict";


    const ListRenderer = require('web.ListRenderer');
    const session = require('web.session'); 
    const rpc = require("web.rpc");

    ListRenderer.include({
        _renderHeaderCell: function (node) {

            const $th = this._super.apply(this, arguments);
            const companyId = session.user_context.allowed_company_ids[0];  // Get the first active company

            if (this.state.model === "account.move" && node.attrs.name === "company_karat_weight") {
                rpc.query({
                    model: "res.company",
                    method: "search_read",
                    domain: [['id', '=', companyId]],
                    fields: ['company_karat_type'],
                }).then(function (result) {
                    const companyKaratType = result[0].company_karat_type;
                    if (companyKaratType) {
                        let textNode = $th.contents().filter(function () {
                            return this.nodeType === 3;  // NodeType 3 = Text Node
                        }).first();
                        textNode[0].nodeValue = `Weight (${companyKaratType})`
                    }
                })
            }
            return $th;
        },
    });

});