"use strict";
/*
Copyright (C) 2013-2017 Bryan Hughes <bryan@nebri.us>

Aquarium Control is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Aquarium Control is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Aquarium Control.  If not, see <http://www.gnu.org/licenses/>.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express = require("express");
function run() {
    const app = express();
    app.use(body_parser_1.json);
    app.get('/api/state', (req, res) => {
        // TODO
    });
    app.get('/api/config', (req, res) => {
        // TODO
    });
    app.post('/api/config', (req, res) => {
        const body = req.body;
        console.log(body);
    });
    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
    });
}
exports.run = run;
//# sourceMappingURL=index.js.map