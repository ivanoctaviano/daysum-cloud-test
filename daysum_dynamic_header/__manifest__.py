# -*- coding: utf-8 -*-
{
    "name" : "Dynamic Column Name",
    "version" : "1.0",
    "author": "Ivan Octaviano",
    "summary": "Dynamic List View Column Name",
    "depends" : ["base", "web", "account"],
    "data": [
        "views/account_move.xml",
        "views/res_company.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "daysum_dynamic_header/static/src/js/dynamic_column_name.js",
        ],
    },
    "installable": True,
    "application": False,
    "auto_install": False,
    "license": "LGPL-3",
}