let myTable = function(options,containerElement){
        let _tableObj = {
            "colDef" : options,
            "data" : $scope._rowData
        }

        let makeColumn = (_column)=>{    //make new column
            $scope._columnData.push({
                "id" : $scope._counter_id++,
                "label" : _column.label,
                "type" : _column.type
            });
        };

        let addRows = ()=>{                //make new row
            $scope._rowData.push({
                "id" : $scope._row_id++,
                "data" : []
            })
        };

        let deleteCol = (_col_id)=>{      //delete col
            $scope._columnData = $scope._columnData.filter((_obj)=>_obj.id!==_col_id);
        };

        let deleteRows = (_row_id)=>{      //delete row
            $scope._rowData = $scope._rowData.filter((_obj)=>_obj.id!==_row_id);
        };
    
        let inputData = (_parent, _id,_type,_data)=>{ // edit row data
            for(let _indx = 0;_indx < $scope._rowData.length; _indx++){
                if(_indx == _parent){
                    $scope._rowData[_indx].data[_id] = {"type":_type,"input":_data};
                }
            }
        };
    }
