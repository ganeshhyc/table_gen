app.controller("landingCtrl",function($scope){
    $scope._columns = colDef;                  //configuring col data
    $scope._toggleFlag = true;                //edit toggler
    $scope._counter_id = 0;                  //column id (inc)
    $scope._row_id = 0;                     //row id (inc)      
    $scope._rowData = new Array();
    $scope._columnData = new Array();
    
    $scope._toggleEdit = function(){            //make or edit table
        $scope._toggleFlag = !$scope._toggleFlag;
    }

    $scope._makeColumn = function(_column){    //make new column
        $scope._columnData.push({
            "id" : $scope._counter_id++,
            "label" : _column.label,
            "type" : _column.type
        });
    };

    $scope.addRows = function(){                //make new row
        $scope._rowData.push({
            "id" : $scope._row_id++,
            "data" : []
        })
    };

    $scope._deleteCol = function(_col_id){      //delete col
        $scope._columnData = $scope._columnData.filter((_obj)=>_obj.id!==_col_id);
    }

    $scope.deleteRows = function(_row_id){      //delete row
        $scope._rowData = $scope._rowData.filter((_obj)=>_obj.id!==_row_id);
    }

    $scope._inputData = function(_parent, _id,_type,_data){ // edit row data
        for(let _indx = 0;_indx < $scope._rowData.length; _indx++){
            if(_indx == _parent){
                $scope._rowData[_indx].data[_id] = {"type":_type,"input":_data};
            }
        }
    }
})