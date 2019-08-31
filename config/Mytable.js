var MyTable = /** @class */ (function () {
    function MyTable(options) {
        var _this = this;
        this.options = options;
        this._makeColumn = function (_column) {
            _this._columnData.push(_column);
            return _this._columnData;
        };
        this.addRows = function () {
            _this.data.push({
                "id": _this._row_id++,
                "data": []
            });
            return _this.data;
        };
        this._deleteCol = function (_col_id) {
            _this._columnData = _this._columnData.filter(function (_obj) { return _obj.id !== _col_id; });
            return _this._columnData;
        };
        this.deleteRows = function (_row_id) {
            _this.data = _this.data.filter(function (_obj) { return _obj.id !== _row_id; });
            return _this.data;
        };
        this._inputData = function (_parent, _id, _type, _data) {
            for (var _indx = 0; _indx < this.data.length; _indx++) {
                if (_indx == _parent) {
                    this.data[_indx].data[_id] = { "type": _type, "input": _data };
                }
            }
            return this.data;
        };
        this.colDef = options.colDef;
        this.data = options.data;
        this._row_id = 0;
        this._columnData = options.colData;
    }
    return MyTable;
}());
