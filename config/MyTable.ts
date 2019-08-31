class MyTable {
    public _row_id : number;  
    public _columnData : any;
    public colDef : any;
    public data : any;
    constructor(public options : any){
        this.colDef = options.colDef;
        this.data = options.data;
        this._row_id = 0;    
        this._columnData = options.colData;

    }

    _makeColumn = (_column : object)=>{
        this._columnData.push(_column);
        return this._columnData;
    };

    addRows = () => {
        this.data.push({
            "id" : this._row_id++,
            "data" : []
        })
        return this.data;
    };

    _deleteCol = (_col_id : number) => {
        this._columnData = this._columnData.filter((_obj)=>_obj.id!==_col_id);
        return this._columnData;
    }

    deleteRows = (_row_id : number) => {
        this.data = this.data.filter((_obj)=>_obj.id!==_row_id);
        return this.data;
    }

    _inputData = function(_parent : number, _id : number, _type,_data : any){
        for(let _indx = 0;_indx < this.data.length; _indx++){
            if(_indx == _parent){
                this.data[_indx].data[_id] = {"type":_type,"input":_data};
            }
        }
        return this.data;
    }
}